import Image from "next/image"
import Link from "next/link"
import { query } from "@/lib/db"

// Get all blog posts
async function getBlogPosts() {
  try {
    const sql = `
      SELECT 
        bp.id, bp.title, bp.slug, bp.excerpt, bp.image_url, 
        TO_CHAR(bp.created_at, 'YYYY-MM-DD') as date,
        u.name as author_name
      FROM blog_posts bp
      LEFT JOIN users u ON bp.author_id = u.id
      WHERE bp.status = 'published'
      ORDER BY bp.created_at DESC
    `
    return (await query(sql)) as any[]
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    // Return empty array on error
    return []
  }
}

export default async function BlogPage() {
  // Use try-catch to handle any potential errors during data fetching
  let posts = []
  try {
    posts = await getBlogPosts()
  } catch (error) {
    console.error("Failed to fetch blog posts:", error)
    // Continue with empty posts array
  }

  // Default posts to show if no posts in database
  const defaultPosts = [
    {
      id: 1,
      title: "The Future of AI in Business",
      slug: "future-of-ai-in-business",
      excerpt:
        "Artificial Intelligence is transforming how businesses operate. Learn how AI can improve efficiency, customer experience, and decision-making in your organization.",
      image_url: "/images/tech-meeting.jpeg",
      date: "2023-05-15",
      author_name: "Sarah Johnson",
    },
    {
      id: 2,
      title: "5 Cybersecurity Trends to Watch in 2023",
      slug: "cybersecurity-trends-2023",
      excerpt:
        "As cyber threats evolve, so must your security strategy. Discover the top cybersecurity trends that will shape the digital landscape in 2023.",
      image_url: "/images/digital-workspace.jpeg",
      date: "2023-04-28",
      author_name: "Michael Chen",
    },
    {
      id: 3,
      title: "Cloud Migration: Best Practices for a Seamless Transition",
      slug: "cloud-migration-best-practices",
      excerpt:
        "Moving to the cloud can be complex, but with the right approach, you can minimize disruption and maximize benefits. Learn our proven methodology for successful cloud migration.",
      image_url: "/images/office-collaboration.jpeg",
      date: "2023-04-10",
      author_name: "David Rodriguez",
    },
    {
      id: 4,
      title: "How Data Analytics is Revolutionizing Healthcare",
      slug: "data-analytics-in-healthcare",
      excerpt:
        "From predictive diagnostics to personalized treatment plans, data analytics is transforming healthcare delivery and patient outcomes.",
      image_url: "/images/tech-presentation.jpeg",
      date: "2023-03-22",
      author_name: "Emily Patel",
    },
  ]

  // Use database posts if available, otherwise use default posts
  const displayPosts = posts.length > 0 ? posts : defaultPosts

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Blog</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Insights, news, and perspectives from our technology experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {displayPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <article className="space-y-4">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={post.image_url || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight">{post.title}</h2>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>•</span>
                    <span>{post.author_name || "Admin"}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
