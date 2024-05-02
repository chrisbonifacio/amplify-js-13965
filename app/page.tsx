"use client";

import "./App.css";
import { generateClient } from "aws-amplify/api";
import React, { useState } from "react";
import type { Schema } from "../amplify/data/resource";
import "@aws-amplify/ui-react/styles.css";
import {
  type WithAuthenticatorProps,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

type Todo = Schema["Todo"]["type"];

function App({ signOut, user }: WithAuthenticatorProps) {
  // Generating the client
  const client = generateClient<Schema>({
    authMode: "userPool",
  });

  const [todo, setTodo] = useState<Todo>();

  const addOwners = async () => {
    // Add another user as an owner
    if (todo) {
      const { data, errors } = await client.models.Todo.update(
        {
          id: todo?.id,
          authors: [...(todo?.authors as string[]), "another-user-id"],
        },

        {
          authMode: "userPool",
        }
      );

      if (!errors) {
        console.log(data);
      } else {
        console.log(errors);
      }
    }
  };

  const createTodo = async () => {
    const { errors, data: newTodo } = await client.models.Todo.create(
      {
        content: "My new todo",
      },

      {
        authMode: "userPool",
      }
    );

    if (!errors && newTodo) {
      setTodo(newTodo);
      console.log(newTodo);
    } else {
      console.log(errors);
    }
  };

  return (
    <div>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <button onClick={createTodo}>Create Todo</button>
      <button onClick={addOwners}>Add Owners</button>
    </div>
  );
}

export default withAuthenticator(App);
