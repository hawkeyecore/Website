import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft } from "lucide-react"
import { CaseStudyCard } from "@/components/case-study-dialog"

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
      results: [
        "35% increase in online sales within the first year",
        "28% improvement in inventory accuracy",
        "Reduced IT operational costs by 22%",
        "Decreased checkout time by 45 seconds per customer",
        "Improved customer satisfaction scores by 40%",
        "Enabled data-driven decision making across all departments",
        "Successfully launched mobile app with 500,000+ downloads in first quarter",
      ],
      testimonial: {
        quote:
          "The digital transformation initiative has revolutionized how we operate. We now have real-time visibility across our entire operation, and our customers enjoy a seamless shopping experience whether online or in-store. The strategic roadmap provided clear direction while allowing us to adapt as we progressed.",
        author: "Jennifer Martinez",
        position: "Chief Digital Officer",
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
      results: [
        "18% increase in production efficiency through better systems integration",
        "Reduced production downtime by 27%",
        "Improved product quality metrics by 15%",
        "Decreased new product development cycle by 30%",
        "Achieved ROI on technology investments 40% faster than industry average",
        "Successfully implemented IoT sensors across production lines",
        "Created data visualization dashboards for real-time decision making",
      ],
      testimonial: {
        quote:
          "The strategic IT roadmap transformed our approach to technology. Instead of seeing IT as a cost center, we now view it as a strategic enabler for our business. The phased implementation approach allowed us to see quick wins while building toward our long-term vision. Our operations are now more efficient, and we have the data insights needed to stay competitive.",
        author: "Robert Chen",
        position: "Chief Operations Officer",
      },
      image: "/images/manufacturing-digital-strategy.jpeg",
      shortDescription:
        "Strategic IT roadmap for a manufacturing firm that reduced production downtime by 27% and improved product quality metrics by 15%.",
    },
  ]

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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">IT Consulting</h1>
                <p className="text-muted-foreground md:text-xl">
                  Strategic technology guidance to help your business thrive
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button size="lg">Request a Consultation</Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    Download Brochure
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                <Image src="/confident-professional.png" alt="IT Consulting Services" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our IT Consulting Services</h2>
              <p className="mb-6">
                Our experienced consultants provide strategic guidance on technology investments, digital
                transformation, and IT governance. We help you align your technology strategy with your business goals
                to maximize ROI and drive growth.
              </p>
              <p className="mb-6">
                With decades of combined experience across industries, our consultants bring deep expertise in both
                business strategy and technology implementation. We work as your trusted partner to navigate complex
                technology decisions and create a clear roadmap for success.
              </p>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">IT Strategy & Roadmap</h3>
                  <p className="text-muted-foreground">
                    Develop a comprehensive technology strategy aligned with your business objectives.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Digital Transformation</h3>
                  <p className="text-muted-foreground">
                    Guide your organization through successful digital transformation initiatives.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">IT Governance</h3>
                  <p className="text-muted-foreground">
                    Establish effective IT governance frameworks to optimize technology investments.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Technology Selection</h3>
                  <p className="text-muted-foreground">
                    Objective guidance on selecting the right technology solutions for your business.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Benefits</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Strategic technology alignment</span>
                    <p className="text-muted-foreground">
                      Ensure your technology investments support your business objectives and drive growth.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Reduced technology risk</span>
                    <p className="text-muted-foreground">
                      Make informed technology decisions that minimize risk and maximize return on investment.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Accelerated digital transformation</span>
                    <p className="text-muted-foreground">
                      Navigate complex technology changes with expert guidance and proven methodologies.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Objective technology advice</span>
                    <p className="text-muted-foreground">
                      Receive vendor-neutral recommendations based on your specific business needs.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Our Consulting Process</h2>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold">Discovery</h3>
              <p className="text-muted-foreground">
                We assess your current technology landscape and understand your business objectives.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold">Analysis</h3>
              <p className="text-muted-foreground">
                We identify gaps, opportunities, and risks in your current technology environment.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold">Strategy</h3>
              <p className="text-muted-foreground">
                We develop a comprehensive technology roadmap aligned with your business goals.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold">Implementation</h3>
              <p className="text-muted-foreground">
                We guide the execution of your technology strategy with proven methodologies.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                5
              </div>
              <h3 className="text-xl font-bold">Optimization</h3>
              <p className="text-muted-foreground">
                We continuously refine your technology strategy to adapt to changing business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Case Studies</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} caseStudy={study} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0a1229] text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to transform your technology strategy?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed">
                Contact us today to discuss how our IT consulting services can help your business thrive.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Schedule a Consultation
                </Button>
              </Link>
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
