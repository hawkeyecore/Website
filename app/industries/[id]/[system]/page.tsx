"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { useState, useEffect } from "react"

// Sample industries data - this should match the data from [id]/page.tsx
const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: null,
    description: "Innovative technology solutions for modern healthcare providers.",
    longDescription:
      "Our healthcare technology solutions are designed to improve patient care, streamline operations, and ensure compliance with industry regulations.",
    image: "/images/business-meeting.jpeg",
    fallbackImage: "/connected-care-network.png",
    systems: [
      {
        name: "Electronic Health Records (EHR)",
        slug: "electronic-health-records-ehr",
        description:
          "Our EHR solutions provide a comprehensive digital record of patient health information, enabling healthcare providers to deliver more efficient and effective care.",
        fullDescription:
          "Electronic Health Records (EHR) are the digital version of patients' paper charts. Our EHR system is designed specifically for healthcare organizations of all sizes, from small clinics to large hospital networks. It centralizes patient information, making it instantly accessible to authorized providers, which improves care coordination, reduces medical errors, and enhances patient outcomes.",
        features: [
          "Integration with IoT devices for continuous health monitoring.",
          "Advanced data analytics for predictive health outcomes.",
          "Secure patient data management and access controls.",
          "Customizable templates for different medical specialties.",
        ],
        benefits: [
          "Improved patient care through better information access",
          "Reduced administrative burden on healthcare staff",
          "Enhanced compliance with healthcare regulations",
          "Better care coordination between different providers",
        ],
        image: "/images/healthcare-dashboard.jpeg",
        fallbackImage: "/interconnected-healthcare.png",
      },
      {
        name: "Patient Portals",
        slug: "patient-portals",
        description:
          "Our patient portals empower individuals to take control of their healthcare journey by providing easy access to their medical information and communication tools.",
        fullDescription:
          "Patient portals serve as a secure online platform where patients can access their personal health information 24/7. Our solution creates a direct channel between patients and healthcare providers, allowing for seamless communication, appointment scheduling, and access to medical records. This not only improves the patient experience but also reduces the administrative burden on healthcare providers.",
        features: [
          "Secure messaging systems for patient-doctor communication.",
          "Online appointment scheduling and management.",
          "Access to test results and medical records.",
          "Prescription refill requests and medication management.",
        ],
        benefits: [
          "Increased patient engagement in their healthcare",
          "Reduced phone calls and administrative tasks",
          "Improved patient satisfaction",
          "More efficient communication between patients and providers",
        ],
        image: "/images/healthcare-systems-dashboard.jpeg",
        fallbackImage: "/connected-care.png",
      },
      {
        name: "Telemedicine Apps",
        slug: "telemedicine-apps",
        description:
          "Our telemedicine applications enable healthcare providers to deliver remote care, expanding access to medical services and improving patient outcomes.",
        fullDescription:
          "Telemedicine has transformed how healthcare is delivered, particularly in remote areas or during situations like the COVID-19 pandemic. Our telemedicine platform allows for secure video consultations, remote patient monitoring, and digital diagnosis tools. Healthcare providers can deliver high-quality care without geographic limitations, while patients benefit from convenient access to care from the comfort of their homes.",
        features: [
          "Virtual reality (VR) capabilities for immersive patient education.",
          "Real-time remote monitoring and diagnostic tools.",
          "Secure video consultations with end-to-end encryption.",
          "Integration with EHR systems for seamless documentation.",
        ],
        benefits: [
          "Extended reach of healthcare services to remote areas",
          "Reduced no-show rates and cancellations",
          "Lower overhead costs compared to in-person visits",
          "Improved access to specialists regardless of location",
        ],
        image: "/images/healthcare-tech-assessment.jpeg",
        fallbackImage: "/connected-care.png",
      },
    ],
  },
  {
    id: "oil-gas",
    name: "Oil & Gas",
    icon: null,
    description: "Specialized systems for the complex oil and gas industry.",
    longDescription: "Our technology solutions for the oil and gas industry are designed to optimize operations.",
    image: "/images/corporate-training.jpeg",
    fallbackImage: "/modern-oil-gas-operations.png",
    systems: [
      {
        name: "ERP for Oil & Gas",
        slug: "erp-for-oil-gas",
        description: "Our specialized ERP solutions integrate all aspects of oil and gas operations.",
        fullDescription:
          "Our Enterprise Resource Planning (ERP) system is tailored specifically for the oil and gas industry, addressing the unique challenges faced by companies in this sector. The solution integrates operations, finance, supply chain, and compliance management into a single platform that provides real-time visibility across the entire value chain.",
        features: [
          "Custom dashboards for real-time operational data.",
          "Environmental compliance tracking and reporting.",
          "Integrated financial and operational management.",
          "Supply chain optimization for oil and gas logistics.",
        ],
        benefits: [
          "Streamlined operations across departments",
          "Enhanced compliance with environmental regulations",
          "Improved decision making with real-time data",
          "Optimized resource allocation and utilization",
        ],
        image: "/images/manufacturing-systems-dashboard.jpeg",
        fallbackImage: "/interconnected-energy.png",
      },
      {
        name: "Asset Tracking",
        slug: "asset-tracking",
        description:
          "Our asset tracking solutions provide comprehensive visibility into equipment location, status, and performance.",
        fullDescription:
          "In the oil and gas industry, managing and tracking high-value assets is critical for operational efficiency and cost control. Our Asset Tracking system provides real-time visibility into the location, status, and performance of all equipment across your operations. From drilling equipment to transportation vehicles, our solution ensures you always know where your assets are and how they're performing.",
        features: [
          "Automated asset lifecycle management systems.",
          "Integration with SCADA systems for enhanced control.",
          "Real-time equipment monitoring and diagnostics.",
          "Predictive maintenance scheduling based on usage patterns.",
        ],
        benefits: [
          "Reduced equipment downtime and maintenance costs",
          "Improved asset utilization and ROI",
          "Enhanced operational planning and resource allocation",
          "Decreased risk of theft and unauthorized use",
        ],
        image: "/images/manufacturing-security.jpeg",
        fallbackImage: "/oil-gas-asset-tracking.png",
      },
      {
        name: "Predictive Maintenance",
        slug: "predictive-maintenance",
        description:
          "Our predictive maintenance solutions leverage advanced analytics to anticipate equipment failures before they occur.",
        fullDescription:
          "Unplanned downtime in oil and gas operations can cost millions in lost production and repairs. Our Predictive Maintenance solution uses advanced analytics, machine learning, and IoT sensor data to anticipate equipment failures before they occur. By identifying potential issues early, maintenance can be scheduled proactively, minimizing disruption to operations and extending the life of critical assets.",
        features: [
          "AI-based analytics for optimizing maintenance schedules.",
          "Drones for remote inspections and data collection.",
          "Sensor integration for real-time equipment monitoring.",
          "Maintenance history tracking and analysis.",
        ],
        benefits: [
          "Significantly reduced unplanned downtime",
          "Extended equipment lifecycle and improved ROI",
          "Lower maintenance costs through optimized scheduling",
          "Enhanced safety through early identification of potential failures",
        ],
        image: "/images/manufacturing-security-dashboard.jpeg",
        fallbackImage: "/oil-gas-predictive-maintenance.png",
      },
    ],
  },
  {
    id: "finance",
    name: "Finance & Banking",
    icon: null,
    description: "Secure and efficient solutions for financial institutions.",
    longDescription:
      "Our financial technology solutions are designed to enhance security and improve customer experiences.",
    image: "/images/business-presentation.jpeg",
    fallbackImage: "/interconnected-finance-tech.png",
    systems: [
      {
        name: "Core Banking Systems",
        slug: "core-banking-systems",
        description:
          "Our core banking solutions provide the foundation for financial institutions to manage accounts and process transactions.",
        fullDescription:
          "Our Core Banking Systems are designed to be the central nervous system of modern financial institutions. They handle all essential banking operations including account management, transaction processing, interest calculations, and regulatory compliance. Built with scalability in mind, our systems can grow with your institution while maintaining performance and security.",
        features: [
          "Next-gen banking features like peer-to-peer payments and blockchain-based transactions.",
          "Integration with international banking standards and systems.",
          "Omnichannel customer experience capabilities.",
          "Scalable architecture to support growth.",
        ],
        benefits: [
          "Streamlined banking operations",
          "Enhanced customer satisfaction through faster service",
          "Reduced operational costs",
          "Improved regulatory compliance",
        ],
        image: "/images/financial-cloud-dashboard.jpeg",
        fallbackImage: "/interconnected-banking-network.png",
      },
      {
        name: "Risk Management",
        slug: "risk-management",
        description:
          "Our risk management solutions help financial institutions identify, assess, and mitigate various types of risk.",
        fullDescription:
          "In today's complex financial landscape, effective risk management is critical. Our Risk Management platform provides comprehensive tools for identifying, measuring, and mitigating all types of financial risks including credit, market, operational, and liquidity risks. The system uses advanced analytics and modeling to provide actionable insights that help institutions make informed decisions.",
        features: [
          "Comprehensive risk modeling tools for various financial instruments.",
          "Real-time global market data integration for risk assessment.",
          "Stress testing and scenario analysis capabilities.",
          "Regulatory reporting and compliance management.",
        ],
        benefits: [
          "Reduced exposure to financial risks",
          "Better capital allocation based on risk profiles",
          "Improved regulatory compliance",
          "Enhanced decision-making with risk-adjusted metrics",
        ],
        image: "/images/financial-security-system.jpeg",
        fallbackImage: "/balancing-financial-risks.png",
      },
      {
        name: "Fraud Detection",
        slug: "fraud-detection",
        description:
          "Our fraud detection systems leverage advanced analytics and machine learning to identify and prevent fraudulent activities in real-time.",
        fullDescription:
          "Financial fraud is increasingly sophisticated, requiring equally advanced detection systems. Our Fraud Detection platform uses artificial intelligence, machine learning, and behavioral analytics to identify suspicious patterns and anomalies in real-time. The system continuously learns from new data, adapting to evolving fraud tactics and minimizing false positives while maximizing fraud prevention.",
        features: [
          "Behavioral analytics for detecting irregular patterns.",
          "Integration with law enforcement databases for enhanced security checks.",
          "Real-time transaction monitoring and alerts.",
          "Adaptive learning algorithms that evolve with new fraud tactics.",
        ],
        benefits: [
          "Significant reduction in fraudulent transactions",
          "Lower operational costs from manual reviews",
          "Enhanced customer trust and satisfaction",
          "Minimized financial losses from fraud",
        ],
        image: "/images/financial-security-dashboard.jpeg",
        fallbackImage: "/digital-guardian.png",
      },
    ],
  },
  {
    id: "government",
    name: "Government",
    icon: null,
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
        fullDescription:
          "Our Public Service Portals transform how citizens interact with government agencies. These comprehensive digital platforms consolidate various government services into a single, user-friendly interface, allowing citizens to access information, submit applications, schedule appointments, and track requests online. This significantly reduces the need for in-person visits, paperwork, and long wait times, while improving transparency and accessibility of government services.",
        features: [
          "Automated benefits calculation and disbursement systems.",
          "Public feedback and engagement platforms.",
          "Multi-language support for diverse populations.",
          "Accessibility features for users with disabilities.",
        ],
        benefits: [
          "Reduced administrative burden on government staff",
          "Improved citizen satisfaction with government services",
          "Increased transparency and accountability",
          "Cost savings through digital process optimization",
        ],
        image: "/images/healthcare-systems-dashboard.jpeg",
        fallbackImage: "/government-service-portal.png",
      },
      {
        name: "Digital ID Systems",
        slug: "digital-id-systems",
        description:
          "Our digital ID solutions provide secure and convenient identity verification for citizens, enabling access to government services and reducing fraud.",
        fullDescription:
          "Our Digital ID Systems provide a secure, convenient way for citizens to verify their identity when accessing government services. Using advanced encryption and biometric technologies, these systems create a unique digital identity that can be used across multiple government platforms and services. This not only streamlines the user experience but also significantly reduces identity fraud and improves security for sensitive government operations.",
        features: [
          "Nationwide digital ID management with multi-factor authentication.",
          "Secure data storage solutions with end-to-end encryption.",
          "Biometric verification options for enhanced security.",
          "Integration with existing government databases.",
        ],
        benefits: [
          "Enhanced security for government services",
          "Streamlined citizen access to multiple services",
          "Reduced identity fraud and unauthorized access",
          "Improved data accuracy across government systems",
        ],
        image: "/images/financial-security-system.jpeg",
        fallbackImage: "/secure-digital-identity.png",
      },
      {
        name: "Workflow Automation",
        slug: "workflow-automation",
        description:
          "Our workflow automation solutions streamline government processes, reducing paperwork and improving efficiency across departments.",
        fullDescription:
          "Government agencies often struggle with complex, paper-based processes that slow down service delivery and increase costs. Our Workflow Automation solutions digitize and streamline these processes, automating routine tasks, routing approvals efficiently, and providing real-time visibility into process status. This results in faster service delivery, reduced errors, and significant cost savings across government departments.",
        features: [
          "Integration with existing government databases for seamless data transfer.",
          "Customizable workflow engines for different government departments.",
          "Automated document processing and approval systems.",
          "Comprehensive audit trails for accountability.",
        ],
        benefits: [
          "Accelerated processing times for government services",
          "Reduced manual errors and inconsistencies",
          "Enhanced transparency and tracking of government processes",
          "Significant cost savings through operational efficiency",
        ],
        image: "/images/manufacturing-systems-dashboard.jpeg",
        fallbackImage: "/streamlined-government-workflow.png",
      },
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate & Property Management",
    icon: null,
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
        fullDescription:
          "Our Customer Relationship Management (CRM) system is specifically designed for real estate professionals, addressing the unique challenges of property sales and management. The platform helps agents and brokers manage client relationships throughout the entire property buying, selling, or renting journey. From lead generation to closing deals and post-sale follow-up, our CRM provides the tools needed to build lasting client relationships and drive business growth.",
        features: [
          "Advanced lead generation tools using AI to predict buyer preferences.",
          "Dynamic client interaction trackers for personalized follow-ups.",
          "Integration with property listing platforms.",
          "Mobile access for agents on the go.",
        ],
        benefits: [
          "Increased lead conversion rates",
          "Improved client satisfaction and retention",
          "Enhanced team collaboration on deals",
          "Data-driven insights for business growth",
        ],
        image: "/images/business-presentation.jpeg",
        fallbackImage: "/real-estate-crm-dashboard.png",
      },
      {
        name: "Listing Platforms",
        slug: "listing-platforms",
        description:
          "Our listing platforms provide comprehensive property information, advanced search capabilities, and seamless user experiences for buyers and sellers.",
        fullDescription:
          "In today's digital real estate market, having a powerful listing platform is essential for success. Our Listing Platform solution provides a comprehensive system for showcasing properties with rich media, detailed information, and interactive features. The platform includes advanced search capabilities, allowing potential buyers or renters to find exactly what they're looking for based on multiple criteria. With mobile optimization and integration with major real estate portals, your listings get maximum visibility and engagement.",
        features: [
          "AI-enhanced property recommendation engines.",
          "Multi-platform listing syndication tools.",
          "Advanced search filters for precise property matching.",
          "Analytics dashboards for listing performance.",
        ],
        benefits: [
          "Increased property visibility and interest",
          "Higher quality leads through targeted matching",
          "Reduced time-on-market for properties",
          "Data-driven insights on market trends and buyer preferences",
        ],
        image: "/images/retail-digital-dashboard.jpeg",
        fallbackImage: "/property-listing-platform.png",
      },
      {
        name: "Virtual Tours",
        slug: "virtual-tours",
        description:
          "Our virtual tour solutions enable remote property viewing, expanding reach and saving time for both agents and clients.",
        fullDescription:
          "Virtual property tours have transformed from a luxury to a necessity in modern real estate. Our Virtual Tour platform provides immersive, high-quality 3D tours that allow potential buyers or renters to explore properties remotely. The system includes interactive features like measurement tools, floor plan views, and hotspots with additional information. This technology not only expands your reach to distant buyers but also pre-qualifies visitors, ensuring that in-person showings are more likely to result in offers.",
        features: [
          "3D modeling tools for creating on-demand property walkthroughs.",
          "Integration with virtual reality platforms for remote viewing.",
          "Interactive floor plans with customization options.",
          "Analytics on viewer engagement and interest.",
        ],
        benefits: [
          "Expanded reach to non-local buyers",
          "Reduced time spent on unqualified showings",
          "Enhanced property presentation and marketing",
          "Competitive advantage in digital-first markets",
        ],
        image: "/images/tech-presentation.jpeg",
        fallbackImage: "/virtual-property-tour.png",
      },
      {
        name: "Tenant Management",
        slug: "tenant-management",
        description:
          "Our tenant management systems streamline rent collection, maintenance requests, and communication between property managers and tenants.",
        fullDescription:
          "Managing rental properties efficiently requires robust systems for handling tenant relationships, maintenance, and financial transactions. Our Tenant Management solution provides a comprehensive platform for property managers to streamline all aspects of tenant relationships. From application processing and screening to lease management, rent collection, and maintenance coordination, the system centralizes all property management functions in one user-friendly interface.",
        features: [
          "Automated rent collection and escalation systems.",
          "Smart property management solutions for utilities and maintenance requests.",
          "Tenant screening and application processing tools.",
          "Communication platforms for tenant-manager interactions.",
        ],
        benefits: [
          "Reduced vacancy rates through better tenant retention",
          "Improved cash flow with automated rent collection",
          "Lower administrative costs through process automation",
          "Enhanced tenant satisfaction through responsive service",
        ],
        image: "/images/business-workshop.jpeg",
        fallbackImage: "/tenant-management-system.png",
      },
    ],
  },
  {
    id: "logistics",
    name: "Logistics & Transportation",
    icon: null,
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
        fullDescription:
          "In today's complex global marketplace, supply chain efficiency is a critical competitive advantage. Our Supply Chain Automation platform provides end-to-end visibility and control across your entire supply network. By integrating data from suppliers, warehouses, transportation, and customers, the system creates a unified view of your supply chain. Advanced analytics and AI-driven forecasting help optimize inventory levels, reduce costs, and improve service levels.",
        features: [
          "Blockchain for secure and transparent supply chain tracking.",
          "AI-powered inventory management systems for dynamic stocking.",
          "Real-time shipment tracking and status updates.",
          "Automated procurement and vendor management.",
        ],
        benefits: [
          "Reduced inventory carrying costs",
          "Improved on-time delivery performance",
          "Enhanced supply chain resilience and risk management",
          "Better decision-making through real-time data access",
        ],
        image: "/images/manufacturing-systems-dashboard.jpeg",
        fallbackImage: "/supply-chain-automation.png",
      },
      {
        name: "Route Optimization",
        slug: "route-optimization",
        description:
          "Our route optimization solutions leverage advanced algorithms to determine the most efficient delivery routes, saving time and fuel costs.",
        fullDescription:
          "Efficient routing is essential for controlling costs and meeting customer expectations in logistics operations. Our Route Optimization solution uses advanced algorithms and real-time data to determine the most efficient delivery routes. The system considers multiple factors including distance, traffic patterns, delivery windows, vehicle capacity, and driver availability to create optimal routes that minimize time and fuel consumption while maximizing delivery capacity.",
        features: [
          "Machine learning models for predicting the best routes under varying conditions.",
          "Integrated fleet management systems with GPS and vehicle telemetry.",
          "Real-time traffic and weather data integration.",
          "Driver mobile apps with turn-by-turn navigation.",
        ],
        benefits: [
          "Significant reduction in fuel costs and emissions",
          "Increased delivery capacity with existing resources",
          "Improved on-time delivery performance",
          "Enhanced customer satisfaction through reliable delivery windows",
        ],
        image: "/images/manufacturing-cloud-system.jpeg",
        fallbackImage: "/route-optimization-system.png",
      },
      {
        name: "Fleet Management",
        slug: "fleet-management",
        description:
          "Our fleet management solutions provide comprehensive visibility into vehicle performance, maintenance needs, and driver behavior.",
        fullDescription:
          "Managing a transportation fleet efficiently requires comprehensive visibility into vehicle performance, maintenance needs, and driver behavior. Our Fleet Management solution provides real-time tracking and analytics for your entire fleet, helping you optimize utilization, reduce maintenance costs, and improve safety. The system integrates telematics data, maintenance records, and driver information to provide actionable insights for fleet managers.",
        features: [
          "Real-time vehicle tracking and status monitoring.",
          "Predictive maintenance scheduling to prevent breakdowns.",
          "Driver performance analytics and safety monitoring.",
          "Fuel consumption optimization and carbon footprint tracking.",
        ],
        benefits: [
          "Reduced maintenance costs through preventive scheduling",
          "Improved driver safety and reduced accident rates",
          "Lower fuel consumption and emissions",
          "Extended vehicle lifespan and higher resale value",
        ],
        image: "/images/manufacturing-security.jpeg",
        fallbackImage: "/fleet-management-dashboard.png",
      },
    ],
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    icon: null,
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
        fullDescription:
          "In the crowded e-commerce landscape, standing out requires more than just a standard online store. Our Custom E-commerce Platform solutions are tailored to your specific brand identity, product offerings, and customer needs. We build scalable, feature-rich platforms that deliver exceptional shopping experiences across all devices. From unique product configurators to personalized recommendations and seamless checkout processes, our solutions help you convert visitors into loyal customers.",
        features: [
          "Omnichannel retail solutions for seamless shopping experiences.",
          "AI-driven personalization engines for product recommendations.",
          "Mobile-first design for on-the-go shopping.",
          "Integration with multiple payment gateways and shipping providers.",
        ],
        benefits: [
          "Higher conversion rates through optimized user experiences",
          "Increased average order value with personalized recommendations",
          "Improved customer loyalty and repeat purchases",
          "Scalability to support business growth",
        ],
        image: "/images/ecommerce-platform.jpeg",
        fallbackImage: "/custom-ecommerce-platform.png",
      },
      {
        name: "POS Systems",
        slug: "pos-systems",
        description:
          "Our point-of-sale systems streamline checkout processes, manage inventory, and provide valuable customer insights.",
        fullDescription:
          "Modern retail requires point-of-sale systems that do much more than process transactions. Our POS solutions combine powerful sales processing capabilities with inventory management, customer relationship tools, and business analytics. Whether you operate a single store or a multi-location retail chain, our systems provide the flexibility, reliability, and insights you need to optimize operations and enhance customer experiences.",
        features: [
          "Cloud-based POS for flexibility and scalability.",
          "Advanced customer loyalty and reward systems.",
          "Integrated inventory management and sales reporting.",
          "Contactless payment options and mobile checkout capabilities.",
        ],
        benefits: [
          "Faster checkout times and improved customer satisfaction",
          "Real-time inventory visibility across locations",
          "Enhanced customer relationships through loyalty programs",
          "Data-driven business decisions through comprehensive reporting",
        ],
        image: "/images/retail-analytics-dashboard.jpeg",
        fallbackImage: "/modern-pos-system.png",
      },
      {
        name: "Inventory Management",
        slug: "inventory-management",
        description:
          "Our inventory management solutions provide real-time visibility into stock levels, automate reordering, and optimize warehouse operations.",
        fullDescription:
          "Effective inventory management is critical for retail profitability and customer satisfaction. Our Inventory Management solution provides real-time visibility into stock levels across all locations and channels. The system uses advanced analytics and machine learning to optimize inventory levels, automate reordering, and streamline warehouse operations. This ensures you have the right products in the right places at the right times, minimizing both stockouts and excess inventory.",
        features: [
          "Automated warehousing solutions using robots and AI.",
          "Detailed analytics dashboards for inventory trends and forecasts.",
          "Multi-location inventory tracking and management.",
          "Integration with supplier systems for seamless reordering.",
        ],
        benefits: [
          "Reduced carrying costs through optimized inventory levels",
          "Minimized stockouts and lost sales",
          "Improved warehouse efficiency and order fulfillment",
          "Better cash flow management through inventory optimization",
        ],
        image: "/images/retail-digital-transformation.jpeg",
        fallbackImage: "/inventory-management-system.png",
      },
    ],
  },
]

