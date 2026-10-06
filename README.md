# 📺 SILVO TV - Il Televisore Tascabile di Silvio (PWA)

> **"Mi consenta: su questo televisore si va soltanto avanti!"**

**SILVO TV v2.0** è una Web App / Progressive Web App (PWA) ottimizzata per **smartphone (stile app nativa iPhone)** e desktop. Riproduce in loop continuo spezzoni da **15 secondi** di **200 video YouTube storici di Silvio Berlusconi** in ordine casuale, con audio, controlli minimi e la regola ferrea: **si può andare soltanto avanti!**

Pronta al 100% per essere caricata via **FTP** sul proprio sito web o utilizzata in locale.

---

## 🌟 Novità della Versione 2.0

1. **Catalogo Esteso a 200 Video YouTube**:
   - 200 clip verificate e funzionanti tramite oEmbed che ripercorrono oltre 35 anni di storia: discorsi epici, comizi, barzellette, gag TV, sfoghi, apparizioni al Milan e al Monza, conferenze internazionali e tormentoni indimenticabili.
   - Algoritmo Fisher-Yates per un ciclo random continuo infinito senza ripetizioni immediate.

2. **Ottimizzazione Mobile Stile App iPhone**:
   - Layout a tutto schermo con viewport dinamico (`100dvh`) e rispetto del notch / safe area di iOS.
   - Design compatto, elegante e minimale: il televisore al centro, titolo e dettagli della clip, e barra inferiore ergonomica per il pollice.

3. **Solo Pulsanti Base**:
   - **`🔊 / 🔇 MUTO`**: Per attivare o silenziare l'audio al volo con feedback visivo.
   - **`📲 INSTALLA APP`**: Apre il popup per aggiungere SILVO TV alla Schermata Home dello smartphone.
   - **`AVANTI ➔`**: Grande pulsante dorato per cambiare subito canale in avanti.

4. **Progressive Web App (PWA) & Popup di Installazione**:
   - `manifest.webmanifest` e `service-worker.js` con cache-busting `silvo-tv-v1.2.0`.
   - **Su iPhone (Safari)**: Rileva iOS e apre la guida con istruzioni chiare (*Tocca Condividi ⎋ e "Aggiungi a Schermata Home" ➕*).
   - **Su Android / Chrome**: Supporta l'installazione nativa con un solo tocco con l'evento `beforeinstallprompt`.

5. **Pronto per Upload via FTP**:
   - Tutti i percorsi sono relativi (`./`), senza build complesse o dipendenze da Node lato server.
   - Basta caricare i file tramite FileZilla o Cyberduck in una cartella del proprio hosting (es. `public_html/silvo-tv/`) e funzionerà all'istante su qualsiasi dominio.

---

## 🚀 Come Caricare via FTP sul tuo Sito

1. Apri il tuo client FTP preferito (FileZilla, Cyberduck, Transmit, ecc.).
2. Collegati al tuo hosting.
3. Carica tutti i file della cartella `silvo_tv_local_player` nella root o in una sottocartella (es. `/silvo-tv/`).
4. Apri dal tuo smartphone l'URL: `https://iltuosito.it/silvo-tv/`.
5. Tocca **`📲 INSTALLA APP`** per installarla come app sul tuo telefono!

---

## 💻 Come Eseguire in Locale

```bash
# Avvio rapido
./start.sh

# Oppure con Python
python3 server.py

# Oppure con Node
npm start
```
L'app si aprirà all'indirizzo [http://localhost:8080/index.html](http://localhost:8080/index.html).

---

## 🎮 Comandi da Tastiera (Desktop)

| Tasto | Azione |
| :--- | :--- |
| <kbd>Spazio</kbd> / <kbd>→</kbd> / <kbd>Invio</kbd> | **AVANTI ➔** (Salta al prossimo video) |
| <kbd>←</kbd> / <kbd>Backspace</kbd> | **Allarme "Solo Avanti"** (*Mi consenta!*) |
| <kbd>M</kbd> | **Muto / Riattiva Audio** |

---

## 📁 Struttura dei File

```text
silvo_tv_local_player/
├── index.html           # Interfaccia mobile-first con TV, controlli base e popup PWA
├── style.css            # Stili minimali stile app iPhone, CRT effect, safe-areas
├── app.js               # Motore PWA, YouTube player, timer 15s e navigazione solo avanti
├── videos.js            # Database ufficiale con i 200 video YouTube verificati
├── manifest.webmanifest # Manifest PWA per installazione come app nativa
├── service-worker.js    # Caching offline e strategie di aggiornamento PWA
├── icon-192.png         # Icona PWA 192x192
├── icon-512.png         # Icona PWA 512x512
├── apple-touch-icon.png # Icona Apple iOS 180x180
├── server.py            # Server HTTP locale
├── start.sh             # Script di avvio rapido
├── package.json         # Metadati npm
├── VERSION.txt          # Versione corrente (2.0.0)
├── CHANGELOG.md         # Registro storico delle modifiche
└── README.md            # Documentazione ufficiale del progetto
```

---

## 📜 Licenza
Rilasciato sotto licenza MIT. Realizzato per uso satirico, storico e d'intrattenimento.
