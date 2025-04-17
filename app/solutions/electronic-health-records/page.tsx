import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function ElectronicHealthRecordsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Electronic Health Records (EHR) Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Our comprehensive EHR solutions provide healthcare providers with the tools they need to deliver more
            efficient and effective patient care while ensuring regulatory compliance and data security.
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
          <Image src="/images/business-meeting.jpeg" alt="Electronic Health Records" fill className="object-cover" />
        </div>
      </div>

      <div className="mt-16 space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Centralized Patient Records</h3>
              <p className="text-muted-foreground mb-4">
                Maintain comprehensive digital records of patient health information accessible across your entire
                organization.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Complete medical history in one place</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Secure access controls by role</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Real-time updates across facilities</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Advanced Data Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Leverage patient data to improve care outcomes through predictive analytics and population health
                management.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Predictive health outcome modeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Population health insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Custom reporting capabilities</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">IoT Device Integration</h3>
              <p className="text-muted-foreground mb-4">
                Connect with medical IoT devices for continuous patient monitoring and automated data collection.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Remote patient monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Automated vital sign recording</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Alert system for critical readings</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Compliance & Security</h2>
          <div className="bg-muted p-6 rounded-lg mb-8">
            <p className="text-muted-foreground mb-4">
              Our EHR solutions are designed with security and compliance at their core, ensuring your patient data is
              protected while meeting all regulatory requirements.
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-background p-4 rounded-md">
                <h4 className="font-bold mb-2">HIPAA Compliance</h4>
                <p className="text-sm text-muted-foreground">
                  Built-in safeguards to ensure compliance with all HIPAA regulations
                </p>
              </div>
              <div className="bg-background p-4 rounded-md">
                <h4 className="font-bold mb-2">Data Encryption</h4>
                <p className="text-sm text-muted-foreground">
                  End-to-end encryption for all patient data at rest and in transit
                </p>
              </div>
              <div className="bg-background p-4 rounded-md">
                <h4 className="font-bold mb-2">Access Controls</h4>
                <p className="text-sm text-muted-foreground">Role-based access controls with detailed audit logging</p>
              </div>
              <div className="bg-background p-4 rounded-md">
                <h4 className="font-bold mb-2">Disaster Recovery</h4>
                <p className="text-sm text-muted-foreground">Robust backup and recovery systems to prevent data loss</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Success Stories</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Regional Hospital Network</h3>
              <p className="text-muted-foreground mb-4">
                Implemented a comprehensive EHR system that improved patient care coordination and reduced
                administrative costs by 30%.
              </p>
              <Link
                href="/case-studies/healthcare-regional-hospital-network"
                className="text-[#0055b3] font-medium flex items-center"
              >
                Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Multi-Specialty Clinic Group</h3>
              <p className="text-muted-foreground mb-4">
                Deployed a customized EHR solution that increased physician productivity by 25% and improved patient
                satisfaction scores.
              </p>
              <Link
                href="/case-studies/healthcare-multi-specialty-clinic"
                className="text-[#0055b3] font-medium flex items-center"
              >
                Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#0f172a] text-white p-8 rounded-lg">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to transform your healthcare operations?</h2>
            <p className="mb-6">
              Contact us today to schedule a demo of our EHR solutions and see how we can help improve patient care and
              operational efficiency.
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
