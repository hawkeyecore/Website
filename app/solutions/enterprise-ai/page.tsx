import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight, Brain, Cpu, BarChart, Shield } from "lucide-react"

export default function EnterpriseAIPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Enterprise AI Solutions</h1>
              <p className="text-muted-foreground md:text-xl">
                Transform your business with our enterprise-grade artificial intelligence solutions. Harness the power
                of AI to drive innovation, efficiency, and growth across your organization.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">Schedule a Demo</Button>
                <Button size="lg" variant="outline">
                  Explore Solutions
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
              <Image src="/images/ai-robot-assistant.jpeg" alt="AI Robot Assistant" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our AI Solutions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive AI solutions designed to address your most complex business challenges.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Brain className="h-10 w-10 text-[#0f172a]" />,
                title: "Intelligent Automation",
                description:
                  "Automate complex business processes with AI-powered workflows that learn and improve over time.",
              },
              {
                icon: <Cpu className="h-10 w-10 text-[#0f172a]" />,
                title: "Machine Learning",
                description:
                  "Leverage advanced machine learning models to extract insights and make predictions from your data.",
              },
              {
                icon: <BarChart className="h-10 w-10 text-[#0f172a]" />,
                title: "Predictive Analytics",
                description:
                  "Anticipate trends, identify opportunities, and mitigate risks with AI-powered predictive models.",
              },
              {
                icon: <Shield className="h-10 w-10 text-[#0f172a]" />,
                title: "AI Security",
                description:
                  "Protect your organization with AI-enhanced security solutions that detect and respond to threats.",
              },
            ].map((solution, index) => (
              <Card key={index} className="flex flex-col">
                <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                  <div className="p-3 rounded-full bg-muted">{solution.icon}</div>
                  <h3 className="text-xl font-bold">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                  <Link href="#" className="flex items-center text-sm font-medium text-[#0f172a] mt-auto">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
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
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/images/business-presentation-meeting.jpeg"
                alt="Business team discussing AI implementation"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">AI Implementation Process</h2>
              <p className="text-muted-foreground">
                Our structured approach ensures successful AI implementation that delivers measurable business value.
              </p>
              <div className="space-y-4 mt-6">
                {[
                  {
                    step: "1",
                    title: "Discovery & Assessment",
                    description:
                      "We work with you to understand your business challenges and identify opportunities for AI implementation.",
                  },
                  {
                    step: "2",
                    title: "Solution Design",
                    description:
                      "Our experts design a tailored AI solution that addresses your specific needs and integrates with your existing systems.",
                  },
                  {
                    step: "3",
                    title: "Development & Training",
                    description:
                      "We develop and train AI models using your data, ensuring accuracy and relevance to your business context.",
                  },
                  {
                    step: "4",
                    title: "Deployment & Integration",
                    description:
                      "We deploy the solution and integrate it with your existing systems, ensuring seamless operation.",
                  },
                  {
                    step: "5",
                    title: "Monitoring & Optimization",
                    description:
                      "We continuously monitor performance and optimize the solution to ensure it delivers maximum value.",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f172a] text-white text-sm font-bold shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-bold">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Industry-Specific AI Solutions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                AI solutions tailored to the unique challenges and opportunities in your industry.
              </p>
            </div>
          </div>

          <Tabs defaultValue="healthcare" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList>
                <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
                <TabsTrigger value="finance">Finance</TabsTrigger>
                <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
                <TabsTrigger value="retail">Retail</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="healthcare" className="mt-0">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Healthcare AI Solutions</h3>
                  <p className="text-muted-foreground">
                    Our AI solutions help healthcare providers improve patient outcomes, optimize operations, and
                    enhance the quality of care.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#0f172a]" />
                      <span>Predictive diagnostics and early disease detection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#0f172a]" />
                      <span>Patient flow optimization and resource allocation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#0f172a]" />
                      <span>Medical image analysis and interpretation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#0f172a]" />
                      <span>Personalized treatment recommendations</span>
                    </li>
                  </ul>
                  <Button>Learn More</Button>
                </div>
                <div className="relative h-[300px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/business-meeting.jpeg"
                    alt="Healthcare professionals discussing AI solutions"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="finance" className="mt-0">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Finance AI Solutions</h3>
                  <p className="text-muted-foreground">
                    Our AI solutions help financial institutions enhance risk management, improve customer experiences,
                    and optimize operations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#0f172a]" />
                      <span>Fraud detection and prevention</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#0f172a]" />
                      <span>Algorithmic trading and investment recommendations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#0f172a]" />
                      <span>Credit risk assessment and loan approval</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#0f172a]" />
                      <span>Customer segmentation and personalized services</span>
                    </li>
                  </ul>
                  <Button>Learn More</Button>
                </div>
                <div className="relative h-[300px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/business-presentation.jpeg"
                    alt="Financial professionals analyzing AI-driven insights"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="manufacturing" className="mt-0">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Manufacturing AI Solutions</h3>
                  <p className="text-muted-foreground">
                    Our AI solutions help manufacturers optimize production, improve quality control, and reduce
                    downtime.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#0f172a]" />
                      <span>Predictive maintenance and equipment optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#0f172a]" />
                      <span>Quality control and defect detection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#0f172a]" />
                      <span>Supply chain optimization and demand forecasting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#0f172a]" />
                      <span>Energy consumption optimization</span>
                    </li>
                  </ul>
                  <Button>Learn More</Button>
                </div>
                <div className="relative h-[300px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/team-collaboration.jpeg"
                    alt="Manufacturing team reviewing AI-driven production data"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="retail" className="mt-0">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Retail AI Solutions</h3>
                  <p className="text-muted-foreground">
                    Our AI solutions help retailers enhance customer experiences, optimize inventory, and increase
                    sales.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#0f172a]" />
                      <span>Personalized product recommendations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#0f172a]" />
                      <span>Demand forecasting and inventory optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#0f172a]" />
                      <span>Dynamic pricing and promotion optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#0f172a]" />
                      <span>Customer sentiment analysis and feedback processing</span>
                    </li>
                  </ul>
                  <Button>Learn More</Button>
                </div>
                <div className="relative h-[300px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/data-analytics-team.jpeg"
                    alt="Retail analytics team reviewing AI-driven customer insights"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f172a] text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to harness the power of AI?</h2>
              <p className="md:text-xl">
                Contact our team to discuss how our enterprise AI solutions can transform your business.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary">
                  Schedule a Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/images/circuit-board-closeup.jpeg"
                alt="Advanced AI hardware circuit board"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
