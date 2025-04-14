import { notFound } from "next/navigation"
import { query } from "@/lib/db"
import BlogPostForm from "../blog-post-form"

async function getBlogPost(id: number) {
  const sql = `
    SELECT * FROM blog_posts WHERE id = ?
  `
  const posts = (await query(sql, [id])) as any[]
  return posts[0]
}

export default async function EditBlogPostPage({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id, 10)
  if (isNaN(id)) {
    notFound()
  }

  const post = await getBlogPost(id)
  if (!post) {
    notFound()
  }

  return <BlogPostForm post={post} />
}
