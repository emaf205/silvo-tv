# 📺 SILVO TV - Il Televisore di Silvio (Solo Avanti)

> **"Mi consenta: su questo televisore si va soltanto avanti!"**

**SILVO TV** è una web app locale autonoma concepita come un televisore a tubo catodico (CRT) vintage anni '80/'90. Riproduce in loop continuo spezzoni da **15 secondi** dei momenti più iconici, storici e divertenti di **Silvio Berlusconi**, estratti in ordine casuale da un database di **30 video YouTube verificati**, con **audio attivo nel browser** e una rigorosa regola di sistema: **si può andare soltanto avanti!**

---

## 🌟 Caratteristiche Principali

1. **Esperienza Televisore Vintage CRT**:
   - Chassis fotorealistico stile Mivar / TeleMilano 58 con bombatura dello schermo e riflessi di luce sul vetro.
   - Effetto scanlines interlacciate e fosfori CRT con bagliore ambientale dinamico.
   - Interruttori fisici laterali, canale digitale a 7 segmenti (`C05`), manopole, LED di stato (Rosso = Standby, Verde = Acceso) e griglia altoparlanti.
   - Telecomando vintage con pulsante indietro rimosso per decreto.

2. **Autoplay a 15 Secondi con Audio nel Browser**:
   - Ogni clip viene riprodotta per esattamente **15 secondi**, dopodiché il televisore cambia canale automaticamente con una scarica statica analogica e passa a un nuovo video casuale.
   - Gestione nativa delle policy audio dei browser moderni: la schermata di Standby consente di accendere la TV con un click, sbloccando istantaneamente l'audio a volume pieno per tutta la sessione.

3. **Database Curato di 30 Video Storici**:
   - 30 momenti leggendari che coprono oltre trent'anni di carriera politica, televisiva, calcistica e di intrattenimento:
     - *La Discesa in Campo del 1994 ("L'Italia è il paese che amo")*
     - *La pulizia della sedia di Travaglio da Santoro*
     - *Il celebre "Cucù" ad Angela Merkel a Trieste*
     - *Lo scontro con Martin Schulz al Parlamento Europeo ("Kapò")*
     - *Obama "giovane, bello e anche abbronzato"*
     - *Gianfranco Fini: "Che fai, mi cacci?"*
     - *Il discorso al Monza con la promessa del "pullman di..."*
     - *Le storiche "Corna" al vertice UE di Caceres*
     - *La barzelletta della mela con Davide Mengacci*
     - *Le telefonate furibonde a Ballarò e a L'Infedele ("Postribolo!")*
     - *La barzelletta sull'aereo col Papa e Biden*
     - *I rimproveri ai giocatori del Milan e i consigli tattici ad Allegri*
     - *Inno ufficiale "Meno male che Silvio c'è"*
     - *E molti altri capisaldi storici.*

4. **Navigazione "Solo Avanti"**:
   - Nessun tasto "Indietro" o "Precedente".
   - Puoi avanzare quando vuoi premendo il pulsante **AVANTI >>**, il tasto sul telecomando o la **Barra Spaziatrice**.
   - Se provi a premere la freccia sinistra o Backspace, scatta un allarme OSD a tutto schermo: `⛔ MI CONSENTA! SU SILVO TV SI VA SOLO AVANTI!` accompagnato da un cicalino acustico.

5. **Effetti Sonori Analogici Nativi**:
   - Zero file audio esterni che possono fallire il download: tutti i suoni (clic meccanico, scarica statica CRT e cicalino) sono generati in tempo reale con la **Web Audio API**.

---

## 🚀 Come Avviare SILVO TV in Locale

Puoi avviare SILVO TV con uno qualsiasi dei seguenti metodi:

### Metodo 1: Script Rapido (Consigliato su macOS / Linux)
Apri il terminale nella cartella del progetto ed esegui:
```bash
./start.sh
```
*Lo script avvia il server locale e apre in automatico il televisore nel browser.*

### Metodo 2: Con Python 3
```bash
python3 server.py
```
*SILVO TV si aprirà automaticamente su `http://localhost:8080/index.html`.*

### Metodo 3: Con Node.js / npx
```bash
npm start
# oppure
npx -y serve . -p 8080
```

### Metodo 4: Apertura Diretta del File
Puoi anche fare semplicemente doppio clic su `index.html` nel Finder o eseguire:
```bash
open index.html
```

---

## 🎮 Comandi da Tastiera

| Tasto | Azione |
| :--- | :--- |
| <kbd>Spazio</kbd> / <kbd>→</kbd> / <kbd>Invio</kbd> | **AVANTI >>** (Salta subito al prossimo video) |
| <kbd>←</kbd> / <kbd>Backspace</kbd> | **Allarme "Solo Avanti"** (*Mi consenta!*) |
| <kbd>P</kbd> | **Power** (Accendi / Metti in Standby la TV) |
| <kbd>M</kbd> | **Muto / Riattiva Audio** |
| <kbd>↑</kbd> / <kbd>↓</kbd> | **Volume + / Volume -** |

---

## 📁 Struttura del Progetto

```text
silvo_tv_local_player/
├── index.html       # Interfaccia grafica con TV CRT, OSD e telecomando
├── style.css        # Stili retro, scanlines, bombatura vetro e OSD fosfori verdi
├── app.js           # Motore dell'applicazione, timer 15s, Web Audio SFX e logica
├── videos.js        # Database con i 30 video YouTube, metadati e timing
├── server.py        # Server HTTP locale Python con auto-apertura browser
├── start.sh         # Script bash di avvio rapido per macOS/Linux
├── package.json     # Metadati e script npm
├── VERSION.txt      # Versione corrente (1.0.0)
├── CHANGELOG.md     # Registro delle modifiche
└── README.md        # Documentazione ufficiale del progetto
```

---

## 📜 Licenza
Rilasciato sotto licenza MIT. Realizzato per uso locale e d'intrattenimento.
