import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { OrganizationJsonLd } from "./jsonld"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Hawkeye Core - IT Consulting & Technology Solutions",
    template: "%s | Hawkeye Core",
  },
  description:
    "Hawkeye Core provides cutting-edge IT consulting and technology solutions to help businesses excel in today's competitive landscape.",
  keywords: [
    "IT consulting",
    "technology solutions",
    "software development",
    "cybersecurity",
    "cloud solutions",
    "data analytics",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hawkeye-core.com",
    title: "Hawkeye Core - IT Consulting & Technology Solutions",
    description:
      "Hawkeye Core provides cutting-edge IT consulting and technology solutions to help businesses excel in today's competitive landscape.",
    siteName: "Hawkeye Core",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hawkeye Core - IT Consulting & Technology Solutions",
    description:
      "Hawkeye Core provides cutting-edge IT consulting and technology solutions to help businesses excel in today's competitive landscape.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
        <OrganizationJsonLd />
      </body>
    </html>
  )
}


import './globals.css'