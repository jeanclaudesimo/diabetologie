import { TeamProps } from '@/types';
import { Award, Clock } from 'lucide-react';
import Image from 'next/image';

export default function Team({ title, subtitle, members }: TeamProps) {
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

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100 overflow-hidden hover:shadow-xl transition"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex gap-4 mb-4">
                  <div className="bg-gradient-to-br from-primary-200 to-primary-300 w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden shadow-lg">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                        priority={true}
                      />
                    ) : (
                      <span className="text-primary-900 font-bold text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">
                      {member.title}
                    </p>
                    <p className="text-sm text-primary-600 font-semibold">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4">
                  {member.description}
                </p>

                {/* Experience */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Clock size={16} className="text-primary-600" />
                  <span>{member.experience} Erfahrung</span>
                </div>

                {/* Qualifications */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Award size={16} className="text-primary-600" />
                    Qualifikationen
                  </h4>
                  <div className="space-y-1">
                    {member.qualifications.map((qual, index) => (
                      <div key={index} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-primary-600 mt-1">•</span>
                        <span>{qual}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specializations */}
                {member.specializations && member.specializations.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Spezialisierungen
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specializations.map((spec, index) => (
                        <span
                          key={index}
                          className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
