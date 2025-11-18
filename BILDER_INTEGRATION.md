# Team-Bilder Integration Anleitung

## 📸 Kostenlose Bildquellen

### Top 3 Empfehlungen:

1. **Unsplash** - https://unsplash.com/de/s/fotos/arzt
   - Hochqualitative, professionelle Bilder
   - Keine Namensnennung nötig
   - Kommerzielle Nutzung erlaubt

2. **Pexels** - https://www.pexels.com/de-de/suche/arzt/
   - 10.000+ Arztbilder
   - Kostenlose kommerzielle Nutzung
   - Einfacher Download

3. **Pixabay** - https://pixabay.com/de/images/search/arzt/
   - Große Auswahl
   - Lizenzfrei

## 🔍 Empfohlene Suchbegriffe:

Für die besten Ergebnisse suchen Sie nach:
- `doctor portrait professional`
- `female doctor smiling white coat`
- `male doctor professional portrait`
- `medical professional headshot`
- `nurse portrait professional`
- `diabetologist portrait`

## 📂 Schritt-für-Schritt Integration:

### 1. Bilder herunterladen

**Für jeden Team-Mitarbeiter:**
- Dr. Michael Weber (Mann, ca. 40-50 Jahre)
- Petra Schmidt (Frau, ca. 40-50 Jahre, Diabetesberaterin)
- Anna Hoffmann (Frau, ca. 30-40 Jahre, MFA)

**Empfohlene Kriterien:**
- Mindestgröße: 400x400px (besser 800x800px)
- Format: .webp oder .jpg
- Professionell aussehend
- Freundliches Lächeln
- Weißer Kittel oder professionelle Kleidung

### 2. Bilder optimieren (Optional)

**Online Tools:**
- https://squoosh.app/ - Bildkomprimierung
- https://www.remove.bg/ - Hintergrund entfernen
- https://tinypng.com/ - Komprimierung

**Empfohlene Größe:**
- Breite: 400-800px
- Höhe: 400-800px
- Format: WebP (kleinste Dateigröße)

### 3. Bilder speichern

```bash
# Im Projektverzeichnis:
cd /srv/diabetologie-derschlag

# Erstellen Sie einen Ordner für Team-Bilder:
mkdir -p public/images/team

# Kopieren Sie Ihre heruntergeladenen Bilder:
# public/images/team/dr-weber.webp
# public/images/team/petra-schmidt.webp
# public/images/team/anna-hoffmann.webp
```

### 4. Team-Daten aktualisieren

Öffnen Sie `data/team.ts` und fügen Sie die Bildpfade hinzu:

```typescript
// Beispiel für Dr. Weber:
{
  id: 'dr-weber',
  name: 'Dr. med. Michael Weber',
  // ... andere Felder ...
  image: '/images/team/dr-weber.webp',  // ← Hier Bildpfad einfügen
  // ...
}
```

### 5. Vollständiges Beispiel:

```typescript
export const team: TeamMember[] = [
  {
    id: 'dr-grunwald',
    name: 'Dr. med. Jürgen Grunwald',
    // ... (bereits vorhanden mit Bild)
    image: '/images/2023-08-22.webp',
  },
  {
    id: 'dr-weber',
    name: 'Dr. med. Michael Weber',
    title: 'Facharzt für Innere Medizin',
    role: 'Diabetologe DDG & Kardiologe',
    description: 'Spezialist für Diabetes und Herz-Kreislauf-Erkrankungen.',
    qualifications: [
      'Facharzt für Innere Medizin',
      'Diabetologie DDG',
      'Kardiologie',
      'Notfallmedizin'
    ],
    experience: '12 Jahre',
    image: '/images/team/dr-weber.webp',  // ← NEU
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
    description: 'Erfahrene Diabetesberaterin mit Expertise in Patientenschulung.',
    qualifications: [
      'Diabetesberaterin DDG',
      'Wundexpertin ICW',
      'Insulinpumpen-Trainerin',
      'CGM-Schulungsbeauftragte'
    ],
    experience: '18 Jahre',
    image: '/images/team/petra-schmidt.webp',  // ← NEU
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
    description: 'Erste Anlaufstelle für alle organisatorischen Fragen.',
    qualifications: [
      'Medizinische Fachangestellte',
      'Praxismanagement',
      'Qualitätsmanagement-Beauftragte'
    ],
    experience: '10 Jahre',
    image: '/images/team/anna-hoffmann.webp',  // ← NEU
    specializations: [
      'Terminkoordination',
      'Blutzuckermessung',
      'HbA1c-Schnelltests',
      'Patientenbetreuung'
    ]
  }
];
```

## 🎨 Bild-Tipps für beste Darstellung:

### Ideale Bilder:
- ✅ Freundliches, professionelles Lächeln
- ✅ Gute Beleuchtung
- ✅ Neutraler oder weißer Hintergrund
- ✅ Professionelle Kleidung (weißer Kittel)
- ✅ Kopf und Schultern sichtbar
- ✅ Blickkontakt zur Kamera

### Zu vermeiden:
- ❌ Unscharfe Bilder
- ❌ Zu dunkle Beleuchtung
- ❌ Ablenkende Hintergründe
- ❌ Zu kleine Auflösung (<400px)
- ❌ Unprofessionelle Posen

## 🔄 Server neu starten

Nach dem Hinzufügen der Bilder:

```bash
# Stoppen Sie den Server (Ctrl+C im Terminal)
# Starten Sie neu:
npm run dev
```

Die Bilder werden automatisch im Team-Bereich angezeigt!

## 📊 Checklist:

- [ ] Bilder von Unsplash/Pexels heruntergeladen
- [ ] Bilder optimiert (optional)
- [ ] Bilder nach `public/images/team/` kopiert
- [ ] `data/team.ts` aktualisiert mit Bildpfaden
- [ ] Server neu gestartet
- [ ] Website überprüft: http://localhost:3000

## 💡 Alternative: AI-Generierte Porträts

Falls Sie keine passenden Stock-Photos finden:

**This Person Does Not Exist:**
- https://thispersondoesnotexist.com/
- AI-generierte, realistische Gesichter
- Komplett kostenlos und lizenzfrei
- Einfach neu laden für neues Gesicht

**Avatar-Generatoren:**
- https://avatar.oxro.io/
- https://getavataaars.com/
- Stilisierte, professionelle Avatare

---

**Bei Fragen:** Die Team-Komponente zeigt automatisch Initialen an, wenn kein Bild vorhanden ist. Die Integration ist also optional!
