import { a, defineData, type ClientSchema } from "@aws-amplify/backend";

const schema = a.schema({
  DeviceMeasures: a
    .model({
      tenantId: a.string().required(),
      name: a.string().required(),
      measures: a.customType({
        ts: a.integer(),
        pwr: a.integer(),
        tankPct: a.float(),
        tankRem: a.float(),
        bmsPct: a.float(),
        bmsRem: a.float(),
        flow: a.float(),
        outPsi: a.float(),
        outKpa: a.float(),
      }),
      recentMeasures: a.json(),
    })
    .identifier(["tenantId", "name"])
    .authorization((allow) => [allow.groupDefinedIn("tenantId")]),
});

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
