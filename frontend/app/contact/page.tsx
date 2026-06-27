"use client";

import Navbar from "@/components/Navbar";
      import Footer from "@/components/Footer";


export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-20 text-center">

        <p className="text-green-500 font-semibold uppercase tracking-wider">
          CONTACT
        </p>

        <h1 className="text-6xl md:text-7xl font-extrabold mt-4 leading-tight">
          Get In
          <br />
          <span className="text-green-500">
            Touch
          </span>
        </h1>

        <p className="text-gray-400 text-xl max-w-3xl mx-auto mt-8 leading-9">
          Have a question, feedback, or partnership inquiry?
          We'd love to hear from you. Reach out and we'll get back to you as soon as possible.
        </p>

        <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition duration-300">
            <div className="text-5xl mb-5">📧</div>

            <h2 className="text-2xl font-bold mb-4">
              Email Us
            </h2>

            <p className="text-gray-400 mb-6">
              Have a question or need help with Song Riyaz? Send us an email anytime.
            </p>

            <a
              href="mailto:haroonashraf5040@gmail.com"
              className="text-green-500 text-lg font-semibold hover:underline"
            >
              haroonashraf5040@gmail.com
            </a>
          </div> 

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition duration-300">
            <div className="text-5xl mb-5">💬</div>

            <h2 className="text-2xl font-bold mb-4">
              WhatsApp
            </h2>

            <p className="text-gray-400 mb-6">
              Need a quick response? Chat with us directly on WhatsApp.
            </p>

            <a
              href="https://wa.me/923274375040"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-lg font-semibold hover:underline"
            >
              +92 327 4375040
            </a>
          </div>

        </div>

      </section>
        <Footer />

    </main>
  );
}