import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { CaseStudyDialog } from "@/components/case-study-dialog"

export default function ITConsultingPage() {
  const caseStudies = [
    {
      id: 1,
      title: "Digital Transformation for Retail Chain",
      client: "National Retail Corporation",
      industry: "Retail",
      challenge:
        "A national retail chain with over 200 locations was struggling with outdated technology systems that were hindering growth and customer experience. Their legacy systems were siloed, making it difficult to get a unified view of inventory, sales, and customer data. They needed a comprehensive digital transformation strategy to remain competitive in the evolving retail landscape.",
      solution:
        "We developed a comprehensive digital transformation roadmap:\n\n- Conducted thorough assessment of existing systems and business processes\n- Created a phased implementation plan aligned with business priorities\n- Implemented an integrated omnichannel retail platform\n- Developed a unified customer data platform\n- Modernized supply chain and inventory management systems\n- Established a cloud-based infrastructure for scalability\n- Provided change management and training programs",
      results:
        "- 35% increase in online sales within the first year\n- 28% improvement in inventory accuracy\n- Reduced IT operational costs by 22%\n- Decreased checkout time by 45 seconds per customer\n- Improved customer satisfaction scores by 40%\n- Enabled data-driven decision making across all departments\n- Successfully launched mobile app with 500,000+ downloads in first quarter",
      testimonial: {
        quote:
          "The digital transformation initiative has revolutionized how we operate. We now have real-time visibility across our entire operation, and our customers enjoy a seamless shopping experience whether online or in-store. The strategic roadmap provided clear direction while allowing us to adapt as we progressed.",
        author: "Jennifer Martinez, Chief Digital Officer",
      },
      image: "/images/retail-digital-transformation.jpeg",
      shortDescription:
        "Comprehensive digital transformation for a 200+ location retail chain, resulting in 35% increase in online sales and 22% reduction in IT costs.",
    },
    {
      id: 2,
      title: "IT Strategy Overhaul for Manufacturing Firm",
      client: "Precision Manufacturing Inc.",
      industry: "Manufacturing",
      challenge:
        "A mid-sized manufacturing company was facing increasing competition and pressure to modernize their operations. Their IT infrastructure was a patchwork of legacy systems that couldn't support modern manufacturing processes or provide the data insights needed for business decisions. They needed a strategic IT roadmap to guide their technology investments and support business growth.",
      solution:
        "We delivered a comprehensive IT strategy and implementation plan:\n\n- Performed gap analysis between business goals and current IT capabilities\n- Developed a 3-year technology roadmap aligned with business objectives\n- Designed a modern IT architecture supporting Industry 4.0 initiatives\n- Created data strategy to enable predictive maintenance and quality control\n- Established IT governance framework and project prioritization methodology\n- Provided vendor selection assistance for key technology platforms\n- Implemented project management office (PMO) for execution oversight",
      results:
        "- 18% increase in production efficiency through better systems integration\n- Reduced production downtime by 27%\n- Improved product quality metrics by 15%\n- Decreased new product development cycle by 30%\n- Achieved ROI on technology investments 40% faster than industry average\n- Successfully implemented IoT sensors across production lines\n- Created data visualization dashboards for real-time decision making",
      testimonial: {
        quote:
          "The strategic IT roadmap transformed our approach to technology. Instead of seeing IT as a cost center, we now view it as a strategic enabler for our business. The phased implementation approach allowed us to see quick wins while building toward our long-term vision. Our operations are now more efficient, and we have the data insights needed to stay competitive.",
        author: "Robert Chen, Chief Operations Officer",
      },
      image: "/images/manufacturing-it-strategy.jpeg",
      shortDescription:
        "Strategic IT roadmap for a manufacturing firm that reduced production downtime by 27% and improved product quality metrics by 15%.",
    },
  ]

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">IT Consulting</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Strategic technology guidance to help your business thrive
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                Transform Your Business with Strategic IT Guidance
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Our experienced consultants provide strategic guidance on technology investments, digital
                transformation, and IT governance. We help you align your technology strategy with your business goals
                to maximize ROI and drive growth.
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  With decades of combined experience across industries, our consultants bring deep expertise in both
                  business strategy and technology implementation. We work as your trusted partner to navigate complex
                  technology decisions and create a clear roadmap for success.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/confident-professional.png"
                alt="IT Consulting Services"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Consulting Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive consulting solutions to address your most pressing technology challenges
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Card className="flex flex-col h-full">
              <CardContent className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">IT Strategy & Roadmap</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Develop a comprehensive technology strategy aligned with your business objectives.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Business-IT alignment assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Technology roadmap development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>IT investment prioritization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full">
              <CardContent className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" x2="12" y1="22" y2="12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Guide your organization through successful digital transformation initiatives.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Digital maturity assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Process digitization and automation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Change management and adoption</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full">
              <CardContent className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h10" />
                    <path d="M7 12h10" />
                    <path d="M7 17h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">IT Governance</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Establish effective IT governance frameworks to optimize technology investments.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>IT policy development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Project portfolio management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>IT performance metrics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full">
              <CardContent className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M20 7h-9" />
                    <path d="M14 17H5" />
                    <circle cx="17" cy="17" r="3" />
                    <circle cx="7" cy="7" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Technology Selection</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Objective guidance on selecting the right technology solutions for your business.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Requirements definition</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Vendor evaluation and selection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Contract negotiation support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full">
              <CardContent className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">IT Leadership Advisory</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Executive-level guidance on technology leadership and organizational structure.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Virtual CIO/CTO services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>IT organizational design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Technology leadership coaching</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full">
              <CardContent className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">IT Cost Optimization</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Identify opportunities to reduce IT costs while improving service quality.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>IT spending analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>License optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Cloud cost management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Case Studies</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how our consulting services have transformed businesses
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="flex flex-col h-full overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                </div>
                <CardContent className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Client:</strong> {study.client} | <strong>Industry:</strong> {study.industry}
                  </p>
                  <p className="text-muted-foreground mb-4">{study.shortDescription}</p>
                  <div className="mt-auto">
                    <CaseStudyDialog caseStudy={study} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f172a] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to transform your technology strategy?</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Contact us today for a consultation and discover how our IT consulting services can help your business
                thrive.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" variant="default">
                    Contact Us
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/business-meeting.jpeg"
                alt="IT Consulting Services"
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
