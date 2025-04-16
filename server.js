// Simple Express server that responds to all requests immediately
const express = require("express")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000

// Create Express server
const server = express()

// Respond to health checks immediately
server.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" })
})

// Respond to root path immediately for Railway's health check
server.get("/", (req, res, next) => {
  if (!app.prepared) {
    return res.status(200).send("Server starting...")
  }
  next()
})

// Start server immediately before Next.js is ready
server.listen(port, "0.0.0.0", (err) => {
  if (err) throw err
  console.log(`> Server listening on port ${port}`)
})

// Initialize Next.js
app
  .prepare()
  .then(() => {
    app.prepared = true
    console.log("> Next.js ready")

    // Handle all other requests with Next.js
    server.all("*", (req, res) => {
      return handle(req, res)
    })
  })
  .catch((err) => {
    console.error("Error preparing Next.js app:", err)
  })
