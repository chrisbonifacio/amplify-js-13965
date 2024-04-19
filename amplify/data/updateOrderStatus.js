// source: string
//     detail: { [key: string]: any }
//     detailType: string
//     resources?: string[]
//     time?: string // RFC3339 Timestamp format
export function request(ctx) {
  const args = ctx.arguments;
  return {
    operation: "PutEvents",
    events: [
      {
        source: "my-orders",
        detailType: "Order Status Change",
        detail: {
          ...args,
        },
      },
    ],
  };
}

export function response(ctx) {
  const args = ctx.arguments;
  if (ctx.error) {
    util.error(ctx.error.message, ctx.error.type, ctx.result);
  } else {
    return {
      ...args,
    };
  }
}
