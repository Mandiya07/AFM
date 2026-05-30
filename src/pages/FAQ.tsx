import { useState } from 'react';
import { faqs } from '../data';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-6">Frequently Asked Questions</h1>
        <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6"></div>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-gray-200 rounded-sm overflow-hidden bg-white">
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium font-serif text-charcoal-900 text-lg">{faq.question}</span>
              <ChevronDown className={`w-5 h-5 text-gold-600 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
            </button>
            {openIdx === idx && (
              <div className="p-6 pt-0 text-charcoal-600 leading-relaxed bg-gray-50 border-t border-gray-100">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
