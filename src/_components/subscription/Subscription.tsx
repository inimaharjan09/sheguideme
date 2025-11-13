import React from 'react';

const billing = [
  { title: 'How does this platform work?' },
  { title: 'Are the guides verified?' },
  { title: 'How do I choose the right guide for me?' },
  { title: 'How do I contact or book a guide?' },
  { title: 'Is there any booking fee?' },
  { title: 'Can I leave a review after my trip?' },
];
const Subscription = () => {
  return (
    <section className="py-16">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <span className="text-sm font-medium px-3 py-1 border rounded-full">
          Frequently Asked Questions
        </span>
        <h2 className="text-3xl font-bold text-gray-900 mt-3">
          Subscription & Billing FAQs
        </h2>
        <p className="text-[20.32px] text-[#62748E]">
          All your questions about subscriptions, payments, and billing cycles
          answered here.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="mt-12 max-w-2xl mx-auto space-y-4">
        {billing.map((question, index) => (
          <div key={index} className="border-b py-3">
            <div className="cursor-pointer font-medium flex justify-between items-center">
              {question.title}
              <span className="ml-2">▾</span>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-8 text-center">
        <button className="bg-[#D8465C] text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition">
          View all FAQs &rarr;
        </button>
      </div>
    </section>
  );
};

export default Subscription;
