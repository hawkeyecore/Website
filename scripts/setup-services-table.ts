import { query } from "@/lib/db"

async function setupServicesTable() {
  try {
    console.log("Setting up services table...")

    // Create services table if it doesn't exist
    await query(`
      CREATE TABLE IF NOT EXISTS services (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        description TEXT NOT NULL,
        content TEXT,
        icon VARCHAR(50),
        image_url VARCHAR(255),
        created_by INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (created_by) REFERENCES users(id)
      )
    `)

    console.log("Services table created successfully!")

    // Check if there are any default services to add
    const existingServices = await query("SELECT COUNT(*) as count FROM services")
    const count = (existingServices as any)[0].count

    if (count === 0) {
      console.log("Adding default services...")

      // Add default services
      await query(`
        INSERT INTO services (title, slug, description, icon, created_at, updated_at) VALUES
        ('Software Development', 'software-development', 'Custom software solutions tailored to your business needs.', 'code', NOW(), NOW()),
        ('Cloud Solutions', 'cloud-solutions', 'Scalable cloud infrastructure and migration services.', 'layers', NOW(), NOW()),
        ('Data Analytics', 'data-analytics', 'Turn your data into actionable insights for better decision-making.', 'chart', NOW(), NOW())
      `)

      console.log("Default services added successfully!")
    } else {
      console.log(`Found ${count} existing services. Skipping default services creation.`)
    }

    console.log("Services setup completed successfully!")
  } catch (error) {
    console.error("Error setting up services table:", error)
  }
}

// Execute the setup function
setupServicesTable()
