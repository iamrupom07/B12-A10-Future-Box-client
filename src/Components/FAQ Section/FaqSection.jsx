import React, { useState } from "react";

const faqs = [
  {
    question: "How does the habit tracker help me stay consistent?",
    answer:
      "We use a combination of features to boost consistency, including personalized streak tracking to visualize your progress, customizable reminders delivered at optimal times, and motivational insights that highlight your success patterns. Our goal is to make tracking frictionless and rewarding.",
  },
  {
    question: "Is my personal habit data kept private and secure?",
    answer:
      "Absolutely. Your privacy is our top priority. All habit data, tracking history, and personal notes are secured using industry-standard encryption. We never share or sell your information, ensuring your journey of personal development remains confidential.",
  },
  {
    question:
      "Can I track habits that I don't do every day (e.g., weekly or monthly)?",
    answer:
      "Yes! Our platform is designed for maximum flexibility. You can easily set up habits with custom frequencies, such as 'Read 3 times a week,' 'Exercise every Monday and Friday,' or 'Review budget monthly.' The tracker will only prompt you and measure your streak on those specific days.",
  },
  {
    question: "What happens if I miss a day or break a streak?",
    answer:
      "It's okay—missed days are part of the process! We encourage a 'progress, not perfection' mindset. While we track your longest streak, the app also offers a streak recovery option and provides supportive insights to help you get back on track immediately, emphasizing consistency over a flawless record.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" p-6">
      <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
        ❓ Frequently Asked Questions (FAQ)
      </h2>

      <div className="divide-y divide-gray-300">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between text-left focus:outline-none"
            >
              <span
                className={`text-base font-medium ${
                  openIndex === index
                    ? "text-blue-700"
                    : "text-slate-900 hover:text-blue-700"
                }`}
              >
                {faq.question}
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={`w-[14px] h-[14px] fill-current transition-transform duration-300 ${
                  openIndex === index
                    ? "rotate-180 text-blue-700"
                    : "text-slate-700"
                }`}
              >
                <path d="M40.421 215.579H471.579C493.868 215.579 512 233.711 512 256s-18.132 40.421-40.421 40.421H40.421C18.132 296.421 0 278.289 0 256s18.132-40.421 40.421-40.421z" />
                <path
                  className={`${openIndex === index ? "hidden" : ""}`}
                  d="M215.579 40.421C215.579 18.132 233.711 0 256 0s40.421 18.132 40.421 40.421v431.158C296.421 493.868 278.289 512 256 512s-40.421-18.132-40.421-40.421V40.421z"
                />
              </svg>
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === index ? "max-h-[500px] mt-2" : "max-h-0"
              }`}
            >
              <p className="text-[15px] text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
