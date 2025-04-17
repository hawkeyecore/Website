import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft } from "lucide-react"

export default function CybersecurityPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cybersecurity</h1>
                <p className="text-muted-foreground md:text-xl">
                  Protect your business with our comprehensive security solutions.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button size="lg">Request a Consultation</Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                <Image src="/images/team-celebration.jpeg" alt="Cybersecurity Team" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Cybersecurity Services</h2>
              <p className="mb-6">
                Safeguard your digital assets with our end-to-end cybersecurity services. We provide threat assessment,
                security implementation, and ongoing monitoring to protect your business from evolving cyber threats.
              </p>
              <p className="mb-6">
                Our security experts use industry-leading tools and methodologies to identify vulnerabilities, implement
                robust security measures, and ensure your systems and data remain protected.
              </p>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Security Assessments</h3>
                  <p className="text-muted-foreground">
                    Comprehensive evaluation of your security posture to identify vulnerabilities and risks.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Threat Detection & Response</h3>
                  <p className="text-muted-foreground">
                    24/7 monitoring and rapid response to security incidents and threats.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Compliance & Governance</h3>
                  <p className="text-muted-foreground">
                    Ensuring your security practices meet industry regulations and standards.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Security Training</h3>
                  <p className="text-muted-foreground">
                    Educating your team on security best practices and threat awareness.
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
                    <span className="text-lg font-medium">Comprehensive security assessments</span>
                    <p className="text-muted-foreground">
                      Identify vulnerabilities before they can be exploited by malicious actors.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Proactive threat detection</span>
                    <p className="text-muted-foreground">
                      Continuous monitoring and early detection of potential security threats.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Compliance with industry regulations</span>
                    <p className="text-muted-foreground">
                      Meet security requirements for GDPR, HIPAA, PCI DSS, and other regulatory frameworks.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Security awareness training</span>
                    <p className="text-muted-foreground">
                      Empower your employees to recognize and respond to security threats.
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
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Our Security Process</h2>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold">Assessment</h3>
              <p className="text-muted-foreground">
                We evaluate your current security posture and identify vulnerabilities.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold">Strategy</h3>
              <p className="text-muted-foreground">
                We develop a comprehensive security strategy tailored to your business needs.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold">Implementation</h3>
              <p className="text-muted-foreground">
                We deploy security solutions and controls to protect your systems and data.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold">Monitoring</h3>
              <p className="text-muted-foreground">
                We continuously monitor your environment for security threats and incidents.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1229] text-white text-xl font-bold">
                5
              </div>
              <h3 className="text-xl font-bold">Response</h3>
              <p className="text-muted-foreground">
                We respond rapidly to security incidents and continuously improve your security posture.
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
              <h3 className="text-2xl font-bold">Financial Institution</h3>
              <p className="text-muted-foreground">
                Implemented a comprehensive security solution that protected sensitive financial data and ensured
                regulatory compliance.
              </p>
              <div>
                <h4 className="font-medium mb-2">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>100% compliance with financial regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>90% reduction in security incidents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>Enhanced customer trust and confidence</span>
                  </li>
                </ul>
              </div>
              <Button variant="outline" asChild>
                <Link href="/case-studies/cybersecurity-financial">Read Full Case Study</Link>
              </Button>
            </div>
            <div className="border rounded-lg p-6 space-y-4">
              <h3 className="text-2xl font-bold">Healthcare Provider</h3>
              <p className="text-muted-foreground">
                Developed a security framework that protected patient data while ensuring HIPAA compliance.
              </p>
              <div>
                <h4 className="font-medium mb-2">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>Full HIPAA compliance achieved</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>Secure access to patient records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>Improved incident response time by 75%</span>
                  </li>
                </ul>
              </div>
              <Button variant="outline" asChild>
                <Link href="/case-studies/cybersecurity-healthcare">Read Full Case Study</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0a1229] text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to secure your business?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed">
                Contact us today to discuss how our cybersecurity services can protect your business from evolving
                threats.
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
