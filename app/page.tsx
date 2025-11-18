import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Stats from '@/components/sections/Stats';
import Team from '@/components/sections/Team';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import { services } from '@/data/services';
import { team } from '@/data/team';
import { testimonials } from '@/data/testimonials';
import { stats } from '@/data/stats';
import { practiceInfo } from '@/data/practice-info';

export default function HomePage() {
  return (
    <>
      <Hero
        title="Diabetologie Derschlag"
        subtitle="Ihre Spezialisten für Diabetes"
        description="Professionelle Betreuung von Diabetes-Patienten mit modernster Diagnostik und individueller Therapie in Gummersbach-Derschlag"
        primaryCTA={{
          text: 'Termin vereinbaren',
          href: '/kontakt'
        }}
        secondaryCTA={{
          text: 'Mehr erfahren',
          href: '/leistungen'
        }}
        highlights={[
          'DDG-zertifizierte Praxis seit 2018',
          'Moderne CGM & Insulinpumpen-Therapie',
          'Individuelle Betreuung & Schulungen',
          'Kurze Wartezeiten & flexible Termine'
        ]}
        image="/images/2023-08-22.webp"
      />

      <Services
        title="Unsere medizinischen Leistungen"
        subtitle="Umfassende Diabetesbetreuung von der Diagnose bis zur Langzeittherapie"
        services={services.slice(0, 8)}
      />

      <About
        title="Moderne Diabetologie in Derschlag"
        subtitle="Über uns"
        description="Seit 2018 betreuen wir Diabetes-Patienten in Gummersbach-Derschlag mit modernster Medizintechnik und einem ganzheitlichen Behandlungsansatz. Unsere DDG-zertifizierte Praxis steht für Qualität, Expertise und persönliche Betreuung."
        mission="Jedem Patienten zu einem besseren Leben mit Diabetes verhelfen"
        values={[
          'Individuelle und persönliche Betreuung',
          'Modernste Technologie und Behandlungsmethoden',
          'Ganzheitlicher Therapieansatz',
          'Kontinuierliche Fortbildung und Qualitätssicherung'
        ]}
        equipment={[
          'HbA1c-Schnelltest in der Praxis',
          'CGM-Systeme aller Hersteller',
          'Insulinpumpen-Service',
          'Moderne Diagnostik-Geräte',
          'Diabetiker-Fußambulanz',
          'Schulungsräume'
        ]}
        image="/images/praxis/praxis.jpeg"
      />

      <Stats
        title="Diabetologie Derschlag in Zahlen"
        subtitle="Vertrauen durch Erfahrung und Qualität"
        stats={stats}
      />

      <Team
        title="Unser erfahrenes Team"
        subtitle="Fachärzte und Spezialisten für Ihre Gesundheit"
        members={team}
      />

      <Gallery
        title="Unsere moderne Praxis"
        subtitle="Helle, freundliche Räume mit modernster Ausstattung für Ihr Wohlbefinden"
        images={[
          { src: '/images/praxis/praxis-3.jpeg', alt: 'Moderne Empfangshalle mit Team' },
          { src: '/images/praxis/praxis.jpeg', alt: 'Gemütlicher Wartebereich' },
          { src: '/images/praxis/praxis-2.jpeg', alt: 'Empfangsbereich' },
          { src: '/images/praxis/praxis-4.jpeg', alt: 'Praxisräume' },
          { src: '/images/praxis/praxis-5.jpeg', alt: 'Behandlungsraum' }
        ]}
      />

      <Testimonials
        title="Was unsere Patienten sagen"
        subtitle="Erfahrungen und Bewertungen unserer Patienten"
        testimonials={testimonials.slice(0, 6)}
      />

      <Contact
        title="Kontakt & Terminvereinbarung"
        subtitle="Wir sind für Sie da - vereinbaren Sie jetzt einen Termin"
        practiceInfo={practiceInfo}
        showMap={false}
      />
    </>
  );
}
