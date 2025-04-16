const { createServer } = require("http")
const { parse } = require("url")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const hostname = process.env.NODE_ENV === "production" ? "0.0.0.0" : "localhost"
const port = process.env.PORT || 3000

// Create server immediately to respond to health checks
const server = createServer((req, res) => {
  const parsedUrl = parse(req.url, true)

  // Railway checks the root path for health checks
  if (parsedUrl.pathname === "/" && !app.prepared) {
    // For health checks to the root path, respond with 200 OK
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ status: "ok", message: "Server starting" }))
    return
  }

  // Also keep our dedicated health check endpoints
  if (parsedUrl.pathname === "/health" || parsedUrl.pathname === "/api/health") {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ status: "ok" }))
    return
  }

  // For non-health check requests, if Next.js isn't ready yet
  if (!app.prepared) {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.end("<html><body><h1>Server is starting up, please wait...</h1></body></html>")
    return
  }

  // Once Next.js is ready, handle the request normally
  handle(req, res, parsedUrl).catch((err) => {
    console.error("Error occurred handling", req.url, err)
    res.statusCode = 500
    res.end("Internal Server Error")
  })
})

// Start the server immediately
server.listen(port, hostname, (err) => {
  if (err) throw err
  console.log(`> Server listening on http://${hostname}:${port}`)
})

// Prepare Next.js app
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()
app.prepared = false

// Set a flag when Next.js is ready
app.prepare().then(() => {
  app.prepared = true
  console.log("> Next.js app is ready")
})
