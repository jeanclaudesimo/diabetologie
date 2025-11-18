import { TeamMember } from '@/types';

export const team: TeamMember[] = [
  {
    id: 'dr-grunwald',
    name: 'Dr. med. Jürgen Grunwald',
    title: 'Facharzt für Innere Medizin und Allgemeinmedizin',
    role: 'Praxisinhaber & Diabetologe DDG',
    description: 'Erfahrener Diabetologe und Gesundheitsökonom mit Schwerpunkt auf individualisierte, kompetente und persönliche Betreuung bei Stoffwechselerkrankungen.',
    qualifications: [
      'Facharzt für Innere Medizin und Allgemeinmedizin',
      'Diabetologie DDG',
      'Dipl. oec. med. (Gesundheitsökonomie)',
      'Ernährungsdiagnostiker ERPSE',
      'Notfallmedizin'
    ],
    experience: '20+ Jahre',
    image: '/images/2023-08-22.webp',
    specializations: [
      'Diabetes Typ 1, 2, 3 & Gestationsdiabetes',
      'Insulinpumpen-Therapie & ICT',
      'CGM-Systeme & Sensorgestützte Überwachung',
      'Diabetisches Fußsyndrom',
      'Disease Management Programme (DMP)',
      'Ernährungs- und Lebensstilberatung'
    ]
  },
  {
    id: 'dr-weber',
    name: 'Dr. med. Michael Weber',
    title: 'Facharzt für Innere Medizin',
    role: 'Diabetologe DDG & Kardiologe',
    description: 'Spezialist für Diabetes und Herz-Kreislauf-Erkrankungen mit ganzheitlichem Behandlungsansatz.',
    qualifications: [
      'Facharzt für Innere Medizin',
      'Diabetologie DDG',
      'Kardiologie',
      'Notfallmedizin'
    ],
    experience: '12 Jahre',
    specializations: [
      'Diabetes Typ 2',
      'Diabetische Folgeerkrankungen',
      'Kardiovaskuläre Risiken',
      'Hypertonie'
    ]
  },
  {
    id: 'petra-schmidt',
    name: 'Petra Schmidt',
    title: 'Diabetesberaterin DDG',
    role: 'Leitende Diabetesberaterin',
    description: 'Erfahrene Diabetesberaterin mit Expertise in Patientenschulung und Pumpentherapie.',
    qualifications: [
      'Diabetesberaterin DDG',
      'Wundexpertin ICW',
      'Insulinpumpen-Trainerin',
      'CGM-Schulungsbeauftragte'
    ],
    experience: '18 Jahre',
    image: '/images/team/petra-schmidt.jpg',
    specializations: [
      'Patientenschulungen',
      'Insulinpumpen-Einstellung',
      'Ernährungsberatung',
      'Diabetisches Fußsyndrom'
    ]
  },
  {
    id: 'anna-hoffmann',
    name: 'Anna Hoffmann',
    title: 'Medizinische Fachangestellte',
    role: 'Praxismanagerin',
    description: 'Erste Anlaufstelle für alle organisatorischen Fragen und Terminkoordination.',
    qualifications: [
      'Medizinische Fachangestellte',
      'Praxismanagement',
      'Qualitätsmanagement-Beauftragte'
    ],
    experience: '10 Jahre',
    image: '/images/team/anna-hoffmann.jpg',
    specializations: [
      'Terminkoordination',
      'Blutzuckermessung',
      'HbA1c-Schnelltests',
      'Patientenbetreuung'
    ]
  }
];
