import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft } from "lucide-react"

export default function ITConsultingPage() {
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
                  Strategic technology guidance to help your business thrive.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button size="lg">Request a Consultation</Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                <Image src="/images/business-meeting.jpeg" alt="IT Consulting" fill className="object-cover" />
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
                With decades of combined experience across various industries, our consultants bring valuable insights
                and best practices to help you navigate complex technology decisions and implement solutions that
                deliver measurable business value.
              </p>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Technology Strategy</h3>
                  <p className="text-muted-foreground">
                    Developing comprehensive technology roadmaps aligned with your business objectives.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Digital Transformation</h3>
                  <p className="text-muted-foreground">
                    Guiding your organization through digital transformation initiatives to improve efficiency and
                    competitiveness.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">IT Governance</h3>
                  <p className="text-muted-foreground">
                    Establishing frameworks and processes to ensure effective IT decision-making and risk management.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Vendor Selection</h3>
                  <p className="text-muted-foreground">
                    Assisting in the evaluation and selection of technology vendors and solutions.
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
                    <span className="text-lg font-medium">Technology roadmap development</span>
                    <p className="text-muted-foreground">
                      Create a clear path for technology investments that support your business goals.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Digital transformation strategy</span>
                    <p className="text-muted-foreground">
                      Leverage digital technologies to transform your business processes and customer experiences.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">IT governance and best practices</span>
                    <p className="text-muted-foreground">
                      Implement frameworks that ensure IT investments deliver value and manage risks effectively.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Vendor selection and management</span>
                    <p className="text-muted-foreground">
                      Choose the right technology partners and manage relationships to maximize value.
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
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Our Consulting Approach</h2>
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
                We analyze gaps, opportunities, and risks in your current technology environment.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold">Strategy</h3>
              <p className="text-muted-foreground">
                We develop a comprehensive technology strategy and roadmap tailored to your needs.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold">Implementation</h3>
              <p className="text-muted-foreground">
                We guide the execution of the strategy, ensuring alignment with business objectives.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                5
              </div>
              <h3 className="text-xl font-bold">Optimization</h3>
              <p className="text-muted-foreground">
                We continuously refine and optimize your technology strategy as your business evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Case Studies</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border rounded-lg p-6 space-y-4">
              <h3 className="text-2xl font-bold">Manufacturing Company</h3>
              <p className="text-muted-foreground">
                Developed a digital transformation strategy that modernized operations and improved efficiency.
              </p>
              <div>
                <h4 className="font-medium mb-2">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>30% increase in operational efficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>25% reduction in IT costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>Improved data-driven decision making</span>
                  </li>
                </ul>
              </div>
              <Button variant="outline" asChild>
                <Link href="/case-studies/it-consulting-manufacturing">Read Full Case Study</Link>
              </Button>
            </div>
            <div className="border rounded-lg p-6 space-y-4">
              <h3 className="text-2xl font-bold">Financial Services Firm</h3>
              <p className="text-muted-foreground">
                Created an IT governance framework that improved compliance and reduced technology risks.
              </p>
              <div>
                <h4 className="font-medium mb-2">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>100% regulatory compliance achieved</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>50% reduction in IT-related risks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>Streamlined IT decision-making process</span>
                  </li>
                </ul>
              </div>
              <Button variant="outline" asChild>
                <Link href="/case-studies/it-consulting-financial">Read Full Case Study</Link>
              </Button>
            </div>
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
                Contact us today to discuss how our IT consulting services can help you achieve your business goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
