# Basic Authentication Setup für Diabetologie Derschlag

## Überblick

Die Website verwendet zwei separate Domains:
- **diabetologie-derschlag.de** → Coming Soon Seite (öffentlich zugänglich)
- **preview.diabetologie-derschlag.de** → Vollständige Website (mit Basic Auth geschützt)

## Neues Passwort generieren

Um ein neues Passwort-Hash für Basic Auth zu generieren:

```bash
docker run --rm httpd:alpine htpasswd -nbB benutzername passwort
```

**Beispiel:**
```bash
docker run --rm httpd:alpine htpasswd -nbB admin MeinSicheresPasswort123
```

**Ausgabe:**
```
admin:$2y$05$abc123...
```

## Passwort in docker-compose.yml aktualisieren

1. Öffnen Sie `docker-compose.yml`
2. Suchen Sie die Zeile mit `traefik.http.middlewares.diabetologie-auth.basicauth.users`
3. Ersetzen Sie den Hash-Wert (wichtig: `$` muss als `$$` escaped werden!)

```yaml
- "traefik.http.middlewares.diabetologie-auth.basicauth.users=admin:$$2y$$05$$abc123..."
```

**Wichtig:** Im docker-compose müssen alle `$` Zeichen verdoppelt werden: `$` → `$$`

## Services neu starten

Nach dem Ändern des Passworts:

```bash
# Container stoppen und neu bauen
docker-compose down
docker-compose up -d --build

# Oder nur neu starten ohne neu zu bauen
docker-compose restart diabetologie
```

## DNS Konfiguration

Stellen Sie sicher, dass beide Domains auf Ihren Server zeigen:
- `diabetologie-derschlag.de` → A-Record zu Ihrer Server-IP
- `preview.diabetologie-derschlag.de` → A-Record zu Ihrer Server-IP

## Zugriff testen

1. **Coming Soon Seite** (öffentlich):
   ```
   https://diabetologie-derschlag.de
   ```

2. **Geschützte Hauptseite** (mit Login):
   ```
   https://preview.diabetologie-derschlag.de
   ```
   - Username: `admin`
   - Passwort: `preview123` (Beispiel - BITTE ÄNDERN!)

## Produktiv-Deployment

Wenn der Content fertig ist und die Website live gehen soll:

1. **Kommentieren Sie** den `diabetologie-coming-soon` Service in `docker-compose.yml` aus
2. **Ändern Sie** die Hauptseite-Router-Regel zurück zu `diabetologie-derschlag.de`
3. **Entfernen Sie** die Basic Auth Middleware oder lassen Sie sie für Admin-Bereiche
4. **Restarten Sie** die Container

```bash
docker-compose down
docker-compose up -d --build
```

## Troubleshooting

### Passwort funktioniert nicht
- Überprüfen Sie, ob alle `$` Zeichen als `$$` escaped sind
- Generieren Sie einen neuen Hash und versuchen Sie es erneut

### Coming Soon Seite wird nicht angezeigt
- Überprüfen Sie die Traefik-Logs: `docker logs traefik`
- Überprüfen Sie die Priority-Werte in den Router-Labels

### SSL-Zertifikat fehlt
- Traefik benötigt Zeit, um das Zertifikat von Let's Encrypt zu erhalten
- Überprüfen Sie die Traefik-Konfiguration für ACME/Let's Encrypt
