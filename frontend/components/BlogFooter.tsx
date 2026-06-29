import Link from "next/link";

export default function BlogFooter() {
  return (
    <footer className="bg-black border-t border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Logo / Brand */}

        <div className="text-center">

          <h2 className="text-3xl font-bold text-white">
            Song <span className="text-green-500">Riyaz</span>
          </h2>

          <p className="mt-4 text-zinc-400 text-lg">
            AI-Powered Singing Practice Platform
          </p>

        </div>

        {/* Navigation */}

        <div className="flex flex-wrap justify-center gap-8 mt-10 text-zinc-300">

          <Link href="/" className="hover:text-green-500 transition">
            Home
          </Link>

          <Link href="/analyze" className="hover:text-green-500 transition">
            Analyze
          </Link>

          <Link href="/blog" className="hover:text-green-500 transition">
            Blog
          </Link>

          <Link href="/contact" className="hover:text-green-500 transition">
            Contact
          </Link>

          <Link
            href="/privacy-policy"
            className="hover:text-green-500 transition"
          >
            Privacy
          </Link>

          <Link
            href="/terms"
            className="hover:text-green-500 transition"
          >
            Terms
          </Link>

        </div>

        {/* Divider */}

        <div className="border-t border-zinc-800 mt-12 pt-8">

          <p className="text-center text-zinc-500 text-sm">
            © 2026 Song Riyaz. Made for singers ❤️
          </p>

        </div>

      </div>

    </footer>
  );
}