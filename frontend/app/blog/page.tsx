import Link from "next/link";
import BlogNavbar from "@/components/BlogNavbar";
import BlogFooter from "@/components/BlogFooter";

const featuredArticle = {
  title: "How to Find the Key of Any Song (Free Online)",
  description:
    "Learn how to detect the key of any song accurately and practice it in your own vocal range using Song Riyaz.",
  slug: "how-to-find-the-key-of-any-song",
};

const articles = [
  {
    title: "How to Detect BPM of Any Song",
    slug: "how-to-detect-bpm",
  },
  {
    title: "How to Change Song Pitch Without Losing Quality",
    slug: "how-to-change-song-pitch",
  },
  {
    title: "How to Practice Songs in Your Own Scale",
    slug: "practice-songs-in-your-own-scale",
  },
  {
    title: "Best Free Song Key Finder",
    slug: "best-free-song-key-finder",
  },
];

export default function BlogPage() {
  return (
    
    <>

      <BlogNavbar />
    <main className="min-h-screen bg-black text-white">

      <section className="max-w-7xl mx-auto px-6 py-24">

        <p className="text-green-500 uppercase tracking-[6px] font-semibold">
          SONG RIYAZ BLOG
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold mt-6">
          Learn Singing
          <span className="text-green-500"> Smarter</span>
        </h1>

        <p className="text-zinc-400 mt-6 text-lg max-w-3xl leading-8">
          Learn how to detect song keys, find BPM,
          change pitch, improve your singing,
          and practice songs in your own scale.
        </p>

        <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

          <p className="text-green-500 font-semibold">
            ⭐ Featured Article
          </p>

          <h2 className="text-4xl font-bold mt-4">
            {featuredArticle.title}
          </h2>

          <p className="text-zinc-400 mt-6 leading-8 max-w-3xl">
            {featuredArticle.description}
          </p>

          <Link
            href={`/blog/${featuredArticle.slug}`}
            className="inline-block mt-8 bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl font-semibold"
          >
            Read Article
          </Link>

        </div>

        <h2 className="text-3xl font-bold mt-20">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {articles.map((article) => (

            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="border border-zinc-800 hover:border-green-500 transition rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold">
                {article.title}
              </h3>

              <p className="text-green-500 mt-6">
                Read →
              </p>

            </Link>

          ))}

        </div>

      </section>

        <BlogFooter />

    </main>
    </>
  );
}