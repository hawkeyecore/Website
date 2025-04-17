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
            International Financial Services Fraud Detection
          </h1>

          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-8">
            <Image
              src="/images/business-workshop.jpeg"
              alt="Financial Services Fraud Detection"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
              <p className="text-muted-foreground">
                An international financial services firm with operations in 15 countries needed an advanced fraud
                detection system to protect their customers and reduce financial losses from fraudulent transactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-muted-foreground mb-4">The client faced several significant challenges:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Increasing sophistication of financial fraud techniques</li>
                <li>High rate of false positives disrupting legitimate customer transactions</li>
                <li>Slow manual review process for flagged transactions</li>
                <li>Difficulty detecting new fraud patterns quickly</li>
                <li>Inconsistent fraud detection across different countries and systems</li>
                <li>Regulatory pressure to improve fraud prevention measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted-foreground mb-4">
                We developed a custom fraud detection system with the following features:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Machine learning algorithms that adapt to new fraud patterns</li>
                <li>Real-time transaction scoring and risk assessment</li>
                <li>Behavioral analytics to detect unusual customer activity</li>
                <li>Network analysis to identify connected fraudulent accounts</li>
                <li>Automated case management for fraud investigation</li>
                <li>Multi-factor authentication integration for high-risk transactions</li>
                <li>Comprehensive reporting and analytics dashboard</li>
                <li>Cross-border fraud detection capabilities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Implementation Process</h2>
              <p className="text-muted-foreground mb-4">Our implementation followed these key phases:</p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Analysis of historical fraud data and patterns</li>
                <li>Development of custom machine learning models</li>
                <li>Integration with existing transaction processing systems</li>
                <li>Implementation of real-time monitoring capabilities</li>
                <li>Pilot deployment with parallel running</li>
                <li>Model refinement based on initial results</li>
                <li>Global rollout with regional customizations</li>
                <li>Continuous model training and optimization</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">85%</div>
                  <p>Reduction in fraudulent transactions</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">60%</div>
                  <p>Decrease in false positives</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">$12M</div>
                  <p>Annual fraud losses prevented</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
              <blockquote className="border-l-4 border-[#00a3e0] pl-4 italic">
                "The fraud detection system has exceeded our expectations. Not only have we significantly reduced our
                fraud losses, but we've also improved the customer experience by reducing false positives. The system's
                ability to adapt to new fraud patterns has been particularly valuable in our rapidly evolving threat
                landscape."
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
                <p>Finance & Banking</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Project Duration</h4>
                <p>11 months</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Technologies Used</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Machine Learning</li>
                  <li>Big Data Analytics</li>
                  <li>Real-time Processing</li>
                  <li>Behavioral Analytics</li>
                  <li>Network Analysis</li>
                  <li>Cloud Computing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Services Provided</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Fraud Detection Strategy</li>
                  <li>Custom Algorithm Development</li>
                  <li>System Integration</li>
                  <li>Model Training</li>
                  <li>Global Implementation</li>
                  <li>Ongoing Optimization</li>
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
