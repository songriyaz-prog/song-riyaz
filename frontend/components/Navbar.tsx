"use client";

import Link from "next/link";

export default function Navbar() {
  return (

<nav className="sticky top-0 bg-black/80 backdrop-blur border-b border-zinc-900">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <div className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="Song Riyaz Logo"
    className="w-12 h-12"
  />
  <h1 className="text-3xl font-bold">
    Song Riyaz
  </h1>
</div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/">Home</Link>
            <Link href="/analyze">Analyze</Link>
            <Link href="/#features">Features</Link>
            <Link href="/#works">How It Works</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/analyze" className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold">Upload Song</Link>
          </div>
        </div>
      </nav>
      
     );
    }
