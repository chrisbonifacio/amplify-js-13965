import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  OrderStatus: a.enum(["OrderPending", "OrderShipped", "OrderDelivered"]),
  Order: a.customType({
    id: a.id().required(),
    status: a.ref("OrderStatus").required(),
  }),
  OrderStatusChange: a.customType({
    orderId: a.id().required(),
    status: a.ref("OrderStatus").required(),
    message: a.string().required(),
    __typename: a.string(),
  }),
  updateOrderStatus: a
    .mutation()
    .arguments({
      orderId: a.string().required(),
      status: a.string().required(),
      message: a.string().required(),
    })
    .returns(a.ref("OrderStatusChange"))
    .authorization([a.allow.public(), a.allow.private("iam")])
    .handler(
      a.handler.custom({
        dataSource: "EventBridgeDataSource",
        entry: "./updateOrderStatus.js",
      })
    ),
  onOrderStatusChange: a
    .subscription()
    .arguments({
      orderId: a.id(),
    })
    .for(a.ref("updateOrderStatus"))
    .authorization([a.allow.public()])
    .handler(
      a.handler.custom({
        dataSource: "NONE_DS",
        entry: "./onOrderStatusChange.js",
      })
    ),
  listOrderEvents: a
    .query()
    .returns(a.ref("Order").array())
    .authorization([a.allow.public()])
    .handler(
      a.handler.custom({
        dataSource: "EventBridgeDataSource",
        entry: "./listOrders.js",
      })
    ),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: "MyLibrary",
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
