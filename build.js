#!/usr/bin/env node
/**
 * SILVO TV - Script di build statico per Cloudflare Pages e Hosting Web
 * Copia tutti gli asset necessari nella cartella dist/ per la pubblicazione immediata.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const DIST_DIR = path.join(ROOT_DIR, 'dist');

const ASSETS_TO_COPY = [
  'index.html',
  'style.css',
  'app.js',
  'videos.js',
  'manifest.webmanifest',
  'service-worker.js',
  'icon-192.png',
  'icon-512.png',
  'apple-touch-icon.png',
  'screenshot.png',
  '_headers',
  '_redirects',
  'assets'
];

console.log('🚀 [SILVO TV] Avvio build statica per Cloudflare Pages...');

// Pulisce e ricrea la cartella dist/
if (fs.existsSync(DIST_DIR)) {
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DIST_DIR, { recursive: true });

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const child of fs.readdirSync(src)) {
      copyRecursive(path.join(src, child), path.join(dest, child));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

let copiedCount = 0;
for (const item of ASSETS_TO_COPY) {
  const srcPath = path.join(ROOT_DIR, item);
  const destPath = path.join(DIST_DIR, item);

  if (fs.existsSync(srcPath)) {
    copyRecursive(srcPath, destPath);
    console.log(`  ✓ [Copiato] ${item}`);
    copiedCount++;
  } else {
    console.warn(`  ⚠️ [Opzionale non presente] ${item}`);
  }
}

// Verifica integrità file critici
const CRITICAL_FILES = [
  'index.html',
  'style.css',
  'app.js',
  'videos.js',
  'manifest.webmanifest',
  'service-worker.js'
];

for (const file of CRITICAL_FILES) {
  const filePath = path.join(DIST_DIR, file);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).size === 0) {
    console.error(`❌ [ERRORE] File critico mancante o vuoto in dist/: ${file}`);
    process.exit(1);
  }
}

console.log(`✅ [SILVO TV] Build completata con successo! ${copiedCount} asset verificati e pronti in 'dist/'.`);
