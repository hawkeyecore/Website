import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CaseStudyPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <Link
        href="/case-studies"
        className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Case Studies
      </Link>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Regional Bank Core System Modernization
          </h1>

          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-8">
            <Image
              src="/images/business-presentation.jpeg"
              alt="Regional Bank Core System"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
              <p className="text-muted-foreground">
                A regional bank with 35 branches serving over 250,000 customers needed to modernize their core banking
                system to improve customer experience, increase operational efficiency, and enable digital banking
                innovation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-muted-foreground mb-4">The client faced several significant challenges:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Legacy core banking system limiting digital innovation</li>
                <li>Slow transaction processing affecting customer satisfaction</li>
                <li>Limited integration capabilities with fintech solutions</li>
                <li>High maintenance costs for outdated technology</li>
                <li>Difficulty meeting evolving regulatory requirements</li>
                <li>Increasing competition from digital-first banks</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted-foreground mb-4">
                We implemented a modern core banking system with the following features:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Cloud-based architecture for scalability and reduced infrastructure costs</li>
                <li>Real-time transaction processing across all channels</li>
                <li>Open API framework for seamless integration with third-party services</li>
                <li>Advanced security features including biometric authentication</li>
                <li>Comprehensive regulatory compliance monitoring and reporting</li>
                <li>360-degree customer view for personalized service</li>
                <li>Digital onboarding capabilities for new customers</li>
                <li>Advanced analytics for business intelligence</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Implementation Process</h2>
              <p className="text-muted-foreground mb-4">Our implementation followed these key phases:</p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Comprehensive assessment of existing systems and processes</li>
                <li>Design of target architecture and migration strategy</li>
                <li>Data cleansing and preparation for migration</li>
                <li>Phased implementation with parallel running of systems</li>
                <li>Rigorous testing including stress testing and security validation</li>
                <li>Staff training and change management</li>
                <li>Controlled cutover to the new system</li>
                <li>Post-implementation support and optimization</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">40%</div>
                  <p>Improvement in customer satisfaction</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">60%</div>
                  <p>Reduction in transaction processing time</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">35%</div>
                  <p>Increase in digital banking adoption</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
              <blockquote className="border-l-4 border-[#00a3e0] pl-4 italic">
                "The core banking modernization has transformed our business. We've seen dramatic improvements in
                customer satisfaction, operational efficiency, and our ability to innovate. The new system has given us
                the foundation we need to compete effectively in today's digital banking landscape."
                <footer className="mt-2 font-medium not-italic">— Hawkeye Core Team</footer>
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
                <p>Finance & Banking</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Project Duration</h4>
                <p>14 months</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Technologies Used</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Cloud-based Core Banking Platform</li>
                  <li>API Gateway</li>
                  <li>Microservices Architecture</li>
                  <li>Advanced Encryption</li>
                  <li>Data Analytics</li>
                  <li>Mobile Banking Framework</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Services Provided</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Core Banking Implementation</li>
                  <li>Data Migration</li>
                  <li>System Integration</li>
                  <li>Security Implementation</li>
                  <li>Staff Training</li>
                  <li>Post-Implementation Support</li>
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
