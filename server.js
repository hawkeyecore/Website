// Absolute minimal HTTP server that responds to all requests
const http = require("http")

const port = process.env.PORT || 3000

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  // Log all incoming requests
  console.log(`Received request: ${req.method} ${req.url}`)

  // Respond with 200 OK to all requests
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end("OK - Server is running")
})

// Start server on all interfaces
server.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${port}/`)
})

// Handle server errors
server.on("error", (err) => {
  console.error("Server error:", err)
})

// Log when the process exits
process.on("exit", (code) => {
  console.log(`Process exiting with code: ${code}`)
})

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("Uncaught exception:", err)
})

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason)
})
