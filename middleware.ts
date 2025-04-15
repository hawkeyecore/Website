import { type NextRequest, NextResponse } from "next/server"
import { verifyAuth } from "./lib/auth"

export async function middleware(request: NextRequest) {
  // Check if the request is for an admin route
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const session = await verifyAuth(request)

    // If not authenticated or not an admin/editor, redirect to login
    if (!session || (session.role !== "admin" && session.role !== "editor")) {
      const loginUrl = new URL("/login", request.url)
      loginUrl.searchParams.set("from", request.nextUrl.pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  // Remove any redirects to /about that might be here
  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
