import { type NextRequest, NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { create, getAll, query } from "@/lib/db"

// Get all products
export async function GET() {
  try {
    const products = await getAll("products")
    return NextResponse.json(products)
  } catch (error: any) {
    console.error("Error getting products:", error)
    return NextResponse.json({ error: "Failed to get products" }, { status: 500 })
  }
}

// Create a new product
export async function POST(req: NextRequest) {
  try {
    // Get current user
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { name, slug, description, long_description, price, category, image_url, status, features } = await req.json()

    // Validate required fields
    if (!name || !slug) {
      return NextResponse.json({ error: "Name and slug are required" }, { status: 400 })
    }

    // Create the product
    const productData = {
      name,
      slug,
      description: description || null,
      long_description: long_description || null,
      price: price || null,
      category: category || null,
      image_url: image_url || null,
      status: status || "draft",
    }

    const productId = await create("products", productData)

    // Add features if provided
    if (features && Array.isArray(features) && features.length > 0) {
      const featureValues = features.map((feature) => [productId, feature])
      const placeholders = features.map(() => "(?, ?)").join(", ")

      const featuresSql = `
        INSERT INTO product_features (product_id, feature)
        VALUES ${placeholders}
      `

      // Flatten the array of arrays
      const flatValues = featureValues.flat()

      await query(featuresSql, flatValues)
    }

    return NextResponse.json({ id: productId, ...productData, features }, { status: 201 })
  } catch (error: any) {
    console.error("Error creating product:", error)
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
