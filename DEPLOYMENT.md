# Deployment Anleitung - Diabetologie Derschlag

## Schnellstart

```bash
# Container bauen und starten
docker-compose up -d --build

# Logs ansehen
docker-compose logs -f

# Status prüfen
docker-compose ps
```

## Struktur

Das Setup besteht aus zwei Services:

### 1. Coming Soon Service (`diabetologie-coming-soon`)
- **Domain**: `diabetologie-derschlag.de`
- **Port**: 80 (intern)
- **Zugriff**: Öffentlich (keine Authentifizierung)
- **Zweck**: Zeigt eine "Bald verfügbar" Seite an

### 2. Haupt-Website (`diabetologie`)
- **Domain**: `preview.diabetologie-derschlag.de`
- **Port**: 3005 (intern) → 3007 (extern für direkte Zugriffe)
- **Zugriff**: Mit Basic Auth geschützt
- **Zweck**: Vollständige Next.js Website (in Entwicklung/Preview)

## Deployment Schritte

### 1. Eigenes Passwort generieren

```bash
docker run --rm httpd:alpine htpasswd -nbB admin IhrSicheresPasswort
```

Kopieren Sie die Ausgabe und ersetzen Sie sie in `docker-compose.yml` (Zeile 46).
**Wichtig**: Alle `$` müssen als `$$` geschrieben werden!

### 2. DNS konfigurieren

Erstellen Sie A-Records für:
- `diabetologie-derschlag.de` → Ihre Server-IP
- `preview.diabetologie-derschlag.de` → Ihre Server-IP

### 3. Container starten

```bash
# Im Projektverzeichnis
docker-compose down
docker-compose up -d --build
```

### 4. Überprüfen

```bash
# Container-Status
docker-compose ps

# Logs prüfen
docker-compose logs -f diabetologie
docker-compose logs -f diabetologie-coming-soon

# Test öffentliche Seite
curl -I https://diabetologie-derschlag.de

# Test geschützte Seite (sollte 401 ohne Auth zurückgeben)
curl -I https://preview.diabetologie-derschlag.de
```

## Go-Live Prozess

Wenn die Website fertig ist und live gehen soll:

### Option 1: Hauptseite ohne Auth auf Hauptdomain

Bearbeiten Sie `docker-compose.yml`:

```yaml
# Coming Soon Service auskommentieren oder entfernen
# diabetologie-coming-soon: ...

# Hauptseite anpassen:
  diabetologie:
    # ... bestehende Konfiguration ...
    labels:
      # Basic Auth Middleware entfernen oder auskommentieren
      # - "traefik.http.middlewares.diabetologie-auth.basicauth.users=..."

      # Router auf Hauptdomain ändern
      - "traefik.http.routers.diabetologie.rule=Host(`diabetologie-derschlag.de`)"
      # Basic Auth aus Middlewares entfernen
      # - "traefik.http.routers.diabetologie.middlewares=diabetologie-auth"
```

### Option 2: Coming Soon behalten, nur Auth entfernen

```yaml
# Coming Soon bleibt aktiv für Hauptdomain
# Nur preview.diabetologie-derschlag.de bekommt keine Auth mehr
  diabetologie:
    labels:
      # Basic Auth Middleware auskommentieren
      # - "traefik.http.middlewares.diabetologie-auth.basicauth.users=..."
      # - "traefik.http.routers.diabetologie.middlewares=diabetologie-auth"
```

## Nützliche Befehle

```bash
# Container neu starten
docker-compose restart

# Nur einen Service neu starten
docker-compose restart diabetologie

# Logs eines bestimmten Services
docker-compose logs -f diabetologie-coming-soon

# In Container-Shell gehen
docker exec -it diabetologie sh

# Container komplett neu bauen
docker-compose down
docker-compose build --no-cache
docker-compose up -d

# Resourcen aufräumen
docker system prune -a
```

## Traefik Integration

Die Services sind für die Integration mit einem existierenden Traefik-Setup konfiguriert:

- Network: `traefik-net` (external)
- Entrypoint: `frontendsecure` (HTTPS)
- TLS: Automatisch durch Traefik (Let's Encrypt)

Stellen Sie sicher, dass Ihr Traefik:
- Das Network `traefik-net` hat
- Den Entrypoint `frontendsecure` auf Port 443 konfiguriert hat
- ACME/Let's Encrypt für TLS-Zertifikate konfiguriert ist

## Backup

Wichtige Dateien für Backup:
```
.env                    # Umgebungsvariablen
docker-compose.yml      # Container-Konfiguration
coming-soon/            # Coming Soon Seite
app/                    # Next.js Applikation
public/                 # Statische Assets
```

## Troubleshooting

### Port 3007 bereits belegt
```bash
# Prozess auf Port finden
sudo lsof -i :3007
# Oder Port in docker-compose.yml ändern
```

### Traefik erkennt Container nicht
```bash
# Traefik-Logs prüfen
docker logs traefik

# Container-Labels prüfen
docker inspect diabetologie | grep -A 20 Labels
```

### SSL-Zertifikat wird nicht erstellt
- Warten Sie 2-3 Minuten nach dem Start
- Prüfen Sie DNS-Einträge: `dig diabetologie-derschlag.de`
- Prüfen Sie Traefik ACME-Logs

## Support

Bei Fragen zur technischen Umsetzung:
- Website erstellt von [Digitalssolutions](https://www.digitalssolutions.de/de)
