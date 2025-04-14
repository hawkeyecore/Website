import { type NextRequest, NextResponse } from "next/server"
import { query, create } from "@/lib/db"
import { getServerSession } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const status = searchParams.get("status") || "published"

    let sql
    let params: any[] = []

    if (status === "all") {
      sql = `
        SELECT 
          bp.id, bp.title, bp.slug, bp.excerpt, bp.content, bp.image_url, 
          bp.status, TO_CHAR(bp.created_at, 'YYYY-MM-DD') as created_at,
          u.name as author_name
        FROM blog_posts bp
        LEFT JOIN users u ON bp.author_id = u.id
        ORDER BY bp.created_at DESC
      `
    } else {
      sql = `
        SELECT 
          bp.id, bp.title, bp.slug, bp.excerpt, bp.content, bp.image_url, 
          bp.status, TO_CHAR(bp.created_at, 'YYYY-MM-DD') as created_at,
          u.name as author_name
        FROM blog_posts bp
        LEFT JOIN users u ON bp.author_id = u.id
        WHERE bp.status = $1
        ORDER BY bp.created_at DESC
      `
      params = [status]
    }

    const blogPosts = await query(sql, params)
    return NextResponse.json(blogPosts)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.json()

    // Get the current user's ID
    const userResult = await query("SELECT id FROM users WHERE email = $1", [session.user?.email])

    if (!userResult || userResult.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const userId = userResult[0].id

    // Add the author_id to the data
    data.author_id = userId

    // If publishing, set published_at
    if (data.status === "published") {
      data.published_at = new Date()
    }

    const id = await create("blog_posts", data)
    return NextResponse.json({ id, success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
