// Song Riyaz Homepage Starter
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

  export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="hidden md:block">
      
        <section
          className="relative h-[720px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-banner.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

          <div className="relative max-w-7xl mx-auto h-full flex items-center px-6">

            <div className="max-w-xl">

              <p className="text-green-400 font-semibold mb-5">
                AI POWERED • ACCURATE • FAST
              </p>

              <h1 className="text-6xl font-extrabold leading-tight">
                Practice Any Song
                <br />
                <span className="text-green-500">
                  In Your Own Scale
                </span>
              </h1>

              <p className="text-xl text-gray-300 mt-8 leading-9">
                Practice any song in your own scale.
                Detect BPM, detect key, shift pitch,
                and improve your singing.
              </p>

              <Link
                href="/analyze"
                className="inline-block mt-10 bg-green-500 hover:bg-green-600 px-10 py-5 rounded-2xl text-lg font-bold transition"
              >
                Upload Song
              </Link>

              <p className="mt-5 text-gray-400 text-sm">
                ✓ No signup required • ✓ Free to use
              </p>

            </div>

          </div>
        </section>

      </div>

      <div className="md:hidden">
      
        <section className="bg-black text-white">

          {/* Hero Image */}
          <section className="relative">

            <img
              src="/hero-mobile.png"
              alt="Song Riyaz"
              className="w-full h-auto"
            />
          <div className="absolute top-[55%] left-0 w-full px-6">

          {/* Hero Text */}
          <div className="px-6">

            <p className="hidden">
              AI POWERED • ACCURATE • FAST
            </p>

            <h1 className="text-4xl font-extrabold leading-tight mt-32">
              Practice Any Song
              <br />
              <span className="text-green-500">
                In Your Own Scale
              </span>
            </h1>

            <p className="text-gray-300 text-base leading-7 mt-4">
              Practice any song in your own scale.
              Detect BPM, detect key,
              shift pitch, and improve
              your singing.
            </p>

            <Link
              href="/analyze"
              className="inline-block mt-8 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl text-lg font-bold transition"
            >
              Upload Song
            </Link>

            <p className="mt-6 text-gray-400 text-sm">
              ✓ No signup required • ✓ Free to use
            </p>

           </div>

          </div>

        </section>
        </section>
      </div>

      <section className="bg-zinc-900 py-20">
        <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-4xl font-bold text-center mb-12">Features</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {["Key Detection","BPM Detection","Pitch Shift","Practice Mode"].map((t)=>(
            <div
              key={t}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition duration-300"
            >
              <div className="text-5xl mb-4">
                {t === "Key Detection" && "🎵"}
                {t === "BPM Detection" && "🥁"}
                {t === "Pitch Shift" && "🎚️"}
                {t === "Practice Mode" && "🎤"}
              </div>

              <h4 className="text-2xl font-bold mb-3">
                {t}
              </h4>

              <p className="text-gray-400">
                {t === "Key Detection" && "Find the original key of any song."}
                {t === "BPM Detection" && "Detect the tempo in seconds."}
                {t === "Pitch Shift" && "Change the song into your vocal range."}
                {t === "Practice Mode" && "Practice smarter with built-in tools."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="works" className="bg-zinc-950 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {["Upload Song","Analyze","Practice"].map((s)=>(
              <div key={s} className="bg-black border border-zinc-800 rounded-3xl p-8">{s}</div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </section>

    </main>
  );
}
