import { defineFunction } from "@aws-amplify/backend";

export const myRestHandler = defineFunction({
  entry: "./my-rest-handler.ts",
});
