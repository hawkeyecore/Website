import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  // Since we only have one product now, redirect all product detail pages to the main products page
  // This ensures old links don't break completely
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-3xl font-bold">Product Information</h1>
        <p className="text-muted-foreground">Please visit our main products page to learn about Scheduling Dispatch.</p>
        <Link href="/products">
          <Button className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Go to Products Page
          </Button>
        </Link>
      </div>
    </div>
  )
}
