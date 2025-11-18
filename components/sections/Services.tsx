import { ServicesProps } from '@/types';
import { Activity, Heart, Stethoscope, GraduationCap, AlertCircle, Syringe, Users, Clock } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  'diabetes-typ-1': Syringe,
  'diabetes-typ-2': Activity,
  'schwangerschaftsdiabetes': Heart,
  'folgeerkrankungen': AlertCircle,
  'cgm-systeme': Activity,
  'insulinpumpen': Syringe,
  'schulungen': GraduationCap,
  'notfallmanagement': Stethoscope,
};

export default function Services({ title, subtitle, services, layout = 'grid' }: ServicesProps) {
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

        {/* Services Grid */}
        <div className={`grid ${layout === 'grid' ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2'} gap-6`}>
          {services.map((service) => {
            const Icon = iconMap[service.id] || Activity;
            return (
              <div
                key={service.id}
                className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100 hover:shadow-xl transition group"
              >
                <div className="bg-primary-600 text-white w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-700 transition">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                {service.details && service.details.length > 0 && (
                  <ul className="space-y-2">
                    {service.details.map((detail, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-primary-600 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
