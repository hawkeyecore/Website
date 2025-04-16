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
            E-commerce Platform Case Study
          </h1>

          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-8">
            <Image src="/images/digital-workspace.jpeg" alt="E-commerce Platform" fill className="object-cover" />
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
              <p className="text-muted-foreground">
                A mid-sized retailer with both physical stores and an online presence needed to replace their outdated
                e-commerce platform to improve customer experience, increase sales, and streamline inventory management.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-muted-foreground mb-4">
                The client was facing several challenges with their existing e-commerce solution:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>High cart abandonment rate due to a complicated checkout process</li>
                <li>Limited mobile responsiveness affecting the shopping experience</li>
                <li>Manual inventory synchronization between online and physical stores</li>
                <li>Inability to scale during peak shopping seasons</li>
                <li>Limited analytics for marketing and sales decisions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted-foreground mb-4">
                We developed a custom e-commerce platform with the following features:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Streamlined, single-page checkout process with multiple payment options</li>
                <li>Fully responsive design optimized for all devices</li>
                <li>Real-time inventory management system integrated with POS systems</li>
                <li>Cloud-based architecture that automatically scales during high traffic</li>
                <li>Advanced analytics dashboard for customer behavior and sales trends</li>
                <li>Personalized product recommendations based on browsing history</li>
                <li>Integrated loyalty program to increase customer retention</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Development Process</h2>
              <p className="text-muted-foreground mb-4">We followed our proven agile development methodology:</p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Conducted user research and competitive analysis</li>
                <li>Created detailed wireframes and interactive prototypes</li>
                <li>Developed the platform using a microservices architecture</li>
                <li>Implemented continuous integration and deployment pipelines</li>
                <li>Performed extensive testing, including load testing for peak traffic</li>
                <li>Migrated existing customer and product data</li>
                <li>Provided staff training and post-launch support</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">150%</div>
                  <p>Increase in online sales</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">60%</div>
                  <p>Reduction in cart abandonment</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">45%</div>
                  <p>Increase in mobile conversions</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
              <blockquote className="border-l-4 border-[#00a3e0] pl-4 italic">
                "The new e-commerce platform has completely transformed our online business. The seamless shopping
                experience has significantly increased our conversion rates, and the integrated inventory system has
                eliminated the headaches of managing stock across multiple channels. The team's expertise and attention
                to detail were evident throughout the project."
                <footer className="mt-2 font-medium not-italic">— Michael Chen, Director of E-commerce</footer>
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
                <p>Retail</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Project Duration</h4>
                <p>6 months</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Technologies Used</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Next.js</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>Redis</li>
                  <li>AWS</li>
                  <li>Stripe API</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Services Provided</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Custom E-commerce Development</li>
                  <li>UX/UI Design</li>
                  <li>Payment Gateway Integration</li>
                  <li>Inventory Management System</li>
                  <li>Cloud Infrastructure</li>
                  <li>Analytics Implementation</li>
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
