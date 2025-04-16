import { createSession, comparePasswords } from "@/lib/auth"
import { query } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    try {
      // Get user from database
      const users = (await query("SELECT id, email, name, role, password FROM users WHERE email = $1", [
        email,
      ])) as any[]

      const user = users[0]

      if (!user) {
        return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
      }

      // Verify password
      const passwordValid = await comparePasswords(password, user.password)
      if (!passwordValid) {
        return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
      }

      // Create session
      await createSession(user.id, user.email, user.role)

      return NextResponse.json({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      })
    } catch (dbError) {
      console.error("Database error during login:", dbError)

      // For development/testing only - allow admin login when database is unavailable
      if (process.env.NODE_ENV !== "production" && email === "admin@example.com" && password === "admin123") {
        console.log("Using fallback admin login for development")
        await createSession(1, email, "admin")

        return NextResponse.json({
          id: 1,
          email: "admin@example.com",
          name: "Admin User",
          role: "admin",
        })
      }

      return NextResponse.json({ error: "Authentication failed due to database error" }, { status: 500 })
    }
  } catch (error: any) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
  }
}
