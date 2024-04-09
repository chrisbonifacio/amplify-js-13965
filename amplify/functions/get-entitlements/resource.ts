import { defineFunction } from "@aws-amplify/backend";

export const getEntitlements = defineFunction({
  entry: "./get-entitlements-handler.ts",
});
