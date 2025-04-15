"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, Droplet, Building, Landmark, Home, Truck, ShoppingBag, CheckCircle } from "lucide-react"
import Link from "next/link"
import { SystemDetailsDialog, type SystemDetailsProps } from "@/components/system-details-dialog"
import { getSafeImagePath } from "@/lib/image-utils"

// Default images to use when no image is provided
const DEFAULT_INDUSTRY_IMAGE = "/diverse-manufacturing-floor.png"
const DEFAULT_INDUSTRY_DETAIL_IMAGE = "/diverse-manufacturing-floor.png"

export default function IndustriesPage() {
  const [selectedSystem, setSelectedSystem] = useState<SystemDetailsProps | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const openSystemDetails = (system: SystemDetailsProps) => {
    setSelectedSystem(system)
    setDialogOpen(true)
  }

  const industries = [
    {
      id: "healthcare",
      name: "Healthcare",
      icon: <Activity className="h-8 w-8 text-[#0055b3]" />,
      description: "Innovative technology solutions for modern healthcare providers.",
      image: "/images/business-meeting.jpeg",
      systems: [
        {
          name: "Electronic Health Records (EHR)",
          description:
            "Our EHR solutions provide a comprehensive digital record of patient health information, enabling healthcare providers to deliver more efficient and effective care.",
          features: [
            "Integration with IoT devices for continuous health monitoring.",
            "Advanced data analytics for predictive health outcomes.",
            "Secure patient data management and access controls.",
            "Customizable templates for different medical specialties.",
          ],
          benefits: [
            "Improved patient care coordination",
            "Reduced administrative burden",
            "Enhanced clinical decision support",
            "Better patient engagement and satisfaction",
          ],
          imageUrl: "/images/healthcare-dashboard.jpeg",
        },
        {
          name: "Patient Portals",
          description:
            "Our patient portals empower individuals to take control of their healthcare journey by providing easy access to their medical information and communication tools.",
          features: [
            "Secure messaging systems for patient-doctor communication.",
            "Online appointment scheduling and management.",
            "Access to test results and medical records.",
            "Prescription refill requests and medication management.",
          ],
          benefits: [
            "Increased patient engagement",
            "Reduced administrative phone calls",
            "Improved medication adherence",
            "Enhanced patient satisfaction",
          ],
          imageUrl: "/images/healthcare-analytics-platform.jpeg",
        },
        {
          name: "Telemedicine Apps",
          description:
            "Our telemedicine applications enable healthcare providers to deliver remote care, expanding access to medical services and improving patient outcomes.",
          features: [
            "Virtual reality (VR) capabilities for immersive patient education.",
            "Real-time remote monitoring and diagnostic tools.",
            "Secure video consultations with end-to-end encryption.",
            "Integration with EHR systems for seamless documentation.",
          ],
          benefits: [
            "Expanded access to care in rural areas",
            "Reduced no-show rates",
            "Lower healthcare delivery costs",
            "Improved patient convenience",
          ],
          imageUrl: "/images/digital-workspace.jpeg",
        },
      ],
    },
    {
      id: "oil-gas",
      name: "Oil & Gas",
      icon: <Droplet className="h-8 w-8 text-[#0055b3]" />,
      description: "Specialized systems for the complex oil and gas industry.",
      image: "/images/corporate-training.jpeg",
      systems: [
        {
          name: "ERP for Oil & Gas",
          description:
            "Our specialized ERP solutions integrate all aspects of oil and gas operations, providing real-time insights and streamlining complex processes.",
          features: [
            "Custom dashboards for real-time operational data.",
            "Environmental compliance tracking and reporting.",
            "Integrated financial and operational management.",
            "Supply chain optimization for oil and gas logistics.",
          ],
          benefits: [
            "Streamlined operations across the value chain",
            "Improved regulatory compliance",
            "Enhanced decision-making with real-time data",
            "Reduced operational costs",
          ],
          imageUrl: "/images/manufacturing-cloud-system.jpeg",
        },
        {
          name: "Asset Tracking",
          description:
            "Our asset tracking solutions provide comprehensive visibility into equipment location, status, and performance, optimizing utilization and maintenance.",
          features: [
            "Automated asset lifecycle management systems.",
            "Integration with SCADA systems for enhanced control.",
            "Real-time equipment monitoring and diagnostics.",
            "Predictive maintenance scheduling based on usage patterns.",
          ],
          benefits: [
            "Reduced equipment downtime",
            "Extended asset lifecycle",
            "Optimized maintenance scheduling",
            "Improved operational efficiency",
          ],
          imageUrl: "/images/manufacturing-digital-strategy.jpeg",
        },
        {
          name: "Predictive Maintenance",
          description:
            "Our predictive maintenance solutions leverage advanced analytics to anticipate equipment failures before they occur, reducing downtime and maintenance costs.",
          features: [
            "AI-based analytics for optimizing maintenance schedules.",
            "Drones for remote inspections and data collection.",
            "Sensor integration for real-time equipment monitoring.",
            "Maintenance history tracking and analysis.",
          ],
          benefits: [
            "Prevented critical failures",
            "Reduced maintenance costs",
            "Optimized maintenance resource allocation",
            "Extended equipment lifecycle",
          ],
          imageUrl: "/images/modern-server-rack.png",
        },
      ],
    },
    {
      id: "finance",
      name: "Finance & Banking",
      icon: <Landmark className="h-8 w-8 text-[#0055b3]" />,
      description: "Secure and efficient solutions for financial institutions.",
      image: "/images/business-presentation.jpeg",
      systems: [
        {
          name: "Core Banking Systems",
          description:
            "Our core banking solutions provide the foundation for financial institutions to manage accounts, process transactions, and deliver digital services to customers.",
          features: [
            "Next-gen banking features like peer-to-peer payments and blockchain-based transactions.",
            "Integration with international banking standards and systems.",
            "Omnichannel customer experience capabilities.",
            "Scalable architecture to support growth.",
          ],
          benefits: [
            "Improved operational efficiency",
            "Enhanced customer experience",
            "Reduced transaction processing time",
            "Increased digital banking adoption",
          ],
          imageUrl: "/images/financial-cloud-dashboard.jpeg",
        },
        {
          name: "Risk Management",
          description:
            "Our risk management solutions help financial institutions identify, assess, and mitigate various types of risk, ensuring regulatory compliance and business stability.",
          features: [
            "Comprehensive risk modeling tools for various financial instruments.",
            "Real-time global market data integration for risk assessment.",
            "Stress testing and scenario analysis capabilities.",
            "Regulatory reporting and compliance management.",
          ],
          benefits: [
            "Improved risk identification and assessment",
            "Enhanced regulatory compliance",
            "Better capital allocation",
            "Reduced financial losses",
          ],
          imageUrl: "/images/financial-security-dashboard.jpeg",
        },
        {
          name: "Fraud Detection",
          description:
            "Our fraud detection systems leverage advanced analytics and machine learning to identify and prevent fraudulent activities in real-time.",
          features: [
            "Behavioral analytics for detecting irregular patterns.",
            "Integration with law enforcement databases for enhanced security checks.",
            "Real-time transaction monitoring and alerts.",
            "Adaptive learning algorithms that evolve with new fraud tactics.",
          ],
          benefits: [
            "Reduced fraudulent transactions",
            "Minimized financial losses",
            "Improved customer trust",
            "Enhanced regulatory compliance",
          ],
          imageUrl: "/images/digital-shield.png",
        },
      ],
    },
    {
      id: "government",
      name: "Government",
      icon: <Building className="h-8 w-8 text-[#0055b3]" />,
      description: "Digital transformation solutions for government agencies.",
      image: "/images/diverse-team-planning.jpeg",
      systems: [
        {
          name: "Public Service Portals",
          description:
            "Our public service portals provide citizens with easy access to government services, information, and resources, enhancing transparency and efficiency.",
          features: [
            "Automated benefits calculation and disbursement systems.",
            "Public feedback and engagement platforms.",
            "Multi-language support and accessibility features.",
            "Integration with existing government databases.",
          ],
          benefits: [
            "Improved citizen satisfaction",
            "Reduced administrative burden",
            "Enhanced service delivery",
            "Increased transparency",
          ],
          imageUrl: "/images/tech-presentation.jpeg",
        },
        {
          name: "Digital ID Systems",
          description:
            "Our digital ID systems provide secure and reliable identity verification for citizens, enabling access to government services and enhancing security.",
          features: [
            "Nationwide digital ID management with multi-factor authentication.",
            "Secure data storage solutions with end-to-end encryption.",
            "Biometric verification capabilities.",
            "Integration with existing identity databases.",
          ],
          benefits: [
            "Enhanced security and fraud prevention",
            "Streamlined access to government services",
            "Reduced identity theft",
            "Improved citizen experience",
          ],
          imageUrl: "/images/digital-fortress.png",
        },
        {
          name: "Workflow Automation",
          description:
            "Our workflow automation solutions streamline government processes, reducing paperwork, improving efficiency, and enhancing service delivery.",
          features: [
            "Integration with existing government databases for seamless data transfer.",
            "Customizable workflow engines for different government departments.",
            "Document management and digital signature capabilities.",
            "Audit trails and compliance reporting.",
          ],
          benefits: [
            "Reduced processing time",
            "Improved accuracy and consistency",
            "Enhanced transparency and accountability",
            "Lower operational costs",
          ],
          imageUrl: "/images/office-collaboration.jpeg",
        },
      ],
    },
    {
      id: "real-estate",
      name: "Real Estate & Property Management",
      icon: <Home className="h-8 w-8 text-[#0055b3]" />,
      description: "Comprehensive solutions for property management and real estate businesses.",
      image: "/images/modern-workspace.jpeg",
      systems: [
        {
          name: "CRM for Real Estate",
          description:
            "Our CRM solutions for real estate businesses help manage client relationships, track leads, and streamline sales processes, enhancing efficiency and growth.",
          features: [
            "Advanced lead generation tools using AI to predict buyer preferences.",
            "Dynamic client interaction trackers for personalized follow-ups.",
            "Integration with property listing platforms.",
            "Mobile access for agents in the field.",
          ],
          benefits: [
            "Improved lead conversion rates",
            "Enhanced client relationships",
            "Streamlined sales processes",
            "Increased agent productivity",
          ],
          imageUrl: "/images/business-workshop.jpeg",
        },
        {
          name: "Listing Platforms",
          description:
            "Our listing platforms provide real estate businesses with powerful tools to showcase properties, attract buyers, and streamline the selling process.",
          features: [
            "AI-enhanced property recommendation engines.",
            "Multi-platform listing syndication tools.",
            "Virtual tour integration.",
            "Advanced search and filtering capabilities.",
          ],
          benefits: [
            "Increased property visibility",
            "Improved buyer engagement",
            "Reduced time on market",
            "Enhanced property presentation",
          ],
          imageUrl: "/images/ecommerce-platform.jpeg",
        },
        {
          name: "Virtual Tours",
          description:
            "Our virtual tour solutions enable real estate businesses to showcase properties remotely, enhancing buyer engagement and expanding market reach.",
          features: [
            "3D modeling tools for creating on-demand property walkthroughs.",
            "Integration with virtual reality platforms for remote viewing.",
            "Interactive floor plans and property features.",
            "Analytics to track viewer engagement and interest.",
          ],
          benefits: [
            "Expanded market reach",
            "Reduced in-person showings",
            "Enhanced buyer experience",
            "Improved property marketing",
          ],
          imageUrl: "/images/tech-meeting.jpeg",
        },
        {
          name: "Tenant Management",
          description:
            "Our tenant management solutions streamline property management operations, enhancing efficiency, tenant satisfaction, and profitability.",
          features: [
            "Automated rent collection and escalation systems.",
            "Smart property management solutions for utilities and maintenance requests.",
            "Tenant communication and engagement tools.",
            "Financial reporting and analytics.",
          ],
          benefits: [
            "Improved tenant satisfaction",
            "Reduced administrative burden",
            "Enhanced property performance",
            "Streamlined maintenance management",
          ],
          imageUrl: "/images/modern-workspace.jpeg",
        },
      ],
    },
    {
      id: "logistics",
      name: "Logistics & Transportation",
      icon: <Truck className="h-8 w-8 text-[#0055b3]" />,
      description: "Optimized solutions for logistics and transportation companies.",
      image: "/images/team-collaboration.jpeg",
      systems: [
        {
          name: "Supply Chain Automation",
          description:
            "Our supply chain automation solutions streamline logistics operations, enhancing visibility, efficiency, and responsiveness across the entire supply chain.",
          features: [
            "Blockchain for secure and transparent supply chain tracking.",
            "AI-powered inventory management systems for dynamic stocking.",
            "Real-time shipment tracking and monitoring.",
            "Integration with supplier and customer systems.",
          ],
          benefits: [
            "Improved supply chain visibility",
            "Reduced inventory costs",
            "Enhanced supplier collaboration",
            "Streamlined logistics operations",
          ],
          imageUrl: "/images/interconnected-solutions.png",
        },
        {
          name: "Route Optimization",
          description:
            "Our route optimization solutions leverage advanced algorithms to identify the most efficient routes, reducing costs, time, and environmental impact.",
          features: [
            "Machine learning models for predicting the best routes under varying conditions.",
            "Integrated fleet management systems with GPS and vehicle telemetry.",
            "Real-time traffic and weather data integration.",
            "Driver performance monitoring and optimization.",
          ],
          benefits: [
            "Reduced fuel consumption",
            "Improved delivery times",
            "Enhanced driver productivity",
            "Lower transportation costs",
          ],
          imageUrl: "/images/interconnected-data-flow.png",
        },
      ],
    },
    {
      id: "retail",
      name: "Retail & E-Commerce",
      icon: <ShoppingBag className="h-8 w-8 text-[#0055b3]" />,
      description: "Innovative solutions for modern retail and e-commerce businesses.",
      image: "/images/data-analytics-team.jpeg",
      systems: [
        {
          name: "Custom E-commerce Platforms",
          description:
            "Our custom e-commerce platforms provide retailers with powerful tools to sell online, manage inventory, and deliver exceptional customer experiences.",
          features: [
            "Omnichannel retail solutions for seamless shopping experiences.",
            "AI-driven personalization engines for product recommendations.",
            "Mobile-first design for optimal user experience.",
            "Integration with payment gateways and shipping providers.",
          ],
          benefits: [
            "Increased online sales",
            "Enhanced customer engagement",
            "Improved inventory management",
            "Streamlined order fulfillment",
          ],
          imageUrl: "/images/ecommerce-platform.jpeg",
        },
        {
          name: "POS Systems",
          description:
            "Our point-of-sale systems streamline retail operations, enhancing checkout efficiency, inventory management, and customer engagement.",
          features: [
            "Cloud-based POS for flexibility and scalability.",
            "Advanced customer loyalty and reward systems.",
            "Inventory management integration.",
            "Sales analytics and reporting.",
          ],
          benefits: [
            "Improved checkout efficiency",
            "Enhanced customer experience",
            "Better inventory control",
            "Valuable sales insights",
          ],
          imageUrl: "/images/retail-analytics-dashboard.jpeg",
        },
        {
          name: "Inventory Management",
          description:
            "Our inventory management solutions provide retailers with real-time visibility and control over their inventory, optimizing stock levels and reducing costs.",
          features: [
            "Automated warehousing solutions using robots and AI.",
            "Detailed analytics dashboards for inventory trends and forecasts.",
            "Multi-location inventory tracking and management.",
            "Integration with suppliers for automated reordering.",
          ],
          benefits: [
            "Reduced stockouts and overstocking",
            "Lower inventory carrying costs",
            "Improved inventory turnover",
            "Enhanced supply chain efficiency",
          ],
          imageUrl: "/images/retail-it-transformation.jpeg",
        },
      ],
    },
  ]

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
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList>
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
                {industries.map((industry) => (
                  <Card key={industry.id} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={getSafeImagePath(industry.image, DEFAULT_INDUSTRY_IMAGE) || "/placeholder.svg"}
                        alt={industry.name}
                        fill
                        className="object-cover"
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
                      <Link href={`/industries/${industry.id}`}>
                        <Button variant="outline" className="w-full">
                          Explore Solutions
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id} className="mt-0">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden mb-6">
                      <Image
                        src={getSafeImagePath(industry.image, DEFAULT_INDUSTRY_DETAIL_IMAGE) || "/placeholder.svg"}
                        alt={industry.name}
                        fill
                        className="object-cover"
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
                      <div className="flex gap-4">
                        <Button>Request Demo</Button>
                        <Link href={`/industries/${industry.id}`}>
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
                                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <Button
                              variant="outline"
                              className="mt-4"
                              onClick={() =>
                                openSystemDetails({
                                  ...system,
                                  industry: industry.name,
                                })
                              }
                            >
                              Learn More
                            </Button>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                    <div className="mt-8 p-6 bg-muted rounded-lg">
                      <h4 className="text-lg font-bold mb-2">Why Choose Our {industry.name} Solutions?</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                          <span>Industry-specific expertise and tailored solutions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                          <span>Seamless integration with existing systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                          <span>Ongoing support and maintenance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
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
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary">
                  Contact Our Experts
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
            <div className="flex items-center justify-center">
              <Image
                src="/images/team-celebration.jpeg"
                alt="Team Collaboration"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* System Details Dialog */}
      <SystemDetailsDialog system={selectedSystem} open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  )
}
