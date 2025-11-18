import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'diabetes-typ-1',
    title: 'Diabetes Typ 1',
    description: 'Spezialisierte Betreuung und moderne Therapiekonzepte für Diabetes Typ 1 Patienten jeden Alters.',
    category: 'diabetes-types',
    details: [
      'Individuelle Insulintherapie-Anpassung',
      'CGM und Insulinpumpen-Betreuung',
      'Strukturierte Schulungen nach DDG',
      'Langzeitbetreuung und -monitoring'
    ]
  },
  {
    id: 'diabetes-typ-2',
    title: 'Diabetes Typ 2',
    description: 'Ganzheitliche Behandlung von Diabetes Typ 2 mit Fokus auf Lebensstil und medikamentöse Therapie.',
    category: 'diabetes-types',
    details: [
      'Ernährungsberatung und Lifestyle-Coaching',
      'Moderne Medikation (GLP-1, SGLT-2)',
      'Blutzucker-Selbstmanagement',
      'Prävention von Folgeerkrankungen'
    ]
  },
  {
    id: 'schwangerschaftsdiabetes',
    title: 'Schwangerschaftsdiabetes',
    description: 'Spezialisierte Betreuung während der Schwangerschaft für Mutter und Kind.',
    category: 'diabetes-types',
    details: [
      'Engmaschige Blutzuckerkontrolle',
      'Ernährungsberatung für Schwangere',
      'Insulintherapie bei Bedarf',
      'Zusammenarbeit mit Gynäkologen'
    ]
  },
  {
    id: 'folgeerkrankungen',
    title: 'Folgeerkrankungen',
    description: 'Früherkennung und Behandlung diabetischer Folgeerkrankungen.',
    category: 'complications',
    details: [
      'Neuropathie-Screening und Therapie',
      'Nephropathie-Überwachung',
      'Retinopathie-Vorsorge',
      'Diabetisches Fußsyndrom'
    ]
  },
  {
    id: 'cgm-systeme',
    title: 'CGM-Systeme',
    description: 'Kontinuierliche Glukosemessung für optimale Blutzuckerkontrolle.',
    category: 'therapies',
    details: [
      'Individuelle System-Auswahl',
      'Einstellung und Schulung',
      'Datenanalyse und Optimierung',
      'Kostenübernahme mit Krankenkassen'
    ]
  },
  {
    id: 'insulinpumpen',
    title: 'Insulinpumpen-Therapie',
    description: 'Moderne Pumpentherapie für präzise Insulinversorgung.',
    category: 'therapies',
    details: [
      'Pumpen-Auswahl und Einstellung',
      'Basalraten-Optimierung',
      'Bolus-Kalkulation',
      '24/7 technischer Support'
    ]
  },
  {
    id: 'schulungen',
    title: 'Patientenschulungen',
    description: 'Strukturierte Schulungen nach DDG-Standards für alle Diabetes-Typen.',
    category: 'education',
    details: [
      'Basis-Schulungen für Neudiagnosen',
      'Fortgeschrittenen-Kurse',
      'Insulinpumpen-Schulungen',
      'Angehörigen-Schulungen'
    ]
  },
  {
    id: 'notfallmanagement',
    title: 'Notfallmanagement',
    description: 'Schnelle Hilfe bei diabetischen Notfällen und Entgleisungen.',
    category: 'education',
    details: [
      'Hypoglykämie-Behandlung',
      'Ketoazidose-Prävention',
      'Notfall-Hotline',
      'Notfall-Schulungen'
    ]
  }
];
