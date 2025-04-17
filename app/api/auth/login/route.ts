import { createSession, comparePasswords } from "@/lib/auth"
import { query } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Get user from database
    const users = (await query("SELECT id, email, name, role, password FROM users WHERE email = $1", [email])) as any[]
    const user = users[0]

    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Verify password
    const passwordValid = await comparePasswords(password, user.password)
    if (!passwordValid) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Check for JWT_SECRET
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is not defined in environment variables")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    // Create session
    await createSession(user.id, user.email, user.role)

    return NextResponse.json({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    })
  } catch (error: any) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
  }
}
