import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How quickly will I receive leads?",
    answer:
      "You'll start receiving leads within 24 hours of subscription activation. Our system delivers fresh, verified leads daily to ensure consistent flow for your business.",
  },
  {
    question: "What if the leads don't convert?",
    answer:
      "We offer a lead replacement guarantee. If leads don't meet our quality standards or aren't responsive, we'll replace them at no extra cost. We also provide a 30-day money-back guarantee.",
  },
  {
    question: "Can I target specific locations?",
    answer:
      "Yes! All our plans include location-based filtering. You can target specific cities, states, or regions to ensure leads are relevant to your service area.",
  },
  {
    question: "How are leads verified?",
    answer:
      "Our leads go through a multi-step verification process including phone number validation, email verification, and intent confirmation.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-indigo-50 py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12">
            Everything you need to know about OptimizedLeads
          </p>
        </div>

        {/* FAQ ITEMS */}
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-white p-4 sm:p-6 shadow-lg transition hover:shadow-xl"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between text-left focus:outline-none"
                >
                  <h3 className="text-xl font-bold text-gray-900">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`h-6 w-6 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-4 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
