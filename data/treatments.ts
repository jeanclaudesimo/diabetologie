import { Treatment } from '@/types';

export const treatments: Treatment[] = [
  {
    id: 'cgm-therapy',
    title: 'Kontinuierliche Glukosemessung (CGM)',
    description: 'Moderne Sensor-Technologie für präzise Blutzuckerkontrolle rund um die Uhr.',
    longDescription: 'CGM-Systeme messen Ihren Glukosewert kontinuierlich und warnen Sie vor zu hohen oder zu niedrigen Werten. Dies ermöglicht eine deutlich bessere Diabetes-Einstellung und mehr Lebensqualität.',
    category: 'Technologie',
    benefits: [
      'Kontinuierliche Überwachung 24/7',
      'Frühwarnung bei Unterzucker',
      'Bessere HbA1c-Werte',
      'Mehr Sicherheit im Alltag',
      'Trendanzeige der Glukosewerte',
      'Datenauswertung per App'
    ],
    process: [
      'Beratung und System-Auswahl',
      'Kostenübernahme mit Krankenkasse klären',
      'Sensor-Anlage und Schulung',
      'Datenanalyse und Therapie-Optimierung'
    ]
  },
  {
    id: 'insulin-pump',
    title: 'Insulinpumpen-Therapie',
    description: 'Präzise Insulinversorgung durch moderne Pumpensysteme für mehr Flexibilität.',
    longDescription: 'Insulinpumpen geben kontinuierlich kleine Mengen Insulin ab und ermöglichen eine flexible Anpassung an Ihren individuellen Bedarf. Ideal für aktive Menschen mit wechselndem Tagesablauf.',
    category: 'Technologie',
    benefits: [
      'Präzise Insulindosierung',
      'Flexible Mahlzeitengestaltung',
      'Bessere Blutzuckerkontrolle',
      'Weniger Unterzuckerungen',
      'Automatische Basalraten-Anpassung',
      'Hybrid-Closed-Loop möglich'
    ],
    process: [
      'Eignungsprüfung und Beratung',
      'Pumpen-Auswahl nach Bedarf',
      'Intensiv-Schulung (3-5 Tage)',
      'Basalraten-Einstellung',
      'Regelmäßige Optimierung'
    ]
  },
  {
    id: 'structured-training',
    title: 'Strukturierte Patientenschulungen',
    description: 'DDG-zertifizierte Schulungsprogramme für alle Diabetes-Typen und Therapieformen.',
    longDescription: 'Unsere strukturierten Schulungen vermitteln Ihnen das nötige Wissen für einen sicheren Umgang mit Diabetes im Alltag. In kleinen Gruppen oder individuell lernen Sie, Ihren Diabetes selbstständig zu managen.',
    category: 'Schulung',
    benefits: [
      'Besseres Diabetes-Verständnis',
      'Sicherer Umgang im Alltag',
      'Notfall-Management',
      'Selbstständigkeit im Diabetes-Management',
      'Austausch mit anderen Betroffenen',
      'Kostenübernahme durch Krankenkasse'
    ],
    process: [
      'Anmeldung zur Schulung',
      'Basis-Schulung (5 Termine)',
      'Praktische Übungen',
      'Abschlussgespräch',
      'Auffrischungs-Kurse bei Bedarf'
    ]
  },
  {
    id: 'nutritional-counseling',
    title: 'Ernährungsberatung',
    description: 'Individuelle Ernährungskonzepte für eine optimale Diabetes-Einstellung.',
    longDescription: 'Eine ausgewogene Ernährung ist die Basis jeder Diabetes-Therapie. Unsere Ernährungsberatung hilft Ihnen, einen gesunden Lebensstil zu entwickeln, der zu Ihnen passt.',
    category: 'Beratung',
    benefits: [
      'Individueller Ernährungsplan',
      'Gewichtsmanagement',
      'Bessere Blutzuckerwerte',
      'Mehr Lebensqualität',
      'Alltagstaugliche Tipps',
      'Langfristige Begleitung'
    ],
    process: [
      'Ernährungs-Analyse',
      'Zielsetzung besprechen',
      'Individuellen Plan erstellen',
      'Umsetzung im Alltag',
      'Follow-up Termine'
    ]
  },
  {
    id: 'complication-screening',
    title: 'Folgeerkrankungen-Screening',
    description: 'Regelmäßige Vorsorgeuntersuchungen zur Früherkennung diabetischer Folgeerkrankungen.',
    longDescription: 'Durch regelmäßige Screenings können wir Folgeerkrankungen frühzeitig erkennen und behandeln. So bewahren wir Ihre Gesundheit und Lebensqualität langfristig.',
    category: 'Vorsorge',
    benefits: [
      'Früherkennung von Komplikationen',
      'Rechtzeitige Behandlung',
      'Erhalt der Lebensqualität',
      'Vermeidung schwerer Folgen',
      'Umfassende Untersuchung',
      'Dokumentation und Verlaufskontrolle'
    ],
    process: [
      'Jährliches Neuropathie-Screening',
      'Augen-Vorsorge Überweisung',
      'Nierenfunktion prüfen',
      'Gefäß-Check',
      'Fuß-Untersuchung'
    ]
  },
  {
    id: 'pregnancy-care',
    title: 'Schwangerschafts-Betreuung',
    description: 'Spezialisierte Betreuung bei Schwangerschaftsdiabetes und Diabetes in der Schwangerschaft.',
    longDescription: 'Schwangere Frauen mit Diabetes benötigen eine engmaschige Betreuung. Wir begleiten Sie durch die gesamte Schwangerschaft und sorgen für die Gesundheit von Mutter und Kind.',
    category: 'Spezialbetreuung',
    benefits: [
      'Engmaschige Kontrollen',
      'Optimale Blutzucker-Einstellung',
      'Sicherheit für Mutter und Kind',
      'Zusammenarbeit mit Gynäkologen',
      'Ernährungsberatung',
      'Nachsorge nach der Geburt'
    ],
    process: [
      'Erstgespräch und Diagnostik',
      'Wöchentliche Blutzucker-Kontrolle',
      'Ernährungsplan erstellen',
      'Insulintherapie bei Bedarf',
      'Abstimmung mit Gynäkologen',
      'Nachsorge nach Geburt'
    ]
  }
];
