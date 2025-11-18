import Link from 'next/link';
import { Shield, Lock, Eye, Database, Mail, FileText } from 'lucide-react';

export const metadata = {
  title: 'Datenschutzerklärung - Diabetologie Derschlag',
  description: 'Datenschutzerklärung gemäß DSGVO der Diabetologischen Schwerpunktpraxis Dr. Jürgen Grunwald.',
};

export default function DatenschutzPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Datenschutzerklärung</h1>
          </div>
          <p className="text-xl text-primary-100">
            Informationen gemäß Art. 13, 14 und 21 DSGVO
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">

          {/* Introduction */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Allgemeine Hinweise</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können.
              </p>
              <p>
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
            </div>
          </section>

          {/* Responsible Party */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Verantwortliche Stelle</h2>
            <div className="space-y-2 text-gray-700">
              <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-semibold">Diabetologische Schwerpunktpraxis Dr. Jürgen Grunwald</p>
                <p>Moltkestraße 10</p>
                <p>51647 Gummersbach-Derschlag</p>
                <p className="mt-2">
                  <span className="font-semibold">Telefon: </span>
                  <a href="tel:+4922611234" className="text-primary-600 hover:underline">+49 2261 12345</a>
                </p>
                <p>
                  <span className="font-semibold">E-Mail: </span>
                  <a href="mailto:info@diabetologie-derschlag.de" className="text-primary-600 hover:underline">
                    info@diabetologie-derschlag.de
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Data Collection */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Datenerfassung auf dieser Website</h2>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Cookies</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                Unsere Internetseiten verwenden Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät
                gespeichert werden und die Ihr Browser speichert. Cookies richten auf Ihrem Rechner keinen Schaden an
                und enthalten keine Viren.
              </p>
              <p>
                Wir verwenden folgende Cookie-Arten:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <span className="font-semibold">Notwendige Cookies:</span> Diese Cookies sind für den Betrieb der
                  Website erforderlich und können nicht deaktiviert werden.
                </li>
                <li>
                  <span className="font-semibold">Funktionale Cookies:</span> Diese Cookies ermöglichen erweiterte
                  Funktionalitäten und werden nur mit Ihrer Zustimmung gesetzt.
                </li>
                <li>
                  <span className="font-semibold">Analyse Cookies:</span> Diese helfen uns, die Website zu verbessern,
                  und werden nur mit Ihrer Zustimmung gesetzt.
                </li>
              </ul>
              <p className="mt-4">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
                Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell
                ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Server-Log-Dateien</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
                die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mt-4">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser
                Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
                Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen
                die Server-Log-Files erfasst werden.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Kontaktformular</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen bei uns gespeichert.
              </p>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
                mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an
                der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </div>
          </section>

          {/* Patient Data */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Patientendaten</h2>
            </div>
            <div className="space-y-3 text-gray-700 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="font-semibold text-blue-900">Besondere Hinweise zum Umgang mit Gesundheitsdaten:</p>
              <p>
                Die Verarbeitung von Patientendaten (Gesundheitsdaten) erfolgt auf Grundlage von Art. 9 Abs. 2 lit. h DSGVO
                i.V.m. § 22 Abs. 1 Nr. 1 lit. b BDSG zum Zwecke der Gesundheitsversorgung und Behandlung. Die Verarbeitung
                ist für die Erbringung der medizinischen Versorgung erforderlich.
              </p>
              <p>
                Wir speichern und verarbeiten Ihre Gesundheitsdaten ausschließlich zum Zweck Ihrer medizinischen Behandlung
                und Betreuung. Die Daten werden streng vertraulich behandelt und unterliegen der ärztlichen Schweigepflicht.
              </p>
              <p>
                Die gesetzlichen Aufbewahrungsfristen für Patientenunterlagen betragen 10 Jahre nach Abschluss der Behandlung.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Ihre Rechte</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <span className="font-semibold">Recht auf Auskunft:</span> Sie haben das Recht, Auskunft über Ihre
                  bei uns gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO).
                </li>
                <li>
                  <span className="font-semibold">Recht auf Berichtigung:</span> Sie haben das Recht, die Berichtigung
                  unrichtiger Daten zu verlangen (Art. 16 DSGVO).
                </li>
                <li>
                  <span className="font-semibold">Recht auf Löschung:</span> Sie haben das Recht, die Löschung Ihrer
                  Daten zu verlangen (Art. 17 DSGVO), soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                </li>
                <li>
                  <span className="font-semibold">Recht auf Einschränkung der Verarbeitung:</span> Sie haben das Recht,
                  die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO).
                </li>
                <li>
                  <span className="font-semibold">Recht auf Datenübertragbarkeit:</span> Sie haben das Recht, Ihre Daten
                  in einem strukturierten Format zu erhalten (Art. 20 DSGVO).
                </li>
                <li>
                  <span className="font-semibold">Widerspruchsrecht:</span> Sie haben das Recht, der Verarbeitung Ihrer
                  Daten zu widersprechen (Art. 21 DSGVO).
                </li>
                <li>
                  <span className="font-semibold">Recht auf Beschwerde:</span> Sie haben das Recht, sich bei einer
                  Aufsichtsbehörde zu beschweren.
                </li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-semibold">Zuständige Aufsichtsbehörde:</p>
                <p>Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen</p>
                <p>Kavalleriestraße 2-4</p>
                <p>40213 Düsseldorf</p>
                <p className="mt-2">
                  <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer"
                     className="text-primary-600 hover:underline">
                    www.ldi.nrw.de
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* SSL Encryption */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">SSL- bzw. TLS-Verschlüsselung</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
                Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine
                verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf
                "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p>
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln,
                nicht von Dritten mitgelesen werden.
              </p>
            </div>
          </section>

          {/* Third Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Externe Dienste</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                Diese Website nutzt keine externen Analyse- oder Marketing-Dienste. Es werden keine Daten an Dritte
                weitergegeben, außer dies ist zur Vertragserfüllung erforderlich oder gesetzlich vorgeschrieben.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Fragen zum Datenschutz</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>
                Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt
                an die für den Datenschutz verantwortliche Person in unserer Praxis:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p>
                  <span className="font-semibold">E-Mail: </span>
                  <a href="mailto:datenschutz@diabetologie-derschlag.de" className="text-primary-600 hover:underline">
                    datenschutz@diabetologie-derschlag.de
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <section className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Stand dieser Datenschutzerklärung: </span>
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
