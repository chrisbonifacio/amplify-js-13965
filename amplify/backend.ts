import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";

const backend = defineBackend({
  auth,
  data,
});

const cfnUserPool = backend.auth.resources.cfnResources.cfnUserPool;

// override values

cfnUserPool.adminCreateUserConfig = undefined;

cfnUserPool.policies = {
  passwordPolicy: {
    minimumLength: 8,
    requireLowercase: false,
    requireNumbers: false,
    requireSymbols: false,
    requireUppercase: false,
    temporaryPasswordValidityDays: undefined,
    typeHint: undefined,
  },
};

cfnUserPool.verificationMessageTemplate = undefined;

cfnUserPool.accountRecoverySetting = undefined;

cfnUserPool.mfaConfiguration = "OFF";

cfnUserPool.smsVerificationMessage = undefined;
