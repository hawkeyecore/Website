import { query } from "../lib/db"

async function setupDatabase() {
  try {
    // Create users table
    await query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        name VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(10) NOT NULL DEFAULT 'viewer' CHECK (role IN ('admin', 'editor', 'viewer')),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    console.log("Users table created or already exists")

    // Create blog_posts table
    await query(`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id SERIAL PRIMARY KEY,
        slug VARCHAR(255) NOT NULL UNIQUE,
        title VARCHAR(255) NOT NULL,
        excerpt TEXT,
        content TEXT NOT NULL,
        image_url VARCHAR(255),
        author_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
        status VARCHAR(10) NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        published_at TIMESTAMP NULL
      )
    `)
    console.log("Blog posts table created or already exists")

    // Create products table
    await query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        slug VARCHAR(255) NOT NULL UNIQUE,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        long_description TEXT,
        price DECIMAL(10, 2),
        category VARCHAR(100),
        image_url VARCHAR(255),
        status VARCHAR(10) NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    console.log("Products table created or already exists")

    // Create product_images table for gallery images
    await query(`
      CREATE TABLE IF NOT EXISTS product_images (
        id SERIAL PRIMARY KEY,
        product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
        image_url VARCHAR(255) NOT NULL,
        display_order INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    console.log("Product images table created or already exists")

    // Create product_features table
    await query(`
      CREATE TABLE IF NOT EXISTS product_features (
        id SERIAL PRIMARY KEY,
        product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
        feature VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    console.log("Product features table created or already exists")

    // Create services table
    await query(`
      CREATE TABLE IF NOT EXISTS services (
        id SERIAL PRIMARY KEY,
        slug VARCHAR(255) NOT NULL UNIQUE,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        long_description TEXT,
        image_url VARCHAR(255),
        status VARCHAR(10) NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    console.log("Services table created or already exists")

    // Create service_benefits table
    await query(`
      CREATE TABLE IF NOT EXISTS service_benefits (
        id SERIAL PRIMARY KEY,
        service_id INTEGER NOT NULL REFERENCES services(id) ON DELETE CASCADE,
        benefit VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    console.log("Service benefits table created or already exists")

    // Create tags table
    await query(`
      CREATE TABLE IF NOT EXISTS tags (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    console.log("Tags table created or already exists")

    // Create blog_post_tags table (many-to-many relationship)
    await query(`
      CREATE TABLE IF NOT EXISTS blog_post_tags (
        blog_post_id INTEGER NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
        tag_id INTEGER NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
        PRIMARY KEY (blog_post_id, tag_id)
      )
    `)
    console.log("Blog post tags table created or already exists")

    // Create an initial admin user with a default password (change this in production)
    const hashedPassword = "$2a$12$Rm0RZ0t1HJJr6U97IaVPPuHXakyOBpJ4Zj/d5TwjBr9TLLNz5uaEK" // password: admin123

    // Check if admin user exists
    const adminCheck = await query("SELECT id FROM users WHERE email = $1", ["admin@example.com"])

    if (adminCheck.length === 0) {
      await query(
        `
        INSERT INTO users (email, name, password, role)
        VALUES ($1, $2, $3, $4)
        `,
        ["admin@example.com", "Admin User", hashedPassword, "admin"],
      )
      console.log("Admin user created")
    } else {
      console.log("Admin user already exists")
    }

    console.log("Database setup completed successfully")
  } catch (error) {
    console.error("Error setting up database:", error)
  }
}

// Run the setup if executing directly
if (require.main === module) {
  setupDatabase().then(() => {
    console.log("Done, you can now exit the process")
    process.exit(0)
  })
}

export default setupDatabase
