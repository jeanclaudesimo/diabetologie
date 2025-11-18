import Link from 'next/link';
import { AlertTriangle, ExternalLink, Link2, FileWarning } from 'lucide-react';

export const metadata = {
  title: 'Haftungsausschluss - Diabetologie Derschlag',
  description: 'Haftungsausschluss und rechtliche Hinweise der Diabetologischen Schwerpunktpraxis Dr. Jürgen Grunwald.',
};

export default function HaftungsausschlussPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <AlertTriangle className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Haftungsausschluss</h1>
          </div>
          <p className="text-xl text-primary-100">
            Rechtliche Hinweise und Disclaimer
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">

          {/* Medical Disclaimer */}
          <section className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <div className="flex items-start gap-3 mb-4">
              <FileWarning className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <h2 className="text-2xl font-bold text-red-900">Wichtiger medizinischer Hinweis</h2>
            </div>
            <div className="space-y-3 text-red-900">
              <p className="font-semibold">
                Die Informationen auf dieser Website dienen ausschließlich zu Informationszwecken und ersetzen in
                keinem Fall eine persönliche Beratung, Untersuchung oder Diagnose durch einen approbierten Arzt.
              </p>
              <p>
                Die zur Verfügung gestellten Inhalte können und dürfen nicht zur Erstellung eigenständiger Diagnosen
                und/oder einer Eigenmedikation verwendet werden. Bitte beachten Sie auch den Haftungsausschluss sowie
                unsere Hinweise zu den Bildrechten.
              </p>
              <p className="font-semibold text-lg mt-4">
                Bei medizinischen Notfällen wählen Sie bitte den Notruf: 112
              </p>
            </div>
          </section>

          {/* Content Liability */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileWarning className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Haftung für Inhalte</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
                bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
                einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Insbesondere medizinische
                Informationen können sich durch neue wissenschaftliche Erkenntnisse ändern.
              </p>
            </div>
          </section>

          {/* Links Liability */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Link2 className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Haftung für Links</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p>
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar.
              </p>
              <p>
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>
          </section>

          {/* Copyright */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <ExternalLink className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Urheberrecht</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p>
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
              </p>
              <p>
                Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </p>
            </div>
          </section>

          {/* Information Quality */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Qualität der medizinischen Informationen</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Wir bemühen uns, die medizinischen Informationen auf dieser Website stets aktuell und wissenschaftlich
                fundiert zu halten. Die Informationen basieren auf:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Aktuellen medizinischen Leitlinien der Fachgesellschaften</li>
                <li>Wissenschaftlichen Studien und Publikationen</li>
                <li>Unserer langjährigen klinischen Erfahrung</li>
              </ul>
              <p className="mt-4">
                Dennoch können wir keine Garantie für die Vollständigkeit, Richtigkeit und Aktualität der bereitgestellten
                Informationen übernehmen. Medizinische Erkenntnisse unterliegen einem ständigen Wandel.
              </p>
            </div>
          </section>

          {/* Individual Treatment */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Individuelle Behandlung</h2>
            <div className="space-y-4 text-gray-700 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p>
                Jede medizinische Behandlung muss individuell auf den Patienten abgestimmt werden. Die auf dieser
                Website bereitgestellten Informationen sind allgemeiner Natur und können eine individuelle ärztliche
                Beratung nicht ersetzen.
              </p>
              <p>
                <span className="font-semibold">Bitte beachten Sie:</span> Ändern Sie niemals eigenmächtig Ihre
                Medikation oder Therapie. Wenden Sie sich bei Fragen immer an Ihren behandelnden Arzt oder an unsere
                Praxis.
              </p>
            </div>
          </section>

          {/* Technical Issues */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technische Verfügbarkeit</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Wir bemühen uns um eine möglichst unterbrechungsfreie Verfügbarkeit dieser Website. Dennoch können wir
                keine Garantie für die ständige Verfügbarkeit oder die Fehlerfreiheit übernehmen. Wartungsarbeiten,
                technische Probleme oder andere Umstände können zu vorübergehenden Ausfällen führen.
              </p>
              <p>
                Wir übernehmen keine Haftung für Schäden, die durch die Nutzung oder Nicht-Verfügbarkeit der Website
                entstehen.
              </p>
            </div>
          </section>

          {/* Contact for Issues */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Hinweise und Beschwerden</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                Sollten Sie Fehler auf unserer Website entdecken oder Fragen zu den Inhalten haben, kontaktieren Sie
                uns bitte:
              </p>
              <p>
                <span className="font-semibold">E-Mail: </span>
                <a href="mailto:info@diabetologie-derschlag.de" className="text-primary-600 hover:underline">
                  info@diabetologie-derschlag.de
                </a>
              </p>
              <p>
                <span className="font-semibold">Telefon: </span>
                <a href="tel:+4922611234" className="text-primary-600 hover:underline">
                  +49 2261 12345
                </a>
              </p>
            </div>
          </section>

          {/* Last Updated */}
          <section className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Stand dieses Haftungsausschlusses: </span>
              November 2025
            </p>
          </section>

          {/* Back Link */}
          <div className="pt-4">
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
