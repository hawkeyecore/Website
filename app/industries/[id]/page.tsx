"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, Activity, Droplet, Landmark, Building, Home, Truck, ShoppingBag } from "lucide-react"
import { notFound } from "next/navigation"
import { SystemDetailsDialog, type SystemDetailsProps } from "@/components/system-details-dialog"

// Default fallback image that we know exists
const FALLBACK_IMAGE = "/modern-tech-workspace.png"

// Sample industries data - in a real app, this would come from a database or API
const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: <Activity className="h-8 w-8 text-[#0055b3]" />,
    description: "Innovative technology solutions for modern healthcare providers.",
    longDescription:
      "Our healthcare technology solutions are designed to improve patient care, streamline operations, and ensure compliance with industry regulations. From electronic health records to telemedicine applications, we provide the tools healthcare providers need to deliver exceptional care in the digital age.",
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
        imageUrl: "/images/digital-workspace.jpeg",
      },
    ],
    challenges: [
      "Managing and securing sensitive patient data",
      "Ensuring compliance with healthcare regulations (HIPAA, GDPR)",
      "Integrating with legacy healthcare systems",
      "Providing seamless user experiences for both patients and providers",
    ],
    caseStudies: [
      {
        title: "Regional Hospital Network",
        description:
          "Implemented a comprehensive EHR system that improved patient care coordination and reduced administrative costs by 30%.",
        results: [
          "30% reduction in administrative costs",
          "25% improvement in care coordination",
          "98% provider satisfaction rate",
        ],
      },
      {
        title: "National Telemedicine Provider",
        description:
          "Developed a custom telemedicine platform that enabled the client to scale their services nationwide, resulting in a 200% increase in patient consultations.",
        results: [
          "200% increase in patient consultations",
          "40% reduction in no-show rates",
          "Expanded access to care in rural areas",
        ],
      },
    ],
  },
  {
    id: "oil-gas",
    name: "Oil & Gas",
    icon: <Droplet className="h-8 w-8 text-[#0055b3]" />,
    description: "Specialized systems for the complex oil and gas industry.",
    longDescription:
      "Our technology solutions for the oil and gas industry are designed to optimize operations, improve safety, and enhance decision-making across the entire value chain. From exploration and production to refining and distribution, we provide the tools needed to thrive in this complex and evolving industry.",
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
        imageUrl: "/images/modern-server-rack.png",
      },
    ],
    challenges: [
      "Ensuring safety in hazardous environments",
      "Managing complex supply chains and logistics",
      "Complying with environmental regulations",
      "Optimizing operations in remote locations",
    ],
    caseStudies: [
      {
        title: "Global Oil Producer",
        description:
          "Implemented an integrated asset management system that reduced equipment downtime by 45% and maintenance costs by 30%.",
        results: [
          "45% reduction in equipment downtime",
          "30% decrease in maintenance costs",
          "Improved safety compliance",
        ],
      },
      {
        title: "Midstream Pipeline Operator",
        description:
          "Developed a custom predictive maintenance solution that prevented critical failures and saved the client millions in potential repair costs and lost revenue.",
        results: [
          "85% accuracy in predicting equipment failures",
          "$4.5 million saved in prevented downtime",
          "Extended equipment lifecycle by 20%",
        ],
      },
    ],
  },
  {
    id: "finance",
    name: "Finance & Banking",
    icon: <Landmark className="h-8 w-8 text-[#0055b3]" />,
    description: "Secure and efficient solutions for financial institutions.",
    longDescription:
      "Our financial technology solutions are designed to enhance security, improve customer experiences, and streamline operations for banks, credit unions, and other financial institutions. From core banking systems to fraud detection, we provide the tools needed to thrive in today's digital financial landscape.",
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
        imageUrl: "/images/digital-shield.png",
      },
    ],
    challenges: [
      "Ensuring robust security and fraud prevention",
      "Complying with complex financial regulations",
      "Delivering seamless customer experiences across channels",
      "Modernizing legacy banking systems",
    ],
    caseStudies: [
      {
        title: "Regional Bank",
        description:
          "Implemented a modern core banking system that improved customer satisfaction by 40% and reduced transaction processing time by 60%.",
        results: [
          "40% improvement in customer satisfaction",
          "60% reduction in transaction processing time",
          "35% increase in digital banking adoption",
        ],
      },
      {
        title: "International Financial Services Firm",
        description:
          "Developed a custom fraud detection system that reduced fraudulent transactions by 85% and saved the client millions in potential losses.",
        results: [
          "85% reduction in fraudulent transactions",
          "$12 million saved in prevented fraud",
          "99.7% accuracy in fraud detection",
        ],
      },
    ],
  },
  {
    id: "government",
    name: "Government",
    icon: <Building className="h-8 w-8 text-[#0055b3]" />,
    description: "Digital transformation solutions for government agencies.",
    longDescription:
      "Our government technology solutions are designed to enhance citizen services, improve operational efficiency, and ensure security and compliance. From public service portals to digital ID systems, we provide the tools government agencies need to deliver better services in the digital age.",
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
        imageUrl: "/images/office-collaboration.jpeg",
      },
    ],
    challenges: [
      "Managing sensitive citizen data securely",
      "Ensuring compliance with government regulations",
      "Integrating with legacy government systems",
      "Providing accessible services to all citizens",
    ],
    caseStudies: [
      {
        title: "Municipal Government",
        description:
          "Implemented a comprehensive citizen service portal that improved service delivery and reduced administrative costs by 35%.",
        results: [
          "35% reduction in administrative costs",
          "50% improvement in service delivery time",
          "92% citizen satisfaction rate",
        ],
      },
      {
        title: "Federal Agency",
        description:
          "Developed a secure digital ID system that enhanced security and streamlined access to government services.",
        results: [
          "70% reduction in identity fraud",
          "60% improvement in service access time",
          "Enhanced compliance with security regulations",
        ],
      },
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate & Property Management",
    icon: <Home className="h-8 w-8 text-[#0055b3]" />,
    description: "Comprehensive solutions for property management and real estate businesses.",
    longDescription:
      "Our real estate technology solutions are designed to streamline property management, enhance customer experiences, and optimize operations for real estate businesses. From CRM systems to virtual tours, we provide the tools needed to succeed in today's competitive real estate market.",
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
        imageUrl: "/images/modern-workspace.jpeg",
      },
    ],
    challenges: [
      "Managing complex property portfolios",
      "Streamlining tenant communications and maintenance",
      "Enhancing property marketing and visibility",
      "Optimizing rental income and property value",
    ],
    caseStudies: [
      {
        title: "National Property Management Firm",
        description:
          "Implemented a comprehensive tenant management system that improved tenant satisfaction and reduced vacancy rates.",
        results: [
          "25% reduction in vacancy rates",
          "40% improvement in maintenance response time",
          "30% increase in tenant retention",
        ],
      },
      {
        title: "Luxury Real Estate Agency",
        description:
          "Developed a virtual tour platform that expanded market reach and increased property sales during the pandemic.",
        results: [
          "200% increase in virtual property viewings",
          "35% reduction in time-to-sale",
          "45% increase in out-of-state buyers",
        ],
      },
    ],
  },
  {
    id: "logistics",
    name: "Logistics & Transportation",
    icon: <Truck className="h-8 w-8 text-[#0055b3]" />,
    description: "Optimized solutions for logistics and transportation companies.",
    longDescription:
      "Our logistics and transportation technology solutions are designed to optimize routes, enhance visibility, and improve efficiency across the supply chain. From supply chain automation to route optimization, we provide the tools needed to succeed in today's competitive logistics industry.",
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
        imageUrl: "/images/interconnected-data-flow.png",
      },
    ],
    challenges: [
      "Managing complex logistics networks",
      "Optimizing routes and delivery schedules",
      "Ensuring visibility across the supply chain",
      "Reducing transportation costs and environmental impact",
    ],
    caseStudies: [
      {
        title: "Global Logistics Provider",
        description:
          "Implemented a comprehensive route optimization system that reduced fuel consumption and improved delivery times.",
        results: [
          "20% reduction in fuel consumption",
          "30% improvement in on-time deliveries",
          "15% decrease in transportation costs",
        ],
      },
      {
        title: "E-commerce Fulfillment Company",
        description:
          "Developed a supply chain automation platform that enhanced visibility and streamlined operations across multiple warehouses.",
        results: [
          "40% improvement in inventory accuracy",
          "25% reduction in order fulfillment time",
          "60% decrease in shipping errors",
        ],
      },
    ],
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    icon: <ShoppingBag className="h-8 w-8 text-[#0055b3]" />,
    description: "Innovative solutions for modern retail and e-commerce businesses.",
    longDescription:
      "Our retail and e-commerce technology solutions are designed to enhance customer experiences, optimize inventory management, and drive sales growth. From custom e-commerce platforms to inventory management systems, we provide the tools needed to succeed in today's competitive retail landscape.",
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
        imageUrl: "/images/retail-it-transformation.jpeg",
      },
    ],
    challenges: [
      "Meeting evolving customer expectations",
      "Managing inventory across multiple channels",
      "Competing with large online marketplaces",
      "Personalizing customer experiences at scale",
    ],
    caseStudies: [
      {
        title: "Multi-Channel Retailer",
        description:
          "Implemented an omnichannel retail solution that unified online and in-store experiences, increasing sales and customer satisfaction.",
        results: [
          "35% increase in cross-channel sales",
          "40% improvement in inventory turnover",
          "28% increase in customer lifetime value",
        ],
      },
      {
        title: "Specialty E-commerce Brand",
        description:
          "Developed a custom e-commerce platform with personalization features that significantly improved conversion rates and average order value.",
        results: [
          "45% increase in conversion rate",
          "30% higher average order value",
          "60% improvement in customer retention",
        ],
      },
    ],
  },
]

