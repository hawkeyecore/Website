import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CaseStudyPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <Link
        href="/services/cloud-solutions"
        className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Cloud Solutions
      </Link>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Financial Services Cloud Migration Case Study
          </h1>

          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-8">
            <Image
              src="/images/business-workshop.jpeg"
              alt="Financial Services Cloud Migration"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
              <p className="text-muted-foreground">
                A regional financial services firm with over 500 employees and 15 branch locations needed to modernize
                their IT infrastructure to improve performance, reduce costs, and enhance disaster recovery
                capabilities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-muted-foreground mb-4">
                The client was facing several challenges with their on-premises infrastructure:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>High maintenance costs for aging hardware</li>
                <li>Limited scalability during peak processing periods</li>
                <li>Inadequate disaster recovery capabilities</li>
                <li>Difficulty meeting increasingly stringent regulatory requirements</li>
                <li>Performance issues affecting customer-facing applications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted-foreground mb-4">
                We developed a comprehensive cloud migration strategy that included:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Detailed assessment of existing applications and infrastructure</li>
                <li>Cloud-readiness evaluation for all systems</li>
                <li>Secure AWS architecture design with financial services compliance in mind</li>
                <li>Phased migration approach to minimize business disruption</li>
                <li>Implementation of robust security controls and monitoring</li>
                <li>Multi-region deployment for enhanced disaster recovery</li>
                <li>Automated scaling to handle variable workloads</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Migration Process</h2>
              <p className="text-muted-foreground mb-4">Our cloud migration followed these key phases:</p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Discovery and assessment of all applications and dependencies</li>
                <li>Development of a detailed migration plan and timeline</li>
                <li>Creation of the target cloud environment with security controls</li>
                <li>Migration of non-critical systems as a proof of concept</li>
                <li>Iterative migration of remaining systems with thorough testing</li>
                <li>Implementation of monitoring and management tools</li>
                <li>Staff training on cloud operations and best practices</li>
                <li>Decommissioning of legacy infrastructure</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">40%</div>
                  <p>Reduction in infrastructure costs</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">99.99%</div>
                  <p>System uptime</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">60%</div>
                  <p>Faster disaster recovery</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
              <blockquote className="border-l-4 border-[#00a3e0] pl-4 italic">
                "The cloud migration has been transformative for our business. Not only have we significantly reduced
                our IT costs, but we've also improved our system performance and enhanced our disaster recovery
                capabilities. The team's expertise in financial services compliance was invaluable throughout the
                project."
                <footer className="mt-2 font-medium not-italic">— Jennifer Martinez, CIO</footer>
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
                <p>9 months</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Technologies Used</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>AWS (EC2, RDS, S3, Lambda)</li>
                  <li>Terraform</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>CloudWatch</li>
                  <li>AWS Security Hub</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Services Provided</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Cloud Migration Strategy</li>
                  <li>Cloud Architecture Design</li>
                  <li>Security Implementation</li>
                  <li>Compliance Management</li>
                  <li>Disaster Recovery Planning</li>
                  <li>Staff Training</li>
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
