# TSC Bilverkstad

En Angular-webbplats med startsida och kontaktsida för TSC.

## Kom igång

Installera beroenden och starta utvecklingsservern:

```powershell
npm install
npm start
```

Projektet använder Node.js 26.13.0 via `.nvmrc`. I VS Code får nya terminaler nvm:s shim först i `PATH`.
Öppna sedan adressen som Angular CLI visar i terminalen.

## Projektstruktur

```text
src/
├── app/
│   ├── core/data/           # Innehåll och kontaktuppgifter
│   ├── pages/               # Startsidan och kontaktsidan
│   └── shared/components/   # Delad header och footer
├── styles/
│   ├── abstracts/           # Färger och Sass-mixins
│   └── components/          # Delade knappar och formulärfält
├── styles.scss              # Global stil och samlade Sass-importer
└── main.ts
```

Byt exempeluppgifterna för e-post, telefon, adress och öppettider i `src/app/core/data/site-content.ts` innan webbplatsen publiceras. Kontaktformuläret öppnar ett förifyllt mejl och behöver en serverlösning om det ska skicka formulär direkt från sidan. Verkstadsbilderna är tillfälliga Unsplash-bilder och bör bytas mot foton från TSC när sådana finns.
