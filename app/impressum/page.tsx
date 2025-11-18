import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Impressum - Diabetologie Derschlag',
  description: 'Impressum und rechtliche Angaben der Diabetologischen Schwerpunktpraxis Dr. Jürgen Grunwald in Gummersbach-Derschlag.',
};

export default function ImpressumPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Impressum</h1>
          <p className="text-xl text-primary-100">
            Angaben gemäß § 5 TMG
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Praxis Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Praxisanschrift</h2>
            <div className="space-y-3 text-gray-700">
              <p className="font-semibold text-lg">
                Diabetologische Schwerpunktpraxis Dr. Jürgen Grunwald
              </p>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <p>Moltkestraße 10</p>
                  <p>51647 Gummersbach-Derschlag</p>
                  <p>Deutschland</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontakt</h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Telefon: </span>
                  <a href="tel:+4922611234" className="text-primary-600 hover:underline">
                    +49 2261 12345
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Fax: </span>
                  <span>+49 2261 12346</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <div>
                  <span className="font-semibold">E-Mail: </span>
                  <a href="mailto:info@diabetologie-derschlag.de" className="text-primary-600 hover:underline">
                    info@diabetologie-derschlag.de
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Berufsbezeichnung</h2>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Berufsbezeichnung: </span>
                Facharzt für Innere Medizin, Diabetologe DDG
              </p>
              <p>
                <span className="font-semibold">Verliehen durch: </span>
                Bundesrepublik Deutschland
              </p>
            </div>
          </section>

          {/* Regulatory Authority */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Zuständige Aufsichtsbehörde</h2>
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">Ärztekammer Nordrhein</p>
              <p>Tersteegenstraße 9</p>
              <p>40474 Düsseldorf</p>
              <p>
                <span className="font-semibold">Website: </span>
                <a href="https://www.aekno.de" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                  www.aekno.de
                </a>
              </p>
            </div>
          </section>

          {/* Professional Regulations */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Berufsrechtliche Regelungen</h2>
            <div className="space-y-2 text-gray-700">
              <p>Es gelten folgende berufsrechtliche Regelungen:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Berufsordnung für die nordrheinischen Ärztinnen und Ärzte</li>
                <li>Heilberufsgesetz NRW</li>
                <li>Gebührenordnung für Ärzte (GOÄ)</li>
              </ul>
              <p className="mt-4">
                <span className="font-semibold">Einsehbar unter: </span>
                <a href="https://www.aekno.de" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                  www.aekno.de
                </a>
              </p>
            </div>
          </section>

          {/* Insurance */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Berufshaftpflichtversicherung</h2>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Name und Sitz des Versicherers: </span>
                <br />
                Continentale Sachversicherung AG
                <br />
                Ruhrallee 92
                <br />
                44139 Dortmund
              </p>
              <p>
                <span className="font-semibold">Geltungsbereich: </span>
                Deutschland / Weltweit
              </p>
            </div>
          </section>

          {/* Responsible for Content */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Verantwortlich für den Inhalt</h2>
            <div className="space-y-2 text-gray-700">
              <p>
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
              </p>
              <p className="font-semibold">
                Dr. med. Jürgen Grunwald
                <br />
                Moltkestraße 10
                <br />
                51647 Gummersbach-Derschlag
              </p>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Streitschlichtung</h2>
            <div className="space-y-2 text-gray-700">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              </p>
              <p>
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="mt-4">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

          {/* Copyright */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Urheberrecht</h2>
            <div className="space-y-2 text-gray-700">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
                nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
                Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
                aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </section>

          {/* Back Link */}
          <div className="pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
