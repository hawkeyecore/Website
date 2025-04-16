"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Default fallback image path
const defaultFallbackImage = "/business-analysis-meeting.png"

// Sample case studies data
const caseStudies = [
  {
    id: "healthcare-analytics",
    title: "Healthcare Analytics Platform",
    description:
      "Developed a comprehensive analytics platform for a major healthcare provider, resulting in a 35% improvement in patient care efficiency.",
    image: "/images/healthcare-analytics-platform.jpeg",
    fallbackImage: "/connected-care-future.png",
    industry: "Healthcare",
    client: "Regional Medical Center",
  },
  {
    id: "financial-security",
    title: "Financial Security System",
    description:
      "Implemented an advanced security system for a financial institution, protecting over $500M in assets and customer data.",
    image: "/images/financial-security-system.jpeg",
    fallbackImage: "/interconnected-banking-tech.png",
    industry: "Finance",
    client: "National Banking Corporation",
  },
  {
    id: "manufacturing-cloud",
    title: "Manufacturing Cloud Solution",
    description:
      "Migrated a manufacturing company to a cloud-based system, reducing operational costs by 28% and increasing production efficiency.",
    image: "/images/manufacturing-cloud-system.jpeg",
    fallbackImage: "/modern-energy-infrastructure.png",
    industry: "Manufacturing",
    client: "Global Manufacturing Inc.",
  },
  {
    id: "government-portal",
    title: "Government Service Portal",
    description:
      "Created a citizen-facing portal for government services, serving over 2 million users with a 98% satisfaction rate.",
    image: "/images/government-service-portal.png",
    fallbackImage: "/digital-tax-portal.png",
    industry: "Government",
    client: "State Government Agency",
  },
  {
    id: "retail-analytics",
    title: "Retail Analytics Dashboard",
    description:
      "Designed a real-time analytics dashboard for a retail chain, increasing sales by 22% through data-driven decision making.",
    image: "/images/retail-analytics-dashboard.jpeg",
    fallbackImage: "/tech-powered-property.png",
    industry: "Retail",
    client: "Nationwide Retail Group",
  },
]

export default function CaseStudiesPage() {
  const [imageErrors, setImageErrors] = useState<boolean[]>(Array(caseStudies.length).fill(false))

  const handleImageError = (index: number) => {
    const newErrors = [...imageErrors]
    newErrors[index] = true
    setImageErrors(newErrors)
  }

  return (
    <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Case Studies</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore how we've helped businesses across various industries achieve their technology goals and drive
            success.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
            <Card key={caseStudy.id} className="overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={
                    imageErrors[index]
                      ? caseStudy.fallbackImage || defaultFallbackImage
                      : caseStudy.image || defaultFallbackImage
                  }
                  alt={caseStudy.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  onError={() => handleImageError(index)}
                  priority={index < 3}
                />
              </div>
              <CardHeader>
                <div className="space-y-1">
                  <CardTitle>{caseStudy.title}</CardTitle>
                  <CardDescription>
                    <span className="font-medium">{caseStudy.industry}</span> | {caseStudy.client}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">{caseStudy.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full">
                  <Link href={`/case-studies/${caseStudy.id}`}>
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Ready to achieve similar results?</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Contact us today to discuss how we can help your business succeed with our technology solutions.
          </p>
          <div className="mt-4 flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
