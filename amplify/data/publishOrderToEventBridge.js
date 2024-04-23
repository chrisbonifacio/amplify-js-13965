import { util } from "@aws-appsync/utils";

export function request(ctx) {
  return {
    operation: "PutEvents",
    events: [
      {
        source: "amplify.orders",
        detailType: "OrderStatusChange",
        detail: { ...ctx.arguments },
      },
    ],
  };
}

export function response(ctx) {
  return ctx.arguments;
}
