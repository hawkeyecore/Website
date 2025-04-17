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
            Regional Hospital Network Case Study
          </h1>

          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg mb-8">
            <Image src="/images/business-meeting.jpeg" alt="Regional Hospital Network" fill className="object-cover" />
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
              <p className="text-muted-foreground">
                A regional hospital network with 8 facilities and over 1,200 healthcare professionals needed a
                comprehensive Electronic Health Records (EHR) system to improve patient care coordination and reduce
                administrative costs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-muted-foreground mb-4">
                The client was facing several challenges with their existing systems:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Fragmented patient records across different facilities</li>
                <li>Inefficient administrative processes leading to high operational costs</li>
                <li>Limited ability to coordinate care between specialists and departments</li>
                <li>Difficulty maintaining compliance with healthcare regulations</li>
                <li>Lack of data-driven insights for improving patient outcomes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted-foreground mb-4">
                We implemented a comprehensive EHR system with the following features:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Centralized patient records accessible across all facilities</li>
                <li>Automated administrative workflows to reduce paperwork</li>
                <li>Secure messaging system for healthcare provider collaboration</li>
                <li>Built-in compliance checks and reporting</li>
                <li>Advanced analytics dashboard for patient outcome tracking</li>
                <li>Mobile access for physicians and nurses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Implementation Process</h2>
              <p className="text-muted-foreground mb-4">Our implementation followed these key phases:</p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Comprehensive needs assessment across all facilities</li>
                <li>System design and customization for healthcare workflows</li>
                <li>Data migration from legacy systems</li>
                <li>Phased rollout starting with pilot departments</li>
                <li>Extensive staff training and support</li>
                <li>Post-implementation optimization and refinement</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">30%</div>
                  <p>Reduction in administrative costs</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">25%</div>
                  <p>Improvement in care coordination</p>
                </div>
                <div className="bg-muted rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#00a3e0] mb-2">98%</div>
                  <p>Provider satisfaction rate</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
              <blockquote className="border-l-4 border-[#00a3e0] pl-4 italic">
                "The EHR system has transformed how we deliver care across our network. We've seen significant
                improvements in patient outcomes, provider collaboration, and operational efficiency. The implementation
                was smooth, and the ongoing support has been exceptional."
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
                <p>Healthcare</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Project Duration</h4>
                <p>10 months</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Technologies Used</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Cloud-based EHR Platform</li>
                  <li>HIPAA-compliant Data Storage</li>
                  <li>HL7 Integration</li>
                  <li>Healthcare Analytics</li>
                  <li>Mobile Applications</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Services Provided</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>EHR Implementation</li>
                  <li>Data Migration</li>
                  <li>Workflow Optimization</li>
                  <li>Staff Training</li>
                  <li>Compliance Management</li>
                  <li>Ongoing Support</li>
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
