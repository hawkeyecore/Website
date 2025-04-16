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

// Respond to root path for Railway's health check
server.get("/", (req, res) => {
  res.status(200).send("OK")
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
    console.log("> Next.js ready")

    // Handle all other requests with Next.js
    server.all("*", (req, res) => {
      return handle(req, res)
    })
  })
  .catch((err) => {
    console.error("Error preparing Next.js app:", err)
  })

// Error handling middleware
server.use((err, req, res, next) => {
  console.error("Unexpected error:", err)
  res.status(500).send("Internal Server Error")
})