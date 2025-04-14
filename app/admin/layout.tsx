import type { ReactNode } from "react"
import Link from "next/link"
import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, FileText, Package, Briefcase, Users, Settings, LogOut } from "lucide-react"

export default async function AdminLayout({
  children,
}: {
  children: ReactNode
}) {
  const user = await getCurrentUser()

  // Double-check authentication
  if (!user || (user.role !== "admin" && user.role !== "editor")) {
    redirect("/login")
  }

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Blog Posts", href: "/admin/blog-posts", icon: FileText },
    { name: "Products", href: "/admin/products", icon: Package },
    { name: "Services", href: "/admin/services", icon: Briefcase },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ]

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted hidden md:block">
        <div className="p-4 border-b">
          <Link href="/" className="flex items-center gap-2">
            <h2 className="text-xl font-bold">TechCorp Admin</h2>
          </Link>
        </div>

        <nav className="p-4 space-y-2">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="flex items-center gap-3 p-2 rounded-md hover:bg-accent">
              <item.icon size={18} />
              <span>{item.name}</span>
            </Link>
          ))}

          {user.role === "admin" && (
            <Link href="/admin/users" className="flex items-center gap-3 p-2 rounded-md hover:bg-accent">
              <Users size={18} />
              <span>Users</span>
            </Link>
          )}

          <form action="/api/auth/logout" method="POST">
            <Button
              type="submit"
              variant="ghost"
              className="flex w-full items-center gap-3 p-2 rounded-md hover:bg-accent justify-start"
            >
              <LogOut size={18} />
              <span>Sign Out</span>
            </Button>
          </form>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navbar */}
        <header className="bg-background border-b p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold md:hidden">TechCorp Admin</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Logged in as {user.name}</span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}
