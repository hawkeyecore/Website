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
            National Telemedicine Provider Case Study
          </h1>

          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-8">
            <Image
              src="/images/tech-presentation.jpeg"
              alt="National Telemedicine Provider"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
              <p className="text-muted-foreground">
                A rapidly growing telemedicine provider needed a scalable, secure platform to connect patients with
                healthcare professionals nationwide, enabling virtual consultations and remote care delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-muted-foreground mb-4">The client faced several significant challenges:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Need for a highly scalable platform to support rapid growth</li>
                <li>High no-show rates for virtual appointments</li>
                <li>Limited access to care in rural and underserved areas</li>
                <li>Complex integration requirements with existing healthcare systems</li>
                <li>Strict security and compliance requirements for patient data</li>
                <li>Need for high-quality video streaming even with limited bandwidth</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted-foreground mb-4">
                We developed a custom telemedicine platform with the following features:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Cloud-based architecture designed for unlimited scalability</li>
                <li>Automated appointment reminders and easy rescheduling</li>
                <li>Adaptive video quality based on available bandwidth</li>
                <li>Secure messaging between patients and providers</li>
                <li>Integration with major EHR systems</li>
                <li>HIPAA-compliant data storage and transmission</li>
                <li>Mobile applications for iOS and Android</li>
                <li>Virtual waiting room with estimated wait times</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Implementation Process</h2>
              <p className="text-muted-foreground mb-4">Our implementation followed these key phases:</p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Requirements gathering and platform design</li>
                <li>Development of core video consultation functionality</li>
                <li>Integration with healthcare systems and payment processors</li>
                <li>Security implementation and compliance verification</li>
                <li>Beta testing with selected healthcare providers</li>
                <li>Phased rollout across specialties and regions</li>
                <li>Continuous optimization based on usage data</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">200%</div>
                  <p>Increase in patient consultations</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">40%</div>
                  <p>Reduction in no-show rates</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">35</div>
                  <p>New rural areas served</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
              <blockquote className="border-l-4 border-[#00a3e0] pl-4 italic">
                "The telemedicine platform has been transformative for our business and for patient care. We've been
                able to scale rapidly while maintaining high-quality care standards. The platform's reliability and ease
                of use have received praise from both our providers and patients."
                <footer className="mt-2 font-medium not-italic">— Emily Chen, CEO</footer>
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
                <p>7 months</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Technologies Used</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>WebRTC</li>
                  <li>React Native</li>
                  <li>Node.js</li>
                  <li>AWS</li>
                  <li>HIPAA-compliant Storage</li>
                  <li>HL7/FHIR Integration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Services Provided</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Custom Platform Development</li>
                  <li>Mobile App Development</li>
                  <li>Healthcare System Integration</li>
                  <li>Security Implementation</li>
                  <li>Scalable Infrastructure Design</li>
                  <li>Ongoing Support and Optimization</li>
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
