import { StatsProps } from '@/types';
import { TrendingUp, Users, Award, Target } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  'Jahre Erfahrung': TrendingUp,
  'Zufriedene Patienten': Users,
  'DDG-Zertifiziert': Award,
  'Erfolgsrate': Target,
};

export default function Stats({ title, subtitle, stats }: StatsProps) {
  return (
    <section className="py-16 md:py-24 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-primary-200 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.label] || Award;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition"
              >
                <div className="flex justify-center mb-3">
                  <Icon size={32} className="text-primary-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-semibold text-primary-200 mb-1">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-xs text-primary-300 mt-2">
                    {stat.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
