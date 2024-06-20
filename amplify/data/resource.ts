import {
  a,
  defineData,
  defineFunction,
  type ClientSchema,
} from "@aws-amplify/backend";

const myFunction = defineFunction();

const schema = a.schema({
  Prop: a.customType({
    test: a.string(),
    name: a.string().authorization((allow) => [allow.publicApiKey()]),
  }),
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey(), allow.guest()])
    .secondaryIndexes((index) => [
      index("content")
        // @ts-ignore
        .queryField(null),
    ]),
  UserProfile: a
    .model({
      owner: a.string().required(),
      firstName: a.string().required(),
      lastName: a.string().required(),
      email: a.email().required(),
      birthdate: a.datetime().required(),
      location: a.string(),
    })
    .authorization((allow) => [allow.authenticated("identityPool")]),
  CreatingUserProfile: a
    .mutation()
    .arguments({
      owner: a.string().required(),
      firstName: a.string().required(),
      lastName: a.string().required(),
      email: a.email().required(),
      birthdate: a.datetime().required(),
      location: a.string(),
    })
    .returns(a.ref("UserProfile"))
    .handler([
      a.handler.custom({
        entry: "./handler.ts",
        dataSource: a.ref("UserProfile"),
      }),
    ])
    .authorization((allow) => [allow.authenticated("identityPool")]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: "TestAPI",
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 365,
    },
  },
});
