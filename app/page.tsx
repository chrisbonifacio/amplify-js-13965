"use client";
import { useState } from "react";
import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const client = generateClient<Schema>();

export default function Home() {
  // const [postId, setPostId] = useState("");

  const createTodo = async () => {
    const { data: newTodo, errors } = await client.models.Todo.create(
      {
        title: "Hello, World!",
        done: false,
      },
      { authMode: "iam" }
    );

    if (!errors) {
      console.log(newTodo);
    } else {
      console.error(errors);
    }
  };

  // const createPost = async () => {
  //   const { data: newPost, errors } = await client.models.Post.create(
  //     {
  //       content: "Hello, World!",
  //       likes: 0,
  //     },
  //     { authMode: "userPool" }
  //   );

  //   if (!errors) {
  //     console.log(newPost);
  //     setPostId(newPost.id);
  //   } else {
  //     console.error(errors);
  //   }
  // };

  // const likePost = async () => {
  //   const { data: likedPost, errors } = await client.mutations.likePost(
  //     {
  //       postId,
  //     },
  //     { authMode: "userPool" }
  //   );

  //   if (!errors) {
  //     console.log(likedPost);
  //   } else {
  //     console.error(errors);
  //   }
  // };

  const createCustomer = async () => {
    const { data: newCustomer, errors } = await client.models.Customer.create(
      {
        name: "John Doe",
        phoneNumber: "+1234567890",
        accountRepresentativeId: "1234",
      },
      { authMode: "userPool" }
    );

    if (!errors) {
      console.log(newCustomer);
    } else {
      console.error(errors);
    }
  };

  const listCustomers = async () => {
    const { data: customers, errors } = await client.models.Customer.list();

    if (!errors) {
      console.log(customers);
    } else {
      console.error(errors);
    }
  };

  // const listCustomersByAccountRepresentativeId = async () => {
  //   const { data: customers, errors } = await client.models.Customer.listByRep({
  //     accountRepresentativeId: "1234",
  //   });

  //   if (!errors) {
  //     console.log(customers);
  //   } else {
  //     console.error(errors);
  //   }
  // };

  return (
    <Authenticator>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <button onClick={createPost}>Create Post</button>
        <button onClick={likePost}>Like Post</button>
      */}
        <button onClick={createTodo}>Create Todo</button>
      </main>
    </Authenticator>
  );
}
