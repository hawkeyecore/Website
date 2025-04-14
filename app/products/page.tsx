import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ProductsPage() {
  // Sample products data
  const products = [
    {
      id: 1,
      slug: "techcloud-platform",
      name: "TechCloud Platform",
      description: "A comprehensive cloud solution for businesses of all sizes.",
      price: "$299/month",
      category: "software",
      features: ["Scalable infrastructure", "24/7 support", "99.9% uptime guarantee"],
      image: "/images/tech-meeting.jpeg",
    },
    {
      id: 2,
      slug: "datasense-analytics",
      name: "DataSense Analytics",
      description: "Turn your data into actionable insights with our powerful analytics platform.",
      price: "$199/month",
      category: "software",
      features: ["Real-time dashboards", "Custom reports", "AI-powered predictions"],
      image: "/images/digital-workspace.jpeg",
    },
    {
      id: 3,
      slug: "secureguard-pro",
      name: "SecureGuard Pro",
      description: "Enterprise-grade security solution to protect your digital assets.",
      price: "$349/month",
      category: "software",
      features: ["Threat detection", "Vulnerability scanning", "Compliance reporting"],
      image: "/images/tech-presentation.jpeg",
    },
    {
      id: 4,
      slug: "edgecompute-server",
      name: "EdgeCompute Server",
      description: "High-performance edge computing server for distributed applications.",
      price: "$1,999",
      category: "hardware",
      features: ["Low latency", "High throughput", "Energy efficient"],
      image: "/images/office-collaboration.jpeg",
    },
    {
      id: 5,
      slug: "smartsense-iot-gateway",
      name: "SmartSense IoT Gateway",
      description: "Connect and manage all your IoT devices with our intelligent gateway.",
      price: "$499",
      category: "hardware",
      features: ["Multi-protocol support", "Edge processing", "Secure connectivity"],
      image: "/images/business-workshop.jpeg",
    },
    {
      id: 6,
      slug: "devops-toolkit",
      name: "DevOps Toolkit",
      description: "Streamline your development and operations with our integrated toolkit.",
      price: "$249/month",
      category: "software",
      features: ["CI/CD pipeline", "Infrastructure as code", "Monitoring and alerts"],
      image: "/images/digital-workspace.jpeg",
    },
  ]

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our innovative technology solutions designed to help your business thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Products</TabsTrigger>
                <TabsTrigger value="software">Software</TabsTrigger>
                <TabsTrigger value="hardware">Hardware</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="software" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {products
                  .filter((product) => product.category === "software")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="hardware" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {products
                  .filter((product) => product.category === "hardware")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}

function ProductCard({ product }: { product: any }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <Badge variant={product.category === "software" ? "default" : "secondary"}>
                {product.category === "software" ? "Software" : "Hardware"}
              </Badge>
            </div>
            <p className="text-muted-foreground">{product.description}</p>
          </div>
          <div>
            <p className="font-bold text-lg">{product.price}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {product.features.map((feature: string, index: number) => (
                <li key={index} className="text-sm text-muted-foreground flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mr-2 text-[#0f172a]"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2">
            <Link href={`/products/${product.slug || product.id}`}>
              <Button className="w-full">Learn More</Button>
            </Link>
            <Button variant="outline" className="w-full">
              Request Demo
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
