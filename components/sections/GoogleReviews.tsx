'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, CheckCircle, ExternalLink } from 'lucide-react';

interface GoogleReview {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

interface GoogleReviewsProps {
  title?: string;
  subtitle?: string;
  placeId?: string;
  businessName?: string;
}

export default function GoogleReviews({
  title = 'Google Bewertungen',
  subtitle = 'Das sagen unsere Patienten auf Google',
  placeId,
  businessName = 'Diabetologie Derschlag'
}: GoogleReviewsProps) {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadReviews() {
      try {
        setLoading(true);
        const query = placeId
          ? `placeId=${placeId}`
          : `query=${encodeURIComponent(businessName + ' Gummersbach')}`;

        const response = await fetch(`/api/google-reviews?${query}`);
        const data = await response.json();

        if (data.success) {
          setReviews(data.reviews);
        } else {
          setError(data.error || 'Fehler beim Laden der Bewertungen');
        }
      } catch (err) {
        setError('Fehler beim Laden der Bewertungen');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadReviews();
  }, [placeId, businessName]);

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || reviews.length === 0) {
    return (
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-gray-600">
              Bewertungen werden geladen oder sind momentan nicht verfügbar.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Berechne Durchschnittsbewertung
  const averageRating = (
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {title}
            </h2>
            <img
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="Google"
              className="h-8"
            />
          </div>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              {subtitle}
            </p>
          )}

          {/* Durchschnittsbewertung */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-5xl font-bold text-gray-900">{averageRating}</span>
              <div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={20}
                      className={
                        index < Math.round(parseFloat(averageRating))
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  {reviews.length} Bewertungen
                </div>
              </div>
            </div>
          </div>

          {/* Google Link */}
          <a
            href={`https://search.google.com/local/reviews?placeid=${placeId || ''}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            Alle Bewertungen auf Google ansehen
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review) => (
            <div
              key={review.id}
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
                    className={
                      index < review.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-4 leading-relaxed line-clamp-4">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <div className="font-semibold text-gray-900 flex items-center gap-2">
                    {review.name}
                    {review.verified && (
                      <CheckCircle size={16} className="text-green-500" />
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString('de-DE', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </div>
                </div>
                <img
                  src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                  alt="Google"
                  className="h-4 opacity-50"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
