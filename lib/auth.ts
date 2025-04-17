import { cookies } from "next/headers"
import { jwtVerify, SignJWT } from "jose"
import bcrypt from "bcryptjs"

const secret = process.env.JWT_SECRET

if (!secret) {
  throw new Error("JWT_SECRET is not defined in environment variables")
}

async function verifyAuth(request: Request) {
  const token = cookies().get("token")?.value

  if (!token) {
    return null
  }

  try {
    const verified = await jwtVerify(token, new TextEncoder().encode(secret))
    return verified.payload as { id: string; email: string; role: string }
  } catch (err) {
    return null
  }
}

async function getCurrentUser() {
  const token = cookies().get("token")?.value

  if (!token) {
    return null
  }

  try {
    const verified = await jwtVerify(token, new TextEncoder().encode(secret))
    return verified.payload as { id: string; email: string; role: string; name: string }
  } catch (err) {
    return null
  }
}

async function createSession(userId: number, email: string, role: string) {
  const iat = Math.floor(Date.now() / 1000)
  const exp = iat + 60 * 60 * 24 * 7 // 7 days

  const token = await new SignJWT({ id: userId.toString(), email, role })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(secret))

  cookies().set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  })
}

async function comparePasswords(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(plainTextPassword, hashedPassword)
}

async function logOut() {
  cookies().delete("token")
}

export { verifyAuth, getCurrentUser, createSession, comparePasswords, logOut }
