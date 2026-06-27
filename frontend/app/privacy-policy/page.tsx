"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-20">

        <p className="text-green-500 font-semibold uppercase tracking-wider text-center">
          LEGAL
        </p>

        <h1 className="text-6xl md:text-7xl font-extrabold text-center mt-4">
          Privacy
          <br />
          <span className="text-green-500">
            Policy
          </span>
        </h1>

        <p className="text-gray-400 text-xl max-w-3xl mx-auto text-center mt-8 leading-9">
          Your privacy is important to us. This Privacy Policy explains how
          Song Riyaz collects, uses and protects your information.
        </p>

        <div className="mt-20 bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-left max-w-5xl mx-auto">

          <div className="space-y-10">

            <div>
            <h2 className="text-2xl font-bold mb-3">1. Information We Collect</h2>
            <p className="text-gray-400 leading-8">
                Song Riyaz only collects the information necessary to provide and improve
                our services. This may include your uploaded audio files, email address,
                and basic technical information such as browser type and device information.
            </p>
            </div>

            <div>
            <h2 className="text-2xl font-bold mb-3">2. How We Use Your Information</h2>
            <p className="text-gray-400 leading-8">
                Your information is used solely to analyze songs, improve our services,
                provide customer support, and enhance your overall experience.
            </p>
            </div>

            <div>
            <h2 className="text-2xl font-bold mb-3">3. Audio Files</h2>
            <p className="text-gray-400 leading-8">
                Uploaded audio files are processed only to perform requested analysis,
                such as BPM detection, key detection, and pitch shifting. We do not sell
                or publicly share your uploaded content.
            </p>
            </div>

            <div>
            <h2 className="text-2xl font-bold mb-3">4. Data Security</h2>
            <p className="text-gray-400 leading-8">
                We use reasonable security measures to protect your information from
                unauthorized access, loss, or misuse.
            </p>
            </div>

            <div>
            <h2 className="text-2xl font-bold mb-3">5. Contact</h2>
            <p className="text-gray-400 leading-8">
                If you have any questions regarding this Privacy Policy, please contact us at:
            </p>

            <p className="text-green-500 font-semibold mt-3">
                haroonashraf5040@gmail.com
            </p>
            </div>

        </div>

        </div>

      </section>
        <Footer />

    </main>
  );
}