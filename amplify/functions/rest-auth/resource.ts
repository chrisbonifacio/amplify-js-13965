import { defineFunction } from "@aws-amplify/backend";

export const restAuth = defineFunction({ entry: "./rest-auth-handler.ts" });
