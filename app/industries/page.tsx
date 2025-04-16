"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, Droplet, Building, Landmark, Home, Truck, ShoppingBag, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Since this is a client component, we need to add metadata in a separate file
// We'll create a separate metadata.tsx file for this page

export default function IndustriesPage() {
  const [imageError, setImageError] = useState<Record<string, boolean>>({})

  // Function to get a fallback image if both primary and fallback images fail
  const getImageSrc = (industry: any, index: number) => {
    if (imageError[industry.id]) {
      return (
        industry.fallbackImage || `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(industry.name)}`
      )
    }
    return industry.image || `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(industry.name)}`
  }

  const industries = [
    {
      id: "healthcare",
      name: "Healthcare",
      icon: <Activity className="h-8 w-8 text-[#0055b3]" />,
      description: "Innovative technology solutions for modern healthcare providers.",
      image: "/images/business-meeting.jpeg",
      fallbackImage: "/interconnected-healthcare.png",
      systems: [
        {
          name: "Electronic Health Records (EHR)",
          features: [
            "Integration with IoT devices for continuous health monitoring.",
            "Advanced data analytics for predictive health outcomes.",
          ],
        },
        {
          name: "Patient Portals",
          features: [
            "Secure messaging systems for patient-doctor communication.",
            "Online appointment scheduling and management.",
          ],
        },
        {
          name: "Telemedicine Apps",
          features: [
            "Virtual reality (VR) capabilities for immersive patient education.",
            "Real-time remote monitoring and diagnostic tools.",
          ],
        },
      ],
    },
    {
      id: "oil-gas",
      name: "Oil & Gas",
      icon: <Droplet className="h-8 w-8 text-[#0055b3]" />,
      description: "Specialized systems for the complex oil and gas industry.",
      image: "/images/corporate-training.jpeg",
      fallbackImage: "/oil-gas-landscape.png",
      systems: [
        {
          name: "ERP for Oil & Gas",
          features: [
            "Custom dashboards for real-time operational data.",
            "Environmental compliance tracking and reporting.",
          ],
        },
        {
          name: "Asset Tracking",
          features: [
            "Automated asset lifecycle management systems.",
            "Integration with SCADA systems for enhanced control.",
          ],
        },
        {
          name: "Predictive Maintenance",
          features: [
            "AI-based analytics for optimizing maintenance schedules.",
            "Drones for remote inspections and data collection.",
          ],
        },
      ],
    },
    {
      id: "finance",
      name: "Finance & Banking",
      icon: <Landmark className="h-8 w-8 text-[#0055b3]" />,
      description: "Secure and efficient solutions for financial institutions.",
      image: "/images/business-presentation.jpeg",
      fallbackImage: "/interconnected-finance-tech.png",
      systems: [
        {
          name: "Core Banking Systems",
          features: [
            "Next-gen banking features like peer-to-peer payments and blockchain-based transactions.",
            "Integration with international banking standards and systems.",
          ],
        },
        {
          name: "Risk Management",
          features: [
            "Comprehensive risk modeling tools for various financial instruments.",
            "Real-time global market data integration for risk assessment.",
          ],
        },
        {
          name: "Fraud Detection",
          features: [
            "Behavioral analytics for detecting irregular patterns.",
            "Integration with law enforcement databases for enhanced security checks.",
          ],
        },
      ],
    },
    {
      id: "government",
      name: "Government",
      icon: <Building className="h-8 w-8 text-[#0055b3]" />,
      description: "Digital transformation solutions for government agencies.",
      image: "/images/diverse-team-planning.jpeg",
      fallbackImage: "/digital-government-network.png",
      systems: [
        {
          name: "Public Service Portals",
          features: [
            "Automated benefits calculation and disbursement systems.",
            "Public feedback and engagement platforms.",
          ],
        },
        {
          name: "Digital ID Systems",
          features: [
            "Nationwide digital ID management with multi-factor authentication.",
            "Secure data storage solutions with end-to-end encryption.",
          ],
        },
        {
          name: "Workflow Automation",
          features: [
            "Integration with existing government databases for seamless data transfer.",
            "Customizable workflow engines for different government departments.",
          ],
        },
      ],
    },
    {
      id: "real-estate",
      name: "Real Estate & Property Management",
      icon: <Home className="h-8 w-8 text-[#0055b3]" />,
      description: "Comprehensive solutions for property management and real estate businesses.",
      image: "/images/modern-workspace.jpeg",
      fallbackImage: "/property-management-overview.png",
      systems: [
        {
          name: "CRM for Real Estate",
          features: [
            "Advanced lead generation tools using AI to predict buyer preferences.",
            "Dynamic client interaction trackers for personalized follow-ups.",
          ],
        },
        {
          name: "Listing Platforms",
          features: ["AI-enhanced property recommendation engines.", "Multi-platform listing syndication tools."],
        },
        {
          name: "Virtual Tours",
          features: [
            "3D modeling tools for creating on-demand property walkthroughs.",
            "Integration with virtual reality platforms for remote viewing.",
          ],
        },
        {
          name: "Tenant Management",
          features: [
            "Automated rent collection and escalation systems.",
            "Smart property management solutions for utilities and maintenance requests.",
          ],
        },
      ],
    },
    {
      id: "logistics",
      name: "Logistics & Transportation",
      icon: <Truck className="h-8 w-8 text-[#0055b3]" />,
      description: "Optimized solutions for logistics and transportation companies.",
      image: "/images/team-collaboration.jpeg",
      fallbackImage: "/global-logistics-network.png",
      systems: [
        {
          name: "Supply Chain Automation",
          features: [
            "Blockchain for secure and transparent supply chain tracking.",
            "AI-powered inventory management systems for dynamic stocking.",
          ],
        },
        {
          name: "Route Optimization",
          features: [
            "Machine learning models for predicting the best routes under varying conditions.",
            "Integrated fleet management systems with GPS and vehicle telemetry.",
          ],
        },
      ],
    },
    {
      id: "retail",
      name: "Retail & E-Commerce",
      icon: <ShoppingBag className="h-8 w-8 text-[#0055b3]" />,
      description: "Innovative solutions for modern retail and e-commerce businesses.",
      image: "/images/data-analytics-team.jpeg",
      fallbackImage: "/diverse-shoppers-online.png",
      systems: [
        {
          name: "Custom E-commerce Platforms",
          features: [
            "Omnichannel retail solutions for seamless shopping experiences.",
            "AI-driven personalization engines for product recommendations.",
          ],
        },
        {
          name: "POS Systems",
          features: [
            "Cloud-based POS for flexibility and scalability.",
            "Advanced customer loyalty and reward systems.",
          ],
        },
        {
          name: "Inventory Management",
          features: [
            "Automated warehousing solutions using robots and AI.",
            "Detailed analytics dashboards for inventory trends and forecasts.",
          ],
        },
      ],
    },
  ]

  const handleImageError = (id: string) => {
    setImageError((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Industry Solutions</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Specialized technology solutions tailored for your industry's unique challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="overview" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="flex-wrap justify-center">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                {industries.map((industry) => (
                  <TabsTrigger key={industry.id} value={industry.id}>
                    {industry.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="overview" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {industries.map((industry, index) => (
                  <Card key={industry.id} className="overflow-hidden">
                    <div className="aspect-video relative bg-muted">
                      <Image
                        src={getImageSrc(industry, index) || "/placeholder.svg"}
                        alt={`${industry.name} industry`}
                        fill
                        className="object-cover"
                        priority={industry.id === "healthcare"}
                        onError={() => handleImageError(industry.id)}
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0055b3]/10">
                          {industry.icon}
                        </div>
                        <h3 className="text-xl font-bold">{industry.name}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{industry.description}</p>
                      <Link href={`/industries/${industry.id}`} className="w-full block">
                        <Button variant="outline" className="w-full" aria-label={`Explore ${industry.name} Solutions`}>
                          Explore Solutions
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {industries.map((industry, index) => (
              <TabsContent key={industry.id} value={industry.id} className="mt-0">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden mb-6 bg-muted">
                      <Image
                        src={getImageSrc(industry, index) || "/placeholder.svg"}
                        alt={`${industry.name} industry`}
                        fill
                        className="object-cover"
                        priority
                        onError={() => handleImageError(industry.id)}
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0055b3]/10">
                          {industry.icon}
                        </div>
                        <h2 className="text-2xl font-bold">{industry.name}</h2>
                      </div>
                      <p className="text-muted-foreground">{industry.description}</p>
                      <p className="text-muted-foreground">
                        Our specialized solutions for the {industry.name.toLowerCase()} industry are designed to address
                        specific challenges and optimize operations, helping businesses achieve greater efficiency,
                        security, and growth.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href={`/industries/${industry.id}`} className="block">
                          <Button>Request Demo</Button>
                        </Link>
                        <Link href={`/industries/${industry.id}`} className="block">
                          <Button variant="outline">Learn More</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Key Systems</h3>
                    <Accordion type="single" collapsible className="w-full">
                      {industry.systems.map((system, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-lg font-medium">{system.name}</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2">
                              {system.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5 shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                    <div className="mt-8 p-6 bg-muted rounded-lg">
                      <h4 className="text-lg font-bold mb-2">Why Choose Our {industry.name} Solutions?</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5 shrink-0" />
                          <span>Industry-specific expertise and tailored solutions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5 shrink-0" />
                          <span>Seamless integration with existing systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5 shrink-0" />
                          <span>Ongoing support and maintenance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5 shrink-0" />
                          <span>Scalable solutions that grow with your business</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f172a] text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Need a custom solution for your industry?
              </h2>
              <p className="md:text-xl">
                Our team of experts can develop tailored solutions to address your specific industry challenges.
              </p>
              <div className="flex flex-wrap gap-2 min-[400px]:flex-row">
                <Link href="/contact" className="block">
                  <Button size="lg" variant="secondary">
                    Contact Our Experts
                  </Button>
                </Link>
                <Link href="/case-studies" className="block">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                  >
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-muted">
                <Image
                  src="/images/team-celebration.jpeg"
                  alt="Team Collaboration"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/collaborative-tech-brainstorm.png"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
