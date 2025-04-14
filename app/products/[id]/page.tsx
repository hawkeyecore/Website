import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowLeft, Star } from "lucide-react"
import { notFound } from "next/navigation"

// Sample products data - in a real app, this would come from a database or API
const products = [
  {
    id: "techcloud-platform",
    numericId: 1,
    name: "TechCloud Platform",
    tagline: "A comprehensive cloud solution for businesses of all sizes.",
    description:
      "TechCloud Platform is an enterprise-grade cloud solution designed to help businesses of all sizes leverage the power of cloud computing. With scalable infrastructure, robust security features, and intuitive management tools, TechCloud Platform enables you to build, deploy, and manage applications with ease.",
    price: {
      standard: "$299/month",
      professional: "$499/month",
      enterprise: "Custom pricing",
    },
    features: {
      standard: ["Up to 10 virtual machines", "100GB storage", "Basic monitoring", "Email support", "99.9% uptime SLA"],
      professional: [
        "Up to 50 virtual machines",
        "500GB storage",
        "Advanced monitoring",
        "24/7 phone & email support",
        "99.95% uptime SLA",
        "Auto-scaling capabilities",
      ],
      enterprise: [
        "Unlimited virtual machines",
        "Custom storage solutions",
        "Enterprise monitoring & analytics",
        "Dedicated support team",
        "99.99% uptime SLA",
        "Advanced security features",
        "Custom integrations",
      ],
    },
    benefits: [
      "Reduce infrastructure costs by up to 60%",
      "Scale resources up or down based on demand",
      "Improve application performance and reliability",
      "Enhance security with built-in protection features",
      "Simplify IT management with intuitive tools",
    ],
    techSpecs: [
      {
        category: "Compute",
        specs: [
          "Multiple instance types optimized for different workloads",
          "Support for Windows and Linux operating systems",
          "GPU-accelerated computing options",
          "Auto-scaling based on demand",
        ],
      },
      {
        category: "Storage",
        specs: [
          "Block storage for virtual machines",
          "Object storage for unstructured data",
          "File storage for shared access",
          "Automated backups and snapshots",
        ],
      },
      {
        category: "Networking",
        specs: [
          "Virtual private cloud (VPC) capabilities",
          "Load balancing for distributed applications",
          "Content delivery network (CDN) integration",
          "VPN connectivity options",
        ],
      },
      {
        category: "Security",
        specs: [
          "Identity and access management",
          "Encryption at rest and in transit",
          "DDoS protection",
          "Compliance certifications (ISO 27001, SOC 2, HIPAA)",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "TechCloud Platform has transformed our IT infrastructure, reducing costs while improving performance and reliability.",
        author: "Sarah Johnson",
        position: "CTO, Global Retail Inc.",
      },
      {
        quote:
          "The scalability of TechCloud Platform has been a game-changer for our growing business. We can easily adjust resources as needed.",
        author: "Michael Chen",
        position: "IT Director, FinTech Solutions",
      },
    ],
    image: "/images/tech-meeting.jpeg",
    gallery: ["/images/business-workshop.jpeg", "/images/office-collaboration.jpeg", "/images/tech-presentation.jpeg"],
  },
  {
    id: "datasense-analytics",
    numericId: 2,
    name: "DataSense Analytics",
    tagline: "Turn your data into actionable insights with our powerful analytics platform.",
    description:
      "DataSense Analytics is a comprehensive data analytics platform that helps businesses transform raw data into valuable insights. With advanced visualization tools, AI-powered predictions, and intuitive dashboards, DataSense Analytics enables you to make data-driven decisions that drive growth and efficiency.",
    price: {
      standard: "$199/month",
      professional: "$399/month",
      enterprise: "Custom pricing",
    },
    features: {
      standard: ["Up to 5 data sources", "10 users", "Basic visualizations", "Standard reports", "Email support"],
      professional: [
        "Up to 20 data sources",
        "50 users",
        "Advanced visualizations",
        "Custom reports",
        "AI-powered insights",
        "24/7 support",
      ],
      enterprise: [
        "Unlimited data sources",
        "Unlimited users",
        "Custom visualizations",
        "Advanced AI capabilities",
        "Dedicated support team",
        "Custom integrations",
        "On-premises deployment option",
      ],
    },
    benefits: [
      "Gain deeper insights into your business performance",
      "Identify trends and patterns in your data",
      "Make data-driven decisions with confidence",
      "Improve operational efficiency",
      "Enhance customer experiences through data insights",
    ],
    techSpecs: [
      {
        category: "Data Processing",
        specs: [
          "Real-time data processing capabilities",
          "Support for structured and unstructured data",
          "ETL (Extract, Transform, Load) tools",
          "Data quality management",
        ],
      },
      {
        category: "Analytics",
        specs: [
          "Descriptive, diagnostic, predictive, and prescriptive analytics",
          "Machine learning algorithms",
          "Natural language processing",
          "Anomaly detection",
        ],
      },
      {
        category: "Visualization",
        specs: [
          "Interactive dashboards",
          "Custom visualization options",
          "Mobile-friendly reports",
          "Data storytelling tools",
        ],
      },
      {
        category: "Integration",
        specs: [
          "Pre-built connectors for popular data sources",
          "API for custom integrations",
          "Export capabilities (PDF, Excel, CSV)",
          "Embedded analytics options",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "DataSense Analytics has revolutionized how we understand our customer behavior, leading to a 30% increase in retention.",
        author: "Emily Rodriguez",
        position: "Marketing Director, E-commerce Solutions",
      },
      {
        quote:
          "The predictive capabilities of DataSense Analytics have helped us optimize our supply chain, reducing costs by 25%.",
        author: "David Kim",
        position: "Operations Manager, Manufacturing Inc.",
      },
    ],
    image: "/images/digital-workspace.jpeg",
    gallery: ["/images/business-workshop.jpeg", "/images/tech-presentation.jpeg", "/images/office-collaboration.jpeg"],
  },
  {
    id: "secureguard-pro",
    numericId: 3,
    name: "SecureGuard Pro",
    tagline: "Enterprise-grade security solution to protect your digital assets.",
    description:
      "SecureGuard Pro is a comprehensive security solution designed to protect your organization's digital assets from evolving cyber threats. With advanced threat detection, vulnerability management, and compliance reporting, SecureGuard Pro provides the tools and insights you need to maintain a strong security posture.",
    price: {
      standard: "$349/month",
      professional: "$649/month",
      enterprise: "Custom pricing",
    },
    features: {
      standard: [
        "Up to 100 endpoints",
        "Vulnerability scanning",
        "Basic threat detection",
        "Security reporting",
        "Email support",
      ],
      professional: [
        "Up to 500 endpoints",
        "Advanced threat detection",
        "Intrusion prevention",
        "Compliance management",
        "24/7 security monitoring",
        "Phone & email support",
      ],
      enterprise: [
        "Unlimited endpoints",
        "Custom security policies",
        "Advanced threat hunting",
        "Security information and event management (SIEM)",
        "Dedicated security team",
        "Custom integrations",
        "On-premises deployment option",
      ],
    },
    benefits: [
      "Protect your organization from cyber threats",
      "Identify and remediate vulnerabilities before they can be exploited",
      "Maintain compliance with industry regulations",
      "Reduce the risk of data breaches and associated costs",
      "Enhance customer trust through strong security practices",
    ],
    techSpecs: [
      {
        category: "Threat Protection",
        specs: [
          "Next-generation antivirus",
          "Behavioral analysis",
          "Machine learning-based detection",
          "Zero-day threat protection",
        ],
      },
      {
        category: "Vulnerability Management",
        specs: [
          "Automated vulnerability scanning",
          "Risk-based prioritization",
          "Remediation guidance",
          "Patch management integration",
        ],
      },
      {
        category: "Compliance",
        specs: [
          "Pre-built compliance templates (GDPR, HIPAA, PCI DSS)",
          "Automated compliance reporting",
          "Policy management",
          "Audit trail and documentation",
        ],
      },
      {
        category: "Management",
        specs: [
          "Centralized management console",
          "Role-based access control",
          "Real-time alerts and notifications",
          "Integration with SIEM and ticketing systems",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "SecureGuard Pro has significantly improved our security posture, giving us confidence that our data is protected.",
        author: "Robert Thompson",
        position: "CISO, Financial Services Corp.",
      },
      {
        quote:
          "The compliance management features of SecureGuard Pro have streamlined our audit processes, saving us countless hours.",
        author: "Jennifer Lee",
        position: "Compliance Manager, Healthcare Solutions",
      },
    ],
    image: "/images/tech-presentation.jpeg",
    gallery: ["/images/digital-workspace.jpeg", "/images/business-workshop.jpeg", "/images/tech-meeting.jpeg"],
  },
  {
    id: "edgecompute-server",
    numericId: 4,
    name: "EdgeCompute Server",
    tagline: "High-performance edge computing server for distributed applications.",
    description:
      "EdgeCompute Server is a high-performance computing solution designed for edge deployments. It enables organizations to process data closer to the source, reducing latency and bandwidth usage while improving application responsiveness. With its compact form factor and energy-efficient design, EdgeCompute Server is ideal for distributed computing environments.",
    price: {
      standard: "$1,999",
      professional: "$3,499",
      enterprise: "Custom pricing",
    },
    features: {
      standard: [
        "8-core processor",
        "32GB RAM",
        "1TB NVMe storage",
        "Gigabit Ethernet",
        "Basic management tools",
        "1-year warranty",
      ],
      professional: [
        "16-core processor",
        "64GB RAM",
        "2TB NVMe storage",
        "10GbE networking",
        "Advanced management suite",
        "3-year warranty with next-day replacement",
      ],
      enterprise: [
        "Custom configurations",
        "High-availability options",
        "Redundant power and networking",
        "Enterprise management platform",
        "24/7 priority support",
        "5-year warranty with 4-hour response time",
      ],
    },
    benefits: [
      "Reduce latency for time-sensitive applications",
      "Decrease bandwidth costs by processing data locally",
      "Improve reliability with distributed computing",
      "Enhance data privacy by keeping sensitive information on-premises",
      "Scale computing resources where they're needed most",
    ],
    techSpecs: [
      {
        category: "Compute",
        specs: [
          "Latest generation server-grade processors",
          "Hardware acceleration for AI workloads",
          "Virtualization support",
          "Secure boot and TPM 2.0",
        ],
      },
      {
        category: "Storage",
        specs: [
          "High-performance NVMe storage",
          "Optional RAID configurations",
          "Hot-swappable drive bays",
          "Storage expansion options",
        ],
      },
      {
        category: "Networking",
        specs: [
          "Multiple network interfaces",
          "Support for software-defined networking",
          "Advanced routing capabilities",
          "Network security features",
        ],
      },
      {
        category: "Management",
        specs: [
          "Remote management interface",
          "Automated provisioning",
          "Health monitoring and alerts",
          "Integration with cloud management platforms",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "EdgeCompute Server has transformed our IoT infrastructure, allowing us to process sensor data in real-time at our manufacturing facilities.",
        author: "James Wilson",
        position: "CIO, Industrial Manufacturing Corp.",
      },
      {
        quote:
          "The performance and reliability of EdgeCompute Server have been exceptional. We've deployed them across our retail locations to power our in-store analytics.",
        author: "Lisa Martinez",
        position: "VP of Technology, Retail Chain Inc.",
      },
    ],
    image: "/images/office-collaboration.jpeg",
    gallery: ["/images/tech-meeting.jpeg", "/images/digital-workspace.jpeg", "/images/tech-presentation.jpeg"],
  },
  {
    id: "smartsense-iot-gateway",
    numericId: 5,
    name: "SmartSense IoT Gateway",
    tagline: "Connect and manage all your IoT devices with our intelligent gateway.",
    description:
      "SmartSense IoT Gateway is a versatile connectivity solution that bridges the gap between your IoT devices and the cloud. Supporting multiple protocols and featuring edge processing capabilities, it enables seamless integration of diverse IoT ecosystems while ensuring secure and reliable data transmission.",
    price: {
      standard: "$499",
      professional: "$899",
      enterprise: "Custom pricing",
    },
    features: {
      standard: [
        "Support for up to 50 devices",
        "Wi-Fi, Bluetooth, Zigbee connectivity",
        "Basic edge processing",
        "Cloud integration",
        "Remote management",
      ],
      professional: [
        "Support for up to 200 devices",
        "Additional protocols (Z-Wave, LoRaWAN)",
        "Advanced edge analytics",
        "Custom data transformations",
        "Enhanced security features",
        "Priority support",
      ],
      enterprise: [
        "Unlimited device support",
        "Custom protocol integration",
        "Advanced edge AI capabilities",
        "High-availability configuration",
        "Custom security policies",
        "Dedicated support team",
      ],
    },
    benefits: [
      "Unify diverse IoT ecosystems with multi-protocol support",
      "Reduce cloud costs with edge processing capabilities",
      "Enhance security with encrypted communications",
      "Simplify device management with centralized controls",
      "Future-proof your IoT infrastructure with extensible architecture",
    ],
    techSpecs: [
      {
        category: "Connectivity",
        specs: ["Wi-Fi 6 (802.11ax)", "Bluetooth 5.2", "Zigbee 3.0", "Optional cellular (4G/5G) connectivity"],
      },
      {
        category: "Processing",
        specs: [
          "Quad-core processor optimized for edge computing",
          "8GB RAM",
          "32GB eMMC storage",
          "Optional GPU for AI workloads",
        ],
      },
      {
        category: "Security",
        specs: [
          "Hardware security module (HSM)",
          "Secure boot process",
          "Certificate-based authentication",
          "Encrypted data storage and transmission",
        ],
      },
      {
        category: "Management",
        specs: [
          "Web-based management interface",
          "REST API for programmatic control",
          "OTA updates for gateway and connected devices",
          "Detailed logging and diagnostics",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "SmartSense IoT Gateway has simplified our smart building deployment, allowing us to integrate various sensors and systems seamlessly.",
        author: "Thomas Brown",
        position: "Facilities Director, Corporate Campus",
      },
      {
        quote:
          "The edge processing capabilities of SmartSense have dramatically reduced our cloud costs while improving response times for critical systems.",
        author: "Sophia Garcia",
        position: "IoT Solutions Architect, Smart City Project",
      },
    ],
    image: "/images/business-workshop.jpeg",
    gallery: ["/images/tech-presentation.jpeg", "/images/office-collaboration.jpeg", "/images/tech-meeting.jpeg"],
  },
  {
    id: "devops-toolkit",
    numericId: 6,
    name: "DevOps Toolkit",
    tagline: "Streamline your development and operations with our integrated toolkit.",
    description:
      "DevOps Toolkit is a comprehensive suite of tools designed to streamline the software development lifecycle. From code repository management to continuous integration, deployment, and monitoring, DevOps Toolkit provides everything teams need to build, test, deploy, and maintain applications efficiently and reliably.",
    price: {
      standard: "$249/month",
      professional: "$499/month",
      enterprise: "Custom pricing",
    },
    features: {
      standard: [
        "Up to 10 users",
        "Git repository management",
        "CI/CD pipeline automation",
        "Basic monitoring and alerts",
        "Artifact repository",
      ],
      professional: [
        "Up to 50 users",
        "Advanced pipeline orchestration",
        "Infrastructure as code templates",
        "Comprehensive monitoring suite",
        "Security scanning integration",
        "Collaboration tools",
      ],
      enterprise: [
        "Unlimited users",
        "Custom pipeline extensions",
        "Advanced compliance features",
        "Multi-cloud deployment support",
        "Enterprise SSO integration",
        "Dedicated environment",
        "Custom SLAs",
      ],
    },
    benefits: [
      "Accelerate software delivery with automated pipelines",
      "Improve code quality with integrated testing and security scanning",
      "Enhance collaboration between development and operations teams",
      "Gain visibility into application performance and health",
      "Reduce manual errors with automated deployments",
    ],
    techSpecs: [
      {
        category: "Source Control",
        specs: [
          "Git repository management",
          "Branch protection rules",
          "Code review workflows",
          "Merge request automation",
        ],
      },
      {
        category: "CI/CD",
        specs: [
          "Pipeline as code definition",
          "Parallel job execution",
          "Matrix builds",
          "Deployment strategies (blue/green, canary)",
        ],
      },
      {
        category: "Infrastructure",
        specs: [
          "Infrastructure as code templates",
          "Multi-cloud provisioning",
          "Configuration management",
          "Secret management",
        ],
      },
      {
        category: "Monitoring",
        specs: [
          "Application performance monitoring",
          "Log aggregation and analysis",
          "Custom dashboards",
          "Alert management and escalation",
        ],
      },
    ],
    testimonials: [
      {
        quote:
          "DevOps Toolkit has transformed our development process, reducing our release cycle from weeks to days while improving quality.",
        author: "Alex Rivera",
        position: "VP of Engineering, Software Solutions Inc.",
      },
      {
        quote:
          "The integrated monitoring and alerting in DevOps Toolkit has dramatically improved our incident response time and system reliability.",
        author: "Priya Sharma",
        position: "DevOps Lead, E-commerce Platform",
      },
    ],
    image: "/images/digital-workspace.jpeg",
    gallery: ["/images/tech-meeting.jpeg", "/images/office-collaboration.jpeg", "/images/business-workshop.jpeg"],
  },
]

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  // Try to find the product by string ID first
  let product = products.find((p) => p.id === params.id)

  // If not found, try to find by numeric ID (converted from string)
  if (!product) {
    const numericId = Number.parseInt(params.id, 10)
    if (!isNaN(numericId)) {
      product = products.find((p) => p.numericId === numericId)
    }
  }

  if (!product) {
    notFound()
  }

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-4">
            <Link
              href="/products"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{product.name}</h1>
                <p className="text-muted-foreground md:text-xl">{product.tagline}</p>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-[#0f172a] text-[#0f172a]" />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">Based on 48 reviews</span>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Request Demo</Button>
                  <Button size="lg" variant="outline">
                    View Documentation
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Product Overview</h2>
              <p className="text-muted-foreground mb-6">{product.description}</p>

              <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#0f172a] mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {product.gallery.map((image, index) => (
                  <div key={index} className="relative h-[200px] rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
              <div className="space-y-6 mb-8">
                {product.techSpecs.map((category, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-medium mb-2">{category.category}</h4>
                    <ul className="space-y-2">
                      {category.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#0f172a] mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">Customer Testimonials</h3>
              <div className="space-y-6">
                {product.testimonials.map((testimonial, index) => (
                  <div key={index} className="border-l-4 border-[#0f172a] pl-4 py-2">
                    <p className="italic mb-2">"{testimonial.quote}"</p>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="border rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Pricing Plans</h3>
                <Tabs defaultValue="standard">
                  <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger value="standard">Standard</TabsTrigger>
                    <TabsTrigger value="professional">Professional</TabsTrigger>
                    <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
                  </TabsList>
                  <TabsContent value="standard" className="space-y-4">
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold">{product.price.standard}</div>
                      <p className="text-muted-foreground">Billed monthly</p>
                    </div>
                    <ul className="space-y-2">
                      {product.features.standard.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#0f172a] mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </TabsContent>
                  <TabsContent value="professional" className="space-y-4">
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold">{product.price.professional}</div>
                      <p className="text-muted-foreground">Billed monthly</p>
                    </div>
                    <ul className="space-y-2">
                      {product.features.professional.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#0f172a] mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">Get Started</Button>
                  </TabsContent>
                  <TabsContent value="enterprise" className="space-y-4">
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold">{product.price.enterprise}</div>
                      <p className="text-muted-foreground">Custom solutions</p>
                    </div>
                    <ul className="space-y-2">
                      {product.features.enterprise.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#0f172a] mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">Contact Sales</Button>
                  </TabsContent>
                </Tabs>
              </div>
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
                Experience the power of {product.name} with a free 14-day trial. No credit card required.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary">
                Start Free Trial
              </Button>
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
