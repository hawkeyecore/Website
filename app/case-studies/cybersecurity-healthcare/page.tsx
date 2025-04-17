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
            Healthcare Provider Security Transformation
          </h1>

          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-8">
            <Image src="/images/digital-workspace.jpeg" alt="Healthcare Security" fill className="object-cover" />
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
              <p className="text-muted-foreground">
                A large healthcare provider network with 12 hospitals, 45 clinics, and over 8,000 employees needed to
                strengthen their cybersecurity infrastructure to protect patient data and comply with HIPAA regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-muted-foreground mb-4">The client faced several critical security challenges:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Increasing number of ransomware attacks targeting healthcare organizations</li>
                <li>Legacy systems with security vulnerabilities that couldn't be easily updated</li>
                <li>Distributed network across multiple facilities with inconsistent security controls</li>
                <li>Need to maintain HIPAA compliance while enabling efficient access to patient data</li>
                <li>Limited security awareness among clinical staff</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted-foreground mb-4">
                We implemented a comprehensive healthcare-specific security solution that included:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Healthcare-specific threat intelligence and monitoring</li>
                <li>Segmentation of clinical networks from administrative systems</li>
                <li>Implementation of zero-trust architecture for critical systems</li>
                <li>Advanced endpoint protection for medical devices and workstations</li>
                <li>Secure access solutions for remote clinicians</li>
                <li>HIPAA-compliant data protection and encryption</li>
                <li>Role-based security training for different staff categories</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Implementation Process</h2>
              <p className="text-muted-foreground mb-4">
                Our healthcare security transformation followed these phases:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Comprehensive security assessment with HIPAA compliance focus</li>
                <li>Development of healthcare-specific security architecture</li>
                <li>Phased implementation to minimize disruption to patient care</li>
                <li>Secure integration of medical devices and clinical systems</li>
                <li>Implementation of advanced threat protection and monitoring</li>
                <li>Role-specific security training for clinical and administrative staff</li>
                <li>Regular security testing and compliance validation</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">100%</div>
                  <p>HIPAA compliance achieved</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">95%</div>
                  <p>Reduction in security incidents</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">0</div>
                  <p>Ransomware infections since implementation</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
              <blockquote className="border-l-4 border-[#00a3e0] pl-4 italic">
                "The security transformation has been remarkable. We now have confidence in our ability to protect
                patient data while maintaining the accessibility needed for quality care. The team's understanding of
                healthcare-specific security challenges made all the difference in creating a solution that works for
                our clinical environment."
                <footer className="mt-2 font-medium not-italic">— Dr. Sarah Johnson, CMIO</footer>
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
                <p>Healthcare</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Project Duration</h4>
                <p>9 months</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Technologies Used</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Healthcare-specific SIEM</li>
                  <li>Medical Device Security Platform</li>
                  <li>Zero Trust Network Access</li>
                  <li>Advanced Endpoint Protection</li>
                  <li>HIPAA-compliant Encryption</li>
                  <li>Secure Clinical Communications</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Services Provided</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Healthcare Security Assessment</li>
                  <li>HIPAA Compliance Consulting</li>
                  <li>Security Architecture Design</li>
                  <li>Medical Device Security</li>
                  <li>Clinical Staff Security Training</li>
                  <li>24/7 Security Monitoring</li>
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
