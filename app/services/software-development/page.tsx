import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft } from "lucide-react"

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-4">
            <Link
              href="/services"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Software Development</h1>
                <p className="text-muted-foreground md:text-xl">
                  Custom software solutions tailored to your business needs.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button size="lg">Request a Consultation</Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    Download Brochure
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/images/diverse-team-planning.jpeg"
                  alt="Software Development Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Software Development Services</h2>
              <p className="mb-6">
                Our expert development team creates custom software solutions that address your unique business
                challenges. From web and mobile applications to enterprise systems, we deliver high-quality, scalable
                software that drives efficiency and growth.
              </p>
              <p className="mb-6">
                We follow a collaborative approach to software development, working closely with you at every stage to
                ensure the final product meets your specific requirements and exceeds your expectations.
              </p>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Custom Web Applications</h3>
                  <p className="text-muted-foreground">
                    Responsive, scalable web applications built with modern frameworks and technologies.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Mobile App Development</h3>
                  <p className="text-muted-foreground">
                    Native and cross-platform mobile applications for iOS and Android devices.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Enterprise Software</h3>
                  <p className="text-muted-foreground">
                    Robust, secure enterprise solutions that streamline operations and boost productivity.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">API Development & Integration</h3>
                  <p className="text-muted-foreground">
                    Custom APIs and seamless integration with third-party services and platforms.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Benefits</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Tailored solutions for your specific needs</span>
                    <p className="text-muted-foreground">
                      We develop software specifically designed to address your unique business challenges.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Agile development methodology</span>
                    <p className="text-muted-foreground">
                      Our iterative approach ensures flexibility, transparency, and continuous improvement.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Ongoing support and maintenance</span>
                    <p className="text-muted-foreground">
                      We provide continuous support to ensure your software remains up-to-date and performs optimally.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Seamless integration with existing systems</span>
                    <p className="text-muted-foreground">
                      Our solutions integrate smoothly with your current technology stack and business processes.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Our Development Process</h2>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold">Discovery & Planning</h3>
              <p className="text-muted-foreground">
                We work closely with you to understand your business needs and define project requirements.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold">Design & Architecture</h3>
              <p className="text-muted-foreground">
                Our team designs the user experience and technical architecture for your solution.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold">Development</h3>
              <p className="text-muted-foreground">
                We build your solution using agile methodologies, with regular updates and feedback cycles.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold">Testing & QA</h3>
              <p className="text-muted-foreground">
                Rigorous testing ensures your software is reliable, secure, and performs optimally.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                5
              </div>
              <h3 className="text-xl font-bold">Deployment & Support</h3>
              <p className="text-muted-foreground">
                We deploy your solution and provide ongoing maintenance and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Case Studies</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border rounded-lg p-6 space-y-4">
              <h3 className="text-2xl font-bold">Healthcare Provider Portal</h3>
              <p className="text-muted-foreground">
                Developed a custom patient management system that improved operational efficiency by 35%.
              </p>
              <div>
                <h4 className="font-medium mb-2">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>35% increase in operational efficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>Reduced patient wait times by 40%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>98% user satisfaction rate</span>
                  </li>
                </ul>
              </div>
              <Button variant="outline" asChild>
                <Link href="/case-studies/software-development-healthcare">Read Full Case Study</Link>
              </Button>
            </div>
            <div className="border rounded-lg p-6 space-y-4">
              <h3 className="text-2xl font-bold">E-commerce Platform</h3>
              <p className="text-muted-foreground">
                Built a scalable e-commerce solution that helped our client increase online sales by 150%.
              </p>
              <div>
                <h4 className="font-medium mb-2">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>150% increase in online sales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>60% reduction in cart abandonment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>Seamless integration with inventory systems</span>
                  </li>
                </ul>
              </div>
              <Button variant="outline" asChild>
                <Link href="/case-studies/software-development-ecommerce">Read Full Case Study</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0a1229] text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to get started?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed">
                Contact us today to discuss how our software development services can help you achieve your business
                goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Schedule a Consultation
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
