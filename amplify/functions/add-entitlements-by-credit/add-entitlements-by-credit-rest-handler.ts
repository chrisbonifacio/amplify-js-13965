import { dataClient } from "../../utils/data-client";

export type SessionInfo =
  | {
      userId: string;
      createdAt: string;
      sessionId: string; // this is the userId
    }
  | undefined;

// Function to look up SessionID in the Sessions table
async function lookupSessionID(sessionID: string): Promise<SessionInfo | null> {
  const { data, errors } = await dataClient.models.Session.get({
    id: sessionID,
  });

  if (errors) {
    throw new Error(errors.join(","));
  }

  // const session = await getSession(sessionID)
  console.log(JSON.stringify(data), data?.userSessionsId, sessionID);

  if (data == null || data.userSessionsId == null) {
    throw new Error("Invalid session");
  }

  return {
    userId: data.userSessionsId,
    sessionId: data.id,
    createdAt: data.createdAt,
  };
}

export const handler = async (event: any) => {
  console.log(event);

  const sessionInfo = await lookupSessionID(event.authorizationToken);

  console.log(`RESPONSE: ${JSON.stringify(sessionInfo, null, 2)}`);

  return {
    principalId: "user",
    policyDocument: {
      Version: "2012-10-17",
      Statement: [
        {
          Action: "execute-api:Invoke",
          Effect: sessionInfo == null ? "Deny" : "Allow",
          Resource: event.methodArn,
        },
      ],
    },
    context: sessionInfo, // this is our session info to pass to the rest handler
  };
};
