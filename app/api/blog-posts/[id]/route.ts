import { type NextRequest, NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { getById, update, remove } from "@/lib/db"

// Get a blog post by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 })
    }

    const post = await getById("blog_posts", id)
    if (!post) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
    }

    return NextResponse.json(post)
  } catch (error: any) {
    console.error("Error getting blog post:", error)
    return NextResponse.json({ error: "Failed to get blog post" }, { status: 500 })
  }
}

// Update a blog post
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

    // Check if post exists
    const existingPost = (await getById("blog_posts", id)) as any
    if (!existingPost) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
    }

    // Check authorization (only author or admin can edit)
    const isAdmin = user.role === "admin"
    const isAuthor = existingPost.author_id === user.id
    if (!isAdmin && !isAuthor) {
      return NextResponse.json({ error: "You do not have permission to update this post" }, { status: 403 })
    }

    const { title, slug, excerpt, content, image_url, status } = await req.json()

    // Validate required fields
    if (!title || !slug || !content) {
      return NextResponse.json({ error: "Title, slug, and content are required" }, { status: 400 })
    }

    // Update the post
    const postData = {
      title,
      slug,
      excerpt: excerpt || null,
      content,
      image_url: image_url || null,
      status: status || existingPost.status,
      published_at:
        status === "published" && existingPost.status !== "published" ? new Date() : existingPost.published_at,
    }

    await update("blog_posts", id, postData)

    return NextResponse.json({ id, ...postData })
  } catch (error: any) {
    console.error("Error updating blog post:", error)
    return NextResponse.json({ error: "Failed to update blog post" }, { status: 500 })
  }
}

// Delete a blog post
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

    // Check if post exists
    const existingPost = (await getById("blog_posts", id)) as any
    if (!existingPost) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
    }

    // Check authorization (only author or admin can delete)
    const isAdmin = user.role === "admin"
    const isAuthor = existingPost.author_id === user.id
    if (!isAdmin && !isAuthor) {
      return NextResponse.json({ error: "You do not have permission to delete this post" }, { status: 403 })
    }

    // Delete the post
    await remove("blog_posts", id)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error deleting blog post:", error)
    return NextResponse.json({ error: "Failed to delete blog post" }, { status: 500 })
  }
}
