const express = require("express")
const { createServer } = require("http")
const { parse } = require("url")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const hostname = "0.0.0.0"
const port = process.env.PORT || 3000

// Initialize Next.js
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    // Health check endpoint for Railway
    server.get("/health", (req, res) => {
      res.status(200).send("OK")
    })

    // Root health check for Railway
    server.get("/", (req, res, next) => {
      const parsedUrl = parse(req.url, true)
      if (parsedUrl.pathname === "/") {
        res.setHeader("x-health-check", "true")
      }
      next()
    })

    // Let Next.js handle all other routes
    server.all("*", (req, res) => {
      const parsedUrl = parse(req.url, true)
      return handle(req, res, parsedUrl)
    })

    // Start the server
    server.listen(port, hostname, (err) => {
      if (err) throw err
      console.log(`> Ready on http://${hostname}:${port}`)
    })
  })
  .catch((err) => {
    console.error("Error starting server:", err)
    process.exit(1)
  })
