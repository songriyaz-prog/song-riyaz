export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Song <span className="text-green-500">Riyaz</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-8">
              Practice any song in your own scale.
              Detect BPM, detect key, shift pitch,
              and improve your singing with AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <a href="/">Home</a>
              <a href="/analyze">Analyze</a>
              <a href="/blog">Blog</a>
              <a href="/contact">Contact</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms">Terms & Conditions</a>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <p className="text-gray-400">
              haroonashraf5040@gmail.com
            </p>

            <p className="text-gray-400 mt-3">
              +92 327 4375040
            </p>

          </div>

        </div>

        <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-gray-500">

          © {new Date().getFullYear()} Song Riyaz.
          All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}