import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { query } from "@/lib/db"

async function getBlogPostBySlug(slug: string) {
  try {
    const sql = `
      SELECT 
        bp.id, bp.title, bp.slug, bp.content, bp.image_url, 
        TO_CHAR(bp.created_at, 'YYYY-MM-DD') as date,
        u.name as author_name
      FROM blog_posts bp
      LEFT JOIN users u ON bp.author_id = u.id
      WHERE bp.slug = $1 AND bp.status = 'published'
    `
    const posts = (await query(sql, [slug])) as any[]
    return posts[0]
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return null
  }
}

async function getRelatedPosts(currentPostId: number) {
  try {
    const sql = `
      SELECT 
        bp.id, bp.title, bp.slug, bp.excerpt, bp.image_url, 
        TO_CHAR(bp.created_at, 'YYYY-MM-DD') as date
      FROM blog_posts bp
      WHERE bp.id != $1 AND bp.status = 'published'
      ORDER BY bp.created_at DESC
      LIMIT 3
    `
    return query(sql, [currentPostId]) as Promise<any[]>
  } catch (error) {
    console.error("Error fetching related posts:", error)
    return []
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    // Fallback data for preview or if post not found
    const fallbackPosts = {
      "future-of-ai-in-business": {
        id: 1,
        title: "The Future of AI in Business",
        slug: "future-of-ai-in-business",
        content:
          "<p>Artificial Intelligence is transforming how businesses operate across all industries. From automating routine tasks to providing deep insights from complex data, AI technologies are helping companies work smarter and more efficiently.</p><h2>Key Areas Where AI is Making an Impact</h2><p>Here are some of the most significant ways AI is changing business operations:</p><ul><li><strong>Customer Service:</strong> AI-powered chatbots and virtual assistants are handling customer inquiries 24/7, reducing wait times and freeing up human agents for more complex issues.</li><li><strong>Data Analysis:</strong> Machine learning algorithms can process vast amounts of data to identify patterns and trends that would be impossible for humans to detect, leading to better business decisions.</li><li><strong>Process Automation:</strong> Robotic Process Automation (RPA) is streamlining workflows by automating repetitive tasks, reducing errors and increasing productivity.</li><li><strong>Personalization:</strong> AI enables hyper-personalized customer experiences by analyzing behavior and preferences, leading to increased customer satisfaction and loyalty.</li></ul><h2>Preparing Your Business for an AI-Driven Future</h2><p>To stay competitive in an increasingly AI-driven marketplace, businesses should:</p><ol><li>Identify areas where AI could provide the most value</li><li>Invest in data infrastructure to support AI initiatives</li><li>Develop an AI strategy aligned with business goals</li><li>Upskill employees to work alongside AI technologies</li><li>Start with small, focused AI projects to demonstrate value</li></ol><p>The businesses that will thrive in the coming years are those that view AI not just as a technology upgrade but as a fundamental shift in how work gets done. By embracing AI thoughtfully and strategically, companies can improve efficiency, enhance customer experiences, and gain a significant competitive advantage.</p>",
        image_url: "/images/tech-meeting.jpeg",
        date: "2023-05-15",
        author_name: "Sarah Johnson",
      },
      "cybersecurity-trends-2023": {
        id: 2,
        title: "5 Cybersecurity Trends to Watch in 2023",
        slug: "cybersecurity-trends-2023",
        content:
          '<p>As digital transformation accelerates across industries, cybersecurity threats continue to evolve in sophistication and scale. Staying ahead of these threats requires awareness of emerging trends and proactive security measures.</p><h2>1. Rise of AI-Powered Attacks</h2><p>Cybercriminals are increasingly leveraging artificial intelligence to automate and enhance their attacks. AI-powered malware can adapt to security measures, making traditional detection methods less effective. Organizations must respond by implementing AI-driven security solutions that can detect unusual patterns and potential threats in real-time.</p><h2>2. Expanded Attack Surface with IoT</h2><p>The proliferation of Internet of Things (IoT) devices has created new vulnerabilities in many networks. From smart office equipment to industrial sensors, these connected devices often lack robust security features. In 2023, we expect to see more attacks targeting IoT devices as entry points to larger networks.</p><h2>3. Zero Trust Architecture Adoption</h2><p>The traditional security perimeter is disappearing as remote work becomes permanent for many organizations. Zero Trust security models, which operate on the principle of "never trust, always verify," are becoming essential. This approach requires verification from anyone trying to access resources on the network, regardless of their location.</p><h2>4. Ransomware as a Service (RaaS)</h2><p>Ransomware attacks have become more accessible to non-technical criminals through Ransomware as a Service models. These subscription-based models allow virtually anyone to launch ransomware attacks, leading to a projected increase in incidents. Organizations need comprehensive backup strategies and incident response plans to mitigate these threats.</p><h2>5. Focus on Supply Chain Security</h2><p>After several high-profile supply chain attacks, companies are recognizing the importance of securing their entire supply ecosystem. In 2023, expect more rigorous vendor security assessments and third-party risk management programs to become standard practice.</p><h2>Preparing Your Organization</h2><p>To strengthen your cybersecurity posture in 2023:</p><ul><li>Conduct regular security assessments and penetration testing</li><li>Implement multi-factor authentication across all systems</li><li>Train employees on security awareness and phishing recognition</li><li>Develop and regularly test incident response plans</li><li>Consider cyber insurance to mitigate financial risks</li></ul><p>By staying informed about these trends and taking proactive measures, organizations can better protect their digital assets in an increasingly complex threat landscape.</p>',
        image_url: "/images/digital-workspace.jpeg",
        date: "2023-04-28",
        author_name: "Michael Chen",
      },
      "cloud-migration-best-practices": {
        id: 3,
        title: "Cloud Migration: Best Practices for a Seamless Transition",
        slug: "cloud-migration-best-practices",
        content:
          "<p>Moving your infrastructure and applications to the cloud offers numerous benefits, including scalability, cost efficiency, and improved collaboration. However, cloud migration can be complex and challenging without proper planning and execution.</p><h2>Assess Your Current Environment</h2><p>Before beginning any migration, thoroughly assess your existing infrastructure, applications, and data. Identify dependencies between systems and determine which applications should be migrated first. This assessment will help you create a comprehensive migration strategy tailored to your organization's specific needs.</p><h2>Choose the Right Migration Strategy</h2><p>There are several approaches to cloud migration:</p><ul><li><strong>Rehosting (Lift and Shift):</strong> Moving applications to the cloud without making significant changes</li><li><strong>Replatforming:</strong> Making some optimizations to take advantage of cloud capabilities</li><li><strong>Refactoring:</strong> Redesigning applications to be cloud-native</li><li><strong>Repurchasing:</strong> Switching to a different product or service</li><li><strong>Retiring:</strong> Eliminating applications that are no longer needed</li></ul><p>The right approach depends on factors such as application complexity, business requirements, and time constraints.</p><h2>Develop a Detailed Migration Plan</h2><p>Create a step-by-step migration plan that includes:</p><ol><li>Prioritization of applications and workloads</li><li>Timeline with specific milestones</li><li>Resource allocation</li><li>Testing procedures</li><li>Rollback plans in case of issues</li></ol><p>A well-documented plan ensures all stakeholders understand their responsibilities and expectations throughout the migration process.</p><h2>Test Thoroughly Before Migrating</h2><p>Create a test environment that mimics your production setup and conduct comprehensive testing before the actual migration. This includes:</p><ul><li>Functionality testing to ensure applications work as expected</li><li>Performance testing to identify potential bottlenecks</li><li>Security testing to verify that data protection measures are effective</li><li>Integration testing to confirm that systems communicate properly</li></ul><h2>Implement Strong Security Measures</h2><p>Cloud security requires a different approach than on-premises security. Ensure you have:</p><ul><li>Identity and access management controls</li><li>Data encryption both in transit and at rest</li><li>Network security configurations</li><li>Compliance with relevant regulations</li></ul><h2>Train Your Team</h2><p>Cloud environments often require different skills than traditional IT infrastructure. Provide training for your team on:</p><ul><li>Cloud platform fundamentals</li><li>New tools and processes</li><li>Security best practices</li><li>Monitoring and management of cloud resources</li></ul><h2>Monitor and Optimize Post-Migration</h2><p>After migration, continuously monitor performance, costs, and security. Look for opportunities to optimize your cloud environment by:</p><ul><li>Right-sizing resources based on actual usage</li><li>Implementing auto-scaling where appropriate</li><li>Using reserved instances for predictable workloads</li><li>Regularly reviewing security configurations</li></ul><p>By following these best practices, you can minimize disruption during your cloud migration and position your organization to fully leverage the benefits of cloud computing.</p>",
        image_url: "/images/office-collaboration.jpeg",
        date: "2023-04-10",
        author_name: "David Rodriguez",
      },
      "data-analytics-in-healthcare": {
        id: 4,
        title: "How Data Analytics is Revolutionizing Healthcare",
        slug: "data-analytics-in-healthcare",
        content:
          "<p>The healthcare industry is experiencing a profound transformation driven by advances in data analytics. From improving patient outcomes to optimizing operational efficiency, data-driven insights are reshaping how healthcare is delivered and managed.</p><h2>Personalized Medicine</h2><p>One of the most promising applications of data analytics in healthcare is personalized medicine. By analyzing genetic information, medical history, and lifestyle factors, healthcare providers can develop treatment plans tailored to individual patients. This approach has shown particular promise in oncology, where treatments can be matched to the specific genetic mutations driving a patient's cancer.</p><h2>Predictive Analytics for Early Intervention</h2><p>Predictive models can identify patients at risk for various conditions before symptoms appear. For example:</p><ul><li>Algorithms can predict which patients are likely to develop sepsis in hospital settings, allowing for earlier intervention</li><li>Models can identify patients at risk for readmission, enabling targeted follow-up care</li><li>Analytics can predict disease outbreaks by analyzing patterns in emergency room visits and social media</li></ul><p>These early warning systems help healthcare providers allocate resources more effectively and improve patient outcomes through timely interventions.</p><h2>Operational Efficiency</h2><p>Healthcare organizations are using data analytics to streamline operations and reduce costs:</p><ul><li>Optimizing staff scheduling based on predicted patient volumes</li><li>Improving supply chain management and inventory control</li><li>Reducing wait times by analyzing patient flow patterns</li><li>Identifying inefficiencies in clinical workflows</li></ul><p>These operational improvements not only reduce costs but also enhance the patient experience by minimizing delays and ensuring resources are available when needed.</p><h2>Population Health Management</h2><p>Data analytics enables healthcare organizations to take a proactive approach to managing the health of entire populations. By analyzing data across large patient groups, providers can:</p><ul><li>Identify health trends and risk factors within communities</li><li>Target preventive interventions to high-risk groups</li><li>Monitor the effectiveness of public health initiatives</li><li>Allocate resources to areas with the greatest need</li></ul><p>This population-level approach helps address health disparities and improve outcomes across diverse communities.</p><h2>Challenges and Considerations</h2><p>Despite its potential, implementing data analytics in healthcare faces several challenges:</p><ul><li><strong>Data Privacy:</strong> Ensuring compliance with regulations like HIPAA while enabling data sharing for analytics</li><li><strong>Data Quality:</strong> Addressing inconsistencies and gaps in healthcare data</li><li><strong>Integration:</strong> Connecting disparate systems and data sources</li><li><strong>Adoption:</strong> Encouraging clinicians to incorporate data-driven insights into their practice</li></ul><p>Overcoming these challenges requires a combination of technological solutions, policy changes, and cultural shifts within healthcare organizations.</p><p>As data analytics capabilities continue to advance, we can expect even more transformative applications in healthcare, ultimately leading to better patient outcomes, more efficient care delivery, and a more sustainable healthcare system.</p>",
        image_url: "/images/tech-presentation.jpeg",
        date: "2023-03-22",
        author_name: "Emily Patel",
      },
      "how-ai-is-transforming-business": {
        id: 5,
        title: "How AI is Transforming Business",
        slug: "how-ai-is-transforming-business",
        content:
          "<p>Artificial Intelligence (AI) is revolutionizing the way businesses operate across all industries. From automating routine tasks to providing deep insights from complex data, AI technologies are helping companies work smarter and more efficiently.</p><h2>Key Areas Where AI is Making an Impact</h2><p>Here are some of the most significant ways AI is changing business operations:</p><ul><li><strong>Customer Service:</strong> AI-powered chatbots and virtual assistants are handling customer inquiries 24/7, reducing wait times and freeing up human agents for more complex issues.</li><li><strong>Data Analysis:</strong> Machine learning algorithms can process vast amounts of data to identify patterns and trends that would be impossible for humans to detect, leading to better business decisions.</li><li><strong>Process Automation:</strong> Robotic Process Automation (RPA) is streamlining workflows by automating repetitive tasks, reducing errors and increasing productivity.</li><li><strong>Personalization:</strong> AI enables hyper-personalized customer experiences by analyzing behavior and preferences, leading to increased customer satisfaction and loyalty.</li></ul><h2>Preparing Your Business for an AI-Driven Future</h2><p>To stay competitive in an increasingly AI-driven marketplace, businesses should:</p><ol><li>Identify areas where AI could provide the most value</li><li>Invest in data infrastructure to support AI initiatives</li><li>Develop an AI strategy aligned with business goals</li><li>Upskill employees to work alongside AI technologies</li><li>Start with small, focused AI projects to demonstrate value</li></ol><p>The businesses that will thrive in the coming years are those that view AI not just as a technology upgrade but as a fundamental shift in how work gets done. By embracing AI thoughtfully and strategically, companies can improve efficiency, enhance customer experiences, and gain a significant competitive advantage.</p>",
        image_url: "/images/tech-meeting.jpeg",
        date: "2023-06-10",
        author_name: "Alex Thompson",
      },
    }

    const fallbackPost = fallbackPosts[params.slug as keyof typeof fallbackPosts]
    if (!fallbackPost) {
      notFound()
    }

    // Mock related posts
    const relatedPosts = Object.values(fallbackPosts)
      .filter((p) => p.slug !== params.slug)
      .slice(0, 3)

    return (
      <>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col space-y-4">
              <Link
                href="/blog"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
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
                  className="mr-2 h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Back to Blog
              </Link>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{fallbackPost.title}</h1>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <time dateTime={fallbackPost.date}>{fallbackPost.date}</time>
                  <span>•</span>
                  <span>{fallbackPost.author_name}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                {fallbackPost.image_url && (
                  <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden mb-8">
                    <Image
                      src={fallbackPost.image_url || "/placeholder.svg"}
                      alt={fallbackPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: fallbackPost.content }} />
              </div>

              <div>
                <div className="sticky top-24 space-y-8">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-4">Related Posts</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <div key={relatedPost.id} className="space-y-2">
                          <Link href={`/blog/${relatedPost.slug}`} className="font-medium hover:underline">
                            {relatedPost.title}
                          </Link>
                          <p className="text-sm text-muted-foreground">{relatedPost.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Stay updated with our latest insights and news.
                    </p>
                    <form className="space-y-4">
                      <div>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#0055b3] text-white py-2 rounded-md hover:bg-[#004094]"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  const relatedPosts = await getRelatedPosts(post.id)

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-4">
            <Link
              href="/blog"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
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
                className="mr-2 h-4 w-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Blog
            </Link>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <time dateTime={post.date}>{post.date}</time>
                <span>•</span>
                <span>{post.author_name || "Admin"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {post.image_url && (
                <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden mb-8">
                  <Image src={post.image_url || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
              )}

              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div>
              <div className="sticky top-24 space-y-8">
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Related Posts</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="space-y-2">
                        <Link href={`/blog/${relatedPost.slug}`} className="font-medium hover:underline">
                          {relatedPost.title}
                        </Link>
                        <p className="text-sm text-muted-foreground">{relatedPost.date}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-sm text-muted-foreground mb-4">Stay updated with our latest insights and news.</p>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <button type="submit" className="w-full bg-[#0055b3] text-white py-2 rounded-md hover:bg-[#004094]">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
