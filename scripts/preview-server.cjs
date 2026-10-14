const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.PORT) || 4173;
const mime = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".svg": "image/svg+xml" };

async function main() {
const { default: assistant } = await import("../api/assistant.mjs");
const server = http.createServer((req, res) => {
  const urlPath = new URL(req.url, `http://${req.headers.host || "localhost"}`).pathname;
  if (urlPath === "/api/assistant") {
    if (req.method !== "POST") {
      res.writeHead(405, { Allow: "POST", "Content-Type": "application/json; charset=utf-8" });
      return res.end(JSON.stringify({ error: "仅支持 POST 请求。" }));
    }
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 12000) { res.writeHead(413); res.end(); req.destroy(); }
    });
    req.on("end", async () => {
      try { JSON.parse(body || "{}"); } catch (_) {
        res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
        return res.end(JSON.stringify({ error: "请求格式无效。" }));
      }
      try {
        const request = new Request(`http://${req.headers.host || "localhost"}${urlPath}`, { method: req.method, headers: req.headers, body });
        const response = await assistant.fetch(request);
        res.writeHead(response.status, Object.fromEntries(response.headers));
        res.end(Buffer.from(await response.arrayBuffer()));
      } catch (_) {
        if (!res.headersSent) { res.writeHead(502, { "Content-Type": "application/json; charset=utf-8" }); res.end(JSON.stringify({ error: "请求暂时无法完成。" })); }
      }
    });
    return;
  }

  let pathname;
  try { pathname = decodeURIComponent(urlPath); } catch (_) { res.writeHead(400); return res.end(); }
  if (pathname === "/") pathname = "/index.html";
  const file = path.resolve(root, `.${pathname}`);
  if (!file.startsWith(`${root}${path.sep}`)) { res.writeHead(403); return res.end(); }
  fs.readFile(file, (error, content) => {
    if (error) { res.writeHead(404); return res.end("Not found"); }
    res.writeHead(200, { "Content-Type": mime[path.extname(file)] || "application/octet-stream", "X-Content-Type-Options": "nosniff" });
    res.end(content);
  });
});

server.listen(port, "127.0.0.1", () => console.log(`漫行 90+ preview: http://127.0.0.1:${port}`));
}

main().catch((error) => { console.error(error.message); process.exitCode = 1; });
