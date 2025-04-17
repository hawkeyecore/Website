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
            Midstream Pipeline Operator Predictive Maintenance
          </h1>

          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-8">
            <Image
              src="/images/modern-server-rack.jpeg"
              alt="Pipeline Predictive Maintenance"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
              <p className="text-muted-foreground">
                A midstream pipeline operator managing over 5,000 miles of pipeline infrastructure needed a predictive
                maintenance solution to prevent failures, reduce downtime, and ensure operational safety.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-muted-foreground mb-4">The client faced several significant challenges:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Costly unplanned downtime due to equipment failures</li>
                <li>Safety and environmental risks from potential pipeline leaks</li>
                <li>Inefficient maintenance scheduling based on fixed intervals</li>
                <li>Limited visibility into equipment condition in remote locations</li>
                <li>Difficulty prioritizing maintenance activities across vast infrastructure</li>
                <li>Regulatory pressure to improve pipeline safety and integrity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted-foreground mb-4">
                We developed a comprehensive predictive maintenance solution with the following features:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>IoT sensors deployed at critical points along the pipeline network</li>
                <li>Advanced analytics to detect early warning signs of potential failures</li>
                <li>Machine learning algorithms to predict equipment failures before they occur</li>
                <li>Real-time monitoring dashboard for operational visibility</li>
                <li>Automated maintenance work order generation and prioritization</li>
                <li>Mobile applications for field technicians with offline capabilities</li>
                <li>Integration with existing SCADA and asset management systems</li>
                <li>Comprehensive reporting for regulatory compliance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Implementation Process</h2>
              <p className="text-muted-foreground mb-4">Our implementation followed these key phases:</p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Comprehensive assessment of pipeline infrastructure and failure modes</li>
                <li>Development of predictive models based on historical data</li>
                <li>Strategic deployment of IoT sensors at high-risk locations</li>
                <li>Implementation of the analytics platform and integration with existing systems</li>
                <li>Pilot deployment on a critical pipeline segment</li>
                <li>Validation and refinement of predictive models</li>
                <li>Full-scale deployment across the entire pipeline network</li>
                <li>Ongoing model optimization and system enhancement</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">85%</div>
                  <p>Accuracy in predicting failures</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">$4.5M</div>
                  <p>Saved in prevented downtime</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">20%</div>
                  <p>Extended equipment lifecycle</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
              <blockquote className="border-l-4 border-[#00a3e0] pl-4 italic">
                "The predictive maintenance solution has transformed our operations. We're now able to identify and
                address potential issues before they cause failures, significantly reducing our downtime and maintenance
                costs. The system has also enhanced our safety performance and regulatory compliance, which is
                invaluable in our industry."
                <footer className="mt-2 font-medium not-italic">— James Wilson, Director of Operations</footer>
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
                <p>Oil & Gas</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Project Duration</h4>
                <p>15 months</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Technologies Used</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Industrial IoT Sensors</li>
                  <li>Machine Learning</li>
                  <li>Big Data Analytics</li>
                  <li>Edge Computing</li>
                  <li>Mobile Applications</li>
                  <li>SCADA Integration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Services Provided</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Predictive Maintenance Strategy</li>
                  <li>IoT Sensor Deployment</li>
                  <li>Analytics Platform Development</li>
                  <li>System Integration</li>
                  <li>Model Development and Training</li>
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
