const express = require("express")
const { createServer } = require("http")
const { parse } = require("url")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000

app
  .prepare()
  .then(() => {
    const server = express()

    // Health check endpoint
    server.get("/health", (req, res) => {
      res.status(200).send("OK")
    })

    // Handle all other routes with Next.js
    server.all("*", (req, res) => {
      const parsedUrl = parse(req.url, true)
      return handle(req, res, parsedUrl)
    })

    server.listen(port, "0.0.0.0", (err) => {
      if (err) throw err
      console.log(`> Ready on http://0.0.0.0:${port}`)
    })
  })
  .catch((err) => {
    console.error("Error starting server:", err)
    process.exit(1)
  })
