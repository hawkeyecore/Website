import { logOut } from "@/lib/auth"
import { NextResponse } from "next/server"

export async function POST() {
  try {
    await logOut()
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Logout error:", error)
    return NextResponse.json({ error: "Failed to log out" }, { status: 500 })
  }
}
