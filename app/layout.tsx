import type React from "react"
import "@/app/globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Hawkeye Core - Innovative IT Solutions",
  description: "Empowering businesses with cutting-edge IT consulting and technology solutions.",
  icons: {
    icon: "/hawkeye-core-logo.png",
  },
    generator: 'v0.dev'
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'