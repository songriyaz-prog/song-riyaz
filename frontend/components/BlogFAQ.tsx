"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

export default function BlogFAQ({
  faqs,
}: {
  faqs: FAQ[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mt-20">

      <h2 className="text-4xl font-bold text-white mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">

        {faqs.map((faq, index) => (

          <div
            key={index}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden"
          >

            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex items-center justify-between px-6 py-5 text-left"
            >

              <span className="text-lg font-semibold text-white">
                {faq.question}
              </span>

              <span className="text-green-400 text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>

            </button>

            {openIndex === index && (

              <div className="px-6 pb-6 text-zinc-300 leading-8">
                {faq.answer}
              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}