// Custom server for Railway deployment
const http = require("http")
const { parse } = require("url")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const hostname = process.env.NODE_ENV === "production" ? "0.0.0.0" : "localhost"
const port = process.env.PORT || 3000

// Create server immediately to respond to health checks
const server = http.createServer((req, res) => {
  const parsedUrl = parse(req.url, true)

  // Railway checks the root path for health checks
  if (parsedUrl.pathname === "/" && req.method === "HEAD") {
    // For health checks, respond with 200 OK
    res.statusCode = 200
    res.end()
    return
  }

  // Also keep our dedicated health check endpoints
  if (parsedUrl.pathname === "/health" || parsedUrl.pathname === "/api/health") {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ status: "ok" }))
    return
  }

  // For all other requests, let Next.js handle it
  handle(req, res, parsedUrl).catch((err) => {
    console.error("Error occurred handling", req.url, err)
    res.statusCode = 500
    res.end("Internal Server Error")
  })
})

// Prepare Next.js app
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

// Prepare Next.js first, then start server
app.prepare().then(() => {
  // Start server on all interfaces
  server.listen(port, hostname, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})

// Handle server errors
server.on("error", (err) => {
  console.error("Server error:", err)
})
