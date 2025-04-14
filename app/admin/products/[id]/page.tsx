import { notFound } from "next/navigation"
import { query } from "@/lib/db"
import ProductForm from "../product-form"

async function getProduct(id: number) {
  const sql = `
    SELECT * FROM products WHERE id = ?
  `
  const products = (await query(sql, [id])) as any[]
  return products[0]
}

async function getProductFeatures(productId: number) {
  const sql = `
    SELECT feature FROM product_features WHERE product_id = ?
  `
  const features = (await query(sql, [productId])) as any[]
  return features.map((f) => f.feature)
}

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id, 10)
  if (isNaN(id)) {
    notFound()
  }

  const product = await getProduct(id)
  if (!product) {
    notFound()
  }

  const features = await getProductFeatures(id)

  return <ProductForm product={product} features={features} />
}
