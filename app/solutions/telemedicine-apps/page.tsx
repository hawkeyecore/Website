import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function TelemedicineAppsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Telemedicine Applications
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Our telemedicine applications enable healthcare providers to deliver remote care, expanding access to
            medical services and improving patient outcomes through innovative digital solutions.
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
          <Image src="/images/tech-meeting.jpeg" alt="Telemedicine Applications" fill className="object-cover" />
        </div>
      </div>

      <div className="mt-16 space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Virtual Consultations</h3>
              <p className="text-muted-foreground mb-4">
                Enable secure, high-quality video consultations between patients and healthcare providers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>HD video and audio quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Adaptive streaming for varying bandwidth</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Screen sharing for educational content</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Remote Monitoring</h3>
              <p className="text-muted-foreground mb-4">
                Track patient health metrics remotely through integrated devices and wearables.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Integration with medical IoT devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Real-time alerts for critical readings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Trend analysis and reporting</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Virtual Reality Integration</h3>
              <p className="text-muted-foreground mb-4">
                Leverage VR technology for immersive patient education and therapeutic applications.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>3D anatomical models for education</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>VR-based therapy for pain management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5" />
                  <span>Immersive rehabilitation exercises</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Benefits of Telemedicine</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-muted p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-[#0055b3] mb-2">40%</div>
              <p className="font-medium">Reduction in no-show rates</p>
            </div>
            <div className="bg-muted p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-[#0055b3] mb-2">60%</div>
              <p className="font-medium">Increase in patient access</p>
            </div>
            <div className="bg-muted p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-[#0055b3] mb-2">35%</div>
              <p className="font-medium">Reduction in care costs</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Success Stories</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">National Telemedicine Provider</h3>
              <p className="text-muted-foreground mb-4">
                Developed a custom telemedicine platform that enabled the client to scale their services nationwide,
                resulting in a 200% increase in patient consultations.
              </p>
              <Link
                href="/case-studies/healthcare-national-telemedicine-provider"
                className="text-[#0055b3] font-medium flex items-center"
              >
                Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Rural Healthcare Network</h3>
              <p className="text-muted-foreground mb-4">
                Implemented a telemedicine solution that brought specialist care to underserved rural communities,
                reducing patient travel time by 75%.
              </p>
              <Link
                href="/case-studies/healthcare-rural-network"
                className="text-[#0055b3] font-medium flex items-center"
              >
                Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#0f172a] text-white p-8 rounded-lg">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to expand your healthcare reach?</h2>
            <p className="mb-6">
              Contact us today to learn how our telemedicine applications can help you deliver care to more patients,
              more efficiently.
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
