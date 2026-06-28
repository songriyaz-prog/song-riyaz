import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.songriyaz.xyz"),

  title: "Song Riyaz - Find Song Key, BPM & Change Pitch Online",

  description:
    "Song Riyaz is a free AI-powered tool to detect song key, find BPM, change pitch, and practice songs in your own vocal scale.",

  keywords: [
    "song key finder",
    "song key detector",
    "bpm finder",
    "bpm detector",
    "pitch changer",
    "change song key",
    "practice songs",
    "sing in your own scale",
    "vocal practice",
    "karaoke practice",
    "Song Riyaz"
  ],

  authors: [{ name: "Haroon Ashraf" }],

  creator: "Haroon Ashraf",

  publisher: "Song Riyaz",

  openGraph: {
    title: "Song Riyaz - Find Song Key, BPM & Change Pitch Online",
    description:
      "Detect song key, BPM, change pitch and practice songs in your own vocal scale.",
    url: "https://www.songriyaz.xyz",
    siteName: "Song Riyaz",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Song Riyaz",
    description:
      "Detect song key, BPM and practice songs in your own scale.",
  },

  robots: {
    index: true,
    follow: true,
  },

verification: {
  google: "4xyo-3f_onirJX_TDbdh3MLUCZ9Ss1UVJTwaig3z3Bw",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
