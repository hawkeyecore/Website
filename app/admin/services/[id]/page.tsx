import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { notFound } from "next/navigation"
import ServiceForm from "../service-form"
import { getById } from "@/lib/db"

export const metadata: Metadata = {
  title: "Edit Service",
  description: "Edit an existing service",
}

async function getService(id: number) {
  try {
    return await getById("services", id)
  } catch (error) {
    console.error("Error fetching service:", error)
    return null
  }
}

export default async function EditServicePage({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)
  if (isNaN(id)) {
    notFound()
  }

  const service = await getService(id)
  if (!service) {
    notFound()
  }

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
        <h1 className="text-2xl font-bold mt-2">Edit Service: {service.title}</h1>
      </div>

      <ServiceForm service={service} isEditing />
    </div>
  )
}
