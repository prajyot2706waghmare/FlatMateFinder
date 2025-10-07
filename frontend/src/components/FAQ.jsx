import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How to post a property on Flatmate finder?",
      answer: "You can post a property by signing up, going to 'Post Property' section, and filling details like property type, location, rent/price, and photos."
    },
    {
      question: "Can I post a property for free?",
      answer: "Yes, you can post your property for free. Premium options are also available for higher visibility."
    },
    {
      question: "What type of property can I post for selling/renting?",
      answer: "You can post flats, PGs, shared rooms, independent houses, and commercial properties."
    },
    {
      question: "What are the benefits of posting a property on Flatmate finder?",
      answer: "Flatmate finder provides verified listings, wider reach, and quick tenant/buyer connections."
    },
    {
      question: "When do I start getting enquiries on my property?",
      answer: "You may start receiving enquiries within hours of posting your property, depending on demand in your location."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6">
      <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b py-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-medium">{faq.question}</h3>
            <span>{openIndex === index ? "-" : "+"}</span>
          </div>
          {openIndex === index && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
// src/components/FAQ.jsx
// import React, { useState } from "react";

// const faqs = [
//   {
//     question: "How do I list my property?",
//     answer:
//       "Create an account, go to 'Post Property' (or 'Add Flat'), and fill in price, location, images and other details. Submit and the listing will appear after verification."
//   },
//   {
//     question: "Is there a fee for tenants?",
//     answer: "No — browsing and contacting owners is free for tenants."
//   },
//   {
//     question: "How can I contact a property owner?",
//     answer:
//       "Open the property page (View Details) and use the contact info or the inquiry form shown on that page."
//   },
//   {
//     question: "Are the listings verified?",
//     answer:
//       "Properties marked 'VERIFIED' are checked by our team. Always check pictures and meet the owner before giving any money."
//   }
// ];

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

//   return (
//     <section className="max-w-4xl mx-auto py-12 px-4">
//       <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//         Frequently Asked Questions
//       </h2>

//       <div className="space-y-4">
//         {faqs.map((f, i) => (
//           <div key={i} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
//             <button
//               onClick={() => toggle(i)}
//               className="w-full flex justify-between items-center p-4 text-left bg-white"
//             >
//               <span className="font-semibold text-gray-800">{f.question}</span>
//               <span className="text-gray-500">{openIndex === i ? "−" : "+"}</span>
//             </button>

//             <div className={`${openIndex === i ? "block" : "hidden"} p-4 border-t bg-gray-50 text-gray-700`}>
//               {f.answer}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
