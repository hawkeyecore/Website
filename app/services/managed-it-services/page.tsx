import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft } from "lucide-react"

export default function ManagedITServicesPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Managed IT Services</h1>
                <p className="text-muted-foreground md:text-xl">
                  Comprehensive IT support and management for your business.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button size="lg">Request a Consultation</Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                <Image src="/images/corporate-training.jpeg" alt="Managed IT Services" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Managed IT Services</h2>
              <p className="mb-6">
                Focus on your core business while we take care of your IT infrastructure. Our managed services include
                proactive monitoring, maintenance, and support to ensure your systems run smoothly and efficiently at
                all times.
              </p>
              <p className="mb-6">
                Our team of experienced IT professionals provides round-the-clock support, ensuring that your technology
                infrastructure is always operational, secure, and optimized for performance.
              </p>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Help Desk Support</h3>
                  <p className="text-muted-foreground">
                    24/7 technical support for your team, resolving issues quickly and efficiently.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Network Management</h3>
                  <p className="text-muted-foreground">
                    Comprehensive monitoring and management of your network infrastructure.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">System Administration</h3>
                  <p className="text-muted-foreground">
                    Proactive management of servers, workstations, and cloud resources.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Backup & Disaster Recovery</h3>
                  <p className="text-muted-foreground">
                    Robust backup solutions and disaster recovery planning to protect your data.
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
                    <span className="text-lg font-medium">Proactive monitoring and maintenance</span>
                    <p className="text-muted-foreground">
                      Identify and resolve issues before they impact your business operations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Rapid issue resolution</span>
                    <p className="text-muted-foreground">
                      Quick response times and efficient problem-solving to minimize downtime.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Predictable monthly costs</span>
                    <p className="text-muted-foreground">
                      Fixed monthly fees make budgeting easier and eliminate unexpected IT expenses.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Technology optimization</span>
                    <p className="text-muted-foreground">
                      Continuous improvement of your IT infrastructure to enhance performance and security.
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
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Our Service Process</h2>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold">Assessment</h3>
              <p className="text-muted-foreground">
                We evaluate your current IT infrastructure and identify areas for improvement.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold">Planning</h3>
              <p className="text-muted-foreground">
                We develop a tailored service plan that meets your specific business needs.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold">Implementation</h3>
              <p className="text-muted-foreground">
                We deploy monitoring tools and establish support processes for your environment.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold">Management</h3>
              <p className="text-muted-foreground">
                We provide ongoing monitoring, maintenance, and support for your IT systems.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                5
              </div>
              <h3 className="text-xl font-bold">Optimization</h3>
              <p className="text-muted-foreground">
                We continuously improve your IT environment to enhance performance and security.
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
              <h3 className="text-2xl font-bold">Retail Chain</h3>
              <p className="text-muted-foreground">
                Implemented comprehensive managed IT services that improved uptime and reduced IT costs.
              </p>
              <div>
                <h4 className="font-medium mb-2">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>99.9% system uptime achieved</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>35% reduction in IT support costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>70% faster issue resolution time</span>
                  </li>
                </ul>
              </div>
              <Button variant="outline" asChild>
                <Link href="/case-studies/managed-it-retail">Read Full Case Study</Link>
              </Button>
            </div>
            <div className="border rounded-lg p-6 space-y-4">
              <h3 className="text-2xl font-bold">Law Firm</h3>
              <p className="text-muted-foreground">
                Provided managed IT services that ensured data security and compliance with industry regulations.
              </p>
              <div>
                <h4 className="font-medium mb-2">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>100% compliance with legal data regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>Zero security breaches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>Improved attorney productivity</span>
                  </li>
                </ul>
              </div>
              <Button variant="outline" asChild>
                <Link href="/case-studies/managed-it-legal">Read Full Case Study</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0a1229] text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to optimize your IT operations?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed">
                Contact us today to discuss how our managed IT services can support your business growth.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
