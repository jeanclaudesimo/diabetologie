import Hero from '@/components/sections/Hero';
import Team from '@/components/sections/Team';
import About from '@/components/sections/About';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import { team } from '@/data/team';
import { stats } from '@/data/stats';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { practiceInfo } from '@/data/practice-info';

export const metadata = {
  title: 'Unser Team - Diabetologie Derschlag',
  description: 'Lernen Sie unser erfahrenes Team kennen: Fachärzte für Diabetologie, Diabetesberater und medizinisches Personal mit über 15 Jahren Erfahrung.',
};

export default function TeamPage() {
  return (
    <>
      <Hero
        title="Unser erfahrenes Diabetes-Team"
        subtitle="Das Team"
        description="Fachärzte und Spezialisten mit über 15 Jahren Erfahrung in der Diabetologie - Ihre Gesundheit in besten Händen"
        primaryCTA={{
          text: 'Beratung vereinbaren',
          href: '/kontakt'
        }}
        highlights={[
          'DDG-zertifizierte Diabetologen',
          'Spezialisierte Diabetesberater',
          'Kontinuierliche Fortbildung',
          'Persönliche und individuelle Betreuung'
        ]}
        image="/images/praxis/praxis-3.jpeg"
      />

      <Team
        title="Unsere Spezialisten"
        subtitle="Expertise und Erfahrung für Ihre Gesundheit"
        members={team}
      />

      <About
        title="Unsere Praxis-Philosophie"
        subtitle="Wie wir arbeiten"
        description="Wir glauben an eine ganzheitliche Betreuung, die über die reine Medikation hinausgeht. Unser Team nimmt sich Zeit für Sie, erklärt verständlich und begleitet Sie langfristig auf Ihrem Weg."
        mission="Jedem Patienten zu einem besseren und selbstbestimmteren Leben mit Diabetes verhelfen"
        values={[
          'Zeit und Aufmerksamkeit für jeden Patienten',
          'Verständliche Erklärungen ohne Fachchinesisch',
          'Gemeinsame Entscheidungsfindung',
          'Langfristige Begleitung statt schneller Lösungen',
          'Individuelle Therapie statt Schema F',
          'Moderne Technologie im Dienste des Menschen'
        ]}
        image="/images/praxis/praxis-4.jpeg"
      />

      <Stats
        title="Unsere Erfahrung in Zahlen"
        subtitle="Vertrauen Sie auf unsere Expertise"
        stats={stats}
      />

      <Services
        title="Spezialisierungen unseres Teams"
        subtitle="Unsere Fachgebiete im Überblick"
        services={services.slice(0, 4)}
      />

      <Testimonials
        title="Was Patienten über unser Team sagen"
        subtitle="Erfahrungen mit unserer Betreuung"
        testimonials={testimonials.slice(0, 6)}
      />

      <Contact
        title="Lernen Sie uns persönlich kennen"
        subtitle="Vereinbaren Sie einen unverbindlichen Kennenlerntermin"
        practiceInfo={practiceInfo}
        showMap={false}
      />
    </>
  );
}
