import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { env } from "$amplify/env/increment-impression-function";
import { modelIntrospection } from "../../../amplifyconfiguration.json";
import { increaseImpression } from "./graphql/mutations";

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.TEST_API_GRAPHQL_ENDPOINT, // replace with your defineData name
        region: env.AWS_REGION,
        defaultAuthMode: "identityPool",
        modelIntrospection: modelIntrospection as never,
      },
    },
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
);

const dataClient = generateClient();

export const handler = async (event: any) => {
  const { data, errors } = await dataClient.graphql({
    query: increaseImpression,
    variables: {
      videoId: event.arguments.videoId,
      count: event.arguments.count,
    },
    authMode: "identityPool",
  });

  if (errors) {
    return console.log("errors: ", errors);
  }
  console.log("data: ", data);

  return data;
};
