import Link from "next/link"
import Image from "next/image"
import { getBlogPosts } from "@/lib/db"

// Force dynamic rendering to avoid prerendering issues
export const dynamic = "force-dynamic"

export default async function BlogPage() {
  // Check if we're in a build environment
  const isBuild =
    process.env.NODE_ENV === "production" &&
    (process.env.CI === "true" ||
      process.env.VERCEL_ENV === "production" ||
      process.env.RAILWAY_STATIC_URL !== undefined ||
      process.env.RAILWAY_GIT_COMMIT_SHA !== undefined ||
      process.env.VERCEL === "1")

  // Get blog posts with error handling
  let blogPosts
  try {
    blogPosts = await getBlogPosts()
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    blogPosts = []
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      {blogPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No blog posts found.</p>
          {isBuild && (
            <p className="text-sm text-gray-500 mt-2">(Mock data will be replaced with actual content in production)</p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="block">
              <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.image_url || "/placeholder.svg?height=400&width=600&query=blog"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-2">{post.excerpt}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{new Date(post.published_at).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
