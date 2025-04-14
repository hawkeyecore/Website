import { compare, hash } from "bcryptjs"
import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"
import type { NextRequest } from "next/server"
import { query } from "./db"

const secretKey = process.env.JWT_SECRET_KEY || "your-secret-key-min-32-chars-long-here!!"
const key = new TextEncoder().encode(secretKey)

export async function hashPassword(password: string): Promise<string> {
  return hash(password, 12)
}

export async function comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
  return compare(password, hashedPassword)
}

export async function createSession(userId: number, email: string, role: string): Promise<string> {
  const token = await new SignJWT({ userId, email, role })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(key)

  cookies().set({
    name: "session_token",
    value: token,
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 8, // 8 hours
  })

  return token
}

export async function verifyAuth(request?: NextRequest) {
  const cookieStore = request ? request.cookies : cookies()
  const token = cookieStore.get("session_token")?.value

  if (!token) {
    return null
  }

  try {
    const verified = await jwtVerify(token, key)
    return verified.payload as { userId: number; email: string; role: string }
  } catch (err) {
    return null
  }
}

export async function logOut() {
  cookies().set({
    name: "session_token",
    value: "",
    expires: new Date(0),
    path: "/",
  })
}

export async function getCurrentUser() {
  const session = await verifyAuth()

  if (!session?.userId) {
    return null
  }

  try {
    const sql = `SELECT id, email, name, role FROM users WHERE id = ?`
    const users = (await query(sql, [session.userId])) as any[]
    const user = users[0]

    if (!user) {
      return null
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    }
  } catch (error) {
    console.error("Failed to get current user:", error)
    return null
  }
}
