import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, Factory, Cloud, BarChart3, Clock, CheckCircle } from "lucide-react"

export default function CloudSolutionsManufacturingCaseStudy() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link href="/case-studies" className="flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Case Studies
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Global Manufacturing Company's Cloud Transformation</h1>

          <div className="relative w-full h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/modern-server-rack.jpeg"
              alt="Manufacturing cloud infrastructure"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">Client Overview</h2>
            <p>
              A global manufacturing company with operations in 15 countries and over 12,000 employees was struggling
              with outdated on-premises infrastructure that couldn't keep pace with their expanding operations and
              increasing data needs.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Challenge</h2>
            <p>The client faced multiple challenges with their legacy IT infrastructure:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Aging on-premises data centers requiring significant capital investment</li>
              <li>Inconsistent systems across global locations causing integration issues</li>
              <li>Limited scalability during peak production periods</li>
              <li>Increasing downtime affecting manufacturing operations</li>
              <li>Difficulty implementing modern IoT and analytics solutions</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Our Solution</h2>
            <p>
              We designed and implemented a comprehensive cloud migration strategy that transformed the client's IT
              infrastructure:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                Hybrid cloud architecture utilizing AWS for core applications and Microsoft Azure for specialized
                manufacturing systems
              </li>
              <li>Implementation of containerized microservices for critical production applications</li>
              <li>Cloud-based IoT platform to collect and analyze data from manufacturing equipment</li>
              <li>Global content delivery network to ensure consistent application performance across all locations</li>
              <li>Automated scaling to handle variable workloads during production cycles</li>
            </ul>

            <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Cloud className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Hybrid Cloud Architecture</h3>
                <p>Optimized workload placement across AWS and Azure based on performance and cost requirements.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Factory className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Manufacturing IoT Platform</h3>
                <p>Connected 2,500+ machines to cloud analytics for real-time monitoring and predictive maintenance.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Implementation Process</h2>
            <p>The cloud transformation was executed in phases over 14 months:</p>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>Assessment and planning (2 months)</li>
              <li>Pilot migration of non-critical systems (3 months)</li>
              <li>Core manufacturing systems migration (5 months)</li>
              <li>IoT platform implementation (2 months)</li>
              <li>Global rollout and optimization (2 months)</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Infrastructure Cost Reduction</p>
                      <p className="text-3xl font-bold">32%</p>
                    </div>
                    <BarChart3 className="h-10 w-10 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">System Downtime Reduction</p>
                      <p className="text-3xl font-bold">94%</p>
                    </div>
                    <Clock className="h-10 w-10 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Deployment Speed Improvement</p>
                      <p className="text-3xl font-bold">5x</p>
                    </div>
                    <CheckCircle className="h-10 w-10 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Production Efficiency Increase</p>
                      <p className="text-3xl font-bold">18%</p>
                    </div>
                    <Factory className="h-10 w-10 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Client Testimonial</h2>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6">
              "The cloud transformation has revolutionized our manufacturing operations. We've not only reduced costs
              but gained the agility to respond to market changes faster than ever before. The IoT capabilities have
              given us unprecedented visibility into our production processes, allowing us to optimize in ways we never
              thought possible."
              <footer className="text-gray-600 mt-2 not-italic">— CIO, Global Manufacturing Company</footer>
            </blockquote>
          </div>

          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold mb-4">Related Case Studies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link href="/case-studies/cloud-solutions-financial" className="block group">
                <div className="border rounded-lg overflow-hidden transition-all group-hover:shadow-md">
                  <div className="aspect-video relative">
                    <Image
                      src="/images/business-meeting.jpeg"
                      alt="Financial services cloud case study"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold group-hover:text-blue-600">Financial Institution's Cloud Migration</h4>
                    <p className="text-sm text-gray-600 mt-1">Cloud Solutions</p>
                  </div>
                </div>
              </Link>
              <Link href="/case-studies/it-consulting-manufacturing" className="block group">
                <div className="border rounded-lg overflow-hidden transition-all group-hover:shadow-md">
                  <div className="aspect-video relative">
                    <Image
                      src="/images/tech-meeting.jpeg"
                      alt="Manufacturing IT consulting case study"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold group-hover:text-blue-600">Manufacturing Process Optimization</h4>
                    <p className="text-sm text-gray-600 mt-1">IT Consulting</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
            <h3 className="text-xl font-bold mb-4">Project Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Industry</p>
                <p className="font-medium">Manufacturing</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Company Size</p>
                <p className="font-medium">Enterprise (12,000+ employees)</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Project Duration</p>
                <p className="font-medium">14 months</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Services Provided</p>
                <ul className="list-disc pl-5 mt-1">
                  <li>Cloud Architecture Design</li>
                  <li>Migration Services</li>
                  <li>IoT Implementation</li>
                  <li>DevOps Transformation</li>
                  <li>Managed Cloud Services</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-gray-500">Technologies Used</p>
                <ul className="list-disc pl-5 mt-1">
                  <li>AWS & Azure</li>
                  <li>Kubernetes</li>
                  <li>Docker</li>
                  <li>Terraform</li>
                  <li>IoT Hub</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <Button className="w-full flex items-center justify-center gap-2">
                <Download className="h-4 w-4" />
                Download Case Study PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}