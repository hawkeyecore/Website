import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, Activity, Droplet, Landmark, Building, Home, Truck, ShoppingBag } from "lucide-react"
import { notFound } from "next/navigation"

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
    description: "Secure and efficient digital solutions for government agencies.",
    longDescription:
      "Our government technology solutions are designed to modernize public services, enhance security, and improve citizen engagement. From digital transformation initiatives to secure data management systems, we provide the tools government agencies need to serve their constituents effectively in the digital age.",
    image: "/images/business-presentation-meeting.jpeg",
    systems: [
      {
        name: "Citizen Engagement Platforms",
        description:
          "Our citizen engagement platforms enable government agencies to interact with constituents efficiently and transparently.",
        features: [
          "Multi-channel communication tools for diverse populations.",
          "Secure identity verification and authentication.",
          "Automated service request tracking and management.",
          "Analytics for service improvement and resource allocation.",
        ],
      },
      {
        name: "Secure Data Management",
        description:
          "Our secure data management solutions help government agencies protect sensitive information while enabling appropriate data sharing and analysis.",
        features: [
          "Military-grade encryption for sensitive government data.",
          "Granular access controls and comprehensive audit trails.",
          "Compliance with government security standards (FISMA, FedRAMP).",
          "Secure inter-agency data sharing capabilities.",
        ],
      },
      {
        name: "Digital Service Delivery",
        description:
          "Our digital service delivery platforms help government agencies provide efficient, accessible services to all citizens.",
        features: [
          "Accessible design that meets WCAG standards.",
          "Multi-language support for diverse communities.",
          "Integration with legacy government systems.",
          "Mobile-friendly interfaces for on-the-go access.",
        ],
      },
    ],
    challenges: [
      "Meeting strict security and compliance requirements",
      "Integrating with legacy government systems",
      "Providing accessible services to all citizens",
      "Operating within budget constraints",
    ],
    caseStudies: [
      {
        title: "State Government Agency",
        description:
          "Implemented a comprehensive digital transformation initiative that improved service delivery efficiency by 40% and citizen satisfaction by 35%.",
        results: [
          "40% improvement in service delivery efficiency",
          "35% increase in citizen satisfaction",
          "25% reduction in processing times",
        ],
      },
      {
        title: "Municipal Government",
        description:
          "Developed a secure citizen engagement platform that increased online service adoption by 60% and reduced in-person visits by 30%.",
        results: [
          "60% increase in online service adoption",
          "30% reduction in in-person visits",
          "45% improvement in response times",
        ],
      },
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate & Property Management",
    icon: <Home className="h-8 w-8 text-[#0055b3]" />,
    description: "Innovative solutions for property management and real estate.",
    longDescription:
      "Our real estate and property management technology solutions are designed to streamline operations, enhance tenant experiences, and optimize property performance. From smart building systems to comprehensive property management platforms, we provide the tools needed to succeed in today's competitive real estate market.",
    image: "/images/modern-workspace.jpeg",
    systems: [
      {
        name: "Property Management Platforms",
        description:
          "Our property management platforms provide comprehensive tools for managing properties, tenants, maintenance, and finances in one integrated system.",
        features: [
          "Automated rent collection and financial reporting.",
          "Tenant portal for communication and service requests.",
          "Maintenance scheduling and vendor management.",
          "Document management and lease automation.",
        ],
      },
      {
        name: "Smart Building Systems",
        description:
          "Our smart building systems leverage IoT technology to optimize building performance, reduce costs, and enhance occupant comfort.",
        features: [
          "Energy management and optimization.",
          "Predictive maintenance for building systems.",
          "Occupancy monitoring and space utilization.",
          "Environmental controls and comfort management.",
        ],
      },
      {
        name: "Real Estate Analytics",
        description:
          "Our real estate analytics solutions provide actionable insights for property investment, management, and optimization.",
        features: [
          "Market analysis and investment opportunity identification.",
          "Portfolio performance tracking and benchmarking.",
          "Predictive analytics for property value trends.",
          "Tenant behavior analysis and retention strategies.",
        ],
      },
    ],
    challenges: [
      "Managing diverse property portfolios efficiently",
      "Enhancing tenant experiences and retention",
      "Optimizing property performance and value",
      "Adapting to changing market conditions",
    ],
    caseStudies: [
      {
        title: "Commercial Property Management Firm",
        description:
          "Implemented an integrated property management platform that improved operational efficiency by 35% and tenant satisfaction by 28%.",
        results: [
          "35% improvement in operational efficiency",
          "28% increase in tenant satisfaction",
          "22% reduction in maintenance costs",
        ],
      },
      {
        title: "Residential Real Estate Developer",
        description:
          "Developed a smart building system for a luxury apartment complex that reduced energy costs by 25% and increased property value by 15%.",
        results: [
          "25% reduction in energy costs",
          "15% increase in property value",
          "30% improvement in tenant retention",
        ],
      },
    ],
  },
  {
    id: "logistics",
    name: "Logistics & Transportation",
    icon: <Truck className="h-8 w-8 text-[#0055b3]" />,
    description: "Optimized solutions for modern logistics and transportation.",
    longDescription:
      "Our logistics and transportation technology solutions are designed to optimize supply chains, improve visibility, and enhance operational efficiency. From fleet management systems to comprehensive logistics platforms, we provide the tools needed to navigate the complexities of modern global logistics.",
    image: "/images/digital-workspace.jpeg",
    systems: [
      {
        name: "Supply Chain Management",
        description:
          "Our supply chain management solutions provide end-to-end visibility and control over complex global supply chains.",
        features: [
          "Real-time tracking and monitoring of shipments.",
          "Predictive analytics for demand forecasting.",
          "Supplier management and performance tracking.",
          "Inventory optimization and warehouse management.",
        ],
      },
      {
        name: "Fleet Management Systems",
        description:
          "Our fleet management systems help transportation companies optimize routes, reduce costs, and improve driver safety.",
        features: [
          "Real-time vehicle tracking and telematics.",
          "Route optimization and fuel management.",
          "Driver performance monitoring and safety analytics.",
          "Maintenance scheduling and compliance management.",
        ],
      },
      {
        name: "Last-Mile Delivery Optimization",
        description:
          "Our last-mile delivery solutions help companies meet customer expectations for fast, reliable delivery while controlling costs.",
        features: [
          "Dynamic routing and scheduling algorithms.",
          "Customer communication and delivery updates.",
          "Proof of delivery and electronic documentation.",
          "Integration with e-commerce and order management systems.",
        ],
      },
    ],
    challenges: [
      "Managing complex global supply chains",
      "Optimizing routes and reducing transportation costs",
      "Meeting customer expectations for visibility and delivery speed",
      "Ensuring compliance with transportation regulations",
    ],
    caseStudies: [
      {
        title: "Global Logistics Provider",
        description:
          "Implemented a comprehensive supply chain visibility platform that improved on-time delivery by 28% and reduced transportation costs by 15%.",
        results: [
          "28% improvement in on-time delivery",
          "15% reduction in transportation costs",
          "35% increase in customer satisfaction",
        ],
      },
      {
        title: "Regional Trucking Company",
        description:
          "Developed a fleet management system that optimized routes, reduced fuel consumption by 18%, and improved driver safety metrics by 25%.",
        results: [
          "18% reduction in fuel consumption",
          "25% improvement in driver safety metrics",
          "22% increase in fleet utilization",
        ],
      },
    ],
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    icon: <ShoppingBag className="h-8 w-8 text-[#0055b3]" />,
    description: "Digital solutions for modern retail and e-commerce businesses.",
    longDescription:
      "Our retail and e-commerce technology solutions are designed to enhance customer experiences, optimize operations, and drive sales growth. From omnichannel platforms to advanced analytics, we provide the tools retailers need to thrive in today's competitive digital marketplace.",
    image: "/images/business-workshop.jpeg",
    systems: [
      {
        name: "Omnichannel Retail Platforms",
        description:
          "Our omnichannel retail platforms provide seamless customer experiences across online and offline channels.",
        features: [
          "Unified inventory and order management.",
          "Consistent pricing and promotions across channels.",
          "Buy online, pick up in-store (BOPIS) capabilities.",
          "Customer profile unification and journey tracking.",
        ],
      },
      {
        name: "Retail Analytics",
        description:
          "Our retail analytics solutions provide actionable insights for merchandising, marketing, and operations.",
        features: [
          "Customer segmentation and behavior analysis.",
          "Product performance and inventory optimization.",
          "Pricing optimization and promotion effectiveness.",
          "Store layout and space utilization analytics.",
        ],
      },
      {
        name: "E-Commerce Optimization",
        description:
          "Our e-commerce optimization solutions help online retailers maximize conversion rates and customer lifetime value.",
        features: [
          "Personalized product recommendations and search.",
          "Abandoned cart recovery and conversion optimization.",
          "Mobile commerce optimization and app development.",
          "Integration with marketplaces and social commerce.",
        ],
      },
    ],
    challenges: [
      "Creating seamless omnichannel customer experiences",
      "Competing with large e-commerce platforms",
      "Optimizing inventory and supply chain efficiency",
      "Personalizing customer experiences at scale",
    ],
    caseStudies: [
      {
        title: "National Retail Chain",
        description:
          "Implemented an omnichannel retail platform that increased online sales by 45% and improved in-store traffic by 18%.",
        results: [
          "45% increase in online sales",
          "18% improvement in in-store traffic",
          "32% increase in customer loyalty program participation",
        ],
      },
      {
        title: "Specialty E-Commerce Retailer",
        description:
          "Developed a personalization engine that improved conversion rates by 35% and average order value by 28%.",
        results: [
          "35% improvement in conversion rates",
          "28% increase in average order value",
          "42% reduction in cart abandonment",
        ],
      },
    ],
  },
]

export default function IndustryDetailPage({ params }: { params: { id: string } }) {
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
                <Link href="/contact">
                  <Button size="lg">Request a Consultation</Button>
                </Link>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                <Image src={industry.image || "/placeholder.svg"} alt={industry.name} fill className="object-cover" />
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
                  <Button variant="outline" className="w-full mt-6">
                    <Link href={`/solutions`}>Learn More</Link>
                  </Button>
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
                <Button variant="outline">
                  <Link href={`/case-studies`}>Read Full Case Study</Link>
                </Button>
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
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Schedule a Consultation
              </Button>
              </Link>
              <Link href="/solutions">
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
