"use client";
import { generateClient } from "aws-amplify/api";
import { uploadData, getUrl } from "aws-amplify/storage";
import type { Schema } from "../amplify/data/resource";
import React, { useState } from "react";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

// Generating the client
const client = generateClient<Schema>({
  authMode: "apiKey",
});

type Song = Schema["Song"]["type"];

export default function App() {
  const [song, setCurrentSong] = useState<Song>();

  const createSong = async () => {
    // Create the API record:
    const { data, errors } = await client.models.Song.create({
      name: `My first song`,
    });

    if (data) {
      setCurrentSong(data);
    }
  };

  const uploadSongFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];

    if (file) {
      // Upload the Storage file:
      const result = await uploadData({
        path: `images/${song?.id}-${file?.name}`,
        data: file,
        options: {
          contentType: "image/png", // contentType is optional
        },
      }).result;

      // Add the file association to the record:
      const { data: updatedSong, errors } = await client.models.Song.update({
        id: song?.id as string,
        coverArtPath: result?.path,
      });

      if (!errors && updatedSong) {
        setCurrentSong(updatedSong);

        // If the record has no associated file, we can return early.
        if (!updatedSong.coverArtPath) return;

        // Retrieve the file's signed URL:
        const signedURL = await getUrl({ path: updatedSong.coverArtPath });

        console.log({ signedURL });
      }
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 dark:text-white">
      <div>
        <h1 className="text-3xl font-bold text-center mb-4">
          Song Cover Art Creator
        </h1>

        <div className="flex flex-col">
          <button onClick={createSong}>Create Song</button>

          <input type="file" name="song-file" onChange={uploadSongFile} />
        </div>
      </div>
    </main>
  );
}
