import { useState } from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const faqs = [
  {
    question: 'How can I book an appointment?',
    answer: 'You can book an appointment by filling out our online appointment form, calling our clinic at +91 98765 43210, or visiting us in person. Our team will confirm your booking within 24 hours.',
  },
  {
    question: 'Do you provide emergency dental care?',
    answer: 'Yes, we offer emergency dental services during clinic hours. For urgent dental concerns, please call us directly and we will do our best to see you as soon as possible.',
  },
  {
    question: 'How often should I visit a dentist?',
    answer: 'We recommend visiting the dentist every 6 months for a routine checkup and professional cleaning. However, if you have specific dental concerns, more frequent visits may be necessary.',
  },
  {
    question: 'Do you provide dental implants?',
    answer: 'Yes, we offer modern dental implant solutions. Our experienced implantologists use the latest technology to provide natural-looking, durable replacements for missing teeth.',
  },
  {
    question: 'Do you treat children?',
    answer: 'Absolutely! We have a dedicated pediatric dentistry team that provides gentle, friendly dental care specifically designed for children of all ages.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, credit/debit cards, UPI, net banking, and EMI options. We also work with major dental insurance providers. Please contact us for specific insurance queries.',
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`border border-gray-100 rounded-xl overflow-hidden transition-all duration-200 ${isOpen ? 'shadow-md bg-white' : 'bg-white hover:bg-surface'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-primary text-sm sm:text-base">{faq.question}</span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-secondary text-white rotate-180' : 'bg-surface text-secondary'}`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 text-text-muted text-sm leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [ref, isVisible] = useAnimateOnScroll(0.1);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-teal/10 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-teal rounded-full" />
            <span className="text-teal text-sm font-semibold uppercase tracking-wider">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Find answers to common questions about our dental services.
          </p>
        </div>

        <div className={`space-y-3 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
