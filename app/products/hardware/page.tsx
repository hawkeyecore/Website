import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Cpu, Server, Wifi, Shield } from "lucide-react"

export default function HardwareProductsPage() {
  // Sample hardware products data
  const products = [
    {
      id: 1,
      slug: "edgecompute-server",
      name: "EdgeCompute Server",
      description: "High-performance edge computing server for distributed applications.",
      price: "$1,999",
      category: "servers",
      features: ["Low latency", "High throughput", "Energy efficient"],
      image: "/images/circuit-board-closeup.jpeg",
    },
    {
      id: 2,
      slug: "smartsense-iot-gateway",
      name: "SmartSense IoT Gateway",
      description: "Connect and manage all your IoT devices with our intelligent gateway.",
      price: "$499",
      category: "iot",
      features: ["Multi-protocol support", "Edge processing", "Secure connectivity"],
      image: "/images/modern-workspace.jpeg",
    },
    {
      id: 3,
      slug: "securenet-firewall",
      name: "SecureNet Firewall",
      description: "Enterprise-grade network security appliance with advanced threat protection.",
      price: "$1,299",
      category: "security",
      features: ["Deep packet inspection", "Intrusion prevention", "VPN support"],
      image: "/images/digital-workspace.jpeg",
    },
    {
      id: 4,
      slug: "quantum-storage-array",
      name: "Quantum Storage Array",
      description: "High-capacity, high-performance storage solution for enterprise data centers.",
      price: "$4,999",
      category: "storage",
      features: ["Flash storage", "Redundant controllers", "Cloud integration"],
      image: "/images/tech-meeting.jpeg",
    },
  ]

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hardware Solutions</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Cutting-edge hardware products designed for performance, reliability, and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Enterprise-Grade Hardware</h2>
                <p className="text-muted-foreground md:text-xl">
                  Our hardware solutions are built to meet the demanding requirements of modern businesses, from edge
                  computing to data center infrastructure.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-[#0f172a]" />
                    <span>High-performance components</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-[#0f172a]" />
                    <span>Scalable architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[#0f172a]" />
                    <span>Built-in security features</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="h-5 w-5 text-[#0f172a]" />
                    <span>Advanced connectivity options</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button>View All Hardware</Button>
                  <Button variant="outline">Request Custom Solution</Button>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/images/circuit-board-closeup.jpeg"
                alt="Circuit board closeup"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Hardware Products</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our range of hardware solutions designed for various business needs.
              </p>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Hardware</TabsTrigger>
                <TabsTrigger value="servers">Servers</TabsTrigger>
                <TabsTrigger value="iot">IoT Devices</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="servers" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {products
                  .filter((product) => product.category === "servers")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="iot" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {products
                  .filter((product) => product.category === "iot")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="security" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {products
                  .filter((product) => product.category === "security")
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image src="/images/tech-presentation.jpeg" alt="AI Hardware Solutions" fill className="object-cover" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">AI-Powered Hardware Solutions</h2>
              <p className="text-muted-foreground">
                Our next-generation hardware products integrate advanced AI capabilities to deliver smarter, more
                efficient solutions for your business challenges.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-[#0f172a]"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Edge AI processing for real-time insights</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-[#0f172a]"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Adaptive learning capabilities</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-[#0f172a]"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Predictive maintenance and self-diagnostics</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-[#0f172a]"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Natural language processing and computer vision</span>
                </li>
              </ul>
              <Button>Explore AI Solutions</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f172a] text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Need a custom hardware solution?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed">
                Our engineering team can design and build custom hardware solutions tailored to your specific
                requirements.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary">
                Contact Our Engineers
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
              >
                View Case Studies
              </Button>
            </div>
          </div>
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
              <Badge variant="secondary">{product.category}</Badge>
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