// Find industry and system by slugs
function findIndustryAndSystem(industryId: string, systemSlug: string) {
  console.log(`Looking for industry: ${industryId}, system: ${systemSlug}`)

  const industry = industries.find((i) => i.id === industryId)
  if (!industry) {
    console.error(`Industry not found: ${industryId}`)
    return { industry: null, system: null }
  }

  console.log(`Found industry: ${industry.name}`)
  console.log(`Available systems: ${industry.systems.map((s) => s.slug).join(", ")}`)

  // First try to match by the slug property
  let system = industry.systems.find((s) => s.slug === systemSlug)

  // If not found, try to match by converting the name to a slug format
  if (!system) {
    system = industry.systems.find((s) => s.name.toLowerCase().replace(/\s+/g, "-") === systemSlug)
  }

  if (!system) {
    console.error(`System not found in ${industry.name}: ${systemSlug}`)
  } else {
    console.log(`Found system: ${system.name}`)
  }

  return { industry, system }
}

export default function SystemDetailPage({ params }: { params: { id: string; system: string } }) {
  const [imageError, setImageError] = useState(false)
  const [industryData, setIndustryData] = useState<any>(null)
  const [systemData, setSystemData] = useState<any>(null)
  const [notFoundError, setNotFoundError] = useState(false)

  useEffect(() => {
    const { industry, system } = findIndustryAndSystem(params.id, params.system)

    if (!industry || !system) {
      console.error(`Page not found: /industries/${params.id}/${params.system}`)
      setNotFoundError(true)
      return
    }

    setIndustryData(industry)
    setSystemData(system)
  }, [params.id, params.system])

  if (notFoundError) {
    notFound()
  }

  if (!industryData || !systemData) {
    return (
      <div className="container px-4 md:px-6 py-12">
        <p>Loading...</p>
      </div>
    )
  }

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-4">
            <Link
              href={`/industries/${industryData.id}`}
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {industryData.name} Solutions
            </Link>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{systemData.name}</h1>
                <p className="text-muted-foreground md:text-xl">
                  {systemData.fullDescription || systemData.description}
                </p>
                <div className="flex flex-wrap gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button size="lg">Request a Demo</Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg bg-muted">
                <Image
                  src={imageError ? systemData.fallbackImage : systemData.image}
                  alt={systemData.name}
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

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-4">
                {systemData.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5 shrink-0" />
                    <div>
                      <span className="text-lg">{feature}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Benefits</h2>
              <ul className="space-y-4">
                {systemData.benefits?.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5 shrink-0" />
                    <div>
                      <span className="text-lg">{benefit}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Solution</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Industry Expertise</h3>
              <p className="text-muted-foreground">
                Our team has deep expertise in the {industryData.name} industry, ensuring solutions that address
                real-world challenges.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Tailored Approach</h3>
              <p className="text-muted-foreground">
                We customize our solutions to meet your specific business needs, not forcing you into a
                one-size-fits-all product.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
              <p className="text-muted-foreground">
                Our commitment doesn't end with implementation - we provide comprehensive support and continuous
                improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f172a] text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to get started?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed">
                Contact us today to learn more about our {systemData.name} solution for the {industryData.name}{" "}
                industry.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href={`/industries/${industryData.id}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  View All {industryData.name} Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
