import Hero from '@/components/sections/Hero';
import Contact from '@/components/sections/Contact';
import Services from '@/components/sections/Services';
import Team from '@/components/sections/Team';
import About from '@/components/sections/About';
import FAQ from '@/components/sections/FAQ';
import { services } from '@/data/services';
import { team } from '@/data/team';
import { faqs } from '@/data/faq';
import { practiceInfo } from '@/data/practice-info';

export const metadata = {
  title: 'Kontakt & Termine - Diabetologie Derschlag',
  description: 'Kontaktieren Sie uns für einen Termin in unserer Diabetologie-Praxis in Gummersbach-Derschlag. Telefon, E-Mail oder Online-Terminbuchung.',
};

export default function KontaktPage() {
  return (
    <>
      <Hero
        title="Kontakt & Termine"
        subtitle="Wir sind für Sie da"
        description="Vereinbaren Sie einen Termin oder kontaktieren Sie uns bei Fragen. Wir freuen uns auf Sie!"
        highlights={[
          'Alle Kassen zugelassen',
          'Kurze Wartezeiten',
          'Notfall-Sprechstunde',
          'Flexible Terminvergabe'
        ]}
        image="/images/praxis/praxis-2.jpeg"
      />

      <Contact
        title="So erreichen Sie uns"
        subtitle="Terminvereinbarung und Kontakt"
        practiceInfo={practiceInfo}
        showMap={true}
      />

      <Services
        title="Wofür Sie uns kontaktieren können"
        subtitle="Unsere Leistungen im Überblick"
        services={services.slice(0, 4)}
      />

      <Team
        title="Ihre Ansprechpartner"
        subtitle="Unser Team steht Ihnen zur Verfügung"
        members={team}
      />

      <About
        title="So finden Sie uns"
        subtitle="Anfahrt & Parkmöglichkeiten"
        description="Unsere Praxis befindet sich in zentraler Lage in Gummersbach-Derschlag mit guter Anbindung an öffentliche Verkehrsmittel und ausreichend Parkplätzen direkt vor der Praxis."
        values={[
          'Zentrale Lage in Derschlag',
          'Kostenlose Parkplätze vor der Praxis',
          'Bushaltestelle in 2 Minuten Fußweg',
          'Barrierefrei zugänglich',
          'Aufzug vorhanden',
          'Behindertengerechte Toilette'
        ]}
        image="/images/praxis/praxis-5.jpeg"
      />

      <FAQ
        title="Häufige Fragen zur Terminvergabe"
        subtitle="Antworten auf die wichtigsten Fragen"
        faqs={faqs.filter(f => f.category === 'practice')}
      />
    </>
  );
}
