import Link from 'next/link';
import Image from 'next/image';
import { HeroProps } from '@/types';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  highlights,
  image
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            {subtitle && (
              <div className="inline-block bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {subtitle}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>
            {description && (
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                {description}
              </p>
            )}

            {/* Highlights */}
            {highlights && highlights.length > 0 && (
              <div className="mb-8 space-y-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition font-semibold text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  {primaryCTA.text}
                  <ArrowRight size={20} />
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition font-semibold text-center border-2 border-primary-600 flex items-center justify-center gap-2"
                >
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          </div>

          {/* Image/Illustration Placeholder */}
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-primary-200 to-primary-300 rounded-2xl aspect-square shadow-2xl flex items-center justify-center overflow-hidden">
              {image ? (
                <Image
                  src={image}
                  alt={title}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover rounded-2xl"
                  priority={true}
                />
              ) : (
                <div className="text-primary-600 text-6xl font-bold opacity-20">
                  DDG
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
