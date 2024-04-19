"use client";
import { useEffect, useState } from "react";
import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import {
  WithAuthenticatorProps,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { fetchAuthSession, fetchUserAttributes } from "aws-amplify/auth";

const client = generateClient<Schema>();

function Home({ signOut }: WithAuthenticatorProps) {
  // const addPost = async () => {
  //   const { data, errors } = await client.mutations.addPost({
  //     title: "My Post",
  //     content: "My Content",
  //     author: "Chris",
  //     url: null,
  //   });

  //   if (!errors) {
  //     console.log(data);
  //   } else {
  //     console.error(errors);
  //   }
  // };

  // const getPost = async (id: string) => {
  //   const { data, errors } = await client.queries.getPost({
  //     id,
  //   });

  //   if (!errors) {
  //     console.log(data);
  //   } else {
  //     console.error(errors);
  //   }
  // };

  // const updatePost = async (id: string) => {
  //   const { data, errors } = await client.mutations.updatePost({
  //     id,
  //     title: "An Updated Post",
  //     expectedVersion: 1,
  //     author: null,
  //     content: null,
  //     url: null,
  //   });

  //   if (!errors) {
  //     console.log(data);
  //   } else {
  //     console.error(errors);
  //   }
  // };

  // const deletePost = async (id: string) => {
  //   const { data, errors } = await client.mutations.deletePost({
  //     id,
  //     expectedVersion: null,
  //   });

  //   if (!errors) {
  //     console.log(data);
  //   } else {
  //     console.error(errors);
  //   }
  // };

  // useEffect(() => {
  //   fetchUserAttributes();
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <button onClick={createPost}>Create Post</button>
        <button onClick={likePost}>Like Post</button>
      */}
      {/* <button onClick={addPost}>Add Post</button>
      <button onClick={() => getPost("36391030-1927-4996-abef-d89487f605e7")}>
        Get Post
      </button>
      <button
        onClick={() => updatePost("36391030-1927-4996-abef-d89487f605e7")}
      >
        Update Post
      </button>
      <button
        onClick={() => deletePost("36391030-1927-4996-abef-d89487f605e7")}
      >
        Delete Post
      </button>
      <button
        onClick={async () => {
          const attributes = await fetchUserAttributes();
          console.log(attributes);
        }}
      >
        Check User
      </button> */}
      <button onClick={signOut}>Sign Out</button>
    </main>
  );
}

export default withAuthenticator(Home);
