import { type NextRequest, NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { getById, update, remove, query } from "@/lib/db"

// Get a product by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 })
    }

    const product = await getById("products", id)
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json(product)
  } catch (error: any) {
    console.error("Error getting product:", error)
    return NextResponse.json({ error: "Failed to get product" }, { status: 500 })
  }
}

// Update a product
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

    // Check if product exists
    const existingProduct = await getById("products", id)
    if (!existingProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    const { name, slug, description, long_description, price, category, image_url, status, features } = await req.json()

    // Validate required fields
    if (!name || !slug) {
      return NextResponse.json({ error: "Name and slug are required" }, { status: 400 })
    }

    // Update the product
    const productData = {
      name,
      slug,
      description: description || null,
      long_description: long_description || null,
      price: price || null,
      category: category || null,
      image_url: image_url || null,
      status: status || existingProduct.status,
    }

    await update("products", id, productData)

    // Update features if provided
    if (features && Array.isArray(features)) {
      // Delete existing features
      await query("DELETE FROM product_features WHERE product_id = ?", [id])

      // Add new features
      if (features.length > 0) {
        const featureValues = features.map((feature) => [id, feature])
        const placeholders = features.map(() => "(?, ?)").join(", ")

        const featuresSql = `
          INSERT INTO product_features (product_id, feature)
          VALUES ${placeholders}
        `

        // Flatten the array of arrays
        const flatValues = featureValues.flat()

        await query(featuresSql, flatValues)
      }
    }

    return NextResponse.json({ id, ...productData, features })
  } catch (error: any) {
    console.error("Error updating product:", error)
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 })
  }
}

// Delete a product
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

    // Check if product exists
    const existingProduct = await getById("products", id)
    if (!existingProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    // Delete the product (cascade will delete related features)
    await remove("products", id)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error deleting product:", error)
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
  }
}
