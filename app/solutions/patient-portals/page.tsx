import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function PatientPortalsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Patient Portal Solutions</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Our patient portal solutions empower individuals to take control of their healthcare journey by providing
            secure, convenient access to their medical information and communication tools.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg">
              Schedule a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/industries/healthcare">View Healthcare Solutions</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
          <Image src="/images/tech-presentation.jpeg" alt="Patient Portal Solutions" fill className="object-cover" />
        </div>
      </div>

      <div className="mt-16 space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Secure Messaging</h3>
              <p className="text-muted-foreground mb-4">
                Enable direct, secure communication between patients and healthcare providers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>HIPAA-compliant messaging system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>File and image sharing capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Message routing to appropriate staff</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Appointment Management</h3>
              <p className="text-muted-foreground mb-4">
                Streamline scheduling with online appointment booking and management.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Self-service appointment scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Automated reminders and notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Cancellation and rescheduling options</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Medical Records Access</h3>
              <p className="text-muted-foreground mb-4">
                Provide patients with secure access to their medical records and test results.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>View and download medical records</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Lab and test result notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Medication history and refill requests</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Benefits</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">For Patients</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>24/7 access to health information</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Improved communication with providers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Greater involvement in healthcare decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Convenient access to healthcare services</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">For Healthcare Providers</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Reduced administrative workload</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Decreased no-show rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Improved patient satisfaction and engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>More efficient communication channels</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Success Stories</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">National Telemedicine Provider</h3>
              <p className="text-muted-foreground mb-4">
                Implemented a patient portal that increased patient engagement by 65% and reduced administrative costs
                by 40%.
              </p>
              <Link
                href="/case-studies/healthcare-national-telemedicine-provider"
                className="text-[#0055b3] font-medium flex items-center"
              >
                Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Community Health Network</h3>
              <p className="text-muted-foreground mb-4">
                Deployed a patient portal that reduced no-show rates by 35% and improved patient satisfaction scores by
                45%.
              </p>
              <Link
                href="/case-studies/healthcare-community-health-network"
                className="text-[#0055b3] font-medium flex items-center"
              >
                Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#0f172a] text-white p-8 rounded-lg">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to empower your patients?</h2>
            <p className="mb-6">
              Contact us today to learn how our patient portal solutions can improve patient engagement and streamline
              your operations.
            </p>
            <Button size="lg" variant="secondary">
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
