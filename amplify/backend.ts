import { defineBackend } from "@aws-amplify/backend";
import { Stack } from "aws-cdk-lib";
import {
  AuthorizationType,
  LambdaIntegration,
  LambdaRestApi,
  TokenAuthorizer,
} from "aws-cdk-lib/aws-apigateway";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { restAuth } from "./functions/rest-auth/resource";
import { myRestHandler } from "./functions/my-rest-handler/resource";
import { loginRestHandler } from "./functions/login-rest/resource";
import { getEntitlements } from "./functions/get-entitlements/resource";
import { addEntitlementsByCreditRest } from "./functions/add-entitlements-by-credit/resource";

export const backend = defineBackend({
  auth,
  data,
  restAuth,
  myRestHandler,
  loginRestHandler,
  getEntitlements,
  addEntitlementsByCreditRest,
});

const apiGatewayStack = backend.createStack("apigateway-stack");

const myAPI = new LambdaRestApi(apiGatewayStack, "MyApi", {
  handler: backend.myRestHandler.resources.lambda,
  proxy: false,
});

// THIS IS THE CODE CAUSING ISSUES
const restAuthMod = new TokenAuthorizer(apiGatewayStack, "user-Auth", {
  handler: backend.restAuth.resources.lambda,
});

const account = myAPI.root.addResource("account");
const loginRest = new LambdaIntegration(
  backend.loginRestHandler.resources.lambda
);

account.addResource("login").addMethod("POST", loginRest);

const getEntitlementsRest = new LambdaIntegration(
  backend.getEntitlements.resources.lambda
);

account
  .addResource("library", {
    defaultMethodOptions: {
      authorizationType: AuthorizationType.CUSTOM,
      authorizer: restAuthMod,
    },
  })
  .addMethod("GET", getEntitlementsRest);

account
  .addResource("add-to-library", {
    defaultMethodOptions: {
      authorizationType: AuthorizationType.CUSTOM,
      authorizer: restAuthMod,
    },
  })
  .addResource("credits")
  .addMethod(
    "POST",
    new LambdaIntegration(backend.addEntitlementsByCreditRest.resources.lambda)
  );

backend.addOutput({
  custom: {
    apiId: myAPI.restApiId,
    apiEndpoint: myAPI.url,
    apiName: myAPI.restApiName,
    apiRegion: Stack.of(apiGatewayStack).region,
  },
});
