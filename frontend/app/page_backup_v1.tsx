"use client";

import { useState } from "react";

export default function Home() {
  const [songName, setSongName] = useState("");
  const [audioURL, setAudioURL] = useState("");
  const [bpm, setBpm] = useState<number | null>(null);
  const [songKey, setSongKey] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      setSongName(file.name);

      const url = URL.createObjectURL(file);
      setAudioURL(url);

      const formData = new FormData();
      formData.append("file", file);

      setLoading(true);

      try {
        const response = await fetch(
          "http://127.0.0.1:8000/detect-bpm",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();

        setBpm(data.bpm);

        const keyFormData = new FormData();
keyFormData.append("file", file);

const keyResponse = await fetch(
  "http://127.0.0.1:8000/detect-key",
  {
    method: "POST",
    body: keyFormData,
  }
);

const keyData = await keyResponse.json();

setSongKey(keyData.key);

      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-5xl font-bold mb-4 text-center">
        Song Riyaz
      </h1>

      <p className="text-gray-400 text-center max-w-xl mb-8">
        Practice any song in your own scale. Detect BPM,
        change pitch, slow down songs, and improve your
        singing with AI-powered practice tools.
      </p>

      <label className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl text-lg font-semibold transition cursor-pointer">
        Upload Song
        <input
          type="file"
          accept="audio/*"
          className="hidden"
          onChange={handleFileUpload}
        />
      </label>

      {songName && (
        <p className="mt-6 text-green-400">
          Uploaded: {songName}
        </p>
      )}

      {audioURL && (
        <audio
          controls
          className="mt-6 w-full max-w-md"
          src={audioURL}
        />
      )}

      {loading && (
        <p className="mt-6 text-yellow-400">
          Detecting BPM...
        </p>
      )}

      {bpm && (
        <p className="mt-4 text-2xl text-green-300 font-bold">
          BPM: {bpm}
        </p>
      )}

      {songKey && (
  <p className="mt-2 text-2xl text-yellow-300 font-bold">
    Key: {songKey}
  </p>
)}

      <p className="mt-10 text-sm text-gray-500">
        Created by Haroon
      </p>

    </main>
  );
}