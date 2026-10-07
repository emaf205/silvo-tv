/**
 * SILVO TV - Motore Mobile/PWA & 200 Video
 * Autoplay continuo da 15 secondi, gestione PWA per iPhone & Android, controlli touch minimali.
 */

(function () {
  'use strict';

  class SilvoTV {
    constructor() {
      this.videos = Array.isArray(window.BERLUSCONI_VIDEOS) ? [...window.BERLUSCONI_VIDEOS] : [];
      this.shuffledPlaylist = [];
      this.currentIndex = -1;
      this.currentVideo = null;

      // Timer a 15 secondi
      this.countdownSeconds = 15;
      this.timerInterval = null;

      // Stato Player
      this.ytPlayer = null;
      this.isPlayerReady = false;
      this.isPlaying = false;
      this.isMuted = false;
      this.audioUnlocked = false;

      // PWA deferred prompt
      this.deferredInstallPrompt = null;

      // Web Audio SFX
      this.audioCtx = null;

      // DOM Elements
      this.dom = {
        tvScreen: document.getElementById('tv-screen'),
        staticCanvas: document.getElementById('static-canvas'),
        screenBadge: document.getElementById('screen-badge'),
        osdSeconds: document.getElementById('osd-seconds'),
        osdFill: document.getElementById('osd-fill'),
        alertSoloAvanti: document.getElementById('alert-solo-avanti'),
        videoTitle: document.getElementById('video-title'),
        videoMeta: document.getElementById('video-meta'),
        
        // Controlli base
        btnAudio: document.getElementById('btn-audio'),
        audioIcon: document.getElementById('audio-icon'),
        audioLabel: document.getElementById('audio-label'),
        btnInstallPwa: document.getElementById('btn-install-pwa'),
        btnNext: document.getElementById('btn-next'),

        // Modal PWA
        pwaModal: document.getElementById('pwa-modal'),
        pwaModalClose: document.getElementById('pwa-modal-close'),
        pwaIosGuide: document.getElementById('pwa-ios-guide'),
        pwaAndroidGuide: document.getElementById('pwa-android-guide'),
        btnPwaInstallNow: document.getElementById('btn-pwa-install-now')
      };

      this.initAudioContext();
      this.initStaticCanvas();
      this.initShufflePool();
      this.initPWA();
      this.attachEventListeners();
      this.loadYouTubeIframeAPI();
    }

    /* -------------------------------------------------------------
       REGISTRAZIONE SERVICE WORKER & LOGICA PWA
       ------------------------------------------------------------- */
    initPWA() {
      // Registra Service Worker se supportato
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('./service-worker.js')
            .then((reg) => console.log('📱 PWA ServiceWorker registrato con successo!', reg.scope))
            .catch((err) => console.warn('Errore registrazione ServiceWorker:', err));
        });
      }

      // Cattura evento beforeinstallprompt (Android / Desktop Chrome)
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        this.deferredInstallPrompt = e;
        if (this.dom.pwaAndroidGuide) {
          this.dom.pwaAndroidGuide.style.display = 'block';
        }
        if (this.dom.pwaIosGuide) {
          this.dom.pwaIosGuide.style.display = 'none';
        }
      });

      // Rileva se è installato in standalone
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
      if (isStandalone && this.dom.btnInstallPwa) {
        this.dom.btnInstallPwa.style.display = 'none';
      }
    }

    openPwaModal() {
      if (!this.dom.pwaModal) return;
      
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      if (isIOS) {
        if (this.dom.pwaIosGuide) this.dom.pwaIosGuide.style.display = 'flex';
        if (this.dom.pwaAndroidGuide) this.dom.pwaAndroidGuide.style.display = 'none';
      } else {
        if (this.deferredInstallPrompt) {
          if (this.dom.pwaIosGuide) this.dom.pwaIosGuide.style.display = 'none';
          if (this.dom.pwaAndroidGuide) this.dom.pwaAndroidGuide.style.display = 'block';
        } else {
          // Istruzioni generiche
          if (this.dom.pwaIosGuide) this.dom.pwaIosGuide.style.display = 'flex';
          if (this.dom.pwaAndroidGuide) this.dom.pwaAndroidGuide.style.display = 'none';
        }
      }

      this.dom.pwaModal.classList.add('show');
    }

    closePwaModal() {
      if (this.dom.pwaModal) {
        this.dom.pwaModal.classList.remove('show');
      }
    }

    triggerInstallPrompt() {
      if (this.deferredInstallPrompt) {
        this.deferredInstallPrompt.prompt();
        this.deferredInstallPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('PWA installata con successo dall utente');
          }
          this.deferredInstallPrompt = null;
          this.closePwaModal();
        });
      }
    }

    /* -------------------------------------------------------------
       AUDIO SFX (WEB AUDIO SINTETIZZATO)
       ------------------------------------------------------------- */
    initAudioContext() {
      try {
        const AudioClass = window.AudioContext || window.webkitAudioContext;
        if (AudioClass) this.audioCtx = new AudioClass();
      } catch (e) {}
    }

    playZapSound() {
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
      try {
        const bufferSize = this.audioCtx.sampleRate * 0.12;
        const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.35));
        }
        const noise = this.audioCtx.createBufferSource();
        noise.buffer = buffer;
        const gain = this.audioCtx.createGain();
        gain.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.11);
        noise.connect(gain);
        gain.connect(this.audioCtx.destination);
        noise.start();
      } catch (e) {}
    }

    playAlertBeep() {
      if (!this.audioCtx) return;
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
      try {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, this.audioCtx.currentTime);
        osc.frequency.setValueAtTime(160, this.audioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.25);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.26);
      } catch (e) {}
    }

    /* -------------------------------------------------------------
       EFFETTO STATICA CRT (CANVAS)
       ------------------------------------------------------------- */
    initStaticCanvas() {
      if (!this.dom.staticCanvas) return;
      this.canvasCtx = this.dom.staticCanvas.getContext('2d');
      this.canvasW = this.dom.staticCanvas.width;
      this.canvasH = this.dom.staticCanvas.height;
      this.imgData = this.canvasCtx.createImageData(this.canvasW, this.canvasH);
    }

    triggerStaticZap(durationMs = 180) {
      if (!this.dom.staticCanvas) return;
      this.dom.staticCanvas.classList.add('active');
      // Effetto sonoro rimosso su richiesta: cambio canale 100% fluido e silenzioso

      const startTime = performance.now();
      const loop = (now) => {
        const data = this.imgData.data;
        const len = data.length;
        for (let i = 0; i < len; i += 4) {
          const val = (Math.random() * 255) | 0;
          data[i] = val;
          data[i + 1] = val;
          data[i + 2] = val;
          data[i + 3] = 255;
        }
        this.canvasCtx.putImageData(this.imgData, 0, 0);

        if (now - startTime < durationMs) {
          requestAnimationFrame(loop);
        } else {
          this.dom.staticCanvas.classList.remove('active');
        }
      };
      requestAnimationFrame(loop);
    }

    /* -------------------------------------------------------------
       SHUFFLE SUI 200 VIDEO
       ------------------------------------------------------------- */
    initShufflePool() {
      if (!this.videos || this.videos.length === 0) return;
      const idxs = Array.from({ length: this.videos.length }, (_, i) => i);
      // Fisher-Yates
      for (let i = idxs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [idxs[i], idxs[j]] = [idxs[j], idxs[i]];
      }
      this.shuffledPlaylist = idxs;
      this.currentIndex = -1;
    }

    getNextVideo() {
      if (!this.videos || this.videos.length === 0) return null;
      this.currentIndex++;
      if (this.currentIndex >= this.shuffledPlaylist.length) {
        const lastIdx = this.shuffledPlaylist[this.shuffledPlaylist.length - 1];
        this.initShufflePool();
        if (this.shuffledPlaylist[0] === lastIdx && this.shuffledPlaylist.length > 1) {
          [this.shuffledPlaylist[0], this.shuffledPlaylist[1]] = [this.shuffledPlaylist[1], this.shuffledPlaylist[0]];
        }
        this.currentIndex = 0;
      }
      const vidIdx = this.shuffledPlaylist[this.currentIndex];
      return {
        video: this.videos[vidIdx],
        position: this.currentIndex + 1,
        total: this.videos.length
      };
    }

    /* -------------------------------------------------------------
       YOUTUBE IFRAME API & AUTOPLAY CONTINUO
       ------------------------------------------------------------- */
    loadYouTubeIframeAPI() {
      if (window.YT && window.YT.Player) {
        this.initPlayer();
        return;
      }
      window.onYouTubeIframeAPIReady = () => this.initPlayer();
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const first = document.getElementsByTagName('script')[0];
      first.parentNode.insertBefore(tag, first);
    }

    initPlayer() {
      const firstPick = this.getNextVideo();
      this.currentVideo = firstPick ? firstPick.video : this.videos[0];
      this.updateMetadata(firstPick);

      this.ytPlayer = new window.YT.Player('yt-player', {
        height: '100%',
        width: '100%',
        videoId: this.currentVideo.id,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          iv_load_policy: 3,
          enablejsapi: 1,
          start: this.currentVideo.startSeconds || 0
        },
        events: {
          onReady: () => this.onPlayerReady(),
          onStateChange: (e) => this.onPlayerStateChange(e),
          onError: () => this.onPlayerError()
        }
      });
    }

    onPlayerReady() {
      this.isPlayerReady = true;
      console.log("📺 SILVO TV - Player Inizializzato (200 Video Disponibili)!");

      try {
        this.ytPlayer.unMute();
        this.ytPlayer.setVolume(100);
        this.ytPlayer.playVideo();
      } catch (e) {}

      // Fallback policy autoplay: se dopo 800ms non è partito, avvia muto per sbloccare il flusso
      setTimeout(() => {
        if (!this.isPlaying && this.ytPlayer) {
          try {
            const state = this.ytPlayer.getPlayerState();
            if (state !== window.YT.PlayerState.PLAYING) {
              this.ytPlayer.mute();
              this.ytPlayer.playVideo();
              this.updateAudioButtonState(true);
            }
          } catch (e) {}
        }
      }, 800);
    }

    toggleAudio() {
      if (!this.ytPlayer) return;
      this.audioUnlocked = true;
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      try {
        const currentlyMuted = this.ytPlayer.isMuted();
        if (currentlyMuted) {
          this.ytPlayer.unMute();
          this.ytPlayer.setVolume(100);
          this.updateAudioButtonState(false);
        } else {
          this.ytPlayer.mute();
          this.updateAudioButtonState(true);
        }
      } catch (e) {}
    }

    updateAudioButtonState(muted) {
      this.isMuted = muted;
      if (!this.dom.btnAudio) return;
      if (muted) {
        this.dom.btnAudio.classList.add('muted');
        if (this.dom.audioIcon) this.dom.audioIcon.textContent = '🔇';
        if (this.dom.audioLabel) this.dom.audioLabel.textContent = 'MUTO';
      } else {
        this.dom.btnAudio.classList.remove('muted');
        if (this.dom.audioIcon) this.dom.audioIcon.textContent = '🔊';
        if (this.dom.audioLabel) this.dom.audioLabel.textContent = 'AUDIO ON';
      }
    }

    onPlayerStateChange(e) {
      if (e.data === window.YT.PlayerState.PLAYING) {
        this.isPlaying = true;
        // Il timer di 15 secondi parte solo quando il video è REALMENTE in onda!
        this.start15sTimer();

        if (this.ytPlayer && typeof this.ytPlayer.isMuted === 'function') {
          this.updateAudioButtonState(this.ytPlayer.isMuted());
        }
      } else if (e.data === window.YT.PlayerState.ENDED) {
        this.playNextVideo();
      } else if (e.data === window.YT.PlayerState.PAUSED) {
        this.isPlaying = false;
        this.stop15sTimer();
      }
    }

    onPlayerError() {
      // Salto immediato se una clip ha restrizioni
      setTimeout(() => this.playNextVideo(), 300);
    }

    /* -------------------------------------------------------------
       TIMER 15 SECONDI PER CLIP
       ------------------------------------------------------------- */
    start15sTimer() {
      this.stop15sTimer();
      this.countdownSeconds = 15;
      this.updateOsdTimer();

      this.timerInterval = setInterval(() => {
        this.countdownSeconds--;
        this.updateOsdTimer();

        if (this.countdownSeconds <= 0) {
          this.stop15sTimer();
          this.playNextVideo();
        }
      }, 1000);
    }

    stop15sTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
    }

    updateOsdTimer() {
      const s = Math.max(0, this.countdownSeconds);
      if (this.dom.osdSeconds) this.dom.osdSeconds.textContent = `${s}s`;
      if (this.dom.osdFill) {
        const pct = (s / 15) * 100;
        this.dom.osdFill.style.width = `${pct}%`;
      }
    }

    /* -------------------------------------------------------------
       NAVIGAZIONE: RIGOROSAMENTE SOLO AVANTI >>
       ------------------------------------------------------------- */
    playNextVideo() {
      this.stop15sTimer();
      this.countdownSeconds = 15;
      this.updateOsdTimer();
      this.triggerStaticZap(180);

      const next = this.getNextVideo();
      if (!next) return;

      this.currentVideo = next.video;
      this.updateMetadata(next);

      if (this.isPlayerReady && this.ytPlayer) {
        try {
          this.ytPlayer.loadVideoById({
            videoId: next.video.id,
            startSeconds: next.video.startSeconds || 0
          });
          this.ytPlayer.playVideo();
          if (this.audioUnlocked && !this.isMuted) {
            this.ytPlayer.unMute();
            this.ytPlayer.setVolume(100);
          }
        } catch (e) {
          console.error("Errore cambio canale:", e);
        }
      }
    }

    updateMetadata(data) {
      if (!data) return;
      const v = data.video;
      if (this.dom.videoTitle) this.dom.videoTitle.textContent = v.title;
      if (this.dom.videoMeta) {
        this.dom.videoMeta.textContent = `Clip ${String(data.position).padStart(3, '0')}/${data.total} • ${v.year || 'Archivio'} • ${v.category || 'Berlusconi TV'}`;
      }
      if (this.dom.screenBadge) {
        this.dom.screenBadge.textContent = `C${String((data.position % 99) + 1).padStart(2, '0')}`;
      }
    }

    /* -------------------------------------------------------------
       TENTATIVO INDIETRO (MONITO)
       ------------------------------------------------------------- */
    triggerAlertSoloAvanti() {
      this.playAlertBeep();
      if (this.dom.alertSoloAvanti) {
        this.dom.alertSoloAvanti.classList.add('show');
        clearTimeout(this.alertTimeout);
        this.alertTimeout = setTimeout(() => {
          this.dom.alertSoloAvanti.classList.remove('show');
        }, 2200);
      }
    }

    /* -------------------------------------------------------------
       EVENT LISTENERS (TOUCH, CLICK & TASTIERA)
       ------------------------------------------------------------- */
    attachEventListeners() {
      // Tasto Audio / Muto
      if (this.dom.btnAudio) {
        this.dom.btnAudio.addEventListener('click', (e) => {
          e.stopPropagation();
          this.toggleAudio();
        });
      }

      // Tasto Installa PWA
      if (this.dom.btnInstallPwa) {
        this.dom.btnInstallPwa.addEventListener('click', (e) => {
          e.stopPropagation();
          this.openPwaModal();
        });
      }

      // Chiudi Modal PWA
      if (this.dom.pwaModalClose) {
        this.dom.pwaModalClose.addEventListener('click', () => this.closePwaModal());
      }
      if (this.dom.pwaModal) {
        this.dom.pwaModal.addEventListener('click', (e) => {
          if (e.target === this.dom.pwaModal) this.closePwaModal();
        });
      }

      // Tasto Installa Ora (Android)
      if (this.dom.btnPwaInstallNow) {
        this.dom.btnPwaInstallNow.addEventListener('click', () => this.triggerInstallPrompt());
      }

      // Tasto AVANTI (Solo Avanti)
      if (this.dom.btnNext) {
        this.dom.btnNext.addEventListener('click', (e) => {
          e.stopPropagation();
          if (this.audioCtx && this.audioCtx.state === 'suspended') this.audioCtx.resume();
          this.playNextVideo();
        });
      }

      // Click ovunque sblocca l'audio contestuale
      document.body.addEventListener('click', () => {
        if (!this.audioUnlocked && this.ytPlayer) {
          this.audioUnlocked = true;
          if (this.audioCtx && this.audioCtx.state === 'suspended') this.audioCtx.resume();
        }
      });

      // TASTIERA
      window.addEventListener('keydown', (e) => {
        if (this.audioCtx && this.audioCtx.state === 'suspended') this.audioCtx.resume();

        // AVANTI
        if (e.key === ' ' || e.key === 'ArrowRight' || e.key === 'Enter') {
          e.preventDefault();
          this.playNextVideo();
          return;
        }

        // TENTATIVO INDIETRO
        if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
          e.preventDefault();
          this.triggerAlertSoloAvanti();
          return;
        }

        // MUTE
        if (e.key === 'm' || e.key === 'M') {
          this.toggleAudio();
          return;
        }
      });
    }
  }

  // Avvio immediato
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.silvoTv = new SilvoTV();
    });
  } else {
    window.silvoTv = new SilvoTV();
  }
})();
