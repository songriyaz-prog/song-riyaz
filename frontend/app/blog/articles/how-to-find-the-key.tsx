"use client";

import { useState } from "react";
import Link from "next/link";

export default function HowToFindTheKeyArticle() {

  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <article className="max-w-none">

      {/* Introduction */}

      <div className="prose prose-invert prose-lg max-w-none
      prose-headings:text-white
      prose-p:text-zinc-300
      prose-p:leading-8
      prose-p:mb-6
      prose-strong:text-white
      prose-a:text-green-400
      prose-a:no-underline
      prose-a:hover:text-green-300
      prose-li:text-zinc-300
      prose-li:mb-2">

        <p>
          Have you ever started singing your favorite song only to realize it
          feels too high or too low for your voice? The problem is usually not
          your singing—it's the <strong className="text-white">key of the song.</strong>
        </p>

        <p>
          Every song is written in a specific musical key. If that key doesn't
          match your natural vocal range, singing comfortably becomes much more
          difficult.
        </p>

        <p>
          In this guide you'll learn what a song key is, why it matters, how to
          detect it for free, and how to practice every song in a key that suits
          your own voice.
        </p>

      </div>

      {/* Quick Answer */}

      <div className="mt-14 rounded-2xl border border-green-500/30 bg-zinc-900 p-8">

        <h2 className="text-3xl font-bold text-white">
          Quick Answer
        </h2>

        <p className="mt-6 text-zinc-300 text-lg leading-8">
          The easiest way to find the key of any song is by using an AI-powered
          song analyzer. Upload the audio, let the system analyze it, and within
          seconds you'll know the original key, BPM, and can even change the
          pitch to match your vocal range.
        </p>

      </div>

      {/* Table of Contents */}

      <div className="mt-14 rounded-2xl border border-zinc-800 bg-zinc-950 p-8">

        <h2 className="text-2xl font-bold text-white">
          Contents
        </h2>

        <ul className="mt-6 space-y-4 text-green-400">

          <li>
            <a href="#what-is-key" className="hover:underline">
              What is the Key of a Song?
            </a>
          </li>

          <li>
            <a href="#why-important" className="hover:underline">
              Why Every Singer Should Know It
            </a>
          </li>

          <li>
            <a href="#how-find" className="hover:underline">
              How to Find the Key of Any Song
            </a>
          </li>

          <li>
            <a href="#mistakes" className="hover:underline">
              Common Mistakes
            </a>
          </li>

        </ul>

      </div>

      {/* Section */}

      <section
        id="what-is-key"
        className="mt-20"
      >

        <h2 className="text-4xl font-bold text-white mt-20 mb-8">
          What Is the Key of a Song?
        </h2>

        <div className="mt-8 space-y-7 text-zinc-300 text-lg leading-9">

          <p>
            Think of the key as the musical "home" of a song. Every melody and
            chord naturally wants to return to that home, which is why the song
            feels complete when it ends.
          </p>

          <p>
            The key also determines whether a song will feel comfortable or
            difficult for your voice. Two singers can perform exactly the same
            song while using completely different keys because every voice is
            unique.
          </p>

        </div>

      </section>

      <div className="my-16 border-t border-zinc-800"></div>

      {/* Tip */}

      <div className="mt-12 rounded-2xl border-l-4 border-green-500 bg-zinc-900 p-8">

        <h3 className="text-green-400 text-2xl font-semibold">
          💡 Pro Tip
        </h3>

        <p className="mt-4 text-zinc-300 text-lg leading-8">
          Always identify the original key before changing the pitch. This helps
          you understand how far you are transposing the song.
        </p>

      </div>

      <div className="my-16 border-t border-zinc-800"></div>

      {/* Why */}

      <section
        id="why-important"
        className="mt-20"
      >

        <h2 className="text-4xl font-bold text-white mt-20 mb-8">
          Why Every Singer Should Know the Song Key
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="rounded-xl bg-zinc-900 p-6">
            <h3 className="text-green-400 font-semibold text-xl">
              ✓ Avoid Vocal Strain
            </h3>
            <p className="mt-3 text-zinc-400">
              Stop forcing high notes that don't suit your voice.
            </p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-6">
            <h3 className="text-green-400 font-semibold text-xl">
              ✓ Improve Pitch Accuracy
            </h3>
            <p className="mt-3 text-zinc-400">
              Singing becomes easier when the song fits your range.
            </p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-6">
            <h3 className="text-green-400 font-semibold text-xl">
              ✓ Practice Comfortably
            </h3>
            <p className="mt-3 text-zinc-400">
              Focus on expression instead of struggling with difficult notes.
            </p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-6">
            <h3 className="text-green-400 font-semibold text-xl">
              ✓ Build Confidence
            </h3>
            <p className="mt-3 text-zinc-400">
              Singing becomes more enjoyable when every note feels natural.
            </p>
          </div>

        </div>

      </section>

      <div className="my-16 border-t border-zinc-800"></div>

      {/* Common Mistakes */}

      <section id="mistakes" className="mt-20">

        <h2 className="text-4xl font-bold text-white mb-8">
          Common Mistakes Singers Make
        </h2>

        <div className="space-y-6">

          <div className="rounded-xl border-l-4 border-red-500 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold text-white">
              ❌ Singing Without Knowing the Original Key
            </h3>

            <p className="mt-3 text-zinc-300 leading-8">
              Many beginners start practicing immediately without checking the song's original key. This often leads to vocal strain and frustration.
            </p>
          </div>

          <div className="rounded-xl border-l-4 border-red-500 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold text-white">
              ❌ Choosing a Key That's Too High
            </h3>

            <p className="mt-3 text-zinc-300 leading-8">
              If you're constantly struggling to reach high notes, the song probably isn't in the right key for your voice.
            </p>
          </div>

          <div className="rounded-xl border-l-4 border-red-500 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold text-white">
              ❌ Ignoring BPM
            </h3>

            <p className="mt-3 text-zinc-300 leading-8">
              Tempo is just as important as key. Practicing with the wrong BPM can make timing and rhythm much harder to learn.
            </p>
          </div>

        </div>

      </section>

      {/* Conclusion */}

      <section className="mt-20">

        <h2 className="text-4xl font-bold text-white mb-8">
          Final Thoughts
        </h2>

        <div className="space-y-6 text-lg leading-9 text-zinc-300">

          <p>
            Finding the key of a song is one of the simplest ways to improve your
            singing. Once you know the original key, you can decide whether it suits
            your vocal range or if it should be transposed to make singing more
            comfortable.
          </p>

          <p>
            Remember, great singers don't force themselves to sing every song in its
            original key. They choose a key that allows them to perform confidently
            while maintaining good vocal technique.
          </p>

          <p>
            Whether you're practicing at home, preparing for a live performance, or
            recording a cover song, knowing the song's key and BPM before you begin
            will save time and help you practice more effectively.
          </p>

        </div>

      </section>

      {/* FAQ */}

      <section className="mt-20">

        <h2 className="text-4xl font-bold text-white mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          {/* Question 1 */}

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden">

            <button
              onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
              className="w-full flex items-center justify-between px-6 py-5 text-left"
            >
              <span className="text-lg font-semibold text-white">
                Can I find the key of any song for free?
              </span>

              <span className="text-green-400 text-2xl">
                {openFAQ === 1 ? "−" : "+"}
              </span>
            </button>

            {openFAQ === 1 && (
              <div className="px-6 pb-6 text-zinc-300 leading-8">
                Yes. AI-powered tools like Song Riyaz can analyze an uploaded song
                and detect its original musical key within seconds.
              </div>
            )}

          </div>

          {/* Question 2 */}

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden">

            <button
              onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
              className="w-full flex items-center justify-between px-6 py-5 text-left"
            >
              <span className="text-lg font-semibold text-white">
                Why should singers know the original key?
              </span>

              <span className="text-green-400 text-2xl">
                {openFAQ === 2 ? "−" : "+"}
              </span>
            </button>

            {openFAQ === 2 && (
              <div className="px-6 pb-6 text-zinc-300 leading-8">
                Knowing the original key helps you decide whether the song suits your
                voice or whether you should transpose it before practicing.
              </div>
            )}

          </div>

          {/* Question 3 */}

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden">

            <button
              onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
              className="w-full flex items-center justify-between px-6 py-5 text-left"
            >
              <span className="text-lg font-semibold text-white">
                Can I change the pitch after detecting the key?
              </span>

              <span className="text-green-400 text-2xl">
                {openFAQ === 3 ? "−" : "+"}
              </span>
            </button>

            {openFAQ === 3 && (
              <div className="px-6 pb-6 text-zinc-300 leading-8">
                Absolutely. Once you know the original key, you can transpose the song
                higher or lower until it matches your comfortable vocal range.
              </div>
            )}

          </div>

        </div>

      </section>

      {/* CTA */}

      {/* Real Example */}

      <div className="mt-20 rounded-3xl border border-green-500/30 bg-zinc-900 p-10">

        <h2 className="text-3xl font-bold text-white">
          🎵 Real Example
        </h2>

        <p className="mt-5 text-zinc-300 leading-8">
          Imagine you want to sing <strong className="text-white">Ae Dil Hai Mushkil</strong>,
          but the original key feels too high for your voice.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">

          <div className="rounded-xl bg-black/40 p-6 border border-zinc-800">
            <p className="text-zinc-400 text-sm uppercase">
              Original Key
            </p>

            <p className="text-3xl font-bold text-green-400 mt-2">
              D# Minor
            </p>
          </div>

          <div className="rounded-xl bg-black/40 p-6 border border-zinc-800">
            <p className="text-zinc-400 text-sm uppercase">
              BPM
            </p>

            <p className="text-3xl font-bold text-green-400 mt-2">
              123
            </p>
          </div>

        </div>

        <p className="mt-8 text-zinc-300 leading-8">
          If this key feels uncomfortable, you can transpose the song
          down until it matches your natural vocal range.
          This helps you practice without putting unnecessary strain on your voice.
        </p>

      </div>

      <div className="mt-20 rounded-3xl border border-green-500/30 bg-zinc-900 p-10">

        <h2 className="text-3xl font-bold text-white">
          Ready to Find Your Song's Key?
        </h2>

        <p className="mt-5 text-zinc-300 text-lg">
          Upload your song and instantly detect its key, BPM and change its
          pitch to match your voice.
        </p>

        <Link
          href="/analyze"
          className="inline-block mt-8 rounded-xl bg-green-500 px-8 py-4 text-lg font-bold text-black hover:bg-green-400 transition"
        >
          Analyze Your Song →
        </Link>

      </div>

    </article>
  );
}