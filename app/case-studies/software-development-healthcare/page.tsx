import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CaseStudyPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <Link
        href="/services/software-development"
        className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Software Development
      </Link>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Healthcare Provider Portal Case Study
          </h1>

          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-8">
            <Image
              src="/images/business-presentation.jpeg"
              alt="Healthcare Provider Portal"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
              <p className="text-muted-foreground">
                A leading regional healthcare provider with 12 facilities and over 2,000 medical professionals needed to
                modernize their patient management system to improve operational efficiency and patient care.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-muted-foreground mb-4">
                The client was struggling with an outdated patient management system that was causing:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Long patient wait times due to inefficient scheduling</li>
                <li>Data silos preventing effective collaboration between departments</li>
                <li>Limited reporting capabilities for management decision-making</li>
                <li>Compliance concerns with evolving healthcare regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted-foreground mb-4">
                We developed a custom patient management system that included:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Centralized patient records with secure access controls</li>
                <li>Intelligent scheduling system with automated reminders</li>
                <li>Real-time analytics dashboard for operational insights</li>
                <li>Integrated billing and insurance processing</li>
                <li>Mobile access for healthcare providers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Development Process</h2>
              <p className="text-muted-foreground mb-4">We followed our proven agile development methodology:</p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Conducted extensive stakeholder interviews to understand requirements</li>
                <li>Created detailed wireframes and prototypes for user feedback</li>
                <li>Developed the solution in two-week sprints with regular client reviews</li>
                <li>Performed comprehensive testing, including security and performance</li>
                <li>Implemented the system with minimal disruption to operations</li>
                <li>Provided training and ongoing support</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">35%</div>
                  <p>Increase in operational efficiency</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">40%</div>
                  <p>Reduction in patient wait times</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">98%</div>
                  <p>User satisfaction rate</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
              <blockquote className="border-l-4 border-[#00a3e0] pl-4 italic">
                "The patient management system developed by the team has transformed our operations. We've seen
                significant improvements in efficiency, patient satisfaction, and staff morale. The system is intuitive,
                reliable, and has become an essential part of our daily operations."
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
                <p>Healthcare</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Project Duration</h4>
                <p>8 months</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Technologies Used</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>PostgreSQL</li>
                  <li>Docker</li>
                  <li>AWS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Services Provided</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Custom Software Development</li>
                  <li>UX/UI Design</li>
                  <li>Database Architecture</li>
                  <li>Cloud Infrastructure</li>
                  <li>Training & Support</li>
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
