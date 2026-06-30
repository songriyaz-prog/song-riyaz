import type { ReactNode } from "react";
import HowToFindTheKeyArticle from "./articles/how-to-find-the-key";
import HowToDetectBPMArticle from "./articles/how-to-detect-bpm";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedISO: string;
  modifiedISO: string;
  published: string;
  readingTime: string;
  component: ReactNode;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-find-the-key-of-any-song",
    title: "How to Find the Key of Any Song (Free Online)",
    description:
      "Learn how to detect the key of any song accurately and practice in your own vocal range using Song Riyaz.",
    author: "Haroon Ashraf",
    publishedISO: "2026-06-30",
    modifiedISO: "2026-06-30",
    published: "June 2026",
    readingTime: "8 min read",
    component: <HowToFindTheKeyArticle />,
  },

  {
    slug: "how-to-detect-bpm",
    title: "How to Detect BPM of Any Song",
    description:
      "Learn how to find the BPM of any song for singing and music practice.",
    author: "Haroon Ashraf",
    publishedISO: "2026-06-30",
    modifiedISO: "2026-06-30",
    published: "June 2026",
    readingTime: "6 min read",
    component: <HowToDetectBPMArticle />,
  },

  {
    slug: "how-to-change-song-pitch",
    title: "How to Change Song Pitch Without Losing Quality",
    description:
      "Transpose songs into your vocal range while maintaining audio quality.",
    author: "Haroon Ashraf",
    publishedISO: "2026-06-30",
    modifiedISO: "2026-06-30",
    published: "June 2026",
    readingTime: "7 min read",
    component: (
      <p className="text-zinc-300">
        This article is coming soon.
      </p>
    ),
  },
];