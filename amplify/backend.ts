import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import {
  AdvancedSecurityMode,
  CfnUserPoolGroup,
  LambdaVersion,
} from "aws-cdk-lib/aws-cognito";
import { preTokenGeneration } from "./auth/resource";
import { aws_dynamodb } from "aws-cdk-lib";
import { aws_events } from "aws-cdk-lib";
import {
  Effect,
  PolicyDocument,
  PolicyStatement,
  Role,
  ServicePrincipal,
} from "aws-cdk-lib/aws-iam";

export const backend = defineBackend({
  auth,
  data,
  preTokenGeneration,
});

const userPoolGroupStack = backend.createStack("user-pool-group-stack");

const userPool = backend.auth.resources.userPool;

new CfnUserPoolGroup(userPoolGroupStack, "AllowedFinancialsGroup", {
  userPoolId: userPool.userPoolId,
  groupName: "AllowedFinancials",
});

// // extract L1 CfnUserPool resources
const { cfnUserPool } = backend.auth.resources.cfnResources;
// use CDK's `addPropertyOverride` to modify properties directly
cfnUserPool.addPropertyOverride("Schema", [
  {
    Name: "tenant",
    AttributeDataType: "String",
    Mutable: true,
  },
]);

backend.auth.resources.cfnResources.cfnUserPool.userPoolAddOns = {
  advancedSecurityMode: AdvancedSecurityMode.ENFORCED,
};

backend.auth.resources.cfnResources.cfnUserPool.lambdaConfig = {
  preTokenGenerationConfig: {
    lambdaArn: backend.preTokenGeneration.resources.lambda.functionArn,
    lambdaVersion: LambdaVersion.V2_0,
  },
};

const externalDataSourcesStack = backend.createStack("MyExternalDataSources");

const externalTable = aws_dynamodb.Table.fromTableName(
  externalDataSourcesStack,
  "MyExternalTable",
  "MyPostTable"
);

backend.data.addDynamoDbDataSource(
  "ExternalPostTableDataSource",
  externalTable
);

const eventBus = aws_events.EventBus.fromEventBusName(
  externalDataSourcesStack,
  "MyEventBus",
  "default"
);

backend.data.addEventBridgeDataSource("EventBridgeDataSource", eventBus);

// Create the Policy Statement
const policyStatement = new PolicyStatement({
  effect: Effect.ALLOW,
  actions: ["appsync:GraphQL"],
  resources: [
    `${backend.data.resources.cfnResources.cfnGraphqlApi.attrArn}/types/Mutation/*`,
  ],
});

// Create the Role and attach the policy
const eventBusRole = new Role(externalDataSourcesStack, "AppSyncInvokeRole", {
  assumedBy: new ServicePrincipal("events.amazonaws.com"),
  inlinePolicies: {
    PolicyStatement: new PolicyDocument({
      statements: [policyStatement],
    }),
  },
});

const rule = new aws_events.CfnRule(externalDataSourcesStack, "MyOrderRule", {
  eventBusName: eventBus.eventBusName,
  name: "broadcastOrderStatusChange",
  eventPattern: {
    source: ["my-orders"],
    detailType: ["Order Status Change"],
    detail: {
      status: ["OrderPending", "OrderShipped", "OrderDelivered"],
    },
  },
  targets: [
    {
      id: "orderStatusChangeReceiver",
      arn: backend.data.resources.cfnResources.cfnGraphqlApi
        .attrGraphQlEndpointArn,
      roleArn: eventBusRole.roleArn,
      appSyncParameters: {
        graphQlOperation: `
        mutation UpdateOrderStatus(
          $orderId: String!
          $status: String!
          $message: String!
        ) {
          updateOrderStatus(orderId: $orderId, status: $status, message: $message) {
            orderId
            status
            message
          }
        }`,
      },
      inputTransformer: {
        inputPathsMap: {
          orderId: "$.detail.orderId",
          status: "$.detail.status",
          message: "$.detail.message",
        },
        inputTemplate: JSON.stringify({
          orderId: "<orderId>",
          status: "<status>",
          message: "<message>",
        }),
      },
    },
  ],
});
