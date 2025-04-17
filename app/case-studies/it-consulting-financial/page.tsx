import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CaseStudyPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <Link
        href="/services/it-consulting"
        className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to IT Consulting
      </Link>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Financial Services IT Governance Framework
          </h1>

          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-8">
            <Image
              src="/images/business-presentation-meeting.jpeg"
              alt="Financial Services IT Governance"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
              <p className="text-muted-foreground">
                A mid-sized financial services firm with 300+ employees managing over $2 billion in assets needed to
                strengthen their IT governance framework to meet regulatory requirements and reduce technology risks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-muted-foreground mb-4">The client faced several critical challenges:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Increasing regulatory scrutiny and compliance requirements</li>
                <li>Inconsistent IT decision-making processes across departments</li>
                <li>Lack of visibility into technology risks and security vulnerabilities</li>
                <li>Inefficient IT spending with duplicate systems and services</li>
                <li>Difficulty aligning IT investments with business objectives</li>
                <li>Growing concerns about data privacy and protection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted-foreground mb-4">
                We developed a comprehensive IT governance framework that included:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>IT steering committee structure with clear roles and responsibilities</li>
                <li>Technology risk management framework aligned with industry standards</li>
                <li>IT policy development and implementation</li>
                <li>Compliance monitoring and reporting system</li>
                <li>IT investment evaluation and prioritization process</li>
                <li>Vendor risk management program</li>
                <li>Data governance and protection framework</li>
                <li>IT performance metrics and reporting dashboard</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Implementation Process</h2>
              <p className="text-muted-foreground mb-4">Our IT governance implementation followed these key phases:</p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Assessment of current IT governance practices and regulatory requirements</li>
                <li>Gap analysis and risk assessment</li>
                <li>Development of governance framework and policies</li>
                <li>Implementation of committee structures and decision processes</li>
                <li>Technology risk management program implementation</li>
                <li>Staff training and change management</li>
                <li>Monitoring and continuous improvement</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">100%</div>
                  <p>Regulatory compliance achieved</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">50%</div>
                  <p>Reduction in IT-related risks</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">30%</div>
                  <p>Improvement in IT investment ROI</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
              <blockquote className="border-l-4 border-[#00a3e0] pl-4 italic">
                "The IT governance framework has transformed how we manage technology in our organization. We now have
                clear processes for making technology decisions, managing risks, and ensuring compliance with
                regulations. The framework has not only improved our regulatory standing but has also made our IT
                investments more strategic and aligned with our business goals."
                <footer className="mt-2 font-medium not-italic">— Sarah Johnson, CIO</footer>
              </blockquote>
            </section>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Project Details</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Industry</h4>
                <p>Financial Services</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Project Duration</h4>
                <p>6 months</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Frameworks Used</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>COBIT</li>
                  <li>NIST Cybersecurity Framework</li>
                  <li>ISO 27001</li>
                  <li>ITIL</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Services Provided</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IT Governance Assessment</li>
                  <li>Risk Management Framework</li>
                  <li>Policy Development</li>
                  <li>Committee Structure Design</li>
                  <li>Compliance Program Development</li>
                  <li>Training and Change Management</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Interested in similar results?</h3>
              <Link href="/contact">
                <Button className="w-full">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
