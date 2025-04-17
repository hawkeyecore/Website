// Check if we're in the preview environment - simplified detection
const isPreviewEnvironment = typeof window !== "undefined" || !process.env.DB_HOST

// Mock data for preview environment
const mockBlogPosts = [
  {
    id: 1,
    slug: "introduction-to-our-technology",
    title: "Introduction to Our Technology",
    excerpt: "Learn about the cutting-edge technology that powers our solutions.",
    content: "This is a sample blog post content. In a real application, this would be much longer and more detailed.",
    image_url: "/images/tech-meeting.jpeg",
    author_name: "John Doe",
    date: "2023-11-01",
    status: "published",
  },
  {
    id: 2,
    slug: "how-ai-is-transforming-business",
    title: "How AI is Transforming Business",
    excerpt: "Discover the ways artificial intelligence is revolutionizing modern business practices.",
    content: "This is another sample blog post content about AI and business transformation.",
    image_url: "/images/digital-workspace.jpeg",
    author_name: "Jane Smith",
    date: "2023-10-15",
    status: "published",
  },
]

const mockProducts = [
  {
    id: 1,
    slug: "enterprise-solution",
    name: "Enterprise Solution",
    description: "Comprehensive solution for large businesses",
    long_description:
      "Our enterprise solution provides everything large businesses need to succeed in the digital age.",
    price: "9999.99",
    category: "software",
    image_url: "/images/business-presentation.jpeg",
    status: "published",
  },
  {
    id: 2,
    slug: "small-business-package",
    name: "Small Business Package",
    description: "Perfect for small to medium businesses",
    long_description:
      "Tailored for small businesses, this package includes all essential features at an affordable price.",
    price: "2999.99",
    category: "software",
    image_url: "/images/business-workshop.jpeg",
    status: "published",
  },
]

const mockServices = [
  {
    id: 1,
    slug: "consulting-services",
    name: "Consulting Services",
    description: "Expert guidance for your business challenges",
    long_description:
      "Our consulting services provide expert guidance to help you navigate complex business challenges.",
    image_url: "/images/business-meeting.jpeg",
    status: "published",
  },
  {
    id: 2,
    slug: "implementation-services",
    name: "Implementation Services",
    description: "Seamless implementation of our solutions",
    long_description: "Our implementation services ensure a smooth transition to our technology solutions.",
    image_url: "/images/team-collaboration.jpeg",
    status: "published",
  },
]

// Mock implementations for preview environment
export async function query(sql: string, params: any[] = []) {
  if (isPreviewEnvironment) {
    console.log("Mock query:", sql, params)

    // Return appropriate mock data based on the query
    if (sql.toLowerCase().includes("from blog_posts")) {
      return mockBlogPosts
    } else if (sql.toLowerCase().includes("from products")) {
      return mockProducts
    } else if (sql.toLowerCase().includes("from services")) {
      return mockServices
    }

    return []
  } else {
    // This code will only run in production, not in preview
    const { Pool } = await import("pg")
    const pool = new Pool({
      host: process.env.PGHOST,
      port: Number.parseInt(process.env.PGPORT || "5432", 10),
      database: process.env.POSTGRES_DB,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
    })

    try {
      const result = await pool.query(sql, params)
      return result.rows
    } catch (error: any) {
      console.error("Database query error:", error.message)
      throw new Error(`Database query failed: ${error.message}`)
    }
  }
}

export async function create(table: string, data: Record<string, any>) {
  if (isPreviewEnvironment) {
    console.log("Mock create:", table, data)
    return 999 // Mock ID
  } else {
    const keys = Object.keys(data)
    const values = Object.values(data)
    const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ")

    const sql = `
      INSERT INTO ${table} (${keys.join(", ")})
      VALUES (${placeholders})
      RETURNING id
    `

    const result = await query(sql, values)
    return result[0].id
  }
}

export async function update(table: string, id: number, data: Record<string, any>) {
  if (isPreviewEnvironment) {
    console.log("Mock update:", table, id, data)
    return
  } else {
    const entries = Object.entries(data)
    const setClause = entries.map(([key], i) => `${key} = $${i + 1}`).join(", ")
    const values = [...entries.map(([_, value]) => value), id]

    const sql = `
      UPDATE ${table}
      SET ${setClause}
      WHERE id = $${values.length}
    `

    await query(sql, values)
  }
}

export async function remove(table: string, id: number) {
  if (isPreviewEnvironment) {
    console.log("Mock remove:", table, id)
    return
  } else {
    const sql = `DELETE FROM ${table} WHERE id = $1`
    await query(sql, [id])
  }
}

export async function getById(table: string, id: number) {
  if (isPreviewEnvironment) {
    console.log("Mock getById:", table, id)

    if (table === "blog_posts") {
      return mockBlogPosts.find((post) => post.id === id) || null
    } else if (table === "products") {
      return mockProducts.find((product) => product.id === id) || null
    } else if (table === "services") {
      return mockServices.find((service) => service.id === id) || null
    }

    return null
  } else {
    const sql = `SELECT * FROM ${table} WHERE id = $1`
    const results = await query(sql, [id])
    return results[0]
  }
}

export async function getAll(table: string) {
  if (isPreviewEnvironment) {
    console.log("Mock getAll:", table)

    if (table === "blog_posts") {
      return mockBlogPosts
    } else if (table === "products") {
      return mockProducts
    } else if (table === "services") {
      return mockServices
    }

    return []
  } else {
    const sql = `SELECT * FROM ${table}`
    return query(sql)
  }
}
