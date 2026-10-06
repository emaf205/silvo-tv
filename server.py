#!/usr/bin/env python3
"""
SILVO TV - Local Server Launcher
Avvia un server HTTP locale su porta 8080 e apre automaticamente SILVO TV nel browser predefinito.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        # Log snello dei video caricati
        pass

def find_available_port(start_port):
    import socket
    port = start_port
    while port < start_port + 50:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            if s.connect_ex(('localhost', port)) != 0:
                return port
            port += 1
    return start_port

def main():
    port = find_available_port(PORT)
    url = f"http://localhost:{port}/index.html"
    
    print("=" * 60)
    print("📺 SILVO TV - IL TELEVISORE DI SILVIO BERLUSCONI")
    print("=" * 60)
    print(f"📡 Server locale attivo su: {url}")
    print("⚡ Autoplay 15 secondi per video, database di 30 clip.")
    print("👉 REGOLA SUPREMA: SI VA SOLO AVANTI!")
    print("Premi Ctrl+C per spegnere il server.")
    print("=" * 60)

    # Apertura automatica nel browser
    webbrowser.open(url)

    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", port), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🔌 SILVO TV spenta. Arrivederci!")
            sys.exit(0)

if __name__ == "__main__":
    main()
