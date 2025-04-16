import Link from "next/link"
import Image from "next/image"
import { Phone, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full py-12 md:py-24 lg:py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/hawkeye-core-logo.png" alt="Hawkeye Core Logo" width={32} height={32} className="rounded" />
              <span className="text-xl font-bold">Hawkeye Core</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Founded in 2022 and based in Houston, Texas, Hawkeye Core is an IT consulting company committed to
              delivering cutting-edge technology solutions that empower businesses to excel in today's competitive
              landscape. We specialize in a broad range of services, including the development and deployment of
              software agents, IT consulting, app and website support, network solutions, and professional training.
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61573424889325&locale=ar_AR"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://x.com/Hawkeye_core?s=09" className="text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/hawkeye-core/"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.instagram.com/hawkeye_core?igsh=c3U3c3NycDFoMDBk"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-base font-medium">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-base font-medium">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground">
                  Software
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-base font-medium">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5" />
                <span className="text-muted-foreground">+1 281-760-7332</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5" />
                <span className="text-muted-foreground">info@hawkeye-core.com</span>
              </li>
              <li className="text-muted-foreground">
                10780 Westview Dr Ste F PMB 10006
                <br />
                Houston, TX 77043
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Hawkeye Core. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
