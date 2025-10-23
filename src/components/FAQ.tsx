import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does FlowOps guarantee 50% compression without losing meaning?",
      answer: "Our proprietary AI model is trained specifically on business communications in Arabic and English. It identifies redundant phrases, verbose expressions, and unnecessary formalities while preserving the core message, tone, and all critical information like order numbers, dates, and amounts."
    },
    {
      question: "Will my customers notice the difference in message quality?",
      answer: "In our pilot programs, 94% of businesses reported improved customer engagement due to clearer, more concise messages. The compression removes verbosity while maintaining professionalism and clarity."
    },
    {
      question: "How long does integration take?",
      answer: "Most integrations are completed within 2-4 hours. Our API is designed to work seamlessly with all major WhatsApp Business API providers (Twilio, Wati, Direct Meta). We provide a dedicated integration specialist for your pilot."
    },
    {
      question: "What happens to my message data?",
      answer: "FlowOps NEVER stores your message content. All compression happens in real-time in secure memory. We only retain metadata (character counts, timestamps) for billing. See our Privacy Policy for full details."
    },
    {
      question: "What if compression reduces a message below the minimum needed?",
      answer: "Our AI is context-aware and will never compress a message to the point of losing critical information. For very short messages (under 50 characters), compression is minimal or skipped entirely."
    },
    {
      question: "Can I try FlowOps risk-free?",
      answer: "Yes! Our 14-day pilot program is completely free with no credit card required. You'll see real savings on your actual message volume before committing to a paid plan."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Everything you need to know about FlowOps
        </p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition flex justify-between items-center"
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-[#007bff] flex-shrink-0 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
