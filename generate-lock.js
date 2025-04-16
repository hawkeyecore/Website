const fs = require("fs")
const { execSync } = require("child_process")

// Check if package-lock.json exists
if (!fs.existsSync("package-lock.json")) {
  console.log("Generating package-lock.json...")
  try {
    // Run npm install to generate package-lock.json
    execSync("npm install --package-lock-only", { stdio: "inherit" })
    console.log("package-lock.json generated successfully")
  } catch (error) {
    console.error("Failed to generate package-lock.json:", error)
    process.exit(1)
  }
} else {
  console.log("package-lock.json already exists")
}
