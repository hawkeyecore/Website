import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"
import type { NextRequest } from "next/server"
import bcrypt from "bcryptjs"

const JWT_SECRET = process.env.JWT_SECRET || process.env.JWT_SECRET_KEY || "fallback-secret-for-development-only"

// Hash password
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}

// Compare password with hash
export async function comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
  try {
    return await bcrypt.compare(password, hashedPassword)
  } catch (error) {
    console.error("Password comparison error:", error)
    return false
  }
}

// Create session (set JWT cookie)
export async function createSession(userId: number, email: string, role: string) {
  try {
    // Create JWT
    const token = await new SignJWT({ userId, email, role })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("8h")
      .sign(new TextEncoder().encode(JWT_SECRET))

    // Set cookie
    cookies().set({
      name: "session",
      value: token,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 8, // 8 hours
    })

    return true
  } catch (error) {
    console.error("Session creation error:", error)
    return false
  }
}

// Verify auth from request
export async function verifyAuth(request: NextRequest) {
  try {
    const token = request.cookies.get("session")?.value

    if (!token) {
      return { valid: false }
    }

    const verified = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET))
    return { valid: true, payload: verified.payload }
  } catch (error) {
    console.error("Auth verification error:", error)
    return { valid: false }
  }
}

// Get current user from request
export async function getCurrentUser(request?: NextRequest) {
  try {
    if (!request) return null
    const result = await verifyAuth(request)
    if (!result.valid) {
      return null
    }
    return result.payload
  } catch (error) {
    console.error("Get current user error:", error)
    return null
  }
}

// Logout (clear session cookie)
export async function logOut() {
  try {
    cookies().set({
      name: "session",
      value: "",
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 0,
    })
    return true
  } catch (error) {
    console.error("Logout error:", error)
    return false
  }
}
