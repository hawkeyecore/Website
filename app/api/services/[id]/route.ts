import { type NextRequest, NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { getById, update, remove } from "@/lib/db"

// Get a service by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 })
    }

    const service = await getById("services", id)
    if (!service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 })
    }

    return NextResponse.json(service)
  } catch (error: any) {
    console.error("Error getting service:", error)
    return NextResponse.json({ error: "Failed to get service" }, { status: 500 })
  }
}

// Update a service
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Get current user
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const id = Number.parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 })
    }

    // Check if service exists
    const existingService = await getById("services", id)
    if (!existingService) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 })
    }

    const { title, slug, description, content, icon, image_url } = await req.json()

    // Validate required fields
    if (!title || !slug || !description) {
      return NextResponse.json({ error: "Title, slug, and description are required" }, { status: 400 })
    }

    // Update the service
    const serviceData = {
      title,
      slug,
      description,
      content: content || null,
      icon: icon || null,
      image_url: image_url || null,
      updated_at: new Date(),
    }

    await update("services", id, serviceData)

    return NextResponse.json({ id, ...serviceData })
  } catch (error: any) {
    console.error("Error updating service:", error)
    return NextResponse.json({ error: "Failed to update service" }, { status: 500 })
  }
}

// Delete a service
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Get current user
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const id = Number.parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 })
    }

    // Check if service exists
    const existingService = await getById("services", id)
    if (!existingService) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 })
    }

    // Delete the service
    await remove("services", id)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error deleting service:", error)
    return NextResponse.json({ error: "Failed to delete service" }, { status: 500 })
  }
}
