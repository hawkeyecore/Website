import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Layers, Code, BarChart, Building, Activity, Droplet, Landmark } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Innovative Technology Solutions
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Empowering businesses with cutting-edge technology and expert services to drive growth and innovation.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="outline">
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/modern-workspace.jpeg"
                alt="Modern Tech Workspace"
                width={550}
                height={550}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a comprehensive range of technology services to help your business thrive.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0055b3]/10">
                <Code className="h-8 w-8 text-[#0055b3]" />
              </div>
              <h3 className="text-xl font-bold">Software Development</h3>
              <p className="text-center text-muted-foreground">
                Custom software solutions tailored to your business needs.
              </p>
              <Link href="/services" className="flex items-center text-sm font-medium text-[#0055b3]">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0055b3]/10">
                <Layers className="h-8 w-8 text-[#0055b3]" />
              </div>
              <h3 className="text-xl font-bold">IT Consulting</h3>
              <p className="text-center text-muted-foreground">
                Expert advice and strategic planning for your IT needs.
              </p>
              <Link href="/services" className="flex items-center text-sm font-medium text-[#0055b3]">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0055b3]/10">
                <BarChart className="h-8 w-8 text-[#0055b3]" />
              </div>
              <h3 className="text-xl font-bold">Network Solutions</h3>
              <p className="text-center text-muted-foreground">
                Secure and efficient network infrastructure for your business.
              </p>
              <Link href="/services" className="flex items-center text-sm font-medium text-[#0055b3]">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Button variant="outline" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Industry Solutions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Specialized technology solutions tailored for your industry's unique challenges.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Healthcare",
                icon: <Activity className="h-8 w-8 text-[#0055b3]" />,
                description: "Innovative solutions for modern healthcare providers.",
              },
              {
                name: "Finance",
                icon: <Landmark className="h-8 w-8 text-[#0055b3]" />,
                description: "Secure systems for financial institutions.",
              },
              {
                name: "Oil & Gas",
                icon: <Droplet className="h-8 w-8 text-[#0055b3]" />,
                description: "Specialized systems for the oil and gas industry.",
              },
              {
                name: "Government",
                icon: <Building className="h-8 w-8 text-[#0055b3]" />,
                description: "Digital transformation for government agencies.",
              },
            ].map((industry, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0055b3]/10">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold">{industry.name}</h3>
                <p className="text-center text-muted-foreground">{industry.description}</p>
                <Link href="/industries" className="flex items-center text-sm font-medium text-[#0055b3]">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/industries">
              <Button size="lg">Explore All Industries</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Hawkeye Core</h2>
              <p className="text-muted-foreground">
                Founded in 2022 and based in Houston, Texas, Hawkeye Core is an IT consulting company committed to
                delivering cutting-edge technology solutions that empower businesses to excel in today's competitive
                landscape.
              </p>
              <p className="text-muted-foreground">
                Our mission is to help businesses leverage advanced IT solutions to streamline operations, improve user
                experiences, and foster long-term growth.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/about">
                  <Button>Learn More About Us</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/team-collaboration.jpeg"
                alt="Team Collaboration"
                width={550}
                height={550}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our innovative technology products designed to enhance your business operations.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "TechCloud Platform",
                description: "A comprehensive cloud solution for businesses of all sizes.",
                image: "/images/tech-meeting.jpeg",
                link: "techcloud-platform",
              },
              {
                title: "DataSense Analytics",
                description: "Turn your data into actionable insights with our powerful analytics platform.",
                image: "/images/digital-workspace.jpeg",
                link: "datasense-analytics",
              },
              {
                title: "SecureGuard Pro",
                description: "Enterprise-grade security solution to protect your digital assets.",
                image: "/images/office-collaboration.jpeg",
                link: "secureguard-pro",
              },
            ].map((product, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg border bg-background">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={400}
                    height={300}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{product.title}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                  <Link href={`/products/${product.link}`}>
                    <Button variant="link" className="p-0 mt-4">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button size="lg">View All Products</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f172a] text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Business?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get in touch with our team to discuss how we can help you achieve your technology goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Contact Us
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
