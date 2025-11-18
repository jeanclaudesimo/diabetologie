import { NewsProps } from '@/types';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const categoryColors = {
  medical: 'bg-primary-100 text-primary-800',
  practice: 'bg-green-100 text-green-800',
  education: 'bg-purple-100 text-purple-800'
};

const categoryLabels = {
  medical: 'Medizin',
  practice: 'Praxis',
  education: 'Schulung'
};

export default function News({ title, subtitle, articles }: NewsProps) {
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

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition group"
            >
              {/* Image */}
              <div className="bg-gradient-to-br from-primary-200 to-primary-300 aspect-video flex items-center justify-center">
                {article.image ? (
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-primary-600 text-4xl font-bold opacity-20">
                    News
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category & Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[article.category]}`}>
                    {categoryLabels[article.category]}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar size={14} />
                    {new Date(article.date).toLocaleDateString('de-DE', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric'
                    })}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Author */}
                {article.author && (
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                )}

                {/* Read More Link */}
                <Link
                  href={`/aktuelles/${article.id}`}
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
                >
                  Weiterlesen
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/aktuelles"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
          >
            Alle News anzeigen
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
