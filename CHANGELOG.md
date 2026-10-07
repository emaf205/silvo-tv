# Changelog

Tutte le modifiche degne di nota a questo progetto saranno documentate in questo file.

Il formato è basato su [Keep a Changelog](https://keepachangelog.com/it/1.0.0/),
e questo progetto aderisce al [Semantic Versioning](https://semver.org/lang/it/).

## [2.0.1] - 2026-10-07

### Modificato
- **Cambio Canale 100% Silenzioso**: Rimosso l'effetto sonoro (zap/beep) durante la transizione video, mantenendo l'audio del video intatto e fluido.
- **Data e Metadati Archivio**: Inclusa la data di sviluppo (`DATE: 2024-10`) e screenshot ad alta risoluzione del player.

## [2.0.0] - 2026-10-06

### Aggiunto
- **Database di 200 Video Verificati**: Estensione massiccia del catalogo a 200 video YouTube storici di Silvio Berlusconi con validazione oEmbed e riproduzione casuale continua.
- **Supporto PWA Completo (Progressive Web App)**: File `manifest.webmanifest`, `service-worker.js` con caching statico robusto e cache-busting `silvo-tv-v1.2.0`, icone applicazione ad alta risoluzione (192px, 512px e `apple-touch-icon.png` 180px).
- **Popup di Installazione PWA per Smartphone**: Modal dedicato sia per iPhone iOS Safari (guida "Aggiungi a Schermata Home") che per Android / Desktop (evento nativo `beforeinstallprompt`).
- **Pronto per Upload FTP su Sito Web**: Percorsi totalmente relativi (`./`), zero dipendenze da server di build: basta caricare i file su qualsiasi hosting/FTP (Apache, Nginx, cPanel, Netlify) per farlo funzionare istantaneamente.

### Modificato
- **Interfaccia Ottimizzata per Smartphone Stile App iPhone**: Layout mobile-first compatto, viewport dinamico `100dvh`, rispetto dei safe-area inset (`env(safe-area-inset)`), barra dei pulsanti base ergonomica con tasto Muto/Audio rapido, tasto Installa PWA e grande tasto primario `AVANTI ➔`.

## [1.1.0] - 2026-10-06
- UI minimale focalizzata sul televisore, titolo, freccia e crediti.

## [1.0.0] - 2026-10-06
- Prima release con 30 video storici e simulazione TV CRT vintage.
