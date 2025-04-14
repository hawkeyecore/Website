import { type NextRequest, NextResponse } from "next/server"
import { getById, update, remove } from "@/lib/db"
import { getServerSession } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const blogPost = await getById("blog_posts", id)

    if (!blogPost) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
    }

    return NextResponse.json(blogPost)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession()

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const id = Number.parseInt(params.id)
    const data = await request.json()

    // Check if the blog post exists
    const blogPost = await getById("blog_posts", id)
    if (!blogPost) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
    }

    // If publishing for the first time, set published_at
    if (data.status === "published" && blogPost.status !== "published") {
      data.published_at = new Date()
    }

    await update("blog_posts", id, data)
    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession()

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const id = Number.parseInt(params.id)

    // Check if the blog post exists
    const blogPost = await getById("blog_posts", id)
    if (!blogPost) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
    }

    await remove("blog_posts", id)
    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
