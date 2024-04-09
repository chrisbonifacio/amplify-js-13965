import { util, type Context } from "@aws-appsync/utils";
import * as ddb from "@aws-appsync/utils/dynamodb";

export function request(ctx: Context) {
  const { id } = ctx.args;
  return {
    operation: "UpdateItem",
    key: util.dynamodb.toMapValues({ id: ctx.args.postId }),
    update: {
      expression: "ADD likes :plusOne",
      expressionValues: util.dynamodb.toMapValues({ ":plusOne": { N: 1 } }),
    },
  };
}

export function response(ctx: Context) {
  console.log(ctx);
  return ctx.result;
}
