import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { aws_events } from "aws-cdk-lib";
import { aws_iam } from "aws-cdk-lib";

export const backend = defineBackend({
  auth,
  data,
});

const apiStack = backend.createStack("MyLibraryStack");

const eventStack = backend.createStack("MyExternalDataSources");

const eventBus = aws_events.EventBus.fromEventBusName(
  eventStack,
  "MyEventBus",
  "default"
);

backend.data.addEventBridgeDataSource("EventBridgeDataSource", eventBus);

backend.data.addNoneDataSource("NoneDataSource");

// generate code for a cloudwatch logs role

const cloudWatchLogsRole = new aws_iam.Role(
  apiStack,
  "MyLibraryCloudWatchRole",
  {
    roleName: "MyLibraryCloudWatchRole",
    assumedBy: new aws_iam.ServicePrincipal("appsync.amazonaws.com"),
    managedPolicies: [
      aws_iam.ManagedPolicy.fromAwsManagedPolicyName(
        "service-role/AWSAppSyncPushToCloudWatchLogs"
      ),
    ],
  }
);

backend.data.resources.cfnResources.cfnGraphqlApi.logConfig = {
  cloudWatchLogsRoleArn: cloudWatchLogsRole.roleArn,
  fieldLogLevel: "ALL",
  excludeVerboseContent: false,
};

// Create the Policy Statement
const policyStatement = new aws_iam.PolicyStatement({
  effect: aws_iam.Effect.ALLOW,
  actions: ["appsync:GraphQL"],
  resources: [`${backend.data.resources.graphqlApi.arn}/types/Mutation/*`],
});

// Create the Role and attach the policy
const eventBusRole = new aws_iam.Role(eventStack, "AppSyncInvokeRole", {
  assumedBy: new aws_iam.ServicePrincipal("events.amazonaws.com"),
  inlinePolicies: {
    PolicyStatement: new aws_iam.PolicyDocument({
      statements: [policyStatement],
    }),
  },
});

const rule = new aws_events.CfnRule(eventStack, "MyOrderRule", {
  eventBusName: eventBus.eventBusName,
  name: "broadcastOrderStatusChange",
  eventPattern: {
    source: ["amplify.orders"],
    ["detail-type"]: ["OrderStatusChange"],
    // detail: {
    //   orderId: [{ exists: true }],
    //   status: ["PENDING", "SHIPPED", "DELIVERED"],
    //   message: [{ exists: true }],
    // },
  },
  targets: [
    {
      id: "orderStatusChangeReceiver",
      arn: backend.data.resources.cfnResources.cfnGraphqlApi
        .attrGraphQlEndpointArn,
      roleArn: eventBusRole.roleArn,
      appSyncParameters: {
        graphQlOperation: `
        mutation PublishOrderFromEventBridge(
          $orderId: ID!
          $status: String!
          $message: String!
        ) {
          publishOrderFromEventBridge(orderId: $orderId, status: $status, message: $message) {
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
