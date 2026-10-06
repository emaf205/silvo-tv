#!/usr/bin/env bash
# SILVO TV - Script di avvio rapido per macOS/Linux
cd "$(dirname "$0")" || exit 1

if command -v python3 >/dev/null 2>&1; then
  echo "📺 Avvio SILVO TV con Python..."
  python3 server.py
elif command -v open >/dev/null 2>&1; then
  echo "📺 Apertura diretta in browser..."
  open index.html
elif command -v xdg-open >/dev/null 2>&1; then
  xdg-open index.html
else
  echo "Apri index.html nel tuo browser preferito!"
fi
