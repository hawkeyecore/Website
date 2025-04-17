import Image from "next/image"
import Link from "next/link"
import { ArrowDownToLine, ArrowRight, Calendar, Clock, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DataAnalyticsRetailCaseStudy() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="mb-8">
            <Badge className="mb-4">Retail</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              National Retail Chain Transforms Customer Experience with Advanced Analytics
            </h1>
            <p className="text-xl text-muted-foreground">
              How a leading retail chain leveraged data analytics to increase sales by 28% and improve customer
              retention
            </p>
          </div>

          <div className="relative w-full h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/data-analytics-team.jpeg"
              alt="Data analytics team working on retail solutions"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2>Client Overview</h2>
            <p>
              Our client, a national retail chain with over 500 stores across the United States, was struggling to
              compete with e-commerce giants and needed to transform their customer experience both online and in-store.
              With declining foot traffic and stagnating online sales, they needed a data-driven approach to understand
              customer behavior and preferences.
            </p>

            <h2>The Challenge</h2>
            <p>The retailer faced several significant challenges that were impacting their business performance:</p>
            <ul>
              <li>
                <strong>Siloed Data:</strong> Customer data was fragmented across multiple systems (POS, e-commerce,
                loyalty program, inventory) with no unified view
              </li>
              <li>
                <strong>Limited Customer Insights:</strong> Inability to understand customer shopping patterns and
                preferences across channels
              </li>
              <li>
                <strong>Inefficient Inventory Management:</strong> Frequent stockouts of popular items and overstocking
                of slow-moving products
              </li>
              <li>
                <strong>Personalization Gaps:</strong> Generic marketing campaigns with low conversion rates
              </li>
              <li>
                <strong>Reactive Decision Making:</strong> Business decisions based on historical reports rather than
                predictive insights
              </li>
            </ul>

            <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
              <Image
                src="/data-dashboard-overview.png"
                alt="Retail analytics dashboard"
                fill
                className="object-cover"
              />
            </div>

            <h2>Our Solution</h2>
            <p>
              We developed a comprehensive data analytics solution that transformed how the retailer understood and
              engaged with their customers:
            </p>

            <h3>1. Unified Data Platform</h3>
            <p>
              We implemented a cloud-based data lake architecture on AWS that integrated data from all customer
              touchpoints, including in-store POS systems, e-commerce platform, mobile app, loyalty program, inventory
              management, and social media interactions.
            </p>

            <h3>2. Advanced Analytics Capabilities</h3>
            <p>We deployed a suite of analytics tools and models that enabled:</p>
            <ul>
              <li>Customer segmentation based on purchasing behavior, preferences, and lifetime value</li>
              <li>Predictive models for product recommendations and next-best-action</li>
              <li>Demand forecasting for optimized inventory management</li>
              <li>Sentiment analysis from customer reviews and social media</li>
              <li>Store performance analytics with geospatial visualization</li>
            </ul>

            <h3>3. Real-time Personalization Engine</h3>
            <p>We developed a real-time personalization engine that delivered tailored experiences across channels:</p>
            <ul>
              <li>Personalized product recommendations on the website and mobile app</li>
              <li>Targeted email campaigns based on customer segments and behaviors</li>
              <li>Custom in-app notifications for nearby store promotions</li>
              <li>Personalized loyalty rewards based on individual preferences</li>
            </ul>

            <h3>4. Interactive Business Intelligence Dashboards</h3>
            <p>
              We created role-specific dashboards for executives, store managers, and marketing teams that provided
              actionable insights through intuitive visualizations and self-service analytics capabilities.
            </p>

            <h2>Implementation Process</h2>
            <p>The project was executed in phases over a 10-month period:</p>
            <ol>
              <li>
                <strong>Discovery & Strategy (1 month):</strong> Comprehensive assessment of existing data
                infrastructure, business requirements gathering, and solution architecture design
              </li>
              <li>
                <strong>Data Foundation (3 months):</strong> Implementation of the cloud data platform, data integration
                pipelines, and data governance framework
              </li>
              <li>
                <strong>Analytics Development (4 months):</strong> Development and deployment of analytics models,
                personalization engine, and business intelligence dashboards
              </li>
              <li>
                <strong>Rollout & Adoption (2 months):</strong> Phased rollout across the organization, user training,
                and continuous optimization
              </li>
            </ol>

            <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
              <Image
                src="/interconnected-data-flow.png"
                alt="Data flow diagram showing retail analytics implementation"
                fill
                className="object-cover"
              />
            </div>

            <h2>Results</h2>
            <p>The implementation of our data analytics solution delivered significant business impact:</p>
            <ul>
              <li>
                <strong>28% increase in overall sales</strong> within 12 months of full implementation
              </li>
              <li>
                <strong>32% improvement in customer retention</strong> through personalized engagement
              </li>
              <li>
                <strong>42% increase in average order value</strong> from personalized product recommendations
              </li>
              <li>
                <strong>24% reduction in inventory costs</strong> through improved demand forecasting
              </li>
              <li>
                <strong>3.5x ROI</strong> on marketing campaigns through targeted customer segmentation
              </li>
              <li>
                <strong>18% increase in loyalty program participation</strong> and engagement
              </li>
            </ul>

            <h2>Client Testimonial</h2>
            <blockquote>
              "The data analytics solution has completely transformed how we understand and serve our customers. We now
              have a 360-degree view of customer behavior and can deliver truly personalized experiences that drive
              loyalty and sales. The predictive capabilities have been game-changing for our inventory management and
              marketing effectiveness. This has been one of our most successful technology investments to date."
              <footer>— Chief Digital Officer, National Retail Chain</footer>
            </blockquote>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Related Case Studies</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-2">Global Oil Producer</h4>
                  <p className="text-muted-foreground mb-4">
                    Implemented an integrated asset management system that reduced equipment downtime by 45%.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/case-studies/global-oil-producer">
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-2">Regional Hospital Network</h4>
                  <p className="text-muted-foreground mb-4">
                    Implemented a comprehensive EHR system that improved patient care coordination.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/case-studies/regional-hospital-network">
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div>
          <div className="sticky top-24">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Globe className="mr-3 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Industry</p>
                      <p className="text-muted-foreground">Retail</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="mr-3 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Company Size</p>
                      <p className="text-muted-foreground">Enterprise (500+ stores)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="mr-3 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Project Duration</p>
                      <p className="text-muted-foreground">10 months</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="mr-3 h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Services Provided</p>
                      <ul className="text-muted-foreground list-disc list-inside">
                        <li>Data Analytics</li>
                        <li>Cloud Infrastructure</li>
                        <li>Business Intelligence</li>
                        <li>Machine Learning</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Technologies Used</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">AWS</Badge>
                      <Badge variant="outline">Snowflake</Badge>
                      <Badge variant="outline">Tableau</Badge>
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">TensorFlow</Badge>
                      <Badge variant="outline">Apache Kafka</Badge>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6" asChild>
                  <a href="#" download>
                    <ArrowDownToLine className="mr-2 h-4 w-4" />
                    Download Case Study PDF
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
