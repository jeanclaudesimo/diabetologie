import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Treatments from '@/components/sections/Treatments';
import About from '@/components/sections/About';
import Team from '@/components/sections/Team';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import { services } from '@/data/services';
import { treatments } from '@/data/treatments';
import { team } from '@/data/team';
import { faqs } from '@/data/faq';
import { practiceInfo } from '@/data/practice-info';

export const metadata = {
  title: 'Leistungen - Diabetologie Derschlag',
  description: 'Umfassende Diabetesbetreuung: Diabetes Typ 1 & 2, CGM-Systeme, Insulinpumpen, Schulungen und Folgeerkrankungen-Screening in Gummersbach-Derschlag.',
};

export default function LeistungenPage() {
  return (
    <>
      <Hero
        title="Umfassende Diabetesbetreuung"
        subtitle="Unsere Leistungen"
        description="Von der Erstdiagnose bis zur Langzeittherapie - wir begleiten Sie auf Ihrem Weg mit modernster Medizintechnik und individueller Betreuung"
        primaryCTA={{
          text: 'Beratungstermin vereinbaren',
          href: '/kontakt'
        }}
        secondaryCTA={{
          text: 'FAQ',
          href: '/faq'
        }}
        image="/images/praxis/praxis-4.jpeg"
      />

      <Services
        title="Unsere medizinischen Leistungen"
        subtitle="Spezialisierte Diabetes-Behandlung für alle Diabetes-Typen"
        services={services}
        layout="grid"
      />

      <Treatments
        title="Moderne Behandlungsmethoden"
        subtitle="Innovative Therapien für ein besseres Leben mit Diabetes"
        treatments={treatments.slice(0, 3)}
      />

      <About
        title="Moderne medizinische Ausstattung"
        subtitle="Technologie für Ihre Gesundheit"
        description="Unsere Praxis ist mit modernster Medizintechnik ausgestattet, um Ihnen die bestmögliche Diagnose und Therapie zu bieten. Von CGM-Systemen bis hin zu Insulinpumpen - wir nutzen innovative Technologien für Ihre Gesundheit."
        equipment={[
          'HbA1c-Schnelltest (Ergebnis in 6 Minuten)',
          'CGM-Systeme (Dexcom, FreeStyle Libre, Medtronic)',
          'Insulinpumpen-Einstellung und -Service',
          'Moderne Diagnostik-Geräte',
          'Diabetische Fußambulanz',
          'Schulungsräume mit Multimedia'
        ]}
        image="/images/praxis/praxis.jpeg"
      />

      <Team
        title="Unsere Spezialisten"
        subtitle="Erfahrene Fachärzte und Diabetesberater für Ihre Gesundheit"
        members={team}
      />

      <FAQ
        title="Häufig gestellte Fragen zu unseren Leistungen"
        subtitle="Antworten auf die wichtigsten Fragen zu unseren Behandlungen"
        faqs={faqs.filter(f => f.category === 'treatment' || f.category === 'costs')}
      />

      <Contact
        title="Beratungstermin vereinbaren"
        subtitle="Lassen Sie sich von unseren Spezialisten beraten"
        practiceInfo={practiceInfo}
        showMap={false}
      />
    </>
  );
}
