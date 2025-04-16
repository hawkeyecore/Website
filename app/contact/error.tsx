"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function ContactError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Contact page error:", error)
  }, [error])

  return (
    <div className="container flex flex-col items-center justify-center space-y-4 py-16 text-center">
      <h2 className="text-3xl font-bold tracking-tight">Something went wrong</h2>
      <p className="text-muted-foreground">We apologize for the inconvenience. Please try again.</p>
      <div className="flex gap-2">
        <Button onClick={() => reset()}>Try again</Button>
        <Button variant="outline" onClick={() => (window.location.href = "/")}>
          Return Home
        </Button>
      </div>
    </div>
  )
}
