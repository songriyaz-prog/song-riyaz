"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function Terms() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-20">

        <p className="text-green-500 font-semibold uppercase tracking-wider text-center">
          LEGAL
        </p>

        <h1 className="text-6xl md:text-7xl font-extrabold text-center mt-4">
          Terms &
          <br />
          <span className="text-green-500">
            Conditions
          </span>
        </h1>

        <p className="text-gray-400 text-xl max-w-3xl mx-auto text-center mt-8 leading-9">
          Please read these Terms & Conditions carefully before using Song Riyaz.
        </p>

        <div className="mt-20 bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-left max-w-5xl mx-auto">

          <div className="space-y-10">

            <div>
              <h2 className="text-2xl font-bold mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-400 leading-8">
                By accessing or using Song Riyaz, you agree to comply with these Terms
                & Conditions. If you do not agree, please do not use the service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">2. Use of the Service</h2>
              <p className="text-gray-400 leading-8">
                Song Riyaz is provided to help users analyze songs, detect BPM and key,
                and practice music. You agree not to misuse, copy, or attempt to damage
                the service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">3. User Content</h2>
              <p className="text-gray-400 leading-8">
                You are responsible for any audio files you upload. Please ensure that
                you have the necessary rights or permission to use the content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">4. Limitation of Liability</h2>
              <p className="text-gray-400 leading-8">
                Song Riyaz is provided "as is" without warranties of any kind. We are
                not responsible for any loss or damages resulting from the use of the
                service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">5. Changes to These Terms</h2>
              <p className="text-gray-400 leading-8">
                We may update these Terms & Conditions from time to time. Continued use
                of Song Riyaz after changes are published constitutes acceptance of the
                updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">6. Contact</h2>
              <p className="text-gray-400 leading-8">
                If you have any questions regarding these Terms & Conditions, please
                contact us at:
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