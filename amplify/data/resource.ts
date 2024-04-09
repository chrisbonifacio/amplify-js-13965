import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { restAuth } from "../functions/rest-auth/resource";

const schema = a
  .schema({
    Session: a
      .model({
        user: a.belongsTo("User"),
        appCode: a.string().required(),
      })
      .authorization([a.allow.public("iam")]),

    User: a
      .model({
        entitlements: a.hasMany("Entitlement"),
        sessions: a.hasMany("Session"),
        credits: a.integer(),
      })
      .authorization([a.allow.public("iam")]),
    Entitlement: a
      .model({
        user: a.belongsTo("User"),
        productId: a.string().required(),
        squareImageUrl: a.string().required(),
        bookId: a.string().required(),
      })
      .authorization([a.allow.public("iam")]),
  })
  .authorization([a.allow.resource(restAuth).to(["query"])]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: "MyLibrary",
  authorizationModes: {
    defaultAuthorizationMode: "iam",
  },
});
