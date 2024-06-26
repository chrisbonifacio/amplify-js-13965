import { a, defineData, type ClientSchema } from "@aws-amplify/backend";

const schema = a.schema({
  Customer: a
    .model({
      fullName: a.string(),
      email: a.email(),
      phone: a.phone(),
      billingInformation: a.hasOne("BillingInformation", "customerId"),
      owner: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
  BillingInformation: a
    .model({
      customerId: a.id(),
      customer: a.belongsTo("Customer", "customerId"),
      identityCard: a.string(),
      companyName: a.string(),
      address: a.string(),
      city: a.string(),
      municipality: a.string(),
      owner: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
  Message: a
    .model({
      roomId: a.id().required(),
      createdAt: a.datetime(),
      content: a.string().required(),
    })
    .secondaryIndexes((index) => [
      index("roomId").sortKeys(["createdAt"]).queryField("listByDate"),
    ])
    .authorization((allow) => [allow.owner()]),
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
