import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"
import { query } from "@/lib/db"

// Get all published blog posts
async function getBlogPosts() {
  const sql = `
    SELECT 
      bp.id, bp.title, bp.slug, bp.excerpt, bp.image_url, 
      DATE_FORMAT(bp.created_at, '%Y-%m-%d') as date,
      u.name as author_name
    FROM blog_posts bp
    LEFT JOIN users u ON bp.author_id = u.id
    WHERE bp.status = 'published'
    ORDER BY bp.created_at DESC
  `
  return query(sql) as Promise<any[]>
}

// Get unique categories for blog posts
async function getCategories() {
  const sql = `
    SELECT DISTINCT name FROM tags
    JOIN blog_post_tags ON tags.id = blog_post_tags.tag_id
    JOIN blog_posts ON blog_post_tags.blog_post_id = blog_posts.id
    WHERE blog_posts.status = 'published'
    ORDER BY name
  `
  const results = (await query(sql)) as any[]
  return ["All", ...results.map((tag) => tag.name)]
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()
  const categories = await getCategories()

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">TechCorp Blog</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with the latest technology trends, insights, and best practices.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search articles..." className="w-full bg-background pl-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm">
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.length > 0 ? (
                blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={post.image_url || "/placeholder.svg?height=300&width=400&query=blog"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">{post.date}</span>
                            <span className="text-sm font-medium text-[#0f172a]">{post.author_name}</span>
                          </div>
                          <h3 className="text-xl font-bold">{post.title}</h3>
                          <p className="text-muted-foreground">{post.excerpt}</p>
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <Button variant="link" className="p-0">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-muted-foreground">No blog posts found.</p>
                </div>
              )}
            </div>

            {blogPosts.length > 0 && (
              <div className="flex justify-center">
                <Button variant="outline" size="lg">
                  Load More
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
