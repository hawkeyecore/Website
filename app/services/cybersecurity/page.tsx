import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { CaseStudyDialog } from "@/components/case-study-dialog"

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
      results:
        "- 98% reduction in security incidents within the first six months\n- Successful compliance with all banking security regulations\n- 100% of staff completed security awareness training\n- Zero data breaches since implementation\n- Reduced incident response time from hours to minutes\n- Achieved highest security rating in their annual audit",
      testimonial: {
        quote:
          "The security transformation has been remarkable. We now have confidence in our ability to protect our customers' data and respond effectively to emerging threats. The team's expertise in financial security compliance was invaluable.",
        author: "Sarah Johnson, Chief Information Security Officer",
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
      results:
        "- Successfully blocked over 1,500 attempted attacks in the first year\n- Achieved 100% HIPAA compliance across all systems\n- Reduced security-related downtime by 95%\n- Implemented secure telehealth services for 200+ providers\n- Decreased insurance premiums due to improved security posture\n- Zero patient data compromised since implementation",
      testimonial: {
        quote:
          "After the ransomware incident, we knew we needed experts who understand both cybersecurity and healthcare operations. The solution not only secured our systems but actually improved clinical workflow efficiency. Our staff and patients now have peace of mind knowing their data is protected.",
        author: "Dr. Michael Chen, Chief Medical Information Officer",
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
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cybersecurity</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive protection for your digital assets and sensitive data
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Protect Your Business from Evolving Threats</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                In today's digital landscape, cybersecurity isn't optional—it's essential. Our comprehensive security
                solutions protect your business from sophisticated threats while ensuring compliance with industry
                regulations.
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  Our team of certified security experts uses advanced tools and methodologies to identify
                  vulnerabilities, implement robust protections, and respond rapidly to emerging threats. We provide
                  end-to-end security that adapts to your business needs and the evolving threat landscape.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/digital-shield.png"
                alt="Cybersecurity Protection"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Cybersecurity Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive security solutions tailored to your business needs
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Card className="flex flex-col h-full">
              <CardContent className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Security Assessments</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Comprehensive evaluation of your security posture to identify vulnerabilities and compliance gaps.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Vulnerability scanning and penetration testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Security architecture review</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Compliance gap analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full">
              <CardContent className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z" />
                    <path d="M4 11h16" />
                    <path d="M12 3v18" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Managed Security Services</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  24/7 monitoring and management of your security infrastructure to detect and respond to threats.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Security Operations Center (SOC)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Threat detection and response</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Security incident management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full">
              <CardContent className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
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
                    className="h-6 w-6 text-primary"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Data Protection</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Comprehensive solutions to protect sensitive data throughout its lifecycle.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Data encryption and classification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Data loss prevention (DLP)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Backup and disaster recovery</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full">
              <CardContent className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="M8 11h8" />
                    <path d="M12 15V7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Incident Response</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Rapid response to security incidents to minimize damage and restore operations.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Incident response planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Breach investigation and containment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Recovery and remediation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full">
              <CardContent className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Security Training</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Comprehensive security awareness training for employees at all levels.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Phishing awareness training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Security best practices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Compliance training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="flex flex-col h-full">
              <CardContent className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
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
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Identity & Access Management</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Secure and efficient management of user identities and access rights.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Multi-factor authentication</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Privileged access management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Single sign-on solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Case Studies</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how we've helped organizations strengthen their security posture
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="flex flex-col h-full overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                </div>
                <CardContent className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Client:</strong> {study.client} | <strong>Industry:</strong> {study.industry}
                  </p>
                  <p className="text-muted-foreground mb-4">{study.shortDescription}</p>
                  <div className="mt-auto">
                    <CaseStudyDialog caseStudy={study} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f172a] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to secure your business?</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Contact us today for a free security assessment and discover how our cybersecurity solutions can protect
                your business.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" variant="default">
                    Contact Us
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/digital-fortress.png"
                alt="Cybersecurity Protection"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
