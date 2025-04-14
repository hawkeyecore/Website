import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Layers, BarChart, Shield, Server, Cpu, Database } from "lucide-react"
import { query } from "@/lib/db"

// Get all services
async function getServices() {
  const sql = `
    SELECT id, title, slug, description, icon, image_url
    FROM services
    ORDER BY created_at DESC
  `
  return query(sql) as Promise<any[]>
}

// Map icon names to Lucide icon components
const iconMap: Record<string, React.ReactNode> = {
  code: <Code className="h-8 w-8 text-[#0055b3]" />,
  layers: <Layers className="h-8 w-8 text-[#0055b3]" />,
  chart: <BarChart className="h-8 w-8 text-[#0055b3]" />,
  shield: <Shield className="h-8 w-8 text-[#0055b3]" />,
  server: <Server className="h-8 w-8 text-[#0055b3]" />,
  cpu: <Cpu className="h-8 w-8 text-[#0055b3]" />,
  database: <Database className="h-8 w-8 text-[#0055b3]" />,
}

export default async function ServicesPage() {
  const services = await getServices()

  // Default services to show if no services in database
  const defaultServices = [
    {
      id: 1,
      title: "Software Development",
      slug: "software-development",
      description: "Custom software solutions tailored to your business needs.",
      icon: "code",
      image_url: null,
    },
    {
      id: 2,
      title: "Cloud Solutions",
      slug: "cloud-solutions",
      description: "Scalable cloud infrastructure and migration services.",
      icon: "layers",
      image_url: null,
    },
    {
      id: 3,
      title: "Data Analytics",
      slug: "data-analytics",
      description: "Turn your data into actionable insights for better decision-making.",
      icon: "chart",
      image_url: null,
    },
  ]

  // Use database services if available, otherwise use default services
  const displayServices = services.length > 0 ? services : defaultServices

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a comprehensive range of technology services to help your business thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayServices.map((service) => (
              <Card key={service.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0055b3]/10">
                      {service.icon && iconMap[service.icon] ? (
                        iconMap[service.icon]
                      ) : (
                        <Code className="h-8 w-8 text-[#0055b3]" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-center text-muted-foreground">{service.description}</p>
                    <Link href={`/services/${service.slug}`}>
                      <Button variant="link" className="p-0">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss how our services can help your business grow.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
              <Button size="lg" variant="outline">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
