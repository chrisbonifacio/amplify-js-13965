"use client";
import { Authenticator } from "@aws-amplify/ui-react";
import { client } from "@/utils/amplifyServerUtils";
import { fetchAuthSession } from "aws-amplify/auth";

import "@aws-amplify/ui-react/styles.css";
import { uploadData } from "aws-amplify/storage";
import { Schema } from "@/amplify/data/resource";

type Todo = Schema["Todo"]["type"];

const App = () => {
  const listTodos = async () => {
    const session = await fetchAuthSession();

    let groups = session.tokens?.accessToken.payload["cognito:groups"];

    console.log({ groups });

    const { data: todo, errors } = await client.models.Todo.();

    if (errors) {
      // ...handle error
    } else {
      console.log(todo);
    }
  };

  const createTodo = async () => {
    const { data, errors } = await client.models.Todo.create({
      content: "Hello world!",
    });

    if (errors) {
      console.error({ errors });
    }

    console.log({ data });
  };

  const updateTodo = async () => {
    const { data, errors } = await client.models.Todo.update({
      id: "123",
      content: "Hello world!",
    });

    if (errors) {
      console.error({ errors });
    }

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
            <button onClick={listTodos}>List Todos</button>
          </>
        );
      }}
    </Authenticator>
  );
};

export default App;
