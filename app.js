/**
 * SILVO TV - Logic & Engine (ES6+)
 * Autoplay a 15 secondi, selezione randomica da 30 video, navigazione rigorosamente SOLO AVANTI.
 * Supporto universale: compatibile sia con local HTTP server che con apertura diretta file://.
 */

(function () {
  'use strict';

  class SilvoTV {
    constructor() {
      // Recupero database dei 30 video
      this.videos = Array.isArray(window.BERLUSCONI_VIDEOS) ? [...window.BERLUSCONI_VIDEOS] : [];
      this.shuffledPlaylist = [];
      this.currentIndex = -1;
      this.currentVideo = null;

      // Timer a 15 secondi
      this.countdownSeconds = 15;
      this.timerInterval = null;

      // Stato Player
      this.isTvOn = false;
      this.ytPlayer = null;
      this.isPlayerReady = false;
      this.isMuted = false;
      this.volume = 100;
      this.hasUserInteracted = false;

      // Web Audio Synthesizer per effetti vintage TV
      this.audioCtx = null;

      // Elementi DOM
      this.dom = {
        body: document.body,
        crtScreen: document.getElementById('crt-screen'),
        standbyOverlay: document.getElementById('standby-overlay'),
        btnPowerStart: document.getElementById('btn-power-start'),
        btnPowerToggle: document.getElementById('btn-power-toggle'),
        btnRemotePower: document.getElementById('btn-remote-power'),
        tvLed: document.getElementById('tv-led'),
        ledLabel: document.getElementById('led-label'),
        displayChNum: document.getElementById('display-ch-num'),

        // OSD
        osdSeconds: document.getElementById('osd-seconds'),
        osdProgFill: document.getElementById('osd-prog-fill'),
        osdTitle: document.getElementById('osd-title'),
        osdCategory: document.getElementById('osd-meta-category'),
        osdYear: document.getElementById('osd-meta-year'),
        osdCount: document.getElementById('osd-meta-count'),
        osdAudio: document.getElementById('osd-meta-audio'),
        osdAlert: document.getElementById('osd-alert'),

        // Controlli
        btnAvantiChassis: document.getElementById('btn-avanti-chassis'),
        btnRemoteAvanti: document.getElementById('btn-remote-avanti'),
        btnFakeBack: document.getElementById('btn-fake-back'),
        btnVolUp: document.getElementById('btn-vol-up'),
        btnVolDown: document.getElementById('btn-vol-down'),
        btnVolMute: document.getElementById('btn-vol-mute'),
        btnRemoteVolUp: document.getElementById('btn-remote-vol-up'),
        btnRemoteVolDown: document.getElementById('btn-remote-vol-down'),
        btnRemoteMute: document.getElementById('btn-remote-mute'),

        // Canvas Static
        staticCanvas: document.getElementById('static-canvas')
      };

      this.initAudioContext();
      this.initStaticCanvas();
      this.initShufflePool();
      this.attachEventListeners();
      this.loadYouTubeIframeAPI();
    }

    /* -------------------------------------------------------------
       WEB AUDIO API - EFFETTI SONORI SINTETICI NATIVI
       ------------------------------------------------------------- */
    initAudioContext() {
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          this.audioCtx = new AudioContextClass();
        }
      } catch (e) {
        console.warn("Web Audio non supportato:", e);
      }
    }

    ensureAudioContext() {
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
    }

    playMechanicalClick() {
      if (!this.audioCtx) return;
      this.ensureAudioContext();
      try {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(140, this.audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(30, this.audioCtx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.4, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.06);
      } catch (e) {}
    }

    playZapSound() {
      if (!this.audioCtx) return;
      this.ensureAudioContext();
      try {
        const bufferSize = this.audioCtx.sampleRate * 0.16; // 160ms scarica
        const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.35));
        }
        const noise = this.audioCtx.createBufferSource();
        noise.buffer = buffer;
        const gain = this.audioCtx.createGain();
        gain.gain.setValueAtTime(0.25, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.15);
        noise.connect(gain);
        gain.connect(this.audioCtx.destination);
        noise.start();
      } catch (e) {}
    }

    playAlertBuzzer() {
      if (!this.audioCtx) return;
      this.ensureAudioContext();
      try {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, this.audioCtx.currentTime);
        osc.frequency.setValueAtTime(180, this.audioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.35, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.25);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.26);
      } catch (e) {}
    }

    /* -------------------------------------------------------------
       STATIC NOISE CANVAS (EFFETTO NEBBIA CRT)
       ------------------------------------------------------------- */
    initStaticCanvas() {
      if (!this.dom.staticCanvas) return;
      this.canvasCtx = this.dom.staticCanvas.getContext('2d');
      this.canvasWidth = this.dom.staticCanvas.width;
      this.canvasHeight = this.dom.staticCanvas.height;
      this.staticImgData = this.canvasCtx.createImageData(this.canvasWidth, this.canvasHeight);
      this.staticAnimId = null;
    }

    renderStaticFrame() {
      const data = this.staticImgData.data;
      const len = data.length;
      for (let i = 0; i < len; i += 4) {
        const val = (Math.random() * 255) | 0;
        data[i] = val;
        data[i + 1] = val;
        data[i + 2] = val;
        data[i + 3] = 255;
      }
      this.canvasCtx.putImageData(this.staticImgData, 0, 0);
    }

    triggerStaticZap(durationMs = 280) {
      if (!this.dom.staticCanvas) return;
      this.dom.staticCanvas.classList.add('active');
      this.playZapSound();

      const startTime = performance.now();
      const loop = (now) => {
        this.renderStaticFrame();
        if (now - startTime < durationMs) {
          this.staticAnimId = requestAnimationFrame(loop);
        } else {
          this.dom.staticCanvas.classList.remove('active');
          cancelAnimationFrame(this.staticAnimId);
        }
      };
      this.staticAnimId = requestAnimationFrame(loop);
    }

    /* -------------------------------------------------------------
       SHUFFLE DEI 30 VIDEO
       ------------------------------------------------------------- */
    initShufflePool() {
      if (!this.videos || this.videos.length === 0) return;
      const indices = Array.from({ length: this.videos.length }, (_, i) => i);
      // Fisher-Yates
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      this.shuffledPlaylist = indices;
      this.currentIndex = -1;
    }

    getNextVideo() {
      if (!this.videos || this.videos.length === 0) {
        return null;
      }
      this.currentIndex++;
      if (this.currentIndex >= this.shuffledPlaylist.length) {
        const lastIndex = this.shuffledPlaylist[this.shuffledPlaylist.length - 1];
        this.initShufflePool();
        if (this.shuffledPlaylist[0] === lastIndex && this.shuffledPlaylist.length > 1) {
          [this.shuffledPlaylist[0], this.shuffledPlaylist[1]] = [this.shuffledPlaylist[1], this.shuffledPlaylist[0]];
        }
        this.currentIndex = 0;
      }
      const videoIndex = this.shuffledPlaylist[this.currentIndex];
      return {
        video: this.videos[videoIndex],
        poolPosition: this.currentIndex + 1,
        poolTotal: this.videos.length
      };
    }

    /* -------------------------------------------------------------
       INTEGRAZIONE YOUTUBE IFRAME API
       ------------------------------------------------------------- */
    loadYouTubeIframeAPI() {
      if (window.YT && window.YT.Player) {
        this.onYouTubeApiReady();
        return;
      }

      window.onYouTubeIframeAPIReady = () => {
        this.onYouTubeApiReady();
      };

      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    onYouTubeApiReady() {
      const initialPick = this.videos[Math.floor(Math.random() * this.videos.length)] || { id: "DWETaMSRG-c" };

      this.ytPlayer = new window.YT.Player('yt-player', {
        height: '100%',
        width: '100%',
        videoId: initialPick.id,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          iv_load_policy: 3,
          enablejsapi: 1
        },
        events: {
          onReady: () => this.onPlayerReady(),
          onStateChange: (event) => this.onPlayerStateChange(event),
          onError: (event) => this.onPlayerError(event)
        }
      });
    }

    onPlayerReady() {
      this.isPlayerReady = true;
      console.log("📺 SILVO TV - YouTube Player Inizializzato con Successo!");
      if (this.isTvOn) {
        this.playNextVideo();
      }
    }

    onPlayerStateChange(event) {
      if (event.data === window.YT.PlayerState.PLAYING) {
        if (this.isTvOn) {
          this.ensureAudioUnmuted();
          this.startFifteenSecondTimer();
        }
      } else if (event.data === window.YT.PlayerState.ENDED) {
        if (this.isTvOn) {
          this.playNextVideo();
        }
      }
    }

    onPlayerError(event) {
      console.warn("Segnale TV disturbato / Errore YouTube:", event.data, "- Salto automatico avanti!");
      if (this.isTvOn) {
        setTimeout(() => this.playNextVideo(), 400);
      }
    }

    ensureAudioUnmuted() {
      if (!this.ytPlayer || typeof this.ytPlayer.unMute !== 'function') return;
      try {
        if (!this.isMuted) {
          this.ytPlayer.unMute();
          this.ytPlayer.setVolume(this.volume);
        }
      } catch (e) {
        console.warn("Impossibile impostare audio YouTube:", e);
      }
    }

    /* -------------------------------------------------------------
       COUNTDOWN 15 SECONDI PER CLIP
       ------------------------------------------------------------- */
    startFifteenSecondTimer() {
      this.stopFifteenSecondTimer();
      this.countdownSeconds = 15;
      this.updateOsdTimer();

      this.timerInterval = setInterval(() => {
        this.countdownSeconds--;
        this.updateOsdTimer();

        if (this.countdownSeconds <= 0) {
          this.stopFifteenSecondTimer();
          // Passa in automatico al prossimo video dopo 15 secondi esatti
          this.playNextVideo();
        }
      }, 1000);
    }

    stopFifteenSecondTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
    }

    updateOsdTimer() {
      const s = Math.max(0, this.countdownSeconds);
      if (this.dom.osdSeconds) {
        this.dom.osdSeconds.textContent = `${s}s`;
      }
      if (this.dom.osdProgFill) {
        const pct = (s / 15) * 100;
        this.dom.osdProgFill.style.width = `${pct}%`;
      }
    }

    /* -------------------------------------------------------------
       NAVIGAZIONE: RIGOROSAMENTE SOLO AVANTI >>
       ------------------------------------------------------------- */
    playNextVideo() {
      if (!this.isTvOn) return;

      this.stopFifteenSecondTimer();
      this.triggerStaticZap(260);

      const next = this.getNextVideo();
      if (!next) return;

      this.currentVideo = next.video;
      this.updateOsdMetadata(next);

      if (this.isPlayerReady && this.ytPlayer) {
        try {
          const startSec = next.video.startSeconds || 0;
          this.ytPlayer.loadVideoById({
            videoId: next.video.id,
            startSeconds: startSec
          });
          this.ytPlayer.playVideo();
          this.ensureAudioUnmuted();
        } catch (e) {
          console.error("Errore riproduzione:", e);
        }
      }

      this.startFifteenSecondTimer();
    }

    updateOsdMetadata(nextData) {
      const v = nextData.video;
      if (this.dom.osdTitle) this.dom.osdTitle.textContent = v.title;
      if (this.dom.osdCategory) this.dom.osdCategory.textContent = `CAT: ${v.category.toUpperCase()}`;
      if (this.dom.osdYear) this.dom.osdYear.textContent = `ANNO: ${v.year}`;
      if (this.dom.osdCount) this.dom.osdCount.textContent = `CLIP: ${String(nextData.poolPosition).padStart(2, '0')} / 30`;
      
      const chNum = (nextData.poolPosition % 99) + 1;
      if (this.dom.displayChNum) {
        this.dom.displayChNum.textContent = `C${String(chNum).padStart(2, '0')}`;
      }
    }

    /* -------------------------------------------------------------
       POWER TV
       ------------------------------------------------------------- */
    turnOnTv() {
      this.hasUserInteracted = true;
      this.ensureAudioContext();
      this.playMechanicalClick();

      this.isTvOn = true;
      this.dom.body.classList.add('tv-on');
      this.dom.standbyOverlay.classList.add('hidden');
      this.dom.tvLed.className = 'led-light on';
      this.dom.ledLabel.textContent = 'ACCESO';

      // Animazione tubo catodico CRT
      this.dom.crtScreen.classList.remove('power-on-anim');
      void this.dom.crtScreen.offsetWidth;
      this.dom.crtScreen.classList.add('power-on-anim');

      this.playNextVideo();
    }

    turnOffTv() {
      this.playMechanicalClick();
      this.stopFifteenSecondTimer();

      this.isTvOn = false;
      this.dom.body.classList.remove('tv-on');
      this.dom.standbyOverlay.classList.remove('hidden');
      this.dom.tvLed.className = 'led-light standby';
      this.dom.ledLabel.textContent = 'STANDBY';
      if (this.dom.displayChNum) {
        this.dom.displayChNum.textContent = '---';
      }

      if (this.isPlayerReady && this.ytPlayer) {
        try {
          this.ytPlayer.pauseVideo();
        } catch (e) {}
      }
    }

    togglePower() {
      if (this.isTvOn) {
        this.turnOffTv();
      } else {
        this.turnOnTv();
      }
    }

    /* -------------------------------------------------------------
       ALLERTA: TENTATIVO DI TORNARE INDIETRO
       ------------------------------------------------------------- */
    triggerBackAttemptAlert() {
      this.playAlertBuzzer();
      if (this.dom.osdAlert) {
        this.dom.osdAlert.classList.add('show');
        clearTimeout(this.alertTimeout);
        this.alertTimeout = setTimeout(() => {
          this.dom.osdAlert.classList.remove('show');
        }, 2500);
      }
    }

    /* -------------------------------------------------------------
       AUDIO & VOLUME
       ------------------------------------------------------------- */
    setVolume(newVol) {
      this.volume = Math.max(0, Math.min(100, newVol));
      if (this.isPlayerReady && this.ytPlayer) {
        try {
          this.ytPlayer.setVolume(this.volume);
          if (this.volume > 0 && this.isMuted) {
            this.toggleMute();
          }
        } catch (e) {}
      }
      if (this.dom.osdAudio) {
        this.dom.osdAudio.textContent = `🔊 AUDIO ${this.volume}%`;
      }
    }

    toggleMute() {
      this.isMuted = !this.isMuted;
      if (this.isPlayerReady && this.ytPlayer) {
        try {
          if (this.isMuted) {
            this.ytPlayer.mute();
            if (this.dom.osdAudio) this.dom.osdAudio.textContent = `🔇 MUTO`;
          } else {
            this.ytPlayer.unMute();
            this.ytPlayer.setVolume(this.volume);
            if (this.dom.osdAudio) this.dom.osdAudio.textContent = `🔊 AUDIO ${this.volume}%`;
          }
        } catch (e) {}
      }
    }

    /* -------------------------------------------------------------
       EVENT LISTENERS
       ------------------------------------------------------------- */
    attachEventListeners() {
      // Tasti Power
      if (this.dom.btnPowerStart) this.dom.btnPowerStart.addEventListener('click', () => this.turnOnTv());
      if (this.dom.btnPowerToggle) this.dom.btnPowerToggle.addEventListener('click', () => this.togglePower());
      if (this.dom.btnRemotePower) this.dom.btnRemotePower.addEventListener('click', () => this.togglePower());

      // Tasti AVANTI (SOLO AVANTI)
      if (this.dom.btnAvantiChassis) {
        this.dom.btnAvantiChassis.addEventListener('click', () => {
          this.playMechanicalClick();
          if (!this.isTvOn) this.turnOnTv();
          else this.playNextVideo();
        });
      }

      if (this.dom.btnRemoteAvanti) {
        this.dom.btnRemoteAvanti.addEventListener('click', () => {
          this.playMechanicalClick();
          if (!this.isTvOn) this.turnOnTv();
          else this.playNextVideo();
        });
      }

      // Finto Tasto Indietro
      if (this.dom.btnFakeBack) {
        this.dom.btnFakeBack.addEventListener('click', () => {
          this.triggerBackAttemptAlert();
        });
      }

      // Volume
      if (this.dom.btnVolUp) this.dom.btnVolUp.addEventListener('click', () => this.setVolume(this.volume + 15));
      if (this.dom.btnVolDown) this.dom.btnVolDown.addEventListener('click', () => this.setVolume(this.volume - 15));
      if (this.dom.btnVolMute) this.dom.btnVolMute.addEventListener('click', () => this.toggleMute());

      if (this.dom.btnRemoteVolUp) this.dom.btnRemoteVolUp.addEventListener('click', () => this.setVolume(this.volume + 15));
      if (this.dom.btnRemoteVolDown) this.dom.btnRemoteVolDown.addEventListener('click', () => this.setVolume(this.volume - 15));
      if (this.dom.btnRemoteMute) this.dom.btnRemoteMute.addEventListener('click', () => this.toggleMute());

      // Keyboard
      window.addEventListener('keydown', (e) => {
        const key = e.key;

        // AVANTI
        if (key === ' ' || key === 'ArrowRight' || key === 'Enter') {
          e.preventDefault();
          this.playMechanicalClick();
          if (!this.isTvOn) this.turnOnTv();
          else this.playNextVideo();
          return;
        }

        // TENTATIVO INDIETRO
        if (key === 'ArrowLeft' || key === 'Backspace') {
          e.preventDefault();
          this.triggerBackAttemptAlert();
          return;
        }

        // POWER
        if (key === 'p' || key === 'P') {
          this.togglePower();
          return;
        }

        // MUTE
        if (key === 'm' || key === 'M') {
          this.toggleMute();
          return;
        }

        // VOLUME
        if (key === 'ArrowUp') {
          e.preventDefault();
          this.setVolume(this.volume + 10);
        } else if (key === 'ArrowDown') {
          e.preventDefault();
          this.setVolume(this.volume - 10);
        }
      });
    }
  }

  // Istanziazione al caricamento
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.silvoTv = new SilvoTV();
    });
  } else {
    window.silvoTv = new SilvoTV();
  }
})();
