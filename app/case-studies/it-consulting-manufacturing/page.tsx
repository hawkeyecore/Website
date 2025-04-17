import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CaseStudyPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <Link
        href="/services/it-consulting"
        className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to IT Consulting
      </Link>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Manufacturing Digital Transformation
          </h1>

          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-8">
            <Image
              src="/images/modern-workspace.jpeg"
              alt="Manufacturing Digital Transformation"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
              <p className="text-muted-foreground">
                A mid-sized manufacturing company with 500+ employees and three production facilities needed to
                modernize their operations through digital transformation to remain competitive in a rapidly evolving
                industry.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-muted-foreground mb-4">The client faced several operational challenges:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Legacy systems and manual processes causing production inefficiencies</li>
                <li>Limited visibility into production metrics and performance</li>
                <li>Disconnected systems requiring duplicate data entry</li>
                <li>Difficulty adapting to changing customer demands</li>
                <li>Increasing competition from more technologically advanced competitors</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted-foreground mb-4">
                We developed a comprehensive digital transformation strategy that included:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Implementation of an integrated Manufacturing Execution System (MES)</li>
                <li>IoT sensors and real-time production monitoring</li>
                <li>Predictive maintenance system to reduce downtime</li>
                <li>Digital quality control and traceability solution</li>
                <li>Mobile applications for shop floor workers</li>
                <li>Integration with existing ERP and supply chain systems</li>
                <li>Advanced analytics and executive dashboards</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Implementation Process</h2>
              <p className="text-muted-foreground mb-4">
                Our digital transformation project followed these key phases:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Comprehensive assessment of current operations and systems</li>
                <li>Development of a phased digital transformation roadmap</li>
                <li>Pilot implementation in one production line</li>
                <li>Validation and refinement of the solution</li>
                <li>Phased rollout across all facilities</li>
                <li>Integration of all systems and data sources</li>
                <li>Training and change management</li>
                <li>Continuous improvement and optimization</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">27%</div>
                  <p>Increase in production efficiency</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">35%</div>
                  <p>Reduction in unplanned downtime</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">22%</div>
                  <p>Decrease in operational costs</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
              <blockquote className="border-l-4 border-[#00a3e0] pl-4 italic">
                "The digital transformation initiative has revolutionized our manufacturing operations. We now have
                real-time visibility into our production processes, can predict and prevent equipment failures, and have
                significantly improved our efficiency. The consulting team's manufacturing expertise was evident
                throughout the project, and they ensured minimal disruption to our ongoing operations."
                <footer className="mt-2 font-medium not-italic">— Michael Chen, COO</footer>
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
                <p>Manufacturing</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Project Duration</h4>
                <p>14 months</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Technologies Used</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Manufacturing Execution System</li>
                  <li>Industrial IoT Platform</li>
                  <li>Predictive Maintenance AI</li>
                  <li>Digital Twin Technology</li>
                  <li>Mobile Worker Applications</li>
                  <li>Real-time Analytics Dashboard</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Services Provided</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Digital Transformation Strategy</li>
                  <li>Manufacturing Process Analysis</li>
                  <li>Technology Selection</li>
                  <li>Implementation Management</li>
                  <li>Systems Integration</li>
                  <li>Change Management</li>
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
