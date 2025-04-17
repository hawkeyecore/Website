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
            Law Firm IT Security & Compliance
          </h1>

          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-8">
            <Image src="/images/business-workshop.jpeg" alt="Law Firm IT Security" fill className="object-cover" />
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
              <p className="text-muted-foreground">
                A prestigious law firm with 150 attorneys across five offices needed to enhance their IT security and
                ensure compliance with client data protection requirements while improving attorney productivity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-muted-foreground mb-4">The client faced several critical challenges:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Strict client requirements for data security and confidentiality</li>
                <li>Increasing regulatory compliance demands</li>
                <li>Aging IT infrastructure with security vulnerabilities</li>
                <li>Limited internal IT resources stretched across multiple offices</li>
                <li>Attorney productivity impacted by technology issues</li>
                <li>Need for secure remote access to case files and documents</li>
                <li>Concerns about potential data breaches and their implications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted-foreground mb-4">
                We implemented a comprehensive managed IT services solution that included:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Secure document management system with granular access controls</li>
                <li>Multi-layered security architecture with advanced threat protection</li>
                <li>24/7 security monitoring and incident response</li>
                <li>Secure remote access solution for attorneys</li>
                <li>Automated compliance monitoring and reporting</li>
                <li>Dedicated help desk with legal industry expertise</li>
                <li>Regular security awareness training for all staff</li>
                <li>Business continuity and disaster recovery planning</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Implementation Process</h2>
              <p className="text-muted-foreground mb-4">
                Our managed IT services implementation followed these phases:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Comprehensive security and compliance assessment</li>
                <li>Development of tailored security architecture</li>
                <li>Implementation of security controls and monitoring</li>
                <li>Deployment of document management system</li>
                <li>Setup of secure remote access solution</li>
                <li>Staff training on security best practices</li>
                <li>Transition to ongoing managed services model</li>
                <li>Regular security assessments and improvements</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">100%</div>
                  <p>Compliance with legal data regulations</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">0</div>
                  <p>Security breaches since implementation</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">27%</div>
                  <p>Increase in attorney productivity</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
              <blockquote className="border-l-4 border-[#00a3e0] pl-4 italic">
                "The managed IT services have transformed our firm's technology environment. We now have peace of mind
                knowing our client data is secure and our systems are compliant with all regulations. The responsive
                help desk has significantly reduced technology disruptions, allowing our attorneys to focus on serving
                clients rather than dealing with IT issues. The secure remote access has been a game-changer for our
                productivity."
                <footer className="mt-2 font-medium not-italic">— Robert Wilson, Managing Partner</footer>
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
                <p>Legal Services</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Project Duration</h4>
                <p>3 months for implementation, ongoing services</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Technologies Used</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Secure Document Management System</li>
                  <li>Multi-factor Authentication</li>
                  <li>Advanced Endpoint Protection</li>
                  <li>Security Information and Event Management</li>
                  <li>Encrypted VPN Solution</li>
                  <li>Cloud Backup and Recovery</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Services Provided</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Security Assessment and Planning</li>
                  <li>24/7 Security Monitoring</li>
                  <li>Help Desk Support</li>
                  <li>Compliance Management</li>
                  <li>Disaster Recovery Planning</li>
                  <li>Security Awareness Training</li>
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
