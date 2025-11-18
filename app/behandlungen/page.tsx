import Hero from '@/components/sections/Hero';
import Treatments from '@/components/sections/Treatments';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Team from '@/components/sections/Team';
import Stats from '@/components/sections/Stats';
import Contact from '@/components/sections/Contact';
import { treatments } from '@/data/treatments';
import { services } from '@/data/services';
import { team } from '@/data/team';
import { stats } from '@/data/stats';
import { practiceInfo } from '@/data/practice-info';

export const metadata = {
  title: 'Behandlungen - Diabetologie Derschlag',
  description: 'Moderne Diabetes-Therapien: CGM-Systeme, Insulinpumpen, strukturierte Schulungen, Ernährungsberatung und Folgeerkrankungen-Screening.',
};

export default function BehandlungenPage() {
  return (
    <>
      <Hero
        title="Moderne Diabetes-Therapien"
        subtitle="Unsere Behandlungen"
        description="Individuell angepasste Behandlungskonzepte mit neuester medizinischer Technologie für ein besseres Leben mit Diabetes"
        primaryCTA={{
          text: 'Behandlung besprechen',
          href: '/kontakt'
        }}
        secondaryCTA={{
          text: 'Mehr zu Leistungen',
          href: '/leistungen'
        }}
        highlights={[
          'Moderne CGM-Systeme & Insulinpumpen',
          'Hybrid-Closed-Loop-Therapie',
          'Strukturierte DDG-Schulungen',
          'Individuelle Therapieanpassung'
        ]}
        image="/images/praxis/praxis-5.jpeg"
      />

      <Treatments
        title="Unsere Behandlungsmethoden"
        subtitle="Innovative Therapien für optimale Blutzuckerkontrolle"
        treatments={treatments}
      />

      <Services
        title="Unser Behandlungsspektrum"
        subtitle="Von der Basistherapie bis zur High-Tech-Lösung"
        services={services}
        layout="list"
      />

      <About
        title="Individuelle Therapiekonzepte"
        subtitle="Ihre Behandlung, Ihr Weg"
        description="Jeder Mensch mit Diabetes ist einzigartig. Deshalb entwickeln wir für jeden Patienten ein individuelles Behandlungskonzept, das zu seinem Leben, seinen Zielen und seinen Möglichkeiten passt."
        values={[
          'Ausführliche Erstanamnese und Zielbestimmung',
          'Gemeinsame Therapieplanung',
          'Regelmäßige Verlaufskontrollen',
          'Flexible Anpassung bei Veränderungen',
          'Integration moderner Technologien',
          'Langfristige Begleitung'
        ]}
        image="/images/praxis/praxis-2.jpeg"
      />

      <Team
        title="Unser Behandlungsteam"
        subtitle="Experten für Ihre Diabetes-Therapie"
        members={team}
      />

      <Stats
        title="Behandlungserfolge"
        subtitle="Unsere Ergebnisse sprechen für sich"
        stats={stats}
      />

      <Contact
        title="Behandlungsberatung vereinbaren"
        subtitle="Besprechen Sie Ihre individuelle Therapie mit unseren Spezialisten"
        practiceInfo={practiceInfo}
        showMap={false}
      />
    </>
  );
}
