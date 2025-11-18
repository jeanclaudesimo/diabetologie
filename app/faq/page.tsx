import Hero from '@/components/sections/Hero';
import FAQ from '@/components/sections/FAQ';
import Services from '@/components/sections/Services';
import Treatments from '@/components/sections/Treatments';
import Team from '@/components/sections/Team';
import Contact from '@/components/sections/Contact';
import { faqs } from '@/data/faq';
import { services } from '@/data/services';
import { treatments } from '@/data/treatments';
import { team } from '@/data/team';
import { practiceInfo } from '@/data/practice-info';

export const metadata = {
  title: 'FAQ - Häufige Fragen - Diabetologie Derschlag',
  description: 'Antworten auf die häufigsten Fragen zu Diabetes, Behandlung, unserer Praxis und Kosten. Diabetes Typ 1 & 2, CGM, Insulinpumpen und mehr.',
};

export default function FAQPage() {
  return (
    <>
      <Hero
        title="Häufig gestellte Fragen"
        subtitle="FAQ"
        description="Antworten auf die wichtigsten Fragen rund um Diabetes und unsere Behandlungen"
        primaryCTA={{
          text: 'Frage nicht dabei? Kontakt',
          href: '/kontakt'
        }}
        secondaryCTA={{
          text: 'Persönliche Beratung',
          href: '/kontakt'
        }}
        image="/images/praxis/praxis.jpeg"
      />

      <FAQ
        title="Alle häufigen Fragen im Überblick"
        subtitle="Finden Sie schnell die Antwort auf Ihre Frage"
        faqs={faqs}
      />

      <Services
        title="Mehr zu unseren Leistungen"
        subtitle="Detaillierte Informationen zu unseren Behandlungen"
        services={services.slice(0, 4)}
      />

      <Treatments
        title="Behandlungsmethoden erklärt"
        subtitle="So funktionieren moderne Diabetes-Therapien"
        treatments={treatments.slice(0, 3)}
      />

      <Team
        title="Fragen Sie unser Team"
        subtitle="Ihre Ansprechpartner für alle Fragen"
        members={team}
      />

      <Contact
        title="Haben Sie weitere Fragen?"
        subtitle="Kontaktieren Sie uns für eine persönliche Beratung"
        practiceInfo={practiceInfo}
        showMap={false}
      />
    </>
  );
}
