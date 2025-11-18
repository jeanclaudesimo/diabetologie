'use client';

import { FAQProps } from '@/types';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ({ title, subtitle, faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = {
    general: 'Allgemeine Fragen',
    treatment: 'Behandlung',
    practice: 'Praxis',
    costs: 'Kosten'
  };

  const groupedFaqs = faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, typeof faqs>);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* FAQ by Category */}
        {Object.entries(groupedFaqs).map(([category, categoryFaqs]) => (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {categories[category as keyof typeof categories]}
            </h3>
            <div className="space-y-3">
              {categoryFaqs.map((faq, index) => {
                const globalIndex = faqs.findIndex(f => f.id === faq.id);
                const isOpen = openIndex === globalIndex;

                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition"
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center gap-4"
                      onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                    >
                      <span className="font-semibold text-gray-900">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`text-primary-600 flex-shrink-0 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
