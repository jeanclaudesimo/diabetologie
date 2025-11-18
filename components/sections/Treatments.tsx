import { TreatmentsProps } from '@/types';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Treatments({ title, subtitle, treatments }: TreatmentsProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Treatments Grid */}
        <div className="space-y-8">
          {treatments.map((treatment, index) => (
            <div
              key={treatment.id}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 0 ? '' : 'lg:grid-flow-dense'
              }`}
            >
              {/* Image */}
              <div className={index % 2 === 0 ? '' : 'lg:col-start-2'}>
                <div className="bg-gradient-to-br from-primary-200 to-primary-300 rounded-xl aspect-video shadow-lg flex items-center justify-center">
                  {treatment.image ? (
                    <img src={treatment.image} alt={treatment.title} className="w-full h-full object-cover rounded-xl" />
                  ) : (
                    <div className="text-primary-600 text-4xl font-bold opacity-20">
                      {treatment.title.split(' ')[0]}
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}>
                {treatment.category && (
                  <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {treatment.category}
                  </span>
                )}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {treatment.title}
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  {treatment.longDescription || treatment.description}
                </p>

                {/* Benefits */}
                {treatment.benefits && treatment.benefits.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Vorteile:</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {treatment.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Process */}
                {treatment.process && treatment.process.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Ablauf:</h4>
                    <ol className="space-y-2">
                      {treatment.process.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="bg-primary-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                            {idx + 1}
                          </span>
                          <span className="text-sm text-gray-700 pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
                >
                  Beratung vereinbaren
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
