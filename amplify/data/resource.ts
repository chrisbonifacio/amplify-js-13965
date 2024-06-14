import { a, defineData, type ClientSchema } from "@aws-amplify/backend";
import { Project, StructureKind } from "ts-morph";

// define a schema for a todo app that only allows signed users to view

// type Todo @model
//   @auth(rules: [
//      { allow: public, provider: apiKey }
//      { allow: public, provider: iam }
//   ]) {
//   id: ID!
//   name: String!
//   description: String
//   createdAt: String
//   updatedAt: String
//   prop: Prop
// }

// type Prop {
//   test: String
//   name: String
//     @auth(rules: [
//       { allow: public, provider: apiKey }
//     ])
// }

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
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: "TestAPI",
  authorizationModes: {
    defaultAuthorizationMode: "identityPool",
    apiKeyAuthorizationMode: {
      expiresInDays: 365,
    },
  },
});
