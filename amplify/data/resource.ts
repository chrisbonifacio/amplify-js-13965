import { a, defineData, type ClientSchema } from "@aws-amplify/backend";

const schema = a.schema({
  ProductionLot: a
    .model({
      lotId: a.string().required(),
      lotNumber: a.string().required(),
      records: a.hasMany("Record", ["lotId", "lotNumber"]),
    })
    .identifier(["lotId", "lotNumber"])
    .authorization((allow) => [allow.guest()]),
  Record: a
    .model({
      lotNumber: a.string().required(),
      lotId: a.string().required(),
      lot: a.belongsTo("ProductionLot", ["lotId", "lotNumber"]),
      timestamp: a.timestamp().required(),
      comment: a.string(),
    })
    .secondaryIndexes((index) => [index("lotId").sortKeys(["timestamp"])])
    .authorization((allow) => allow.guest()),
  ModelType: a
    .model({
      field: a.string(),
      owner: a.string().required(),
      otherOwners: a.string().array(),
      group: a.string(),
      otherGroups: a.string(),
    })
    .authorization((allow) => [
      allow.authenticated().to(["read"]),
      allow.owner(),
      // allow.ownerDefinedIn("owner"),
      // allow.ownersDefinedIn("otherOwners"),
      // allow.group("Admin"),
      // allow.groups(["Teacher", "Student"]),
      // allow.groupDefinedIn("group"),
      // allow.groupsDefinedIn("otherGroups"),
      // allow.guest(),
      // allow.publicApiKey(),
    ]),
  CustomType: a.customType({
    field: a
      .string()
      .authorization((allow) => [
        allow.authenticated().to(["read"]),
        allow.owner(),
        allow.ownerDefinedIn("owner"),
        allow.ownersDefinedIn("otherOwners"),
        allow.group("Admin"),
        allow.groups(["Teacher", "Student"]),
        allow.groupDefinedIn("group"),
        allow.groupsDefinedIn("otherGroups"),
        allow.guest(),
        allow.publicApiKey(),
      ]),
  }),
  listCustomType: a
    .query()
    .returns(a.ref("CustomType").array())
    .handler(
      a.handler.custom({
        entry: "./handler.js",
      })
    )
    .authorization((allow) => [
      // Supported
      // allow.guest(), // AppSync JS Resolvers don't support IAM
      allow.publicApiKey(),
      // allow.authenticated(),
      // allow.group("Admin"),
      // allow.groups(["Teacher", "Student"]),

      // Not supported
      // allow.owner(),
      // allow.ownerDefinedIn("owner"),
      // allow.ownersDefinedIn("otherOwners"),
      // allow.groupDefinedIn("group"),
      // allow.groupsDefinedIn("otherGroups"),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: "TestAPI",
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
