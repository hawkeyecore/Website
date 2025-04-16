import Image from "next/image"
import Link from "next/link"
import { CaseStudyDialog, type CaseStudyProps } from "@/components/case-study-dialog"

export default function CybersecurityPage() {
  // Define case studies
  const financialCaseStudy: CaseStudyProps = {
    title: "Financial Institution Security Overhaul",
    client: "National Credit Union",
    industry: "Financial Services",
    challenge:
      "A large credit union faced increasing cyber threats and needed to strengthen their security posture while maintaining compliance with strict financial regulations.",
    solution:
      "We implemented a comprehensive security program including advanced threat detection, endpoint protection, and a zero-trust network architecture. We also conducted regular security awareness training for all employees.",
    results: [
      "95% reduction in security incidents",
      "Successfully passed regulatory audits with zero findings",
      "Prevented a targeted ransomware attack that affected other financial institutions",
    ],
    testimonial: {
      quote:
        "The security transformation has given us peace of mind and protected our members' sensitive data. The investment has paid for itself many times over.",
      author: "Chief Information Security Officer",
      position: "National Credit Union",
    },
    imageUrl: "/images/financial-security-system.jpeg",
  }

  const healthcareCaseStudy: CaseStudyProps = {
    title: "Healthcare Provider Data Protection",
    client: "Regional Hospital Network",
    industry: "Healthcare",
    challenge:
      "A hospital network needed to secure patient data across multiple facilities while ensuring compliance with HIPAA regulations and maintaining operational efficiency.",
    solution:
      "We deployed a comprehensive security solution including network segmentation, data loss prevention, and advanced threat protection. We also implemented secure access controls for medical devices and electronic health records.",
    results: [
      "100% compliance with HIPAA security requirements",
      "80% reduction in unauthorized access attempts",
      "Streamlined security processes reduced authentication time by 40%",
    ],
    testimonial: {
      quote:
        "Their team understood the unique challenges of healthcare cybersecurity. They protected our patient data while actually improving our clinical workflows.",
      author: "IT Director",
      position: "Regional Hospital Network",
    },
    imageUrl: "/images/healthcare-security.jpeg",
  }

  const manufacturingCaseStudy: CaseStudyProps = {
    title: "Manufacturing Security Transformation",
    client: "Global Manufacturing Corp",
    industry: "Manufacturing",
    challenge:
      "A global manufacturer needed to secure their operational technology (OT) and IT environments while protecting intellectual property and preventing production disruptions.",
    solution:
      "We implemented an integrated IT/OT security framework with industrial-specific controls, network monitoring, and secure remote access solutions. We also developed custom security protocols for their proprietary manufacturing systems.",
    results: [
      "Zero security-related production downtime in 18 months",
      "Protected valuable IP from targeted espionage attempts",
      "Achieved compliance with new industry security standards",
    ],
    testimonial: {
      quote:
        "They understood both cybersecurity and manufacturing operations—a rare combination that delivered exceptional value to our business.",
      author: "VP of Operations",
      position: "Global Manufacturing Corp",
    },
    imageUrl: "/images/manufacturing-security.jpeg",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Cybersecurity Services</h1>
        <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
          Protect your business with our comprehensive cybersecurity solutions. We provide advanced threat detection,
          vulnerability management, and security consulting to keep your data and systems safe from evolving cyber
          threats.
        </p>
        <div className="relative mx-auto h-[300px] w-full max-w-4xl overflow-hidden rounded-xl md:h-[400px]">
          <Image src="/digital-shield.png" alt="Cybersecurity Protection" fill className="object-cover" priority />
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Cybersecurity Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 text-xl font-bold">Security Assessments</h3>
            <p className="text-gray-600">
              Comprehensive evaluation of your security posture to identify vulnerabilities and recommend improvements.
            </p>
          </div>
          <div className="rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 text-xl font-bold">Threat Detection & Response</h3>
            <p className="text-gray-600">
              24/7 monitoring and rapid response to security incidents to minimize damage and recovery time.
            </p>
          </div>
          <div className="rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 text-xl font-bold">Penetration Testing</h3>
            <p className="text-gray-600">
              Simulated cyber attacks to identify and fix security weaknesses before malicious actors can exploit them.
            </p>
          </div>
          <div className="rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 text-xl font-bold">Security Compliance</h3>
            <p className="text-gray-600">
              Ensure your organization meets industry regulations and standards like GDPR, HIPAA, PCI DSS, and more.
            </p>
          </div>
          <div className="rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 text-xl font-bold">Employee Security Training</h3>
            <p className="text-gray-600">
              Educate your team on security best practices and how to recognize and respond to potential threats.
            </p>
          </div>
          <div className="rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 text-xl font-bold">Incident Response Planning</h3>
            <p className="text-gray-600">
              Develop comprehensive plans to quickly and effectively respond to security breaches and minimize impact.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Why Choose Our Cybersecurity Services</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col items-start">
              <h3 className="mb-2 text-xl font-bold">Proactive Protection</h3>
              <p className="text-gray-600">
                We don't just react to threats—we anticipate them. Our proactive approach to cybersecurity helps prevent
                incidents before they occur.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="mb-2 text-xl font-bold">Expert Security Team</h3>
              <p className="text-gray-600">
                Our cybersecurity professionals hold industry-leading certifications and stay current with the latest
                threats and defense strategies.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="mb-2 text-xl font-bold">Customized Security Solutions</h3>
              <p className="text-gray-600">
                We tailor our security services to your specific business needs, industry requirements, and risk
                profile.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="mb-2 text-xl font-bold">Continuous Monitoring</h3>
              <p className="text-gray-600">
                Our 24/7 security operations center provides round-the-clock monitoring and immediate response to
                potential threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Case Studies</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-bold">{financialCaseStudy.title}</h3>
            <p className="mb-4 text-sm text-gray-500">
              {financialCaseStudy.client} | {financialCaseStudy.industry}
            </p>
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md">
              <Image
                src={financialCaseStudy.imageUrl || "/placeholder.svg?height=200&width=400&query=cybersecurity"}
                alt={financialCaseStudy.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="mb-4 line-clamp-3">{financialCaseStudy.challenge}</p>
            <CaseStudyDialog caseStudy={financialCaseStudy} />
          </div>

          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-bold">{healthcareCaseStudy.title}</h3>
            <p className="mb-4 text-sm text-gray-500">
              {healthcareCaseStudy.client} | {healthcareCaseStudy.industry}
            </p>
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md">
              <Image
                src={healthcareCaseStudy.imageUrl || "/placeholder.svg?height=200&width=400&query=healthcare security"}
                alt={healthcareCaseStudy.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="mb-4 line-clamp-3">{healthcareCaseStudy.challenge}</p>
            <CaseStudyDialog caseStudy={healthcareCaseStudy} />
          </div>

          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-bold">{manufacturingCaseStudy.title}</h3>
            <p className="mb-4 text-sm text-gray-500">
              {manufacturingCaseStudy.client} | {manufacturingCaseStudy.industry}
            </p>
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md">
              <Image
                src={
                  manufacturingCaseStudy.imageUrl ||
                  "/placeholder.svg?height=200&width=400&query=manufacturing security"
                }
                alt={manufacturingCaseStudy.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="mb-4 line-clamp-3">{manufacturingCaseStudy.challenge}</p>
            <CaseStudyDialog caseStudy={manufacturingCaseStudy} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-12 text-center text-white">
        <h2 className="mb-6 text-3xl font-bold">Ready to Secure Your Business?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg">
          Contact us today to schedule a security assessment and discover how our cybersecurity services can protect
          your organization.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-md bg-white px-6 py-3 text-lg font-medium text-blue-600 transition-colors hover:bg-gray-100"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  )
}
