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
            Global Oil Producer Asset Management Case Study
          </h1>

          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-8">
            <Image
              src="/images/corporate-training.jpeg"
              alt="Global Oil Producer Asset Management"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
              <p className="text-muted-foreground">
                A global oil producer with operations in 12 countries needed an integrated asset management system to
                optimize equipment maintenance, reduce downtime, and improve operational safety across their facilities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-muted-foreground mb-4">The client faced several significant challenges:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>High equipment downtime affecting production targets</li>
                <li>Excessive maintenance costs due to reactive maintenance practices</li>
                <li>Safety incidents related to equipment failures</li>
                <li>Inconsistent maintenance practices across global operations</li>
                <li>Limited visibility into asset performance and health</li>
                <li>Difficulty tracking compliance with safety regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted-foreground mb-4">
                We implemented an integrated asset management system with the following features:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Real-time equipment monitoring with IoT sensors</li>
                <li>Predictive maintenance algorithms to forecast failures</li>
                <li>Mobile inspection and maintenance tools for field workers</li>
                <li>Centralized asset database with complete maintenance history</li>
                <li>Automated work order generation and tracking</li>
                <li>Safety compliance tracking and reporting</li>
                <li>Integration with existing ERP and operational systems</li>
                <li>Advanced analytics dashboard for asset performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Implementation Process</h2>
              <p className="text-muted-foreground mb-4">Our implementation followed these key phases:</p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Comprehensive asset inventory and condition assessment</li>
                <li>IoT sensor deployment on critical equipment</li>
                <li>System configuration and integration with existing platforms</li>
                <li>Development of predictive maintenance models</li>
                <li>Pilot implementation at one production facility</li>
                <li>Global rollout with regional customizations</li>
                <li>Staff training and change management</li>
                <li>Continuous optimization of predictive algorithms</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">45%</div>
                  <p>Reduction in equipment downtime</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">30%</div>
                  <p>Decrease in maintenance costs</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">60%</div>
                  <p>Improvement in safety compliance</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
              <blockquote className="border-l-4 border-[#00a3e0] pl-4 italic">
                "The asset management system has transformed our maintenance operations globally. We've seen significant
                improvements in equipment reliability, cost reduction, and most importantly, safety performance. The
                predictive capabilities have allowed us to prevent major failures before they occur, saving millions in
                potential losses."
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
                <p>Oil & Gas</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Project Duration</h4>
                <p>18 months</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Technologies Used</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Industrial IoT Sensors</li>
                  <li>Machine Learning</li>
                  <li>Cloud-based Asset Management</li>
                  <li>Mobile Field Applications</li>
                  <li>Data Analytics Platform</li>
                  <li>SCADA Integration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Services Provided</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Asset Management Strategy</li>
                  <li>IoT Implementation</li>
                  <li>Predictive Maintenance Design</li>
                  <li>Systems Integration</li>
                  <li>Global Deployment</li>
                  <li>Staff Training</li>
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
