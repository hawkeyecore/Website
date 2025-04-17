import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Regional Hospital Network",
      industry: "Healthcare",
      description:
        "Implemented a comprehensive EHR system that improved patient care coordination and reduced administrative costs by 30%.",
      image: "/images/business-meeting.jpeg",
      link: "/case-studies/regional-hospital-network",
    },
    {
      title: "National Telemedicine Provider",
      industry: "Healthcare",
      description:
        "Developed a custom telemedicine platform that enabled the client to scale their services nationwide, resulting in a 200% increase in patient consultations.",
      image: "/images/tech-presentation.jpeg",
      link: "/case-studies/national-telemedicine-provider",
    },
    {
      title: "Global Oil Producer",
      industry: "Oil & Gas",
      description:
        "Implemented an integrated asset management system that reduced equipment downtime by 45% and maintenance costs by 30%.",
      image: "/images/corporate-training.jpeg",
      link: "/case-studies/global-oil-producer",
    },
    {
      title: "Midstream Pipeline Operator",
      industry: "Oil & Gas",
      description:
        "Developed a custom predictive maintenance solution that prevented critical failures and saved the client millions in potential repair costs and lost revenue.",
      image: "/images/modern-server-rack.jpeg",
      link: "/case-studies/midstream-pipeline-operator",
    },
    {
      title: "Regional Bank",
      industry: "Finance & Banking",
      description:
        "Implemented a modern core banking system that improved customer satisfaction by 40% and reduced transaction processing time by 60%.",
      image: "/images/business-presentation.jpeg",
      link: "/case-studies/regional-bank",
    },
    {
      title: "International Financial Services Firm",
      industry: "Finance & Banking",
      description:
        "Developed a custom fraud detection system that reduced fraudulent transactions by 85% and saved the client millions in potential losses.",
      image: "/images/business-workshop.jpeg",
      link: "/case-studies/international-financial-services",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Case Studies</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Explore how we've helped organizations across various industries overcome challenges and achieve their goals
        through innovative technology solutions.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {caseStudies.map((study, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-full min-h-[200px]">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm font-medium text-[#0055b3] mb-2">{study.industry}</div>
                <h2 className="text-xl font-bold mb-2">{study.title}</h2>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                <Button variant="outline" asChild>
                  <Link href={study.link}>Read Full Case Study</Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
