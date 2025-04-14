import { type NextRequest, NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { create, getAll } from "@/lib/db"

// Get all services
export async function GET() {
  try {
    const services = await getAll("services")
    return NextResponse.json(services)
  } catch (error: any) {
    console.error("Error getting services:", error)
    return NextResponse.json({ error: "Failed to get services" }, { status: 500 })
  }
}

// Create a new service
export async function POST(req: NextRequest) {
  try {
    // Get current user
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { title, slug, description, content, icon, image_url } = await req.json()

    // Validate required fields
    if (!title || !slug || !description) {
      return NextResponse.json({ error: "Title, slug, and description are required" }, { status: 400 })
    }

    // Create the service
    const serviceData = {
      title,
      slug,
      description,
      content: content || null,
      icon: icon || null,
      image_url: image_url || null,
      created_by: user.id,
      created_at: new Date(),
      updated_at: new Date(),
    }

    const serviceId = await create("services", serviceData)

    return NextResponse.json({ id: serviceId, ...serviceData }, { status: 201 })
  } catch (error: any) {
    console.error("Error creating service:", error)
    return NextResponse.json({ error: "Failed to create service" }, { status: 500 })
  }
}
