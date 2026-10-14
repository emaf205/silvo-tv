# 📺 SILVO TV — Pocket CRT Stream & Satirical Time Capsule

<p align="center">
  <img src="assets/social-preview.jpg" alt="SILVO TV Cover Artwork" width="100%">
</p>

> **"Mi consenta: on this television, there is only forward!"**  
> A mobile-first Progressive Web App (PWA) recreating a vintage portable CRT television that plays an endless, randomized stream of 200 historical YouTube broadcast moments in continuous 15-second bursts.

[![Live Demo](https://img.shields.io/badge/Live_PWA-emaf205.com%2Fideas%2Fsilvo--tv-dfff00?style=for-the-badge&logo=googlechrome&logoColor=000000)](https://emaf205.com/ideas/silvo-tv/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-emaf205%2Fsilvo--tv-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/emaf205/silvo-tv)
[![License: MIT](https://img.shields.io/badge/License-MIT-black?style=for-the-badge)](LICENSE)

---

## ✦ The Genesis & Why This Exists

Italian television between the late 1980s and the 2010s was completely shaped by one figure: Silvio Berlusconi. From revolutionizing commercial broadcasting with Fininvest/Mediaset to transforming political communication into pure spectacle, his media presence was relentless, unforgettable, and deeply surreal.

I built **SILVO TV** as an experiential digital time capsule. Most YouTube archives are passive: you search, click, pause, scrub through timelines. That misses the entire psychological essence of 90s television. 

SILVO TV strips away the modern interface entirely:
1. **The 15-Second Rule**: Every clip plays for exactly 15 seconds before automatically advancing to another unexpected historical broadcast clip spanning over 35 years of politics, football (AC Milan & Monza), international summits, TV sketches, and viral press conferences.
2. **The "Forward-Only" Philosophy**: Traditional remotes let you rewind. SILVO TV explicitly forbids going back. There is only one direction: **AVANTI (Forward)**. If you press back, an audible alarm triggers: *"Mi consenta!"*
3. **Pocket CRT Aesthetic**: Designed with an ultra-responsive native iPhone feel (`100dvh`), nostalgic scanlines, curved cathode tube vignette, and acid-yellow telemetry.

---

## ✦ Key Features

- **📼 200 Curated Historical YouTube Clips**: Verified video catalog indexed across four decades, utilizing the Fisher-Yates shuffle algorithm to guarantee no immediate repeats.
- **📱 Native iPhone Ergonomics**: Full viewport height, respects iOS notch safe areas, and places critical controls directly under the user's thumb.
- **🔊 Immediate Audio Controls**: One-tap toggle between Mute and Sound with instant visual status feedback.
- **📲 Progressive Web App (PWA)**:
  - Add to Home Screen prompts tailored for iOS Safari and Android Chrome.
  - Offline asset caching with Service Worker lifecycle (`silvo-tv-v1.2.0`).
- **⌨️ Desktop Keyboard Bindings**:
  - <kbd>Space</kbd> / <kbd>→</kbd> / <kbd>Enter</kbd>: Next channel forward.
  - <kbd>←</kbd> / <kbd>Backspace</kbd>: Triggers the "Only Forward!" alarm.
  - <kbd>M</kbd>: Mute / Unmute audio.
- **🚀 Zero Server Overhead**: 100% vanilla client-side web application. Runs on any static web host, Apache, Nginx, or GitHub Pages.

---

## ✦ Technical Architecture

```text
silvo_tv_local_player/
├── index.html           # Semantic mobile-first layout with CRT tube frame
├── style.css            # CRT scanline effects, iOS safe-area handling, gold accents
├── app.js               # State machine: timer loops, YouTube API bridge, PWA logic
├── videos.js            # Curated database of 200 verified video IDs and timestamps
├── manifest.webmanifest # PWA configuration for native homescreen launch
├── service-worker.js    # Cache-busting offline resilience
└── assets/              # Icons and custom sounds
```

### Video Engine
Instead of embedding heavyweight iframe elements that cause mobile memory leaks, the player dynamically orchestrates the YouTube IFrame Player API. A precise 15,000ms timer synchronizes video playback with automatic channel switching, pre-buffering the next clip seamlessly.

---

## ✦ Quickstart & Local Setup

```bash
# Clone the repository
git clone https://github.com/emaf205/silvo-tv.git
cd silvo-tv

# Start with Python
python3 -m http.server 8080

# Or start with Node
npx serve .
```

Open [http://localhost:8080](http://localhost:8080) in your mobile browser or Safari on iPhone.

---

## ✦ Author & Process

Engineered by **[Emanuele BDC](https://emaf205.com)** in Milan.  
Created through human-in-the-loop rapid prototyping with AI, combining cultural commentary, media archaeology, and clean web engineering.

Distributed under the **MIT License**. Free for historical, educational, and satirical exploration.
