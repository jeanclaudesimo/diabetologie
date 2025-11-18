import { AboutProps } from '@/types';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function About({
  title,
  subtitle,
  description,
  mission,
  values,
  equipment,
  image
}: AboutProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary-200 to-primary-300 rounded-2xl aspect-video shadow-xl flex items-center justify-center overflow-hidden">
              {image ? (
                <Image
                  src={image}
                  alt={title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover rounded-2xl"
                  priority={false}
                />
              ) : (
                <div className="text-primary-600 text-4xl font-bold opacity-20">
                  Moderne Praxis
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            {subtitle && (
              <div className="inline-block bg-primary-100 text-primary-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {subtitle}
              </div>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {description}
            </p>

            {mission && (
              <div className="bg-primary-50 border-l-4 border-primary-600 p-4 mb-6">
                <p className="text-primary-900 font-medium italic">
                  "{mission}"
                </p>
              </div>
            )}

            {values && values.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Unsere Werte</h3>
                <div className="space-y-2">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {equipment && equipment.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Moderne Ausstattung</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {equipment.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <span className="text-primary-600">✓</span>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
