import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  // Sample services data
  const services = [
    {
      id: 1,
      name: "Software Development",
      description: "Custom software solutions tailored to your business needs.",
      longDescription:
        "Our expert development team creates custom software solutions that address your unique business challenges. From web and mobile applications to enterprise systems, we deliver high-quality, scalable software that drives efficiency and growth.",
      benefits: [
        "Tailored solutions for your specific needs",
        "Agile development methodology",
        "Ongoing support and maintenance",
        "Seamless integration with existing systems",
      ],
      image: "/images/diverse-team-planning.jpeg",
    },
    {
      id: 2,
      name: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
      longDescription:
        "Transform your business with our comprehensive cloud solutions. We help you migrate to the cloud, optimize your infrastructure, and implement cloud-native applications that scale with your business while reducing operational costs.",
      benefits: [
        "Reduced infrastructure costs",
        "Improved scalability and flexibility",
        "Enhanced security and compliance",
        "24/7 monitoring and support",
      ],
      image: "/images/modern-workspace.jpeg",
    },
    {
      id: 3,
      name: "Data Analytics",
      description: "Turn your data into actionable insights for better decision-making.",
      longDescription:
        "Unlock the power of your data with our advanced analytics services. We help you collect, process, and analyze data to extract valuable insights that drive informed business decisions and create competitive advantages.",
      benefits: [
        "Comprehensive data strategy",
        "Custom dashboards and reporting",
        "Predictive analytics capabilities",
        "Data-driven decision making",
      ],
      image: "/images/data-analytics-team.jpeg",
    },
    {
      id: 4,
      name: "Cybersecurity",
      description: "Protect your business with our comprehensive security solutions.",
      longDescription:
        "Safeguard your digital assets with our end-to-end cybersecurity services. We provide threat assessment, security implementation, and ongoing monitoring to protect your business from evolving cyber threats.",
      benefits: [
        "Comprehensive security assessments",
        "Proactive threat detection",
        "Compliance with industry regulations",
        "Security awareness training",
      ],
      image: "/images/team-celebration.jpeg",
    },
    {
      id: 5,
      name: "IT Consulting",
      description: "Strategic technology guidance to help your business thrive.",
      longDescription:
        "Our experienced consultants provide strategic guidance on technology investments, digital transformation, and IT governance. We help you align your technology strategy with your business goals to maximize ROI and drive growth.",
      benefits: [
        "Technology roadmap development",
        "Digital transformation strategy",
        "IT governance and best practices",
        "Vendor selection and management",
      ],
      image: "/images/business-meeting.jpeg",
    },
    {
      id: 6,
      name: "Managed IT Services",
      description: "Comprehensive IT support and management for your business.",
      longDescription:
        "Focus on your core business while we take care of your IT infrastructure. Our managed services include proactive monitoring, maintenance, and support to ensure your systems run smoothly and efficiently at all times.",
      benefits: [
        "Proactive monitoring and maintenance",
        "Rapid issue resolution",
        "Predictable monthly costs",
        "Technology optimization",
      ],
      image: "/images/corporate-training.jpeg",
    },
  ]

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive technology services to help your business grow and innovate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList>
                <TabsTrigger value="all">All Services</TabsTrigger>
                <TabsTrigger value="development">Development</TabsTrigger>
                <TabsTrigger value="cloud">Cloud</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="consulting">Consulting</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="development" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter((service) => service.id === 1)
                  .map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="cloud" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter((service) => service.id === 2)
                  .map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="security" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter((service) => service.id === 4)
                  .map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="consulting" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter((service) => service.id === 5)
                  .map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f172a] text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to transform your business?</h2>
              <p className="md:text-xl">
                Contact us today to discuss how our services can help you achieve your technology goals.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Learn More
                </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/business-presentation.jpeg"
                alt="Business Meeting"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ServiceCard({ service }: { service: any }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">{service.name}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{service.longDescription}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Key Benefits:</h4>
            <ul className="space-y-1">
              {service.benefits.map((benefit: string, index: number) => (
                <li key={index} className="text-sm text-muted-foreground flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-[#0055b3]" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <Link href={`/services/${service.name.toLowerCase().replace(/\s+/g, "-")}`}>
            <Button className="w-full">Learn More</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
