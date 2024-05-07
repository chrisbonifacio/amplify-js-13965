import {
  a,
  defineData,
  defineFunction,
  type ClientSchema,
} from "@aws-amplify/backend";

export const incrementImpressionResolver = defineFunction({
  entry: "./increment-impression-resolver.ts",
});

export const incrementImpressionFunction = defineFunction({
  entry: "./increment-impression-function.ts",
});

const schema = a
  .schema({
    Todo: a
      .model({
        content: a.string().required(),
        done: a.boolean().default(false),
        status: a.enum(["ACTIVE", "COMPLETED"]),
      })
      .authorization((allow) => [allow.publicApiKey()]),
    Impression: a
      .model({
        videoId: a.string().required(),
        impressions: a.integer().default(0),
      })
      .identifier(["videoId"])
      .authorization((allow) => [allow.publicApiKey(), allow.authenticated()]),

    //Executes atomic increment operation on the impressions field of the Impression model
    increaseImpression: a
      .mutation()
      .arguments({
        videoId: a.string(),
        count: a.integer(),
      })
      .returns(a.ref("Impression"))
      .authorization((allow) => [allow.authenticated()])
      .handler(a.handler.function(incrementImpressionResolver)),
  })
  .authorization((allow) => [allow.resource(incrementImpressionFunction)]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: "TestAPI",
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    apiKeyAuthorizationMode: {
      expiresInDays: 365,
    },
  },
});
