import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { preTokenGeneration } from "./auth/resource";
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

const eventStack = backend.createStack("MyExternalDataSources");

const eventBus = aws_events.EventBus.fromEventBusName(
  eventStack,
  "MyEventBus",
  "default"
);

backend.data.addEventBridgeDataSource("EventBridgeDataSource", eventBus);

// Create the Policy Statement
const policyStatement = new PolicyStatement({
  effect: Effect.ALLOW,
  actions: ["appsync:GraphQL"],
  resources: [`${backend.data.resources.graphqlApi.arn}/types/Mutation/*`],
});

// Create the Role and attach the policy
const eventBusRole = new Role(eventStack, "AppSyncInvokeRole", {
  assumedBy: new ServicePrincipal("events.amazonaws.com"),
  inlinePolicies: {
    PolicyStatement: new PolicyDocument({
      statements: [policyStatement],
    }),
  },
});

// eventBusRole.roleName;

const rule = new aws_events.CfnRule(eventStack, "MyOrderRule", {
  eventBusName: eventBus.eventBusName,
  name: "broadcastOrderStatusChange",
  eventPattern: {
    source: ["amplify.orders"],
    detailType: ["OrderStatusChange"],
    detail: {
      orderId: [{ exists: true }],
      status: ["OrderPending", "OrderShipped", "OrderDelivered"],
      message: [{ exists: true }],
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
