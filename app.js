/**
 * SILVO TV - Motore Pulito & Affidabile (Solo TV, Freccia Avanti, Titolo e Crediti)
 * Autoplay continuo da 15 secondi, 30 clip storiche randomizzate, si va solo avanti.
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
      this.audioUnlocked = false;

      // Web Audio SFX
      this.audioCtx = null;

      // DOM Elements
      this.dom = {
        tvScreen: document.getElementById('tv-screen'),
        staticCanvas: document.getElementById('static-canvas'),
        audioOverlay: document.getElementById('audio-overlay'),
        btnUnmute: document.getElementById('btn-unmute'),
        osdBadge: document.getElementById('osd-badge'),
        osdSeconds: document.getElementById('osd-seconds'),
        osdFill: document.getElementById('osd-fill'),
        alertSoloAvanti: document.getElementById('alert-solo-avanti'),
        videoTitle: document.getElementById('video-title'),
        videoMeta: document.getElementById('video-meta'),
        btnNext: document.getElementById('btn-next')
      };

      this.initAudioContext();
      this.initStaticCanvas();
      this.initShufflePool();
      this.attachEventListeners();
      this.loadYouTubeIframeAPI();
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
        const bufferSize = this.audioCtx.sampleRate * 0.14;
        const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.35));
        }
        const noise = this.audioCtx.createBufferSource();
        noise.buffer = buffer;
        const gain = this.audioCtx.createGain();
        gain.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.13);
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

    triggerStaticZap(durationMs = 200) {
      if (!this.dom.staticCanvas) return;
      this.dom.staticCanvas.classList.add('active');
      this.playZapSound();

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
       SHUFFLE DEI 30 VIDEO
       ------------------------------------------------------------- */
    initShufflePool() {
      if (!this.videos || this.videos.length === 0) return;
      const idxs = Array.from({ length: this.videos.length }, (_, i) => i);
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
       YOUTUBE IFRAME API & AUTOPLAY IMMEDIATO
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
      console.log("📺 SILVO TV - Player Inizializzato!");

      // Tenta avvio immediato con audio
      try {
        this.ytPlayer.unMute();
        this.ytPlayer.setVolume(100);
        this.ytPlayer.playVideo();
      } catch (e) {}

      // Fallback per policy browser: se dopo 800ms non è in play, avvia con mute e mostra tasto sblocco
      setTimeout(() => {
        if (!this.isPlaying && this.ytPlayer) {
          try {
            const state = this.ytPlayer.getPlayerState();
            if (state !== window.YT.PlayerState.PLAYING) {
              this.ytPlayer.mute();
              this.ytPlayer.playVideo();
              if (this.dom.audioOverlay) {
                this.dom.audioOverlay.classList.add('show');
              }
            }
          } catch (e) {}
        }
      }, 800);
    }

    unlockAudio() {
      this.audioUnlocked = true;
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      if (this.ytPlayer) {
        try {
          this.ytPlayer.unMute();
          this.ytPlayer.setVolume(100);
          this.ytPlayer.playVideo();
        } catch (e) {}
      }
      if (this.dom.audioOverlay) {
        this.dom.audioOverlay.classList.remove('show');
      }
    }

    onPlayerStateChange(e) {
      if (e.data === window.YT.PlayerState.PLAYING) {
        this.isPlaying = true;
        // Solo quando il video sta EFFETTIVAMENTE andando, parte il conto alla rovescia dei 15 secondi!
        this.start15sTimer();

        // Controlla se l'audio è attivo
        if (this.ytPlayer && typeof this.ytPlayer.isMuted === 'function') {
          if (this.ytPlayer.isMuted() && !this.audioUnlocked) {
            if (this.dom.audioOverlay) this.dom.audioOverlay.classList.add('show');
          } else {
            if (this.dom.audioOverlay) this.dom.audioOverlay.classList.remove('show');
          }
        }
      } else if (e.data === window.YT.PlayerState.ENDED) {
        this.playNextVideo();
      } else if (e.data === window.YT.PlayerState.PAUSED) {
        this.isPlaying = false;
        // Se va in pausa, ferma il countdown per non bruciare i 15 secondi
        this.stop15sTimer();
      }
    }

    onPlayerError() {
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
          // Trascorsi i 15 secondi: cambia subito canale da solo!
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
      this.triggerStaticZap(200);

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
          if (this.audioUnlocked) {
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
        this.dom.videoMeta.textContent = `Clip ${String(data.position).padStart(2, '0')}/${data.total} • ${v.year} • ${v.category}`;
      }
      if (this.dom.osdBadge) {
        this.dom.osdBadge.textContent = `SILVO TV • C${String(data.position).padStart(2, '0')}`;
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
       EVENT LISTENERS
       ------------------------------------------------------------- */
    attachEventListeners() {
      // Sblocco audio al primo clic
      if (this.dom.btnUnmute) {
        this.dom.btnUnmute.addEventListener('click', (e) => {
          e.stopPropagation();
          this.unlockAudio();
        });
      }

      document.body.addEventListener('click', () => {
        if (!this.audioUnlocked) this.unlockAudio();
      });

      // TASTO FRECCIA AVANTI (SOLO AVANTI)
      if (this.dom.btnNext) {
        this.dom.btnNext.addEventListener('click', (e) => {
          e.stopPropagation();
          this.unlockAudio();
          this.playNextVideo();
        });
      }

      // TASTIERA
      window.addEventListener('keydown', (e) => {
        this.unlockAudio();

        // AVANTI: Spazio, Freccia Destra, Invio
        if (e.key === ' ' || e.key === 'ArrowRight' || e.key === 'Enter') {
          e.preventDefault();
          this.playNextVideo();
          return;
        }

        // TENTATIVO DI TORNARE INDIETRO: Freccia Sinistra o Backspace
        if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
          e.preventDefault();
          this.triggerAlertSoloAvanti();
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
