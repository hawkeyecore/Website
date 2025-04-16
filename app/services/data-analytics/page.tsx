import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft } from "lucide-react"
import { CaseStudyDialog, type CaseStudyProps } from "@/components/case-study-dialog"

// Define case studies data
const caseStudies: CaseStudyProps[] = [
  {
    title: "Retail Chain Analytics",
    client: "Urban Retail Group",
    industry: "Retail",
    challenge:
      "Urban Retail Group was struggling to understand customer behavior across their 50+ stores. They had vast amounts of data but lacked the tools and expertise to extract meaningful insights, resulting in ineffective marketing campaigns and missed opportunities for personalization.",
    solution:
      "We implemented a comprehensive customer analytics platform that integrated data from in-store purchases, online interactions, loyalty programs, and social media. The solution included custom dashboards for different departments and predictive models for customer segmentation and behavior analysis.",
    results: [
      "60% improvement in marketing ROI within 6 months",
      "25% increase in customer retention rates",
      "Created personalized shopping experiences based on customer preferences",
      "Identified $2.3M in additional revenue opportunities",
      "Reduced inventory costs by 15% through improved demand forecasting",
    ],
    testimonial: {
      quote:
        "The insights we've gained from our data have transformed how we approach our customers. We're now able to anticipate their needs and preferences in ways that weren't possible before.",
      author: "Amanda Rodriguez",
      position: "Chief Marketing Officer, Urban Retail Group",
    },
    imageUrl: "/images/retail-analytics-dashboard.jpeg",
  },
  {
    title: "Healthcare Provider Analytics",
    client: "Midwest Health Network",
    industry: "Healthcare",
    challenge:
      "Midwest Health Network was facing increasing readmission rates and struggling to identify at-risk patients. Their existing data systems were siloed, making it difficult to get a comprehensive view of patient care journeys and identify patterns that could improve outcomes.",
    solution:
      "We developed a predictive analytics system that integrated data from electronic health records, billing systems, and patient feedback. The solution included risk scoring algorithms for readmission prediction, resource optimization tools, and clinical decision support dashboards.",
    results: [
      "30% reduction in readmission rates within the first year",
      "Improved resource allocation across 8 facilities",
      "Enhanced preventive care programs based on population health insights",
      "Reduced average length of stay by 1.2 days",
      "Identified $3.5M in potential cost savings",
    ],
    testimonial: {
      quote:
        "The predictive analytics platform has revolutionized how we deliver care. We're now able to identify at-risk patients earlier and intervene before conditions worsen, leading to better outcomes and more efficient use of resources.",
      author: "Dr. James Wilson",
      position: "Chief Medical Officer, Midwest Health Network",
    },
    imageUrl: "/images/healthcare-analytics-platform.jpeg",
  },
]

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
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="border rounded-lg p-6 space-y-4">
                <h3 className="text-2xl font-bold">{caseStudy.title}</h3>
                <p className="text-muted-foreground">{caseStudy.challenge.substring(0, 150)}...</p>
                <div>
                  <h4 className="font-medium mb-2">Results:</h4>
                  <ul className="space-y-2">
                    {caseStudy.results.slice(0, 3).map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <CaseStudyDialog caseStudy={caseStudy} />
              </div>
            ))}
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
