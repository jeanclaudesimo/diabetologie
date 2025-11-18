import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Praxis Info */}
          <div>
            <h3 className="text-xl font-bold text-primary-400 mb-4">
              Diabetologie Derschlag
            </h3>
            <p className="text-gray-400 mb-4">
              Ihre Spezialisten für Diabetes und Stoffwechselerkrankungen in Gummersbach-Derschlag.
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div>
                  Moltkestraße 10<br />
                  51647 Gummersbach-Derschlag
                </div>
              </div>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+4922611234" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                <Phone size={16} />
                <span>+49 2261 12345</span>
              </a>
              <a href="mailto:info@diabetologie-derschlag.de" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                <Mail size={16} />
                <span>info@diabetologie-derschlag.de</span>
              </a>
              <div className="flex items-start gap-2 text-gray-400 mt-2">
                <Clock size={16} className="mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Sprechzeiten:</div>
                  <div>Mo, Di, Do: 08:00 - 18:00</div>
                  <div>Mi: 08:00 - 12:00</div>
                  <div>Fr: 08:00 - 14:00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Schnellzugriff</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/leistungen" className="text-gray-400 hover:text-white transition">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/behandlungen" className="text-gray-400 hover:text-white transition">
                  Behandlungen
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white transition">
                  Unser Team
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/aktuelles" className="text-gray-400 hover:text-white transition">
                  Aktuelles
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-400 hover:text-white transition">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Zertifizierungen */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Zertifizierungen</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">✓</span>
                <span>DDG-zertifizierte Praxis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">✓</span>
                <span>Qualitätszirkel Diabetologie</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">✓</span>
                <span>Insulinpumpen-Spezialisierung</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">✓</span>
                <span>CGM-Expertise</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-800">
              <p className="text-xs text-gray-500">
                Seit 2018 in Gummersbach-Derschlag
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              &copy; {currentYear} Diabetologie Derschlag. Alle Rechte vorbehalten.
            </div>
            <div className="flex gap-6">
              <Link href="/impressum" className="hover:text-white transition">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-white transition">
                Datenschutz
              </Link>
              <Link href="/haftungsausschluss" className="hover:text-white transition">
                Haftungsausschluss
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Medizinischer Disclaimer */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-gray-500 text-center">
            <span className="font-semibold text-red-400">Wichtiger Hinweis: </span>
            Diese Website ersetzt keine ärztliche Beratung. Bei medizinischen Notfällen wählen Sie bitte den Notruf 112.
          </p>
        </div>
      </div>
    </footer>
  );
}
