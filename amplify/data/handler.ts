import { Context } from "aws-lambda";

export function request(ctx: Context) {
  console.log(ctx.identity);
}

export function response(ctx: Context) {
  return //...
}
