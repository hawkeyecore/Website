import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CaseStudyPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <Link
        href="/services/cybersecurity"
        className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Cybersecurity
      </Link>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Financial Institution Security Enhancement Case Study
          </h1>

          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-8">
            <Image src="/images/tech-meeting.jpeg" alt="Financial Institution Security" fill className="object-cover" />
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
              <p className="text-muted-foreground">
                A mid-sized financial institution with over $2 billion in assets and 25 branches needed to strengthen
                their cybersecurity posture to protect sensitive financial data and ensure regulatory compliance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-muted-foreground mb-4">The client was facing several security challenges:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Increasing sophistication of cyber threats targeting financial institutions</li>
                <li>Gaps in their existing security infrastructure identified during an audit</li>
                <li>Difficulty maintaining compliance with evolving financial regulations</li>
                <li>Limited visibility into potential security incidents</li>
                <li>Inadequate security awareness among employees</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted-foreground mb-4">
                We implemented a comprehensive security solution that included:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>End-to-end security assessment to identify vulnerabilities</li>
                <li>Implementation of advanced threat detection and prevention systems</li>
                <li>Development of a robust security governance framework</li>
                <li>Deployment of 24/7 security monitoring and incident response</li>
                <li>Multi-factor authentication for all critical systems</li>
                <li>Data encryption for sensitive information at rest and in transit</li>
                <li>Comprehensive security awareness training program</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Implementation Process</h2>
              <p className="text-muted-foreground mb-4">Our security enhancement project followed these key phases:</p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Comprehensive security assessment and gap analysis</li>
                <li>Development of a prioritized security roadmap</li>
                <li>Implementation of critical security controls</li>
                <li>Deployment of advanced monitoring and detection systems</li>
                <li>Development and implementation of security policies and procedures</li>
                <li>Employee security awareness training</li>
                <li>Tabletop exercises and incident response drills</li>
                <li>Continuous security monitoring and improvement</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">100%</div>
                  <p>Compliance with financial regulations</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">90%</div>
                  <p>Reduction in security incidents</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">85%</div>
                  <p>Improvement in security posture</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
              <blockquote className="border-l-4 border-[#00a3e0] pl-4 italic">
                "The security enhancements implemented have significantly strengthened our cybersecurity posture. We now
                have confidence in our ability to protect our customers' sensitive financial data and meet regulatory
                requirements. The team's expertise in financial security was evident throughout the project, and their
                ongoing support has been invaluable."
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
                <p>Financial Services</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Project Duration</h4>
                <p>7 months</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Technologies Used</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Next-Generation Firewalls</li>
                  <li>SIEM (Security Information and Event Management)</li>
                  <li>EDR (Endpoint Detection and Response)</li>
                  <li>Data Loss Prevention (DLP)</li>
                  <li>Multi-Factor Authentication</li>
                  <li>Encryption Solutions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Services Provided</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Security Assessment</li>
                  <li>Security Architecture Design</li>
                  <li>Security Implementation</li>
                  <li>Compliance Management</li>
                  <li>Security Monitoring</li>
                  <li>Security Training</li>
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
