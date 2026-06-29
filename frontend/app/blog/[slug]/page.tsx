import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogNavbar from "@/components/BlogNavbar";
import BlogFooter from "@/components/BlogFooter";
import { blogPosts } from "../data";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Song Riyaz",
    };
  }

  return {
    title: `${post.title} | Song Riyaz`,
    description: post.description,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Song Riyaz",
      logo: {
        "@type": "ImageObject",
        url: "https://www.songriyaz.xyz/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.songriyaz.xyz/blog/${post.slug}`,
    },
    datePublished: post.publishedISO,
    dateModified: post.modifiedISO,
    inLanguage: "en",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <BlogNavbar />

      <main className="bg-black text-white min-h-screen">
        <section className="max-w-4xl mx-auto px-6 py-20">

          <p className="text-green-500 font-semibold uppercase tracking-[4px]">
            Song Riyaz Blog
          </p>

          <h1 className="text-5xl font-extrabold mt-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-6 mt-8 text-zinc-400">
            <span>{post.author}</span>
            <span>{post.published}</span>
            <span>{post.readingTime}</span>
          </div>

          <div className="mt-14">
            {post.component}
          </div>

        </section>
      </main>

      <BlogFooter />
    </>
  );
}