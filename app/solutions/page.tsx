import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Brain, Cloud, Shield, BarChart, Code, Server } from "lucide-react"

export default function SolutionsPage() {
  const solutions = [
    {
      icon: <Brain className="h-10 w-10 text-[#0f172a]" />,
      title: "Enterprise AI",
      description: "Transform your business with our comprehensive AI solutions that drive innovation and efficiency.",
      link: "/solutions/enterprise-ai",
      image: "/images/ai-robot-assistant.jpeg",
    },
    {
      icon: <Cloud className="h-10 w-10 text-[#0f172a]" />,
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and reliable cloud solutions tailored to your business needs.",
      link: "/solutions/cloud-infrastructure",
      image: "/images/tech-meeting.jpeg",
    },
    {
      icon: <Shield className="h-10 w-10 text-[#0f172a]" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with our advanced security solutions and services.",
      link: "/solutions/cybersecurity",
      image: "/images/digital-shield.png",
    },
    {
      icon: <BarChart className="h-10 w-10 text-[#0f172a]" />,
      title: "Data Analytics",
      description: "Turn your data into actionable insights with our powerful analytics solutions.",
      link: "/solutions/data-analytics",
      image: "/images/data-dashboard-overview.png",
    },
    {
      icon: <Code className="h-10 w-10 text-[#0f172a]" />,
      title: "Custom Software",
      description: "Tailored software solutions designed to address your unique business challenges.",
      link: "/solutions/custom-software",
      image: "/images/coding-workspace.png",
    },
    {
      icon: <Server className="h-10 w-10 text-[#0f172a]" />,
      title: "Hardware Solutions",
      description: "Enterprise-grade hardware products designed for performance and reliability.",
      link: "/solutions/hardware",
      image: "/images/circuit-board-closeup.jpeg",
    },
  ]

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Solutions</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive technology solutions designed to help your business innovate and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-muted">{solution.icon}</div>
                    <h2 className="text-2xl font-bold">{solution.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <Link href={solution.link}>
                    <Button className="w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Featured Solution: Enterprise AI</h2>
              <p className="text-muted-foreground">
                Transform your business with our enterprise-grade AI solutions. Harness the power of artificial
                intelligence to drive innovation, efficiency, and growth across your organization.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-[#0f172a]"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Intelligent automation of business processes</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-[#0f172a]"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Advanced predictive analytics and insights</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-[#0f172a]"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Enhanced decision-making capabilities</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/solutions/enterprise-ai">
                  <Button size="lg">Explore Enterprise AI</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/images/business-presentation-meeting.jpeg"
                alt="Enterprise AI Solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f172a] text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Need a custom solution?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed">
                Our team of experts can develop tailored solutions to address your specific business challenges.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary">
                Contact Our Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
