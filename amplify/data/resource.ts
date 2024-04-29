import {
  type ClientSchema,
  a,
  defineData,
  defineFunction,
} from "@aws-amplify/backend";

export const generateHaikuFunction = defineFunction({
  entry: "./generate-haiku.ts",
  environment: {
    MODEL_ID: process.env.MODEL_ID as string,
  },
});

const schema = a.schema({
  Todo: a
    .model({
      list: a.json().array(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  generateHaiku: a
    .query()
    .arguments({ prompt: a.string().required() })
    .returns(a.string())
    .authorization((allow) => [allow.publicApiKey()])
    .handler(a.handler.function(generateHaikuFunction)),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
