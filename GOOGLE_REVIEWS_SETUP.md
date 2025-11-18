# Google Reviews Integration - Setup Anleitung

## 📋 Schritt-für-Schritt Anleitung

### 1. Google Places API Key erstellen

1. Gehen Sie zu: https://console.cloud.google.com/
2. Erstellen Sie ein neues Projekt oder wählen Sie ein bestehendes
3. Aktivieren Sie folgende APIs:
   - **Places API**
   - **Maps JavaScript API** (für die Karte)
4. Erstellen Sie einen API Key unter "APIs & Services" → "Credentials"
5. Beschränken Sie den Key auf Ihre Domain (Sicherheit!)

### 2. Place ID Ihrer Praxis finden

**Option A - Über Google:**
1. Suchen Sie Ihre Praxis auf Google Maps
2. Klicken Sie auf "Teilen" → "Link kopieren"
3. Die Place ID ist im URL enthalten

**Option B - Über das Tool:**
1. Besuchen Sie: https://developers.google.com/maps/documentation/places/web-service/place-id
2. Suchen Sie nach Ihrer Praxis
3. Kopieren Sie die Place ID

**Beispiel Place ID:** `ChIJN1t_tDeuEmsRUsoyG83frY4`

### 3. Environment Variables einrichten

Erstellen Sie eine `.env.local` Datei im Root-Verzeichnis:

```bash
cp .env.local.example .env.local
```

Fügen Sie Ihre Keys ein:

```env
GOOGLE_PLACES_API_KEY=IHR_API_KEY
NEXT_PUBLIC_GOOGLE_PLACE_ID=IHRE_PLACE_ID
```

### 4. Google Reviews auf Seiten einbinden

**Auf der Startseite (app/page.tsx):**

```tsx
import GoogleReviews from '@/components/sections/GoogleReviews';

export default function HomePage() {
  return (
    <>
      {/* ... andere Komponenten ... */}

      <GoogleReviews
        title="Google Bewertungen"
        subtitle="Das sagen unsere Patienten auf Google"
        businessName="Diabetologie Derschlag"
      />

      {/* oder mit Place ID: */}
      <GoogleReviews
        placeId={process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}
      />

      {/* ... andere Komponenten ... */}
    </>
  );
}
```

**Testimonials durch Google Reviews ersetzen:**

```tsx
// Ersetzen Sie:
<Testimonials
  title="Was unsere Patienten sagen"
  testimonials={testimonials}
/>

// Mit:
<GoogleReviews
  title="Was unsere Patienten sagen"
  subtitle="Echte Bewertungen von Google"
  placeId={process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}
/>
```

### 5. Features der GoogleReviews Komponente

**Automatisch:**
- ✅ Lädt die neuesten Google Reviews
- ✅ Zeigt Durchschnittsbewertung mit Sternen
- ✅ Zeigt Anzahl der Bewertungen
- ✅ Limitiert auf die ersten 5 Reviews
- ✅ Link zu allen Google Bewertungen
- ✅ Google Logo für Authentizität
- ✅ Loading State
- ✅ Error Handling
- ✅ Responsive Design

**Anpassbar:**
- Titel und Untertitel
- Anzahl der angezeigten Reviews (max 5 von Google API)
- Layout und Styling

### 6. API Endpunkte

Die Integration erstellt automatisch diese API-Route:

```
GET /api/google-reviews?placeId=YOUR_PLACE_ID
GET /api/google-reviews?query=Diabetologie+Derschlag+Gummersbach
```

**Response Format:**
```json
{
  "success": true,
  "reviews": [
    {
      "id": "google-1234567890",
      "name": "Max Mustermann",
      "rating": 5,
      "text": "Sehr gute Betreuung...",
      "date": "2024-11-15",
      "verified": true,
      "source": "google"
    }
  ],
  "count": 5
}
```

### 7. Wichtige Hinweise

**Kosten:**
- Google Places API hat ein kostenloses Kontingent
- Darüber hinaus: Pay-per-use Modell
- Caching empfohlen für Produktionsumgebung

**Limitierungen:**
- Maximal 5 Reviews pro Anfrage (Google Limit)
- Reviews müssen öffentlich sein
- Rate Limits beachten

**Sicherheit:**
- API Key NIEMALS im Frontend-Code!
- Server-seitige Anfragen über API-Route
- Domain-Restriktionen im Google Console setzen

### 8. Testing

**Lokal testen:**
```bash
npm run dev
```

Besuchen Sie: `http://localhost:3000`

**API direkt testen:**
```bash
curl "http://localhost:3000/api/google-reviews?query=Diabetologie+Derschlag"
```

### 9. Fehlerbehandlung

**Keine Reviews sichtbar?**
1. ✓ API Key korrekt in `.env.local`?
2. ✓ Places API aktiviert?
3. ✓ Place ID korrekt?
4. ✓ Praxis hat öffentliche Google Reviews?
5. ✓ Server neu gestartet nach `.env.local` Änderung?

**Fehlermeldungen checken:**
```bash
# Browser Console
# oder
# Server Terminal
```

### 10. Production Deployment

**Vercel/Netlify:**
1. Environment Variables in der Plattform eintragen
2. Build & Deploy
3. API Key Domain-Restrictions anpassen

**Eigener Server:**
1. `.env.local` auf Server kopieren
2. Production Build: `npm run build`
3. Server starten: `npm start`

---

## 🎯 Schnellstart

Wenn Sie schnell loslegen möchten:

1. **API Key erstellen** (5 Min)
2. **Place ID finden** (2 Min)
3. **`.env.local` erstellen** (1 Min)
4. **Server neu starten** (30 Sek)
5. **Seite testen** ✅

Die Google Reviews erscheinen automatisch auf allen Seiten, wo Sie die Komponente einbinden!

---

**Support:** Bei Problemen schauen Sie in die Google Places API Dokumentation:
https://developers.google.com/maps/documentation/places/web-service/overview
