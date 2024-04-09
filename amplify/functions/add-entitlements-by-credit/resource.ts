import { defineFunction } from "@aws-amplify/backend";

export const addEntitlementsByCreditRest = defineFunction({
  entry: "./add-entitlements-by-credit-rest-handler.ts",
});
