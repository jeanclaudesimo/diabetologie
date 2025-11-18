import { PracticeInfo } from '@/types';

export const practiceInfo: PracticeInfo = {
  name: 'Diabetologische Schwerpunktpraxis Dr. Jürgen Grunwald',
  address: {
    street: 'Moltkestraße 10',
    city: 'Gummersbach-Derschlag',
    zip: '51647',
    country: 'Deutschland'
  },
  contact: {
    phone: '+49 2261 12345',
    emergency: '+49 2261 12345',
    email: 'info@diabetologie-derschlag.de',
    fax: '+49 2261 12346'
  },
  hours: {
    'Montag': '08:00 - 12:00, 14:00 - 18:00',
    'Dienstag': '08:00 - 12:00, 14:00 - 18:00',
    'Mittwoch': '08:00 - 12:00',
    'Donnerstag': '08:00 - 12:00, 14:00 - 18:00',
    'Freitag': '08:00 - 14:00',
    'Samstag': 'Geschlossen',
    'Sonntag': 'Geschlossen'
  },
  certifications: [
    'DDG-zertifizierte Praxis',
    'Qualitätszirkel Diabetologie',
    'Zertifizierte Insulinpumpen-Einstellung',
    'CGM-Spezialisierung'
  ],
  established: 2018
};
