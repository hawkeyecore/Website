"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, Activity, Droplet, Landmark, Building, Home, Truck, ShoppingBag } from "lucide-react"
import { notFound } from "next/navigation"
import { useState } from "react"

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
    fallbackImage: "/connected-care-network.png",
    systems: [
      {
        name: "Electronic Health Records (EHR)",
        slug: "electronic-health-records-ehr",
        description:
          "Our EHR solutions provide a comprehensive digital record of patient health information, enabling healthcare providers to deliver more efficient and effective care.",
        features: [
          "Integration with IoT devices for continuous health monitoring.",
          "Advanced data analytics for predictive health outcomes.",
          "Secure patient data management and access controls.",
          "Customizable templates for different medical specialties.",
        ],
      },
      {
        name: "Patient Portals",
        slug: "patient-portals",
        description:
          "Our patient portals empower individuals to take control of their healthcare journey by providing easy access to their medical information and communication tools.",
        features: [
          "Secure messaging systems for patient-doctor communication.",
          "Online appointment scheduling and management.",
          "Access to test results and medical records.",
          "Prescription refill requests and medication management.",
        ],
      },
      {
        name: "Telemedicine Apps",
        slug: "telemedicine-apps",
        description:
          "Our telemedicine applications enable healthcare providers to deliver remote care, expanding access to medical services and improving patient outcomes.",
        features: [
          "Virtual reality (VR) capabilities for immersive patient education.",
          "Real-time remote monitoring and diagnostic tools.",
          "Secure video consultations with end-to-end encryption.",
          "Integration with EHR systems for seamless documentation.",
        ],
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
    fallbackImage: "/modern-oil-gas-operations.png",
    systems: [
      {
        name: "ERP for Oil & Gas",
        slug: "erp-for-oil-gas",
        description:
          "Our specialized ERP solutions integrate all aspects of oil and gas operations, providing real-time insights and streamlining complex processes.",
        features: [
          "Custom dashboards for real-time operational data.",
          "Environmental compliance tracking and reporting.",
          "Integrated financial and operational management.",
          "Supply chain optimization for oil and gas logistics.",
        ],
      },
      {
        name: "Asset Tracking",
        slug: "asset-tracking",
        description:
          "Our asset tracking solutions provide comprehensive visibility into equipment location, status, and performance, optimizing utilization and maintenance.",
        features: [
          "Automated asset lifecycle management systems.",
          "Integration with SCADA systems for enhanced control.",
          "Real-time equipment monitoring and diagnostics.",
          "Predictive maintenance scheduling based on usage patterns.",
        ],
      },
      {
        name: "Predictive Maintenance",
        slug: "predictive-maintenance",
        description:
          "Our predictive maintenance solutions leverage advanced analytics to anticipate equipment failures before they occur, reducing downtime and maintenance costs.",
        features: [
          "AI-based analytics for optimizing maintenance schedules.",
          "Drones for remote inspections and data collection.",
          "Sensor integration for real-time equipment monitoring.",
          "Maintenance history tracking and analysis.",
        ],
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
    fallbackImage: "/interconnected-finance-tech.png",
    systems: [
      {
        name: "Core Banking Systems",
        slug: "core-banking-systems",
        description:
          "Our core banking solutions provide the foundation for financial institutions to manage accounts, process transactions, and deliver digital services to customers.",
        features: [
          "Next-gen banking features like peer-to-peer payments and blockchain-based transactions.",
          "Integration with international banking standards and systems.",
          "Omnichannel customer experience capabilities.",
          "Scalable architecture to support growth.",
        ],
      },
      {
        name: "Risk Management",
        slug: "risk-management",
        description:
          "Our risk management solutions help financial institutions identify, assess, and mitigate various types of risk, ensuring regulatory compliance and business stability.",
        features: [
          "Comprehensive risk modeling tools for various financial instruments.",
          "Real-time global market data integration for risk assessment.",
          "Stress testing and scenario analysis capabilities.",
          "Regulatory reporting and compliance management.",
        ],
      },
      {
        name: "Fraud Detection",
        slug: "fraud-detection",
        description:
          "Our fraud detection systems leverage advanced analytics and machine learning to identify and prevent fraudulent activities in real-time.",
        features: [
          "Behavioral analytics for detecting irregular patterns.",
          "Integration with law enforcement databases for enhanced security checks.",
          "Real-time transaction monitoring and alerts.",
          "Adaptive learning algorithms that evolve with new fraud tactics.",
        ],
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
      "Our government technology solutions are designed to enhance public service delivery, improve operational efficiency, and increase citizen engagement. From digital ID systems to workflow automation, we provide the tools government agencies need to modernize their operations and better serve their constituents.",
    image: "/images/diverse-team-planning.jpeg",
    fallbackImage: "/digital-government-network.png",
    systems: [
      {
        name: "Public Service Portals",
        slug: "public-service-portals",
        description:
          "Our public service portals provide citizens with easy access to government services and information, improving service delivery and citizen satisfaction.",
        features: [
          "Automated benefits calculation and disbursement systems.",
          "Public feedback and engagement platforms.",
          "Multi-language support for diverse populations.",
          "Accessibility features for users with disabilities.",
        ],
      },
      {
        name: "Digital ID Systems",
        slug: "digital-id-systems",
        description:
          "Our digital ID solutions provide secure and convenient identity verification for citizens, enabling access to government services and reducing fraud.",
        features: [
          "Nationwide digital ID management with multi-factor authentication.",
          "Secure data storage solutions with end-to-end encryption.",
          "Biometric verification options for enhanced security.",
          "Integration with existing government databases.",
        ],
      },
      {
        name: "Workflow Automation",
        slug: "workflow-automation",
        description:
          "Our workflow automation solutions streamline government processes, reducing paperwork and improving efficiency across departments.",
        features: [
          "Integration with existing government databases for seamless data transfer.",
          "Customizable workflow engines for different government departments.",
          "Automated document processing and approval systems.",
          "Comprehensive audit trails for accountability.",
        ],
      },
    ],
    challenges: [
      "Ensuring data security and privacy",
      "Integrating with legacy government systems",
      "Meeting accessibility requirements",
      "Managing complex regulatory environments",
    ],
    caseStudies: [
      {
        title: "National Tax Authority",
        description:
          "Implemented a digital tax filing system that increased compliance rates by 35% and reduced processing time by 70%.",
        results: [
          "35% increase in tax compliance",
          "70% reduction in processing time",
          "90% citizen satisfaction rate",
        ],
      },
      {
        title: "Municipal Government",
        description:
          "Developed a citizen service portal that streamlined access to city services and reduced in-person visits by 60%.",
        results: [
          "60% reduction in in-person visits",
          "45% decrease in service delivery time",
          "25% cost savings in administrative overhead",
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
      "Our real estate technology solutions are designed to streamline property management, enhance customer experiences, and optimize operations for real estate businesses. From virtual tours to tenant management systems, we provide the tools needed to succeed in today's competitive real estate market.",
    image: "/images/modern-workspace.jpeg",
    fallbackImage: "/property-management-overview.png",
    systems: [
      {
        name: "CRM for Real Estate",
        slug: "crm-for-real-estate",
        description:
          "Our specialized CRM solutions help real estate professionals manage client relationships, track leads, and close deals more efficiently.",
        features: [
          "Advanced lead generation tools using AI to predict buyer preferences.",
          "Dynamic client interaction trackers for personalized follow-ups.",
          "Integration with property listing platforms.",
          "Mobile access for agents on the go.",
        ],
      },
      {
        name: "Listing Platforms",
        slug: "listing-platforms",
        description:
          "Our listing platforms provide comprehensive property information, advanced search capabilities, and seamless user experiences for buyers and sellers.",
        features: [
          "AI-enhanced property recommendation engines.",
          "Multi-platform listing syndication tools.",
          "Advanced search filters for precise property matching.",
          "Analytics dashboards for listing performance.",
        ],
      },
      {
        name: "Virtual Tours",
        slug: "virtual-tours",
        description:
          "Our virtual tour solutions enable remote property viewing, expanding reach and saving time for both agents and clients.",
        features: [
          "3D modeling tools for creating on-demand property walkthroughs.",
          "Integration with virtual reality platforms for remote viewing.",
          "Interactive floor plans with customization options.",
          "Analytics on viewer engagement and interest.",
        ],
      },
      {
        name: "Tenant Management",
        slug: "tenant-management",
        description:
          "Our tenant management systems streamline rent collection, maintenance requests, and communication between property managers and tenants.",
        features: [
          "Automated rent collection and escalation systems.",
          "Smart property management solutions for utilities and maintenance requests.",
          "Tenant screening and application processing tools.",
          "Communication platforms for tenant-manager interactions.",
        ],
      },
    ],
    challenges: [
      "Managing diverse property portfolios",
      "Streamlining communication between stakeholders",
      "Ensuring compliance with property regulations",
      "Optimizing property marketing and visibility",
    ],
    caseStudies: [
      {
        title: "National Property Management Firm",
        description:
          "Implemented an integrated tenant management system that reduced vacancy rates by 25% and streamlined maintenance response times by 40%.",
        results: [
          "25% reduction in vacancy rates",
          "40% improvement in maintenance response times",
          "30% increase in tenant satisfaction scores",
        ],
      },
      {
        title: "Luxury Real Estate Agency",
        description:
          "Developed a virtual tour platform that increased international buyer engagement by 150% and reduced time-to-sale by 35%.",
        results: [
          "150% increase in international buyer engagement",
          "35% reduction in time-to-sale",
          "45% increase in premium property transactions",
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
      "Our logistics and transportation technology solutions are designed to optimize routes, improve supply chain visibility, and enhance operational efficiency. From fleet management to supply chain automation, we provide the tools needed to streamline operations and reduce costs in this fast-paced industry.",
    image: "/images/team-collaboration.jpeg",
    fallbackImage: "/global-logistics-network.png",
    systems: [
      {
        name: "Supply Chain Automation",
        slug: "supply-chain-automation",
        description:
          "Our supply chain automation solutions provide end-to-end visibility and control, optimizing inventory management and logistics operations.",
        features: [
          "Blockchain for secure and transparent supply chain tracking.",
          "AI-powered inventory management systems for dynamic stocking.",
          "Real-time shipment tracking and status updates.",
          "Automated procurement and vendor management.",
        ],
      },
      {
        name: "Route Optimization",
        slug: "route-optimization",
        description:
          "Our route optimization solutions leverage advanced algorithms to determine the most efficient delivery routes, saving time and fuel costs.",
        features: [
          "Machine learning models for predicting the best routes under varying conditions.",
          "Integrated fleet management systems with GPS and vehicle telemetry.",
          "Real-time traffic and weather data integration.",
          "Driver mobile apps with turn-by-turn navigation.",
        ],
      },
      {
        name: "Fleet Management",
        slug: "fleet-management",
        description:
          "Our fleet management solutions provide comprehensive visibility into vehicle performance, maintenance needs, and driver behavior.",
        features: [
          "Real-time vehicle tracking and status monitoring.",
          "Predictive maintenance scheduling to prevent breakdowns.",
          "Driver performance analytics and safety monitoring.",
          "Fuel consumption optimization and carbon footprint tracking.",
        ],
      },
    ],
    challenges: [
      "Managing complex global supply chains",
      "Optimizing delivery routes and schedules",
      "Ensuring timely and accurate deliveries",
      "Reducing fuel consumption and environmental impact",
    ],
    caseStudies: [
      {
        title: "Global Logistics Provider",
        description:
          "Implemented a route optimization system that reduced fuel costs by 20% and increased on-time deliveries by 35%.",
        results: [
          "20% reduction in fuel costs",
          "35% improvement in on-time deliveries",
          "15% increase in fleet utilization",
        ],
      },
      {
        title: "Regional Delivery Service",
        description:
          "Developed a custom fleet management solution that improved driver safety by 40% and reduced maintenance costs by 25%.",
        results: [
          "40% improvement in driver safety metrics",
          "25% reduction in maintenance costs",
          "30% decrease in vehicle downtime",
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
      "Our retail and e-commerce technology solutions are designed to enhance customer experiences, streamline operations, and drive sales growth. From custom e-commerce platforms to inventory management systems, we provide the tools needed to thrive in today's competitive retail landscape.",
    image: "/images/data-analytics-team.jpeg",
    fallbackImage: "/diverse-shoppers-online.png",
    systems: [
      {
        name: "Custom E-commerce Platforms",
        slug: "custom-e-commerce-platforms",
        description:
          "Our custom e-commerce solutions provide unique shopping experiences tailored to your brand and customer needs.",
        features: [
          "Omnichannel retail solutions for seamless shopping experiences.",
          "AI-driven personalization engines for product recommendations.",
          "Mobile-first design for on-the-go shopping.",
          "Integration with multiple payment gateways and shipping providers.",
        ],
      },
      {
        name: "POS Systems",
        slug: "pos-systems",
        description:
          "Our point-of-sale systems streamline checkout processes, manage inventory, and provide valuable customer insights.",
        features: [
          "Cloud-based POS for flexibility and scalability.",
          "Advanced customer loyalty and reward systems.",
          "Integrated inventory management and sales reporting.",
          "Contactless payment options and mobile checkout capabilities.",
        ],
      },
      {
        name: "Inventory Management",
        slug: "inventory-management",
        description:
          "Our inventory management solutions provide real-time visibility into stock levels, automate reordering, and optimize warehouse operations.",
        features: [
          "Automated warehousing solutions using robots and AI.",
          "Detailed analytics dashboards for inventory trends and forecasts.",
          "Multi-location inventory tracking and management.",
          "Integration with supplier systems for seamless reordering.",
        ],
      },
    ],
    challenges: [
      "Meeting evolving customer expectations",
      "Managing inventory across multiple channels",
      "Personalizing customer experiences at scale",
      "Competing with large e-commerce platforms",
    ],
    caseStudies: [
      {
        title: "Multi-Channel Retailer",
        description:
          "Implemented an omnichannel retail solution that increased online sales by 45% and improved inventory accuracy by 30%.",
        results: [
          "45% increase in online sales",
          "30% improvement in inventory accuracy",
          "25% reduction in out-of-stock situations",
        ],
      },
      {
        title: "Specialty E-commerce Brand",
        description:
          "Developed a custom e-commerce platform with AI-driven personalization that increased average order value by 35% and customer retention by 40%.",
        results: [
          "35% increase in average order value",
          "40% improvement in customer retention",
          "60% higher conversion rate from product recommendations",
        ],
      },
    ],
  },
]

export default function IndustryDetailPage({ params }: { params: { id: string } }) {
  const industry = industries.find((i) => i.id === params.id)
  const [imageError, setImageError] = useState(false)

  if (!industry) {
    notFound()
  }

  const handleImageError = () => {
    setImageError(true)
    console.log("Image failed to load for industry:", industry.name)
  }

  // Function to get the best available image
  const getImageSrc = () => {
    if (imageError) {
      return (
        industry.fallbackImage || `/placeholder.svg?height=600&width=800&query=${encodeURIComponent(industry.name)}`
      )
    }
    return industry.image || `/placeholder.svg?height=600&width=800&query=${encodeURIComponent(industry.name)}`
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
                <div className="flex flex-wrap gap-2 min-[400px]:flex-row">
                  <Link href="/contact" className="block">
                    <Button size="lg">Request a Consultation</Button>
                  </Link>
                  <Link href={`#systems`} passHref>
                    <Button size="lg" variant="outline">
                      View Solutions
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg bg-muted">
                <Image
                  src={getImageSrc() || "/placeholder.svg"}
                  alt={industry.name}
                  fill
                  className="object-cover"
                  priority
                  onError={handleImageError}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="systems" className="w-full py-12 md:py-24 lg:py-32">
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
                          <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/industries/${industry.id}/${system.slug || system.name.toLowerCase().replace(/\s+/g, "-")}`}
                    passHref
                  >
                    <Button variant="outline" className="w-full mt-6" aria-label={`Learn more about ${system.name}`}>
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
                    <CheckCircle className="h-6 w-6 text-[#0055b3] mt-0.5 shrink-0" />
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
                        <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5 shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={`/case-studies/${industry.id}-${index + 1}`} passHref>
                  <Button variant="outline">Read Full Case Study</Button>
                </Link>
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
            <div className="flex flex-wrap gap-2 min-[400px]:flex-row">
              <Link href="/contact" className="block">
                <Button size="lg" variant="secondary">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href={`#systems`} passHref>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  View All Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
