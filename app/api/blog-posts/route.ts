import { type NextRequest, NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { create, getAll } from "@/lib/db"

// Get all blog posts
export async function GET() {
  try {
    const posts = await getAll("blog_posts")
    return NextResponse.json(posts)
  } catch (error: any) {
    console.error("Error getting blog posts:", error)
    return NextResponse.json({ error: "Failed to get blog posts" }, { status: 500 })
  }
}

// Create a new blog post
export async function POST(req: NextRequest) {
  try {
    // Get current user
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { title, slug, excerpt, content, image_url, status } = await req.json()

    // Validate required fields
    if (!title || !slug || !content) {
      return NextResponse.json({ error: "Title, slug, and content are required" }, { status: 400 })
    }

    // Create the blog post
    const postData = {
      title,
      slug,
      excerpt: excerpt || null,
      content,
      image_url: image_url || null,
      author_id: user.id,
      status: status || "draft",
      published_at: status === "published" ? new Date() : null,
    }

    const postId = await create("blog_posts", postData)

    return NextResponse.json({ id: postId, ...postData }, { status: 201 })
  } catch (error: any) {
    console.error("Error creating blog post:", error)
    return NextResponse.json({ error: "Failed to create blog post" }, { status: 500 })
  }
}
