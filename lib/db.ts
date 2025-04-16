import { Pool } from "pg"
import type { BlogPost } from "../types"

// Check if we're in a build/CI environment
const isBuildEnvironment = () => {
  return (
    process.env.NODE_ENV === "production" &&
    (process.env.CI === "true" ||
      process.env.VERCEL_ENV === "production" ||
      process.env.RAILWAY_STATIC_URL !== undefined ||
      process.env.RAILWAY_GIT_COMMIT_SHA !== undefined ||
      process.env.VERCEL === "1")
  )
}

// Create a connection pool
let pool: Pool | null = null

// Initialize the database connection pool
export const getPool = () => {
  if (isBuildEnvironment()) {
    console.log("Build environment detected, using mock data")
    return null
  }

  if (!pool) {
    try {
      pool = new Pool({
        host: process.env.DB_HOST,
        port: Number.parseInt(process.env.DB_PORT || "5432"),
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        ssl: process.env.NODE_ENV === "production",
        native: false, // Explicitly disable native bindings
      })

      // Test the connection
      pool.query("SELECT NOW()", (err) => {
        if (err) {
          console.error("Database connection error:", err)
          pool = null
        } else {
          console.log("Database connected successfully")
        }
      })
    } catch (error) {
      console.error("Failed to initialize database pool:", error)
      pool = null
    }
  }

  return pool
}

// Mock data for when database is not available
const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Technology",
    slug: "future-of-technology",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    excerpt: "Exploring the cutting-edge technologies that will shape our future.",
    author: "John Doe",
    published_at: new Date().toISOString(),
    image_url: "/interconnected-future.png",
  },
  {
    id: "2",
    title: "AI Innovation",
    slug: "ai-innovation",
    content: "Artificial intelligence is transforming industries across the globe...",
    excerpt: "How AI is revolutionizing business operations and decision-making.",
    author: "Jane Smith",
    published_at: new Date().toISOString(),
    image_url: "/abstract-ai-network.png",
  },
]

// Get all blog posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  if (isBuildEnvironment()) {
    return mockBlogPosts
  }

  const db = getPool()
  if (!db) {
    console.log("Database not available, using mock data")
    return mockBlogPosts
  }

  try {
    const result = await db.query("SELECT * FROM blog_posts ORDER BY published_at DESC")
    return result.rows
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return mockBlogPosts
  }
}

// Get a blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (isBuildEnvironment()) {
    return mockBlogPosts.find((post) => post.slug === slug) || null
  }

  const db = getPool()
  if (!db) {
    console.log("Database not available, using mock data")
    return mockBlogPosts.find((post) => post.slug === slug) || null
  }

  try {
    const result = await db.query("SELECT * FROM blog_posts WHERE slug = $1", [slug])
    return result.rows[0] || null
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error)
    return mockBlogPosts.find((post) => post.slug === slug) || null
  }
}

// Similar mock data and functions for products and services...
