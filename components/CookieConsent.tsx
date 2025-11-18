'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X, Settings, CheckCircle2 } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    functional: false,
    analytics: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay to ensure page is loaded
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    const consentData = {
      timestamp: new Date().toISOString(),
      preferences: prefs,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);

    // Here you would typically initialize your analytics/tracking scripts
    // based on the user's preferences
    if (prefs.analytics) {
      // Initialize analytics
      console.log('Analytics cookies accepted');
    }
    if (prefs.functional) {
      // Initialize functional cookies
      console.log('Functional cookies accepted');
    }
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
    };
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    const necessaryOnly: CookiePreferences = {
      necessary: true,
      functional: false,
      analytics: false,
    };
    savePreferences(necessaryOnly);
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl border border-gray-200">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <Cookie className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    Cookie-Einstellungen
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base">
                    Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten.
                    Einige sind notwendig, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern.
                  </p>
                </div>
              </div>
              <button
                onClick={acceptNecessary}
                className="text-gray-400 hover:text-gray-600 transition flex-shrink-0"
                aria-label="Nur notwendige Cookies"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Cookie Details (Collapsible) */}
          {showDetails && (
            <div className="p-6 border-b border-gray-200 space-y-4 bg-gray-50">
              {/* Necessary Cookies */}
              <div className="flex items-start gap-4">
                <div className="flex items-center h-6">
                  <input
                    type="checkbox"
                    id="necessary"
                    checked={true}
                    disabled
                    className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="necessary" className="font-semibold text-gray-900 flex items-center gap-2">
                    Notwendige Cookies
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                      Immer aktiv
                    </span>
                  </label>
                  <p className="text-sm text-gray-600 mt-1">
                    Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich und
                    können nicht deaktiviert werden. Sie speichern keine personenbezogenen Daten.
                  </p>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="flex items-start gap-4">
                <div className="flex items-center h-6">
                  <input
                    type="checkbox"
                    id="functional"
                    checked={preferences.functional}
                    onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                    className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="functional" className="font-semibold text-gray-900 cursor-pointer">
                    Funktionale Cookies
                  </label>
                  <p className="text-sm text-gray-600 mt-1">
                    Diese Cookies ermöglichen erweiterte Funktionen wie gespeicherte Präferenzen und
                    verbessern Ihre Benutzererfahrung.
                  </p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start gap-4">
                <div className="flex items-center h-6">
                  <input
                    type="checkbox"
                    id="analytics"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="analytics" className="font-semibold text-gray-900 cursor-pointer">
                    Analyse Cookies
                  </label>
                  <p className="text-sm text-gray-600 mt-1">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                    Alle Informationen werden anonym erfasst.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="p-6 bg-gray-50">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition font-semibold"
              >
                <Settings className="w-5 h-5" />
                {showDetails ? 'Details ausblenden' : 'Einstellungen anpassen'}
              </button>

              {showDetails ? (
                <button
                  onClick={saveCustomPreferences}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-semibold flex-1"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Auswahl speichern
                </button>
              ) : (
                <>
                  <button
                    onClick={acceptNecessary}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition font-semibold"
                  >
                    Nur Notwendige
                  </button>
                  <button
                    onClick={acceptAll}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-semibold flex-1"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    Alle akzeptieren
                  </button>
                </>
              )}
            </div>

            {/* Privacy Policy Link */}
            <div className="mt-4 text-center text-sm text-gray-600">
              Weitere Informationen finden Sie in unserer{' '}
              <Link href="/datenschutz" className="text-primary-600 hover:underline font-semibold">
                Datenschutzerklärung
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
