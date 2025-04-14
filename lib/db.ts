import mysql from "mysql2/promise"

// Database connection configuration
const connection = {
  host: process.env.DB_HOST,
  port: Number.parseInt(process.env.DB_PORT || "3306", 10),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
}

// Create a connection pool
const pool = mysql.createPool(connection)

// Execute SQL query with parameters
export async function query(sql: string, params: any[] = []) {
  try {
    const [results] = await pool.execute(sql, params)
    return results
  } catch (error: any) {
    console.error("Database query error:", error.message)
    throw new Error(`Database query failed: ${error.message}`)
  }
}

// Helper function to create a new record
export async function create(table: string, data: Record<string, any>) {
  const keys = Object.keys(data)
  const values = Object.values(data)
  const placeholders = keys.map(() => "?").join(", ")

  const sql = `
    INSERT INTO ${table} (${keys.join(", ")})
    VALUES (${placeholders})
  `

  const result = (await query(sql, values)) as any
  return result.insertId
}

// Helper function to update a record
export async function update(table: string, id: number, data: Record<string, any>) {
  const entries = Object.entries(data)
  const setClause = entries.map(([key]) => `${key} = ?`).join(", ")
  const values = [...entries.map(([_, value]) => value), id]

  const sql = `
    UPDATE ${table}
    SET ${setClause}
    WHERE id = ?
  `

  await query(sql, values)
}

// Helper function to delete a record
export async function remove(table: string, id: number) {
  const sql = `DELETE FROM ${table} WHERE id = ?`
  await query(sql, [id])
}

// Helper function to get a record by ID
export async function getById(table: string, id: number) {
  const sql = `SELECT * FROM ${table} WHERE id = ?`
  const results = (await query(sql, [id])) as any[]
  return results[0]
}

// Helper function to get all records from a table
export async function getAll(table: string) {
  const sql = `SELECT * FROM ${table}`
  return query(sql)
}
