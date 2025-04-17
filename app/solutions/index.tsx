import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Healthcare Solutions",
      description: "Comprehensive technology solutions for modern healthcare providers.",
      image: "/images/business-meeting.jpeg",
      link: "/industries/healthcare",
    },
    {
      title: "Oil & Gas Solutions",
      description: "Specialized systems for the complex oil and gas industry.",
      image: "/images/corporate-training.jpeg",
      link: "/industries/oil-gas",
    },
    {
      title: "Finance & Banking Solutions",
      description: "Secure and efficient solutions for financial institutions.",
      image: "/images/business-presentation.jpeg",
      link: "/industries/finance",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Industry Solutions</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Our specialized industry solutions are designed to address the unique challenges and requirements of different
        sectors.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={solution.image || "/placeholder.svg"}
                alt={solution.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-2">{solution.title}</h2>
              <p className="text-muted-foreground mb-4">{solution.description}</p>
              <Button variant="outline" asChild>
                <Link href={solution.link} className="flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
