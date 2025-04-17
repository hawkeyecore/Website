import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, ArrowRight } from "lucide-react"

export default function DataAnalyticsHealthcareCaseStudy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Transforming Patient Care with Advanced Analytics</h1>
            <p className="text-xl text-muted-foreground">
              How a leading healthcare network leveraged data analytics to improve patient outcomes and operational
              efficiency
            </p>
          </div>

          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/data-dashboard-overview.png"
              alt="Healthcare analytics dashboard showing patient data and outcomes"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
            <p>
              A regional healthcare network with 12 hospitals, 60+ outpatient facilities, and over 2,000 physicians
              serving approximately 1.5 million patients annually. The organization was struggling with fragmented data
              systems, limited insights into patient care patterns, and inefficient resource allocation.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">The Challenge</h2>
            <p>
              The healthcare network faced several critical challenges that were impacting patient care and operational
              efficiency:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Fragmented Data Systems:</strong> Patient information was scattered across multiple EHR systems,
                departmental applications, and legacy databases, making it difficult to gain a comprehensive view of
                patient care.
              </li>
              <li>
                <strong>Limited Predictive Capabilities:</strong> The organization lacked tools to identify at-risk
                patients and predict readmission risks, leading to reactive rather than proactive care.
              </li>
              <li>
                <strong>Resource Allocation Inefficiencies:</strong> Without data-driven insights, staffing and resource
                allocation were often misaligned with actual patient needs and facility utilization.
              </li>
              <li>
                <strong>Regulatory Compliance Challenges:</strong> Meeting reporting requirements for value-based care
                initiatives was time-consuming and error-prone due to manual data collection processes.
              </li>
              <li>
                <strong>Limited Population Health Insights:</strong> The organization struggled to identify trends and
                patterns across their patient population to inform preventive care initiatives.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 mt-8">Our Solution</h2>
            <p>
              We developed a comprehensive healthcare analytics platform that integrated data from across the
              organization and provided actionable insights to clinical and administrative staff:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Unified Data Platform</h3>
                <p>
                  We implemented a HIPAA-compliant data lake on Azure that integrated clinical, operational, and
                  financial data from all sources, creating a single source of truth for analytics.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Predictive Analytics Models</h3>
                <p>
                  We developed machine learning models to predict patient readmission risks, identify potential
                  complications, and optimize treatment plans based on similar patient outcomes.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Clinical Decision Support</h3>
                <p>
                  We created real-time dashboards and alerts for clinicians that provided patient-specific
                  recommendations and highlighted potential issues requiring attention.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Operational Intelligence</h3>
                <p>
                  We implemented capacity planning tools and resource optimization algorithms to improve staffing
                  efficiency, reduce wait times, and optimize facility utilization.
                </p>
              </div>
            </div>

            <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
              <Image
                src="/images/interconnected-data-flow.png"
                alt="Visualization of healthcare data flow and analytics process"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">Implementation Process</h2>
            <p>We followed a phased approach over 12 months to minimize disruption to clinical operations:</p>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Discovery & Assessment (1 month):</strong> We conducted a comprehensive audit of existing data
                systems, workflows, and analytics capabilities to identify gaps and opportunities.
              </li>
              <li>
                <strong>Data Integration & Platform Development (4 months):</strong> We built the unified data platform,
                established data pipelines, and implemented governance protocols to ensure data quality and compliance.
              </li>
              <li>
                <strong>Analytics Model Development (3 months):</strong> We developed and trained predictive models
                using historical patient data, validated with clinicians to ensure accuracy and relevance.
              </li>
              <li>
                <strong>Dashboard & Tool Deployment (2 months):</strong> We created role-specific dashboards and tools
                for different stakeholders, from clinicians to executives.
              </li>
              <li>
                <strong>Training & Adoption (1 month):</strong> We conducted extensive training sessions and provided
                ongoing support to ensure effective utilization of the new analytics capabilities.
              </li>
              <li>
                <strong>Optimization & Refinement (1 month):</strong> We gathered feedback, refined models, and
                optimized the platform based on real-world usage patterns.
              </li>
            </ol>

            <h2 className="text-2xl font-bold mb-4 mt-8">Results</h2>
            <p>
              The implementation of our healthcare analytics solution delivered significant improvements across multiple
              dimensions:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="bg-primary/10 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary">23%</p>
                <p className="text-sm">Reduction in 30-day readmissions</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary">18%</p>
                <p className="text-sm">Decrease in average length of stay</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary">$4.2M</p>
                <p className="text-sm">Annual cost savings</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary">15%</p>
                <p className="text-sm">Improvement in patient satisfaction</p>
              </div>
            </div>

            <p>Additional outcomes included:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Improved clinical decision-making with 94% of physicians reporting better access to relevant patient
                information
              </li>
              <li>35% reduction in time spent on regulatory reporting and compliance documentation</li>
              <li>
                Identification of previously unrecognized population health trends, leading to targeted preventive care
                initiatives
              </li>
              <li>20% improvement in resource utilization across facilities</li>
              <li>Enhanced ability to measure and demonstrate quality outcomes for value-based care contracts</li>
            </ul>

            <div className="bg-muted p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold mb-2">Client Testimonial</h3>
              <blockquote className="italic">
                "The analytics platform has transformed how we deliver care. We're now able to identify at-risk patients
                earlier, allocate resources more effectively, and measure our outcomes with precision. This has not only
                improved our clinical results but also strengthened our financial performance in an increasingly
                competitive healthcare environment."
              </blockquote>
              <p className="font-semibold mt-2">— Dr. Sarah Johnson, Chief Medical Officer</p>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">Related Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Electronic Health Records Implementation</h3>
                  <p className="mb-4">How we helped a healthcare provider modernize their patient record system.</p>
                  <Link href="/case-studies/software-development-healthcare" className="flex items-center text-primary">
                    Read case study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Telemedicine Platform Development</h3>
                  <p className="mb-4">Creating a secure, scalable telemedicine solution for a national provider.</p>
                  <Link href="/case-studies/national-telemedicine-provider" className="flex items-center text-primary">
                    Read case study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center mt-12">
              <Button className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Case Study PDF
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Industry</p>
                    <p className="font-medium">Healthcare</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Organization Size</p>
                    <p className="font-medium">Regional Network (12 hospitals, 2,000+ physicians)</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Project Duration</p>
                    <p className="font-medium">12 months</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Services Provided</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Data Analytics</li>
                      <li>Machine Learning</li>
                      <li>Business Intelligence</li>
                      <li>Cloud Infrastructure</li>
                      <li>Systems Integration</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Technologies Used</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Microsoft Azure</li>
                      <li>Azure Data Lake</li>
                      <li>Power BI</li>
                      <li>Python (scikit-learn, TensorFlow)</li>
                      <li>SQL Server</li>
                      <li>FHIR API</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
