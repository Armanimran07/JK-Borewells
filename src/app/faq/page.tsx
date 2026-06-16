import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | JK Borewells",
  description: "Find answers to common questions about borewell drilling, pump installation, and maintenance.",
};

const FAQS = [
  {
    q: "How deep do you usually drill for a borewell in Kashmir?",
    a: "The depth varies significantly depending on the specific location and geological conditions. Typically, we drill between 150 to 500 feet, but some areas may require deeper drilling to reach a sustainable aquifer."
  },
  {
    q: "How long does it take to drill a borewell?",
    a: "A standard borewell drilling project usually takes 1 to 3 days, depending on the depth, rock formation, and site accessibility."
  },
  {
    q: "Do you provide pump installation services?",
    a: "Yes, we provide end-to-end solutions. After drilling, we can recommend and install the most suitable submersible or surface pump based on the borewell's yield and your water requirements."
  },
  {
    q: "What areas in Kashmir do you serve?",
    a: "We serve the entire Kashmir Valley, including Srinagar, Baramulla, Kupwara, Budgam, Pulwama, Shopian, Ganderbal, Bandipora, Anantnag, and Kulgam."
  },
  {
    q: "What should I do if my motor gets stuck in the borewell?",
    a: "Do not attempt to pull it out yourself, as this can cause permanent damage to the casing. Contact us immediately. We have specialized tools and expertise for safe motor recovery."
  }
];

export default function FAQPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-outfit font-bold text-brand-navy mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Answers to common questions about our drilling and water solutions.
          </p>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-brand-navy mb-3">{faq.q}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
