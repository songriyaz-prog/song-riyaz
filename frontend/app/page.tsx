"use client";

import { useState } from "react";

export default function Home() {
  const [songName, setSongName] = useState("");
  const [audioURL, setAudioURL] = useState("");
  const [bpm, setBpm] = useState<number | null>(null);
  const [songKey, setSongKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [detectingKey, setDetectingKey] = useState(false);

  const [pitch, setPitch] = useState(0);
  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const [processingPitch, setProcessingPitch] = useState(false);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    setCurrentFile(file || null);

    if (file) {
      setSongName(file.name);

      const url = URL.createObjectURL(file);
      setAudioURL(url);

      const formData = new FormData();
      formData.append("file", file);

      setLoading(true);

      try {
        const response = await fetch(
          "https://song-riyaz.onrender.com/detect-bpm",
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
  "https://song-riyaz.onrender.com/detect-key",
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

  const changePitch = async (semitones: number) => {
  if (!currentFile) return;

  setProcessingPitch(true);

  const formData = new FormData();
  formData.append("file", currentFile);
  formData.append("semitones", semitones.toString());

  try {
    const response = await fetch(
      "https://song-riyaz.onrender.com/pitch-shift",
      {
        method: "POST",
        body: formData,
      }
    );

    const blob = await response.blob();

    const shiftedUrl = URL.createObjectURL(blob);

    setAudioURL(shiftedUrl);

    setDetectingKey(true);

    setPitch(semitones);

    const shiftedFile = new File(
      [blob],
      "shifted.wav",
      { type: "audio/wav" }
    );

    const keyFormData = new FormData();
    keyFormData.append("file", shiftedFile);

    const keyResponse = await fetch(
      "https://song-riyaz.onrender.com/detect-key",
      {
        method: "POST",
        body: keyFormData,
      }
    );

    const keyData = await keyResponse.json();

    setSongKey(keyData.key);

    setDetectingKey(false);

  } catch (error) {
    console.error(error);
  }

  setProcessingPitch(false);
};

  return (
  <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">

    <h1 className="text-5xl font-bold mb-4">
      Song Riyaz
    </h1>

    <p className="text-gray-400 text-center max-w-2xl mb-10">
      Practice any song in your own scale. Detect BPM, detect key,
      shift pitch, and improve your singing.
    </p>

    <input
      id="song-upload"
      type="file"
      accept="audio/*"
      className="hidden"
      onChange={handleFileUpload}
    />

    <label
      htmlFor="song-upload"
      className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-lg font-semibold cursor-pointer"
    >
      Upload Song
    </label>

    {songName && (
      <div className="mt-10 w-full max-w-3xl bg-zinc-900 rounded-2xl p-6">

        <h2 className="text-xl font-bold mb-4">
          Song Information
        </h2>

        <p className="text-gray-300 break-all">
          {songName}
        </p>

        <div className="grid grid-cols-2 gap-4 mt-6">

          <div className="bg-zinc-800 rounded-xl p-4 text-center">
            <p className="text-gray-400 text-sm">
              BPM
            </p>
            <p className="text-3xl font-bold text-green-400">
              {bpm ?? "--"}
            </p>
          </div>

          <div className="bg-zinc-800 rounded-xl p-4 text-center">
            <p className="text-gray-400 text-sm">
              KEY
            </p>
            <p className="text-3xl font-bold text-yellow-400">
              {detectingKey ? "Detecting..." : songKey || "--"}
            </p>
          </div>

        </div>

        <div className="mt-6 flex items-center justify-center gap-4">

<button
  onClick={() => changePitch(pitch - 1)}
  disabled={processingPitch}
  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-bold"
>
  {processingPitch ? (
  <span className="animate-spin inline-block">⟳</span>
  ) : (
  "-"
  )}
</button>

<div className="text-xl font-bold text-white">
  Pitch: {pitch}
</div>

<button
  onClick={() => changePitch(pitch + 1)}
  disabled={processingPitch}
  className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-bold"
>
  {processingPitch ? (
  <span className="animate-spin inline-block">⟳</span>
  ) : (
  "+"
  )}
</button>

</div>

        {audioURL && (
          <audio
            controls
            className="w-full mt-6"
            src={audioURL}
          />
        )}

      </div>
    )}

    {loading && (
      <p className="mt-6 text-yellow-400">
        Analyzing Song...
      </p>
    )}

    <p className="mt-12 text-sm text-gray-500">
      Created by Haroon
    </p>

  </main>
);
}