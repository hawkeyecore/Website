import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { query } from "@/lib/db"

// Get service by slug
async function getServiceBySlug(slug: string) {
  try {
    const sql = `
    SELECT id, title, slug, description, content, icon, image_url
    FROM services
    WHERE slug = ?
  `
    const services = (await query(sql, [slug])) as any[]
    return services.length > 0 ? services[0] : null
  } catch (error) {
    console.error("Error fetching service:", error)
    return null
  }
}

// Sample services data - in a real app, this would come from a database or API
const services = [
  {
    id: "software-development",
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
    features: [
      {
        title: "Custom Web Applications",
        description: "Responsive, scalable web applications built with modern frameworks and technologies.",
      },
      {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android devices.",
      },
      {
        title: "Enterprise Software",
        description: "Robust, secure enterprise solutions that streamline operations and boost productivity.",
      },
      {
        title: "API Development & Integration",
        description: "Custom APIs and seamless integration with third-party services and platforms.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Planning",
        description: "We work closely with you to understand your business needs and define project requirements.",
      },
      {
        step: 2,
        title: "Design & Architecture",
        description: "Our team designs the user experience and technical architecture for your solution.",
      },
      {
        step: 3,
        title: "Development",
        description: "We build your solution using agile methodologies, with regular updates and feedback cycles.",
      },
      {
        step: 4,
        title: "Testing & QA",
        description: "Rigorous testing ensures your software is reliable, secure, and performs optimally.",
      },
      {
        step: 5,
        title: "Deployment & Support",
        description: "We deploy your solution and provide ongoing maintenance and support.",
      },
    ],
    image: "/images/diverse-team-planning.jpeg",
    caseStudies: [
      {
        title: "Healthcare Provider Portal",
        description: "Developed a custom patient management system that improved operational efficiency by 35%.",
        results: [
          "35% increase in operational efficiency",
          "Reduced patient wait times by 40%",
          "98% user satisfaction rate",
        ],
      },
      {
        title: "E-commerce Platform",
        description: "Built a scalable e-commerce solution that helped our client increase online sales by 150%.",
        results: [
          "150% increase in online sales",
          "60% reduction in cart abandonment",
          "Seamless integration with inventory systems",
        ],
      },
    ],
  },
  {
    id: "cloud-solutions",
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
    features: [
      {
        title: "Cloud Migration",
        description: "Seamless migration of your existing infrastructure and applications to the cloud.",
      },
      {
        title: "Cloud-Native Development",
        description: "Building applications specifically designed to leverage cloud capabilities.",
      },
      {
        title: "Multi-Cloud Management",
        description: "Unified management of resources across multiple cloud providers.",
      },
      {
        title: "Cloud Security",
        description: "Comprehensive security solutions to protect your cloud infrastructure and data.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description:
          "We evaluate your current infrastructure and applications to determine the best migration strategy.",
      },
      {
        step: 2,
        title: "Planning",
        description:
          "We develop a detailed migration plan, including timelines, resource requirements, and risk mitigation.",
      },
      {
        step: 3,
        title: "Migration",
        description: "We execute the migration with minimal disruption to your business operations.",
      },
      {
        step: 4,
        title: "Optimization",
        description: "We optimize your cloud infrastructure for performance, cost, and security.",
      },
      {
        step: 5,
        title: "Ongoing Management",
        description: "We provide continuous monitoring, maintenance, and optimization of your cloud environment.",
      },
    ],
    image: "/images/modern-workspace.jpeg",
    caseStudies: [
      {
        title: "Financial Services Firm",
        description:
          "Migrated critical applications to the cloud, resulting in 40% cost savings and improved performance.",
        results: ["40% reduction in infrastructure costs", "99.99% uptime", "Enhanced disaster recovery capabilities"],
      },
      {
        title: "Manufacturing Company",
        description:
          "Implemented a hybrid cloud solution that improved scalability while maintaining compliance requirements.",
        results: [
          "Reduced deployment time by 70%",
          "Improved resource utilization by 45%",
          "Seamless scaling during peak periods",
        ],
      },
    ],
  },
  {
    id: "data-analytics",
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
    features: [
      {
        title: "Business Intelligence",
        description:
          "Interactive dashboards and reports that provide real-time insights into your business performance.",
      },
      {
        title: "Predictive Analytics",
        description: "Advanced algorithms that forecast trends and help you anticipate future outcomes.",
      },
      {
        title: "Big Data Processing",
        description: "Scalable solutions for processing and analyzing large volumes of data.",
      },
      {
        title: "Data Visualization",
        description: "Clear, intuitive visualizations that make complex data easy to understand and act upon.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Data Assessment",
        description: "We evaluate your data sources, quality, and current analytics capabilities.",
      },
      {
        step: 2,
        title: "Strategy Development",
        description: "We create a comprehensive data strategy aligned with your business objectives.",
      },
      {
        step: 3,
        title: "Implementation",
        description:
          "We build and deploy your analytics solution, including data pipelines, storage, and visualization tools.",
      },
      {
        step: 4,
        title: "Training & Adoption",
        description: "We train your team to effectively use the analytics tools and interpret the insights.",
      },
      {
        step: 5,
        title: "Continuous Improvement",
        description: "We regularly refine your analytics solution to address evolving business needs.",
      },
    ],
    image: "/images/data-analytics-team.jpeg",
    caseStudies: [
      {
        title: "Retail Chain",
        description:
          "Implemented a customer analytics solution that increased targeted marketing effectiveness by 60%.",
        results: [
          "60% improvement in marketing ROI",
          "25% increase in customer retention",
          "Personalized shopping experiences",
        ],
      },
      {
        title: "Healthcare Provider",
        description:
          "Developed a predictive analytics system that improved patient outcomes and reduced readmission rates.",
        results: [
          "30% reduction in readmission rates",
          "Improved resource allocation",
          "Enhanced preventive care programs",
        ],
      },
    ],
  },
  {
    id: "cybersecurity",
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
    features: [
      {
        title: "Security Assessments",
        description: "Thorough evaluation of your security posture to identify vulnerabilities and risks.",
      },
      {
        title: "Threat Detection & Response",
        description: "Advanced monitoring and rapid response to security incidents.",
      },
      {
        title: "Compliance Management",
        description: "Ensuring your security practices meet industry regulations and standards.",
      },
      {
        title: "Security Training",
        description: "Educating your team on security best practices and threat awareness.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Security Assessment",
        description: "We evaluate your current security posture and identify vulnerabilities.",
      },
      {
        step: 2,
        title: "Strategy Development",
        description: "We create a comprehensive security strategy tailored to your business needs.",
      },
      {
        step: 3,
        title: "Implementation",
        description: "We deploy security solutions and controls to protect your digital assets.",
      },
      {
        step: 4,
        title: "Monitoring & Management",
        description: "We provide ongoing monitoring and management of your security environment.",
      },
      {
        step: 5,
        title: "Continuous Improvement",
        description: "We regularly update and enhance your security measures to address evolving threats.",
      },
    ],
    image: "/images/team-celebration.jpeg",
    caseStudies: [
      {
        title: "Financial Institution",
        description:
          "Implemented a comprehensive security solution that prevented potential data breaches and ensured compliance.",
        results: ["Zero security breaches", "100% compliance with industry regulations", "Enhanced customer trust"],
      },
      {
        title: "E-commerce Company",
        description: "Developed a security framework that protected customer data and prevented fraud.",
        results: ["90% reduction in fraud attempts", "Secure payment processing", "Improved customer confidence"],
      },
    ],
  },
  {
    id: "consulting-services",
    name: "Consulting Services",
    description: "Expert guidance to optimize your technology strategy and implementation.",
    longDescription:
      "Our technology consulting services provide expert guidance to help you navigate complex technology decisions, optimize your IT strategy, and implement solutions that drive business value and competitive advantage.",
    benefits: [
      "Strategic technology roadmapping",
      "Vendor-neutral recommendations",
      "Cost optimization strategies",
      "Risk mitigation planning",
    ],
    features: [
      {
        title: "IT Strategy Consulting",
        description: "Develop a comprehensive technology strategy aligned with your business objectives.",
      },
      {
        title: "Digital Transformation",
        description: "Guide your organization through successful digital transformation initiatives.",
      },
      {
        title: "Technology Assessment",
        description: "Evaluate your current technology stack and identify opportunities for improvement.",
      },
      {
        title: "Project Management",
        description: "Expert project management to ensure successful technology implementations.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "We conduct a thorough assessment of your current technology landscape and business goals.",
      },
      {
        step: 2,
        title: "Analysis",
        description: "We analyze findings and identify opportunities, challenges, and potential solutions.",
      },
      {
        step: 3,
        title: "Strategy Development",
        description: "We develop a tailored strategy and roadmap to achieve your technology objectives.",
      },
      {
        step: 4,
        title: "Implementation Planning",
        description: "We create detailed implementation plans with clear timelines and resource requirements.",
      },
      {
        step: 5,
        title: "Ongoing Support",
        description: "We provide continued guidance and support throughout the implementation process.",
      },
    ],
    image: "/images/business-meeting.jpeg",
    caseStudies: [
      {
        title: "Global Retailer",
        description:
          "Developed a digital transformation strategy that modernized operations and improved customer experience.",
        results: [
          "20% increase in operational efficiency",
          "35% improvement in customer satisfaction",
          "Successful cloud migration with zero downtime",
        ],
      },
      {
        title: "Healthcare Network",
        description: "Created an IT roadmap that enabled secure data sharing and improved patient care coordination.",
        results: [
          "Reduced IT costs by 25%",
          "Improved data accessibility across 12 facilities",
          "Enhanced compliance with healthcare regulations",
        ],
      },
    ],
  },
]

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  // Try to get service from database
  const dbService = await getServiceBySlug(params.slug)

  // If found in database, render with database content
  if (dbService) {
    return (
      <>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col space-y-4">
              <Link
                href="/services"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{dbService.title}</h1>
                  <p className="text-muted-foreground md:text-xl">{dbService.description}</p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button size="lg">Request a Consultation</Button>
                    <Button size="lg" variant="outline">
                      Download Brochure
                    </Button>
                  </div>
                </div>
                {dbService.image_url && (
                  <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                    <Image
                      src={dbService.image_url || "/placeholder.svg"}
                      alt={dbService.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="prose prose-lg max-w-none">
              {dbService.content ? (
                <div dangerouslySetInnerHTML={{ __html: dbService.content }} />
              ) : (
                <p>{dbService.description}</p>
              )}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f172a] text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to get started?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed">
                  Contact us today to discuss how our {dbService.title ? dbService.title.toLowerCase() : "services"} can
                  help you achieve your business goals.
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
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  // If not found in database, try to find in static data
  const service = services.find((s) => s.id === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-4">
            <Link
              href="/services"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{service.name}</h1>
                <p className="text-muted-foreground md:text-xl">{service.longDescription}</p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Request a Consultation</Button>
                  <Button size="lg" variant="outline">
                    Download Brochure
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="space-y-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-xl font-medium">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#0055b3] mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Our Process</h2>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {service.process.map((step) => (
              <div key={step.step} className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0f172a] text-white text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Case Studies</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {service.caseStudies.map((caseStudy, index) => (
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to get started?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed">
                Contact us today to discuss how our {service.name ? service.name.toLowerCase() : "services"} can help
                you achieve your business goals.
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
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
