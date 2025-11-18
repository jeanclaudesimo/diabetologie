import Hero from '@/components/sections/Hero';
import News from '@/components/sections/News';
import Services from '@/components/sections/Services';
import Team from '@/components/sections/Team';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import { news } from '@/data/news';
import { services } from '@/data/services';
import { team } from '@/data/team';
import { practiceInfo } from '@/data/practice-info';

export const metadata = {
  title: 'Aktuelles & News - Diabetologie Derschlag',
  description: 'Aktuelle Informationen, News und Updates aus unserer Diabetologie-Praxis: Neue Behandlungsmethoden, Praxis-News und Fortbildungen.',
};

export default function AktuellesPage() {
  return (
    <>
      <Hero
        title="Aktuelles aus der Diabetologie"
        subtitle="News & Updates"
        description="Neueste Entwicklungen, Behandlungsmethoden und Praxis-News"
        primaryCTA={{
          text: 'Newsletter abonnieren',
          href: '/kontakt'
        }}
        secondaryCTA={{
          text: 'Kontakt',
          href: '/kontakt'
        }}
        image="/images/praxis/praxis-3.jpeg"
      />

      <News
        title="Aktuelle Meldungen"
        subtitle="Bleiben Sie auf dem Laufenden"
        articles={news}
      />

      <Services
        title="Neue Behandlungsmethoden"
        subtitle="Innovative Therapien in unserer Praxis"
        services={services.slice(4, 8)}
      />

      <Team
        title="Fortbildungen und Zertifizierungen"
        subtitle="Unser Team bildet sich kontinuierlich weiter"
        members={team}
      />

      <About
        title="Praxis-Updates"
        subtitle="Was gibt es Neues?"
        description="Wir entwickeln uns ständig weiter, um Ihnen die bestmögliche Betreuung zu bieten. Neue Geräte, erweiterte Öffnungszeiten, zusätzliche Schulungsangebote - hier erfahren Sie, was sich in unserer Praxis tut."
        values={[
          'Regelmäßige Investitionen in neue Technologie',
          'Kontinuierliche Fortbildung des Teams',
          'Erweiterung des Leistungsspektrums',
          'Verbesserung der Praxisabläufe',
          'Neue Kooperationen und Netzwerke',
          'Teilnahme an Qualitätszirkeln'
        ]}
        image="/images/praxis/praxis.jpeg"
      />

      <Contact
        title="Newsletter-Anmeldung"
        subtitle="Bleiben Sie informiert über Neuigkeiten aus unserer Praxis"
        practiceInfo={practiceInfo}
        showMap={false}
      />
    </>
  );
}
