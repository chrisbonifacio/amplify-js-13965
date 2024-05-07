"use client";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { client } from "@/utils/amplifyServerUtils";

import { signInWithRedirect } from "aws-amplify/auth";

// ...

try {
  await signInWithRedirect({
    provider: "Apple",
  });
} catch (error) {
  console.log("error signing up:", error);
}

// configure Amplify

// Require Authentication for users to view child content
const App = () => {
  const createTodo = async () => {
    const { data, errors } = await client.models.Todo.create({
      content: "Do something",
    });

    console.log({ data });
  };

  return (
    <Authenticator>
      {({ user, signOut }) => {
        return (
          <>
            <h1>Hello {user?.username}</h1>
            <h1>Protected content!</h1>
            <button onClick={signOut}>Sign out</button>
            <button onClick={createTodo}>Create Todo</button>
          </>
        );
      }}
    </Authenticator>
  );
};

export default App;
