import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import ServiceForm from "../service-form"

export const metadata: Metadata = {
  title: "Create Service",
  description: "Create a new service",
}

export default function CreateServicePage() {
  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/admin/services"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Services
        </Link>
        <h1 className="text-2xl font-bold mt-2">Create Service</h1>
      </div>

      <ServiceForm />
    </div>
  )
}
