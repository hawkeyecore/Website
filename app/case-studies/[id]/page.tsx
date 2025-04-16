"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"

// This would normally come from a database
const caseStudies = [
  {
    id: "healthcare-1",
    title: "Regional Hospital Network",
    client: "MedCare Health Systems",
    industry: "Healthcare",
    description:
      "Implemented a comprehensive EHR system that improved patient care coordination and reduced administrative costs by 30%.",
    fullDescription:
      "MedCare Health Systems, a network of 12 hospitals and 30+ clinics across the region, was struggling with fragmented patient records and inefficient administrative processes. Patients often had to provide the same information repeatedly as they moved between different facilities, and doctors lacked a complete view of patient history.\n\nWe implemented our comprehensive Electronic Health Records (EHR) system across their entire network, integrating data from all facilities into a unified system. The solution included custom workflows for different departments, secure patient portals, and advanced analytics dashboards for administrators.",
    image: "/images/healthcare-systems-dashboard.jpeg",
    fallbackImage: "/placeholder.svg?height=400&width=600&query=healthcare%20hospital%20technology",
    results: [
      "30% reduction in administrative costs",
      "25% improvement in care coordination",
      "98% provider satisfaction rate",
      "Reduced patient wait times by 15%",
      "Eliminated duplicate testing by 40%",
    ],
    testimonial: {
      quote:
        "The EHR system has transformed how we deliver care across our network. Our physicians now have a complete view of patient history regardless of which facility they visited previously, and our patients appreciate not having to repeat information at every visit.",
      author: "Dr. Jennifer Martinez",
      position: "Chief Medical Officer, MedCare Health Systems",
    },
    challenges: [
      "Fragmented patient records across multiple facilities",
      "Inefficient administrative processes",
      "Inconsistent care coordination between providers",
      "Difficulty meeting regulatory compliance requirements",
    ],
    solution: [
      "Implemented unified EHR system across all facilities",
      "Created secure patient portal for self-service access",
      "Developed custom workflows for different departments",
      "Integrated with existing billing and scheduling systems",
      "Provided comprehensive training for all staff",
    ],
  },
  // Additional case studies would be defined here
]

export default function CaseStudyDetailPage({ params }: { params: { id: string } }) {
  // For demonstration, we'll just use the first case study if not found
  const caseStudy = caseStudies.find((study) => study.id === params.id) || caseStudies[0]
  const [imageError, setImageError] = useState(false)

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-4">
            <Link
              href="/case-studies"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Case Studies
            </Link>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-[#0055b3]/10 text-[#0055b3] rounded-full">
                  {caseStudy.industry}
                </span>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{caseStudy.title}</h1>
                <p className="text-muted-foreground md:text-xl">{caseStudy.description}</p>
              </div>
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg bg-muted">
                <Image
                  src={imageError ? caseStudy.fallbackImage : caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                  priority
                  onError={() => setImageError(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Client</h2>
                <p>{caseStudy.client}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Challenge</h2>
                <div className="prose max-w-none">
                  {caseStudy.fullDescription.split("\n\n").map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Solution</h2>
                <ul className="space-y-2">
                  {caseStudy.solution?.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Results</h2>
                <ul className="space-y-2">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5 shrink-0" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {caseStudy.testimonial && (
                <div className="bg-muted p-6 rounded-lg italic">
                  <p className="mb-4 text-lg">"{caseStudy.testimonial.quote}"</p>
                  <p className="text-sm font-medium">
                    — {caseStudy.testimonial.author}, {caseStudy.testimonial.position}
                  </p>
                </div>
              )}
            </div>

            <div>
              <div className="sticky top-24 space-y-8">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Key Challenges</h3>
                  <ul className="space-y-2">
                    {caseStudy.challenges?.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5 shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Industry</h3>
                  <Link
                    href={`/industries/${caseStudy.industry.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center text-[#0055b3] hover:underline"
                  >
                    <span>{caseStudy.industry}</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-8">
                  <Link href="/contact">
                    <Button className="w-full">Get Similar Results</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f172a] text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to achieve similar results?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed">
                Contact our team to discuss how we can help your organization overcome similar challenges.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href={`/industries/${caseStudy.industry.toLowerCase().replace(/\s+/g, "-")}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Explore {caseStudy.industry} Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
