import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { CaseStudyDialog } from "@/components/case-study-dialog"

export default function ManagedITServicesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "Healthcare Network IT Infrastructure Overhaul",
      client: "Regional Healthcare Network",
      industry: "Healthcare",
      challenge:
        "A regional healthcare network with 12 facilities was struggling with aging IT infrastructure, frequent system outages, and rising maintenance costs. Their internal IT team was overwhelmed with reactive support tasks, leaving little time for strategic initiatives. Patient care was being impacted by system downtime, and compliance requirements were becoming increasingly difficult to meet.",
      solution:
        "We implemented a comprehensive managed IT services solution:\n\n- Complete assessment of existing infrastructure and support processes\n- Migration to a hybrid cloud environment for critical applications\n- Implementation of proactive monitoring and maintenance systems\n- 24/7 help desk support for all staff\n- Standardization of hardware and software across all facilities\n- Development of disaster recovery and business continuity plans\n- Regular security assessments and compliance reporting",
      results:
        "- Reduced system downtime by 99.8%\n- Decreased IT support ticket resolution time from 24 hours to 2 hours\n- Achieved 100% compliance with healthcare regulations\n- Reduced overall IT operational costs by 27%\n- Improved staff satisfaction with IT services by 85%\n- Freed up internal IT staff to focus on strategic initiatives\n- Implemented successful disaster recovery plan with 15-minute recovery time objective",
      testimonial: {
        quote:
          "The transition to managed IT services has been transformative for our organization. Our systems are now reliable, our staff is more productive, and we've significantly reduced our IT costs. Most importantly, we can focus on patient care without worrying about technology issues.",
        author: "Dr. Emily Rodriguez, Chief Medical Officer",
      },
      image: "/images/healthcare-it-infrastructure.jpeg",
      shortDescription:
        "Complete IT infrastructure overhaul for a 12-facility healthcare network, resulting in 99.8% reduction in downtime and 27% decrease in IT operational costs.",
    },
    {
      id: 2,
      title: "Law Firm IT Modernization",
      client: "Johnson & Partners Legal",
      industry: "Legal",
      challenge:
        "A growing law firm with 75 attorneys across 3 locations was experiencing frequent technology issues that impacted productivity and client service. Their aging infrastructure couldn't support their growth, and they lacked proper security measures to protect sensitive client information. The firm needed a reliable IT partner to modernize their infrastructure and provide ongoing support.",
      solution:
        "We delivered a comprehensive managed IT solution tailored for legal services:\n\n- Implementation of secure document management system\n- Migration to cloud-based practice management platform\n- Deployment of advanced endpoint security and data protection\n- Establishment of secure remote access capabilities\n- Implementation of automated backup and disaster recovery\n- 24/7 monitoring and support services\n- Regular technology business reviews and strategic planning",
      results:
        "- Increased attorney productivity by 25% through improved system reliability\n- Enhanced document security with multi-factor authentication and encryption\n- Reduced IT-related downtime by 95%\n- Enabled seamless collaboration across all office locations\n- Achieved compliance with legal industry data protection requirements\n- Supported 40% firm growth without additional IT staff\n- Implemented successful business continuity plan during office relocation",
      testimonial: {
        quote:
          "As attorneys, our time is literally money. The managed IT services have eliminated the technology frustrations that were costing us billable hours and impacting client service. The security measures give us and our clients peace of mind, and the proactive approach means problems are often fixed before we even know about them.",
        author: "William Johnson, Managing Partner",
      },
      image: "/images/law-firm-it-services.jpeg",
      shortDescription:
        "IT modernization for a 75-attorney law firm across 3 locations, resulting in 25% increased productivity and 95% reduction in downtime.",
    },
  ]

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Managed IT Services</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive IT support and management for your business
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Focus on Your Business While We Handle Your IT</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Our managed IT services provide comprehensive support and management for your entire IT infrastructure,
                allowing you to focus on your core business while we ensure your technology runs smoothly.
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  With our proactive approach, we identify and resolve issues before they impact your business. Our team
                  of certified IT professionals provides 24/7 monitoring, maintenance, and support to keep your systems
                  running at peak performance while reducing your overall IT costs.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/modern-server-rack.png"
                alt="Managed IT Services"
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
              <h2 className="text-3xl font-bold tracking-tighter">Our Managed IT Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive IT management and support tailored to your business needs
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
                    <rect width="20" height="14" x="2" y="3" rx="2" />
                    <line x1="8" x2="16" y1="21" y2="21" />
                    <line x1="12" x2="12" y1="17" y2="21" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Help Desk Support</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Responsive technical support for your team whenever they need assistance.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>24/7 support availability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Multiple support channels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Rapid response times</span>
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
                    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                    <path d="M21 3v5h-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Proactive Monitoring</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Continuous monitoring of your systems to identify and resolve issues before they impact your business.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>24/7 infrastructure monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Automated alerts and notifications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Performance optimization</span>
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
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Security Management</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Comprehensive security solutions to protect your business from threats.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Endpoint protection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Vulnerability management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Security awareness training</span>
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
                    <path d="M14 4c0-1.1-.9-2-2-2s-2 .9-2 2" />
                    <path d="M20 7v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7" />
                    <path d="M12 10v6" />
                    <path d="M2 7h20" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Backup & Recovery</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Reliable backup and disaster recovery solutions to protect your data and ensure business continuity.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>
                      Reliable backup and disaster recovery solutions to protect your data and ensure business
                      continuity.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Regular data backups</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Fast data recovery</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Business continuity planning</span>
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
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 0 2.83 2.83l9.19-9.2a4 4 0 0 1 5.66 5.66z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Cloud Solutions</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  Scalable and secure cloud solutions to optimize your IT infrastructure.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Cloud migration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Cloud management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0" />
                    <span>Cloud security</span>
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
                Real-world examples of how our managed IT services have helped businesses succeed
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyDialog key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
