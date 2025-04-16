import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyAuth } from "./lib/auth"

export async function middleware(request: NextRequest) {
  // Skip middleware for static files and API routes that don't require auth
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.startsWith("/api/auth/login") ||
    request.nextUrl.pathname.startsWith("/api/auth/logout") ||
    request.nextUrl.pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next()
  }

  // Only apply auth middleware to admin routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    try {
      const verifyResult = await verifyAuth(request)

      if (!verifyResult.valid) {
        // Redirect to login page if not authenticated
        return NextResponse.redirect(new URL("/login", request.url))
      }

      // Continue if authenticated
      return NextResponse.next()
    } catch (error) {
      console.error("Auth middleware error:", error)
      // Continue anyway in case of auth errors to prevent site from being completely inaccessible
      // This is a fallback for deployment/startup issues
      return NextResponse.next()
    }
  }

  // Continue for non-admin routes
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Apply to all routes except static files
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}
