import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft } from "lucide-react"

export default function CloudSolutionsPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cloud Solutions</h1>
                <p className="text-muted-foreground md:text-xl">
                  Scalable cloud infrastructure and migration services.
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
                <Image src="/images/modern-workspace.jpeg" alt="Cloud Solutions" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Cloud Solutions</h2>
              <p className="mb-6">
                Transform your business with our comprehensive cloud solutions. We help you migrate to the cloud,
                optimize your infrastructure, and implement cloud-native applications that scale with your business
                while reducing operational costs.
              </p>
              <p className="mb-6">
                Our cloud experts work with leading platforms including AWS, Microsoft Azure, and Google Cloud to
                deliver tailored solutions that meet your specific business requirements.
              </p>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Cloud Migration</h3>
                  <p className="text-muted-foreground">
                    Seamless migration of your existing infrastructure and applications to the cloud.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Cloud-Native Development</h3>
                  <p className="text-muted-foreground">
                    Building applications specifically designed to leverage cloud capabilities.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Multi-Cloud Management</h3>
                  <p className="text-muted-foreground">
                    Unified management of resources across multiple cloud providers.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Cloud Security</h3>
                  <p className="text-muted-foreground">
                    Comprehensive security solutions to protect your cloud infrastructure and data.
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
                    <span className="text-lg font-medium">Reduced infrastructure costs</span>
                    <p className="text-muted-foreground">
                      Eliminate capital expenses and reduce operational costs with pay-as-you-go pricing models.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Improved scalability and flexibility</span>
                    <p className="text-muted-foreground">
                      Scale resources up or down based on demand, ensuring optimal performance at all times.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Enhanced security and compliance</span>
                    <p className="text-muted-foreground">
                      Leverage advanced security features and compliance certifications offered by cloud providers.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">24/7 monitoring and support</span>
                    <p className="text-muted-foreground">
                      Continuous monitoring and expert support ensure your cloud environment runs smoothly.
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
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Our Cloud Migration Process</h2>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold">Assessment</h3>
              <p className="text-muted-foreground">
                We evaluate your current infrastructure and applications to determine the best migration strategy.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold">Planning</h3>
              <p className="text-muted-foreground">
                We develop a detailed migration plan, including timelines, resource requirements, and risk mitigation.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold">Migration</h3>
              <p className="text-muted-foreground">
                We execute the migration with minimal disruption to your business operations.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold">Optimization</h3>
              <p className="text-muted-foreground">
                We optimize your cloud infrastructure for performance, cost, and security.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                5
              </div>
              <h3 className="text-xl font-bold">Ongoing Management</h3>
              <p className="text-muted-foreground">
                We provide continuous monitoring, maintenance, and optimization of your cloud environment.
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
              <h3 className="text-2xl font-bold">Financial Services Firm</h3>
              <p className="text-muted-foreground">
                Migrated critical applications to the cloud, resulting in 40% cost savings and improved performance.
              </p>
              <div>
                <h4 className="font-medium mb-2">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>40% reduction in infrastructure costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>99.99% uptime</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>Enhanced disaster recovery capabilities</span>
                  </li>
                </ul>
              </div>
              <Button variant="outline">Read Full Case Study</Button>
            </div>
            <div className="border rounded-lg p-6 space-y-4">
              <h3 className="text-2xl font-bold">Manufacturing Company</h3>
              <p className="text-muted-foreground">
                Implemented a hybrid cloud solution that improved scalability while maintaining compliance requirements.
              </p>
              <div>
                <h4 className="font-medium mb-2">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>Reduced deployment time by 70%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>Improved resource utilization by 45%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>Seamless scaling during peak periods</span>
                  </li>
                </ul>
              </div>
              <Button variant="outline">Read Full Case Study</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0a1229] text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to move to the cloud?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed">
                Contact us today to discuss how our cloud solutions can transform your business.
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
