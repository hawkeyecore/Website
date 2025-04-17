import bcrypt from "bcryptjs"
import { query } from "../lib/db"

async function resetAdminUser() {
  try {
    // Define admin user details
    const email = "admin@example.com"
    const name = "Admin User"
    const role = "admin"
    const plainPassword = "admin123" // You can change this to any password you want

    // Hash the password
    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(plainPassword, salt)

    // Check if admin user exists
    console.log("Checking if admin user exists...")
    const adminCheck = await query("SELECT id FROM users WHERE email = $1", [email])

    if (adminCheck.length === 0) {
      // Create new admin user
      console.log("Admin user does not exist. Creating new admin user...")
      await query(
        `
        INSERT INTO users (email, name, password, role)
        VALUES ($1, $2, $3, $4)
        `,
        [email, name, hashedPassword, role],
      )
      console.log("Admin user created successfully!")
    } else {
      // Update existing admin user
      console.log("Admin user exists. Updating password...")
      await query(
        `
        UPDATE users
        SET password = $1
        WHERE email = $2
        `,
        [hashedPassword, email],
      )
      console.log("Admin user password updated successfully!")
    }

    console.log("\n=== ADMIN USER CREDENTIALS ===")
    console.log(`Email: ${email}`)
    console.log(`Password: ${plainPassword}`)
    console.log("=============================")
  } catch (error) {
    console.error("Error resetting admin user:", error)
  }
}

// Run the script
resetAdminUser().then(() => {
  console.log("Done, you can now exit the process")
  process.exit(0)
})

async function login(email: string, password: string) {
  const user = await query("SELECT * FROM users WHERE email = $1", [email]);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  return user; // Or generate a session/token
}