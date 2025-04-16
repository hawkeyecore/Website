import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"
import { query } from "@/lib/db"

// Get a blog post by slug
async function getBlogPost(slug: string) {
  try {
    const sql = `
      SELECT 
        bp.id, bp.title, bp.slug, bp.content, bp.image_url, 
        TO_CHAR(bp.created_at, 'YYYY-MM-DD') as date,
        u.name as author_name
      FROM blog_posts bp
      LEFT JOIN users u ON bp.author_id = u.id
      WHERE bp.slug = $1 AND bp.status = 'published'
    `
    const posts = (await query(sql, [slug])) as any[]
    return posts[0]
  } catch (error) {
    console.error("Error fetching blog post:", error)
    // Return null on error
    return null
  }
}

// Get related blog posts
async function getRelatedPosts(currentPostId: number) {
  try {
    const sql = `
      SELECT 
        bp.id, bp.title, bp.slug, bp.excerpt, bp.image_url
      FROM blog_posts bp
      WHERE bp.id != $1 AND bp.status = 'published'
      ORDER BY bp.created_at DESC
      LIMIT 3
    `
    return (await query(sql, [currentPostId])) as any[]
  } catch (error) {
    console.error("Error fetching related posts:", error)
    // Return empty array on error
    return []
  }
}

// Default blog post for preview/build
const defaultPost = {
  id: 1,
  title: "The Future of AI in Business",
  slug: "future-of-ai-in-business",
  content: `
  # The Future of AI in Business

  Artificial Intelligence is transforming how businesses operate. Learn how AI can improve efficiency, customer experience, and decision-making in your organization.

  ## How AI is Changing Business Operations

  AI technologies are revolutionizing business operations across industries. From automating routine tasks to providing deep insights from data analysis, AI is helping companies work smarter and more efficiently.

  ### Key Benefits of AI Implementation:

  1. **Increased Efficiency**: AI can automate repetitive tasks, freeing up human workers for more creative and strategic work.
  2. **Enhanced Customer Experience**: AI-powered chatbots and recommendation systems provide personalized service 24/7.
  3. **Data-Driven Decision Making**: AI can analyze vast amounts of data to identify patterns and trends that humans might miss.
  4. **Predictive Capabilities**: AI can forecast market trends, customer behavior, and potential issues before they arise.

  ## Getting Started with AI

  Implementing AI in your business doesn't have to be overwhelming. Start with small, focused projects that address specific business challenges. As you gain experience and see results, you can expand your AI initiatives.

  Remember that successful AI implementation requires:
  - Clear business objectives
  - Quality data
  - The right talent and expertise
  - A culture that embraces innovation

  Contact us today to learn how we can help your business leverage the power of AI.
  `,
  image_url: "/images/tech-meeting.jpeg",
  date: "2023-05-15",
  author_name: "Sarah Johnson",
}

// Default related posts for preview/build
const defaultRelatedPosts = [
  {
    id: 2,
    title: "5 Cybersecurity Trends to Watch in 2023",
    slug: "cybersecurity-trends-2023",
    excerpt: "As cyber threats evolve, so must your security strategy.",
    image_url: "/images/digital-workspace.jpeg",
  },
  {
    id: 3,
    title: "Cloud Migration: Best Practices",
    slug: "cloud-migration-best-practices",
    excerpt: "Moving to the cloud can be complex, but with the right approach, you can minimize disruption.",
    image_url: "/images/office-collaboration.jpeg",
  },
  {
    id: 4,
    title: "How Data Analytics is Revolutionizing Healthcare",
    slug: "data-analytics-in-healthcare",
    excerpt: "From predictive diagnostics to personalized treatment plans.",
    image_url: "/images/tech-presentation.jpeg",
  },
]

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  // Use default post for preview/build or if post not found
  const displayPost = post || defaultPost

  // If in production and post not found, return 404
  if (!post && process.env.NODE_ENV === "production" && typeof window !== "undefined") {
    notFound()
  }

  const relatedPosts = post ? await getRelatedPosts(post.id) : defaultRelatedPosts

  // Use default related posts if none found
  const displayRelatedPosts = relatedPosts.length > 0 ? relatedPosts : defaultRelatedPosts

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{displayPost.title}</h1>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <time dateTime={displayPost.date}>{displayPost.date}</time>
                <span>•</span>
                <span>{displayPost.author_name || "Admin"}</span>
              </div>
            </div>
            {displayPost.image_url && (
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={displayPost.image_url || "/placeholder.svg"}
                  alt={displayPost.title}
                  width={1200}
                  height={800}
                  className="aspect-video w-full object-cover"
                />
              </div>
            )}
            <div className="prose max-w-none dark:prose-invert">
              {displayPost.content.split("\n").map((paragraph, index) => {
                if (paragraph.startsWith("# ")) {
                  return <h1 key={index}>{paragraph.substring(2)}</h1>
                } else if (paragraph.startsWith("## ")) {
                  return <h2 key={index}>{paragraph.substring(3)}</h2>
                } else if (paragraph.startsWith("### ")) {
                  return <h3 key={index}>{paragraph.substring(4)}</h3>
                } else if (paragraph.startsWith("- ")) {
                  return <li key={index}>{paragraph.substring(2)}</li>
                } else if (paragraph.trim() === "") {
                  return <br key={index} />
                } else {
                  return <p key={index}>{paragraph}</p>
                }
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Related Articles</h2>
              <p className="text-muted-foreground">Explore more insights from our experts</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {displayRelatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group">
                  <article className="space-y-4">
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src={relatedPost.image_url || "/placeholder.svg"}
                        alt={relatedPost.title}
                        width={600}
                        height={400}
                        className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{relatedPost.title}</h3>
                      <p className="text-muted-foreground">{relatedPost.excerpt}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
