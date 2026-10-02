# Local helper: serves the project and lets tools/assets.html save rendered PNGs into it.
# Run from the project root: python3 tools/save_server.py
import http.server, os, base64, urllib.parse
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ALLOWED = {'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png', 'og.jpg'}
class H(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **k): super().__init__(*a, directory=ROOT, **k)
    def do_POST(self):
        name = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query).get('name', [''])[0]
        if name not in ALLOWED: self.send_error(400, 'name not allowed'); return
        data = self.rfile.read(int(self.headers['Content-Length'])).decode()
        with open(os.path.join(ROOT, name), 'wb') as f: f.write(base64.b64decode(data.split(',', 1)[1]))
        self.send_response(200); self.end_headers(); self.wfile.write(b'saved ' + name.encode())
http.server.ThreadingHTTPServer(('127.0.0.1', 5192), H).serve_forever()