export default function IndustryDetailPage({ params }: { params: { id: string } }) {
  const [selectedSystem, setSelectedSystem] = useState<SystemDetailsProps | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const openSystemDetails = (system: SystemDetailsProps) => {
    // Create a new object to avoid reference issues
    const processedSystem = {
      ...system,
      // Set to null if empty or undefined
      imageUrl: system.imageUrl && system.imageUrl.trim() !== "" ? system.imageUrl : null,
    }

    setSelectedSystem(processedSystem)
    setDialogOpen(true)
  }

  const industry = industries.find((i) => i.id === params.id)

  if (!industry) {
    notFound()
  }

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-4">
            <Link
              href="/industries"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Industries
            </Link>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0055b3]/10">
                    {industry.icon}
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{industry.name}</h1>
                </div>
                <p className="text-muted-foreground md:text-xl">{industry.longDescription}</p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Request a Consultation</Button>
                  <Button size="lg" variant="outline">
                    View Solutions
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                {industry.image && industry.image.trim() !== "" ? (
                  <Image src={industry.image || "/placeholder.svg"} alt={industry.name} fill className="object-cover" />
                ) : (
                  <Image src={FALLBACK_IMAGE || "/placeholder.svg"} alt={industry.name} fill className="object-cover" />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Key Systems</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industry.systems.map((system, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{system.name}</h3>
                  <p className="text-muted-foreground mb-6">{system.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {system.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-6"
                    onClick={() =>
                      openSystemDetails({
                        ...system,
                        industry: industry.name,
                      })
                    }
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the component remains unchanged */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-6">Industry Challenges</h2>
              <p className="text-muted-foreground mb-6">
                The {industry.name} industry faces unique challenges that require specialized technology solutions. Our
                deep industry expertise allows us to address these challenges effectively.
              </p>
              <ul className="space-y-4">
                {industry.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#0055b3] mt-0.5" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">Industry Expertise</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Our team includes experts with extensive experience in the {industry.name} industry, ensuring that
                      our solutions address the specific needs and challenges of your business.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">Custom Solutions</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      We develop tailored solutions that address your unique business requirements, rather than offering
                      one-size-fits-all products.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">Continuous Innovation</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      We stay at the forefront of technology trends and industry developments to ensure our solutions
                      remain cutting-edge and effective.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">Ongoing Support</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      We provide comprehensive support and maintenance services to ensure your systems continue to
                      perform optimally and evolve with your business needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Case Studies</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {industry.caseStudies.map((caseStudy, index) => (
              <div key={index} className="border rounded-lg p-6 space-y-4">
                <h3 className="text-2xl font-bold">{caseStudy.title}</h3>
                <p className="text-muted-foreground">{caseStudy.description}</p>
                <div>
                  <h4 className="font-medium mb-2">Results:</h4>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="outline">Read Full Case Study</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f172a] text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to transform your {industry.name.toLowerCase()} business?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed">
                Contact us today to discuss how our specialized solutions can address your unique challenges and drive
                growth.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary">
                Schedule a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
              >
                View All Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* System Details Dialog */}
      <SystemDetailsDialog system={selectedSystem} open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  )
}
