import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft } from "lucide-react"
import { CaseStudyCard } from "@/components/case-study-dialog"

export default function CybersecurityPage() {
  const caseStudies = [
    {
      id: 1,
      title: "Financial Institution Security Overhaul",
      client: "Regional Banking Group",
      industry: "Financial Services",
      challenge:
        "A regional banking group with over 50 branches was experiencing increasing security threats, including several attempted breaches. Their legacy security infrastructure was outdated and unable to detect sophisticated modern attacks. They needed a comprehensive security overhaul to protect sensitive customer financial data and comply with stringent industry regulations.",
      solution:
        "We implemented a multi-layered security approach including:\n\n- Comprehensive security assessment and vulnerability testing\n- Advanced threat detection and prevention systems\n- 24/7 Security Operations Center (SOC) monitoring\n- Employee security awareness training program\n- Implementation of Zero Trust Architecture\n- Data encryption and secure access management\n- Regular penetration testing and security audits",
      results: [
        "98% reduction in security incidents within the first six months",
        "Successful compliance with all banking security regulations",
        "100% of staff completed security awareness training",
        "Zero data breaches since implementation",
        "Reduced incident response time from hours to minutes",
        "Achieved highest security rating in their annual audit",
      ],
      testimonial: {
        quote:
          "The security transformation has been remarkable. We now have confidence in our ability to protect our customers' data and respond effectively to emerging threats. The team's expertise in financial security compliance was invaluable.",
        author: "Sarah Johnson",
        position: "Chief Information Security Officer",
      },
      image: "/images/financial-security-dashboard.jpeg",
      shortDescription:
        "Comprehensive security overhaul for a regional banking group with 50+ branches, resulting in 98% reduction in security incidents and full regulatory compliance.",
    },
    {
      id: 2,
      title: "Healthcare Provider Data Protection",
      client: "Metropolitan Medical Center",
      industry: "Healthcare",
      challenge:
        "A large metropolitan medical center was struggling with protecting patient data across their network of hospitals and clinics. They had experienced a ransomware attack that disrupted operations and raised concerns about HIPAA compliance. They needed a robust security solution that would protect sensitive patient information while maintaining operational efficiency.",
      solution:
        "We developed and implemented a comprehensive healthcare-focused security solution:\n\n- Medical device security assessment and remediation\n- HIPAA-compliant data protection framework\n- Advanced endpoint protection for all clinical workstations\n- Network segmentation to isolate critical systems\n- Secure telehealth infrastructure\n- Ransomware protection and recovery systems\n- Continuous security monitoring tailored for healthcare environments",
      results: [
        "Successfully blocked over 1,500 attempted attacks in the first year",
        "Achieved 100% HIPAA compliance across all systems",
        "Reduced security-related downtime by 95%",
        "Implemented secure telehealth services for 200+ providers",
        "Decreased insurance premiums due to improved security posture",
        "Zero patient data compromised since implementation",
      ],
      testimonial: {
        quote:
          "After the ransomware incident, we knew we needed experts who understand both cybersecurity and healthcare operations. The solution not only secured our systems but actually improved clinical workflow efficiency. Our staff and patients now have peace of mind knowing their data is protected.",
        author: "Dr. Michael Chen",
        position: "Chief Medical Information Officer",
      },
      image: "/images/healthcare-security-system.jpeg",
      shortDescription:
        "Implemented HIPAA-compliant security framework for a metropolitan medical center after a ransomware attack, resulting in zero data breaches and 95% reduction in security-related downtime.",
    },
  ]

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
                  Comprehensive protection for your digital assets and sensitive data
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
                <Image src="/digital-shield.png" alt="Cybersecurity Protection" fill className="object-cover" />
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
                In today's digital landscape, cybersecurity isn't optional—it's essential. Our comprehensive security
                solutions protect your business from sophisticated threats while ensuring compliance with industry
                regulations.
              </p>
              <p className="mb-6">
                Our team of certified security experts uses advanced tools and methodologies to identify
                vulnerabilities, implement robust protections, and respond rapidly to emerging threats. We provide
                end-to-end security that adapts to your business needs and the evolving threat landscape.
              </p>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Security Assessments</h3>
                  <p className="text-muted-foreground">
                    Comprehensive evaluation of your security posture to identify vulnerabilities and compliance gaps.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Managed Security Services</h3>
                  <p className="text-muted-foreground">
                    24/7 monitoring and management of your security infrastructure to detect and respond to threats.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Data Protection</h3>
                  <p className="text-muted-foreground">
                    Comprehensive solutions to protect sensitive data throughout its lifecycle.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Incident Response</h3>
                  <p className="text-muted-foreground">
                    Rapid response to security incidents to minimize damage and restore operations.
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
                    <span className="text-lg font-medium">Proactive threat protection</span>
                    <p className="text-muted-foreground">
                      Identify and mitigate security threats before they impact your business.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Regulatory compliance</span>
                    <p className="text-muted-foreground">
                      Meet industry-specific security requirements and avoid costly penalties.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Business continuity</span>
                    <p className="text-muted-foreground">
                      Minimize downtime and ensure rapid recovery in the event of a security incident.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#00a3e0] mt-0.5" />
                  <div>
                    <span className="text-lg font-medium">Customer trust</span>
                    <p className="text-muted-foreground">
                      Build and maintain customer confidence by protecting their sensitive information.
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
                We evaluate your current security posture and identify vulnerabilities and risks.
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
                We continuously monitor your environment for security threats and anomalies.
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
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} caseStudy={study} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0a1229] text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to secure your business?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed">
                Contact us today to discuss how our cybersecurity solutions can protect your business from evolving
                threats.
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
