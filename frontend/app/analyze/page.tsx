"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  <main className="min-h-screen bg-black text-white">

    <Navbar />

  <div className="max-w-7xl mx-auto px-6 py-16">

    <h1 className="text-6xl md:text-7xl font-extrabold text-center leading-tight">
      Analyze
      <br />
      <span className="text-green-500">Your Song</span>
    </h1>

    <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mt-6 leading-9 mb-16">
      Practice any song in your own scale. Detect BPM, detect key,
      shift pitch, and improve your singing.
    </p>

    {!songName && (
      <>
        <input
          id="song-upload"
          type="file"
          multiple
          accept="audio/*,.mp3,.wav,.flac,.m4a,.mp4,.mov,.wma,video/*"
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />

        <label
          htmlFor="song-upload"
          className="w-full max-w-5xl mx-auto rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-green-500 hover:shadow-[0_0_35px_rgba(34,197,94,0.15)] transition-all duration-300 p-12 flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="text-6xl mb-4">
            🎵
          </div>

          <h2 className="text-3xl font-bold">
            Upload Your Song
          </h2>

          <p className="text-gray-400 mt-3 text-center">
            Drag & Drop or Click to choose an audio file
          </p>

          <p className="text-sm text-gray-500 mt-2">
            MP3 • WAV • FLAC • M4A
          </p>
        </label>
      </>
    )}

    {songName && (
      <div className="mt-10 w-full max-w-4xl mx-auto bg-zinc-900 rounded-3xl border border-zinc-800 p-8">

        <h2 className="text-xl font-bold mb-4">
          Song Information
        </h2>

        <p className="text-gray-300 break-all">
          {songName}
        </p>

        <div className="grid grid-cols-2 gap-4 mt-6">

          <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 text-center">
            <p className="text-gray-400 text-sm">
              BPM
            </p>
            <p className="text-3xl md:text-5xl font-extrabold text-green-500">
              {bpm ?? "--"}
            </p>
          </div>

          <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 text-center">
            <p className="text-gray-400 text-sm">
              KEY
            </p>
            <p className="text-3xl md:text-5xl font-extrabold text-green-500">
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
      <div className="mt-6 rounded-2xl border border-green-500/30 bg-zinc-900 p-6 text-center animate-pulse">
        <h3 className="text-lg font-semibold text-white">
          🎵 Your song is being analyzed. Please wait.
        </h3>

        <p className="mt-3 text-zinc-300">
          It can take{" "}
          <span className="font-semibold text-green-400">
            30 seconds to 2 minutes
          </span>
          , depending on the song, to give you accurate results.
        </p>
      </div>
    )}

  </div>

  <Footer />

  </main>
);
}