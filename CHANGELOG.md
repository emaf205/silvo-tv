# Changelog

Tutte le modifiche degne di nota a questo progetto saranno documentate in questo file.

Il formato è basato su [Keep a Changelog](https://keepachangelog.com/it/1.0.0/),
e questo progetto aderisce al [Semantic Versioning](https://semver.org/lang/it/).

## [1.0.0] - 2026-10-06

### Aggiunto
- **Design Vintage CRT TV**: Chassis realistico a tubo catodico anni '80/'90 (stile Mivar / TeleMilano 58 / Fininvest) con curvatura dello schermo, scanlines interlacciate, riflesso di luce, manopole, LED di stato e altoparlanti.
- **On-Screen Display (OSD)**: Grafica a fosfori verdi e ambra con countdown dinamico da 15 secondi, barra di progresso, canale TV a 7 segmenti, titolo clip e metadati.
- **Database di 30 Video Storici di Silvio Berlusconi**: Collezione verificata con timing di highlight su momenti storici (Discesa in campo 1994, pulizia della sedia di Travaglio, Cucù alla Merkel, Kapò a Schulz, Obama abbronzato, Pullman di Monza, barzellette, inni e apparizioni TV).
- **Engine di Riproduzione a 15 Secondi**: Switch automatico continuo ogni 15 secondi esatti verso una clip casuale senza ripetizioni immediate (Fisher-Yates shuffle continuo).
- **Navigazione "Solo Avanti"**: Pulsante chassis `AVANTI >>`, telecomando dedicato con tasto "INDIETRO" rimosso per decreto, e blocco con allarme visivo/sonoro (*"Mi consenta! Si va solo avanti!"*) se l'utente tenta di premere freccia sinistra o tornare indietro.
- **Sblocco Audio Autoplay Browser**: Schermata di Standby con grande pulsante "ACCENDI SILVO TV" per autorizzare e avviare immediatamente la riproduzione con audio al 100%.
- **Sintetizzatore Audio Vintage Nativo**: Effetti sonori generati interamente tramite Web Audio API (accensione TV, scarica statica CRT sul cambio canale, allarme "Solo Avanti").
- **Launcher e Server Locale**: Script `start.sh` e `server.py` per avvio automatico con apertura istantanea nel browser a porta 8080.
