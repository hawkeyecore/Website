import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CaseStudyPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <Link
        href="/services/managed-it-services"
        className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Managed IT Services
      </Link>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Retail Chain IT Infrastructure Overhaul
          </h1>

          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-8">
            <Image
              src="/images/business-presentation.jpeg"
              alt="Retail IT Infrastructure"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
              <p className="text-muted-foreground">
                A growing retail chain with 75 stores across multiple states needed to modernize their IT infrastructure
                and implement consistent, reliable IT support across all locations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-muted-foreground mb-4">The client faced several IT challenges:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Inconsistent IT infrastructure across different store locations</li>
                <li>Frequent POS system outages impacting sales</li>
                <li>Limited IT staff struggling to support growing number of stores</li>
                <li>Security vulnerabilities in customer payment processing</li>
                <li>Slow response times for IT issues at remote locations</li>
                <li>Difficulty implementing new retail technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted-foreground mb-4">
                We implemented a comprehensive managed IT services solution that included:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Standardized IT infrastructure across all store locations</li>
                <li>Centralized network management and monitoring</li>
                <li>Cloud-based POS system with redundancy and failover</li>
                <li>24/7 help desk support for all store employees</li>
                <li>Proactive maintenance and patch management</li>
                <li>Secure payment processing with PCI DSS compliance</li>
                <li>Remote support capabilities for all locations</li>
                <li>IT vendor management and coordination</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Implementation Process</h2>
              <p className="text-muted-foreground mb-4">
                Our managed IT services implementation followed these phases:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Comprehensive IT assessment of all locations</li>
                <li>Development of standardized IT architecture</li>
                <li>Pilot implementation in five stores</li>
                <li>Phased rollout across all locations</li>
                <li>Implementation of monitoring and management systems</li>
                <li>Staff training on new systems and support procedures</li>
                <li>Transition to ongoing managed services model</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">99.9%</div>
                  <p>POS system uptime</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">78%</div>
                  <p>Reduction in IT support tickets</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">42%</div>
                  <p>Decrease in IT operational costs</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
              <blockquote className="border-l-4 border-[#00a3e0] pl-4 italic">
                "The managed IT services have transformed our retail operations. We now have reliable systems across all
                our stores, fast resolution of any IT issues, and the ability to quickly implement new retail
                technologies. Our store managers can focus on serving customers instead of dealing with IT problems, and
                our corporate team has complete visibility into our technology infrastructure."
                <footer className="mt-2 font-medium not-italic">— Jennifer Martinez, VP of Operations</footer>
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
                <p>Retail</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Project Duration</h4>
                <p>8 months for implementation, ongoing services</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Technologies Used</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Cloud-based POS System</li>
                  <li>SD-WAN for Store Connectivity</li>
                  <li>Remote Monitoring and Management</li>
                  <li>Automated Patch Management</li>
                  <li>Help Desk Ticketing System</li>
                  <li>Network Security Appliances</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Services Provided</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IT Infrastructure Standardization</li>
                  <li>24/7 Help Desk Support</li>
                  <li>Network Monitoring and Management</li>
                  <li>Security Management</li>
                  <li>Vendor Management</li>
                  <li>Technology Consulting</li>
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
