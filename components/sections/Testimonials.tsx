import { TestimonialsProps } from '@/types';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function Testimonials({ title, subtitle, testimonials }: TestimonialsProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition"
            >
              {/* Quote Icon */}
              <div className="text-primary-200 mb-4">
                <Quote size={32} fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className={index < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Treatment Tag */}
              {testimonial.treatment && (
                <div className="mb-4">
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-medium">
                    {testimonial.treatment}
                  </span>
                </div>
              )}

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <div className="font-semibold text-gray-900 flex items-center gap-2">
                    {testimonial.name}
                    {testimonial.verified && (
                      <CheckCircle size={16} className="text-green-500" />
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(testimonial.date).toLocaleDateString('de-DE', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
