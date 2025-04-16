import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft } from "lucide-react"

export default function DataAnalyticsPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-4">
            <Link
              href="/services"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Data Analytics</h1>
                <p className="text-muted-foreground md:text-xl">
                  Turn your data into actionable insights for better decision-making.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button size="lg">Request a Consultation</Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    Download Brochure
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                <Image src="/images/data-analytics-team.jpeg" alt="Data Analytics Team" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Data Analytics Services</h2>
              <p className="mb-6">
                Unlock the power of your data with our advanced analytics services. We help you collect, process, and
                analyze data to extract valuable insights that drive informed business decisions and create competitive
                advantages.
              </p>
              <p className="mb-6">
                Our team of data scientists and analysts use cutting-edge tools and methodologies to transform raw data
                into meaningful insights that help you understand your business, customers, and market trends.
              </p>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Business Intelligence</h3>
                  <p className="text-muted-foreground">
                    Interactive dashboards and reports that provide real-time insights into your business performance.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Predictive Analytics</h3>
                  <p className="text-muted-foreground">
                    Advanced algorithms that forecast trends and help you anticipate future outcomes.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Big Data Processing</h3>
                  <p className="text-muted-foreground">
                    Scalable solutions for processing and analyzing large volumes of data.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Data Visualization</h3>
                  <p className="text-muted-foreground">
                    Clear, intuitive visualizations that make complex data easy to understand and act upon.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Benefits</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Comprehensive data strategy</span>
                    <p className="text-muted-foreground">
                      Develop a holistic approach to collecting, storing, and utilizing your data assets.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Custom dashboards and reporting</span>
                    <p className="text-muted-foreground">
                      Tailored visualizations that focus on your specific KPIs and business objectives.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Predictive analytics capabilities</span>
                    <p className="text-muted-foreground">
                      Leverage machine learning to forecast trends and anticipate market changes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Data-driven decision making</span>
                    <p className="text-muted-foreground">
                      Replace guesswork with insights based on solid data analysis.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Our Analytics Process</h2>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold">Data Assessment</h3>
              <p className="text-muted-foreground">
                We evaluate your data sources, quality, and current analytics capabilities.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold">Strategy Development</h3>
              <p className="text-muted-foreground">
                We create a comprehensive data strategy aligned with your business objectives.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold">Implementation</h3>
              <p className="text-muted-foreground">
                We build and deploy your analytics solution, including data pipelines, storage, and visualization tools.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold">Training & Adoption</h3>
              <p className="text-muted-foreground">
                We train your team to effectively use the analytics tools and interpret the insights.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                5
              </div>
              <h3 className="text-xl font-bold">Continuous Improvement</h3>
              <p className="text-muted-foreground">
                We regularly refine your analytics solution to address evolving business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Case Studies</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border rounded-lg p-6 space-y-4">
              <h3 className="text-2xl font-bold">Retail Chain</h3>
              <p className="text-muted-foreground">
                Implemented a customer analytics solution that increased targeted marketing effectiveness by 60%.
              </p>
              <div>
                <h4 className="font-medium mb-2">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>60% improvement in marketing ROI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>25% increase in customer retention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>Personalized shopping experiences</span>
                  </li>
                </ul>
              </div>
              <Button variant="outline" asChild>
                <Link href="/case-studies/data-analytics-retail">Read Full Case Study</Link>
              </Button>
            </div>
            <div className="border rounded-lg p-6 space-y-4">
              <h3 className="text-2xl font-bold">Healthcare Provider</h3>
              <p className="text-muted-foreground">
                Developed a predictive analytics system that improved patient outcomes and reduced readmission rates.
              </p>
              <div>
                <h4 className="font-medium mb-2">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>30% reduction in readmission rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>Improved resource allocation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>Enhanced preventive care programs</span>
                  </li>
                </ul>
              </div>
              <Button variant="outline" asChild>
                <Link href="/case-studies/data-analytics-healthcare">Read Full Case Study</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0a1229] text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to unlock the power of your data?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed">
                Contact us today to discuss how our data analytics services can transform your business.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Schedule a Consultation
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
