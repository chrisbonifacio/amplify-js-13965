import { defineFunction } from "@aws-amplify/backend";

export const loginRestHandler = defineFunction({
  entry: "./login-rest-handler.ts",
});
