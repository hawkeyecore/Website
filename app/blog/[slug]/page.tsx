import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Tag, Share2, MessageSquare } from "lucide-react"
import { notFound } from "next/navigation"

// Update the blogPosts array to include numeric IDs
const blogPosts = [
  {
    id: "future-of-ai-in-business",
    numericId: 1,
    title: "The Future of AI in Business",
    excerpt: "Exploring how artificial intelligence is transforming business operations and decision-making.",
    content: `
      <p>Artificial Intelligence (AI) is rapidly transforming the business landscape, revolutionizing how companies operate, make decisions, and interact with customers. As we look to the future, the impact of AI on business is only expected to grow, creating both opportunities and challenges for organizations across industries.</p>
      
      <h2>Current State of AI in Business</h2>
      
      <p>Today, businesses are already leveraging AI in numerous ways:</p>
      
      <ul>
        <li><strong>Customer Service:</strong> AI-powered chatbots and virtual assistants are handling customer inquiries, providing 24/7 support, and freeing up human agents to focus on more complex issues.</li>
        <li><strong>Data Analysis:</strong> Machine learning algorithms are analyzing vast amounts of data to identify patterns, trends, and insights that would be impossible for humans to discover manually.</li>
        <li><strong>Process Automation:</strong> Robotic Process Automation (RPA) is streamlining repetitive tasks, reducing errors, and increasing efficiency across departments.</li>
        <li><strong>Personalization:</strong> AI is enabling hyper-personalized marketing, product recommendations, and customer experiences based on individual preferences and behaviors.</li>
      </ul>
      
      <h2>Emerging Trends in AI for Business</h2>
      
      <p>Looking ahead, several trends are shaping the future of AI in business:</p>
      
      <h3>1. Augmented Intelligence</h3>
      
      <p>Rather than replacing humans, AI will increasingly work alongside them, augmenting their capabilities and enabling them to make better decisions.</p>
      
      <h3>2. Explainable AI</h3>
      
      <p>As AI systems become more complex, there's a growing demand for transparency and explainability.</p>
      
      <h3>3. Edge AI</h3>
      
      <p>Processing AI workloads at the edge—on devices rather than in the cloud—is becoming increasingly important for applications requiring real-time processing.</p>
      
      <h3>4. AI-Powered Decision Making</h3>
      
      <p>AI is moving beyond operational tasks to support strategic decision-making.</p>
      
      <h2>Conclusion</h2>
      
      <p>The future of AI in business is not about replacing humans but augmenting their capabilities and enabling them to focus on higher-value activities. Organizations that strategically embrace AI, address its challenges, and adapt their culture and processes will be well-positioned to thrive in the evolving business landscape.</p>
    `,
    date: "April 15, 2025",
    author: "Dr. Sarah Chen",
    authorRole: "Chief AI Strategist",
    category: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "Business Strategy", "Digital Transformation"],
    image: "/images/diverse-team-planning.jpeg",
    relatedPosts: [
      {
        id: "cloud-migration-strategies",
        title: "Cloud Migration Strategies",
        excerpt: "Best practices for moving your infrastructure to the cloud securely and efficiently.",
        image: "/images/business-presentation.jpeg",
      },
      {
        id: "cybersecurity-trends-2025",
        title: "Cybersecurity Trends for 2025",
        excerpt: "Stay ahead of threats with these emerging cybersecurity trends and technologies.",
        image: "/images/team-celebration.jpeg",
      },
    ],
  },
  {
    id: "cloud-migration-strategies",
    numericId: 2,
    title: "Cloud Migration Strategies",
    excerpt: "Best practices for moving your infrastructure to the cloud securely and efficiently.",
    content: `
      <p>Cloud migration has become a strategic imperative for organizations looking to enhance scalability, reduce costs, and improve operational efficiency. However, moving infrastructure, applications, and data to the cloud requires careful planning and execution.</p>
      
      <h2>Understanding Cloud Migration</h2>
      
      <p>Cloud migration involves transferring digital assets—applications, data, workloads, and IT resources—from on-premises infrastructure to cloud environments. This process can take various forms:</p>
      
      <ul>
        <li><strong>Rehosting (Lift and Shift):</strong> Moving applications to the cloud without making significant changes</li>
        <li><strong>Replatforming:</strong> Making minor optimizations to applications during migration</li>
        <li><strong>Refactoring/Rearchitecting:</strong> Redesigning applications to fully leverage cloud capabilities</li>
        <li><strong>Repurchasing:</strong> Switching to a different product, typically moving to a SaaS solution</li>
      </ul>
      
      <h2>Key Strategies for Successful Cloud Migration</h2>
      
      <h3>1. Develop a Comprehensive Migration Plan</h3>
      
      <p>A successful cloud migration begins with thorough planning that includes assessing your current infrastructure and defining clear objectives.</p>
      
      <h3>2. Prioritize Applications for Migration</h3>
      
      <p>Not all applications should be migrated simultaneously. Start with less critical, less complex applications to gain experience and confidence.</p>
      
      <h3>3. Choose the Right Migration Approach</h3>
      
      <p>Select the appropriate migration strategy (rehost, replatform, refactor, etc.) for each application based on its requirements and business value.</p>
      
      <h3>4. Implement Strong Security Measures</h3>
      
      <p>Security should be a top priority throughout the migration process, including data encryption, access controls, and compliance considerations.</p>
      
      <h2>Conclusion</h2>
      
      <p>Cloud migration is a journey that requires careful planning, execution, and ongoing management. By following these strategies and best practices, organizations can minimize disruption, control costs, and fully realize the benefits of cloud computing.</p>
    `,
    date: "April 10, 2025",
    author: "Michael Johnson",
    authorRole: "Cloud Solutions Architect",
    category: "Cloud Computing",
    tags: ["Cloud Migration", "Infrastructure", "Digital Transformation", "Cost Optimization"],
    image: "/images/business-presentation.jpeg",
    relatedPosts: [
      {
        id: "future-of-ai-in-business",
        title: "The Future of AI in Business",
        excerpt: "Exploring how artificial intelligence is transforming business operations and decision-making.",
        image: "/images/diverse-team-planning.jpeg",
      },
      {
        id: "cybersecurity-trends-2025",
        title: "Cybersecurity Trends for 2025",
        excerpt: "Stay ahead of threats with these emerging cybersecurity trends and technologies.",
        image: "/images/team-celebration.jpeg",
      },
    ],
  },
  {
    id: "cybersecurity-trends-2025",
    numericId: 3,
    title: "Cybersecurity Trends for 2025",
    excerpt: "Stay ahead of threats with these emerging cybersecurity trends and technologies.",
    content: `
      <p>As technology continues to evolve at a rapid pace, so do the threats that target our digital infrastructure. Staying ahead of these threats requires awareness of emerging cybersecurity trends and technologies. This article explores the key cybersecurity trends that will shape the landscape in 2025.</p>
      
      <h2>The Evolving Threat Landscape</h2>
      
      <p>The cybersecurity threat landscape is becoming increasingly sophisticated and diverse:</p>
      
      <ul>
        <li><strong>Advanced Persistent Threats (APTs):</strong> State-sponsored and organized crime groups are deploying highly sophisticated, long-term attacks.</li>
        <li><strong>Ransomware Evolution:</strong> Ransomware attacks are becoming more targeted and destructive, with double extortion tactics becoming the norm.</li>
        <li><strong>Supply Chain Attacks:</strong> Attackers are targeting the supply chain to compromise multiple organizations through a single point of entry.</li>
        <li><strong>IoT Vulnerabilities:</strong> The proliferation of IoT devices is expanding the attack surface for organizations and individuals.</li>
      </ul>
      
      <h2>Key Cybersecurity Trends for 2025</h2>
      
      <h3>1. AI-Powered Security Solutions</h3>
      
      <p>Artificial intelligence and machine learning are revolutionizing cybersecurity, enabling more proactive threat detection and response.</p>
      
      <h3>2. Zero Trust Architecture</h3>
      
      <p>The "never trust, always verify" approach is becoming the standard security model for organizations of all sizes.</p>
      
      <h3>3. Extended Detection and Response (XDR)</h3>
      
      <p>XDR solutions are providing unified security incident detection and response across multiple security layers.</p>
      
      <h3>4. Quantum-Resistant Cryptography</h3>
      
      <p>As quantum computing advances, organizations are beginning to implement quantum-resistant cryptographic algorithms.</p>
      
      <h2>Preparing for the Future</h2>
      
      <p>To stay ahead of evolving threats, organizations should:</p>
      
      <ul>
        <li>Invest in continuous security awareness training</li>
        <li>Implement a comprehensive security framework</li>
        <li>Regularly test security controls through penetration testing and red team exercises</li>
        <li>Develop and practice incident response plans</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>The cybersecurity landscape of 2025 will be characterized by more sophisticated threats and more advanced defensive technologies. Organizations that stay informed about emerging trends and take a proactive approach to security will be best positioned to protect their digital assets and maintain the trust of their customers and partners.</p>
    `,
    date: "April 5, 2025",
    author: "Jennifer Lee",
    authorRole: "Chief Information Security Officer",
    category: "Cybersecurity",
    tags: ["Cybersecurity", "Threat Intelligence", "Zero Trust", "AI Security"],
    image: "/images/team-celebration.jpeg",
    relatedPosts: [
      {
        id: "future-of-ai-in-business",
        title: "The Future of AI in Business",
        excerpt: "Exploring how artificial intelligence is transforming business operations and decision-making.",
        image: "/images/diverse-team-planning.jpeg",
      },
      {
        id: "cloud-migration-strategies",
        title: "Cloud Migration Strategies",
        excerpt: "Best practices for moving your infrastructure to the cloud securely and efficiently.",
        image: "/images/business-presentation.jpeg",
      },
    ],
  },
  {
    id: "rise-of-edge-computing",
    numericId: 4,
    title: "The Rise of Edge Computing",
    excerpt: "How edge computing is revolutionizing data processing and improving response times.",
    content: `
      <p>Edge computing is transforming how data is processed and analyzed, bringing computation closer to the data source and reducing latency. This article explores the rise of edge computing and its impact on various industries.</p>
      
      <h2>Understanding Edge Computing</h2>
      
      <p>Edge computing involves processing data near the edge of the network, where the data is generated, rather than in a centralized data-processing warehouse. This approach offers several advantages:</p>
      
      <ul>
        <li><strong>Reduced Latency:</strong> By processing data closer to the source, edge computing minimizes the time it takes for data to travel to the cloud and back.</li>
        <li><strong>Bandwidth Conservation:</strong> Only relevant data is sent to the cloud, reducing bandwidth usage and costs.</li>
        <li><strong>Enhanced Privacy:</strong> Sensitive data can be processed locally, reducing exposure to potential security breaches.</li>
        <li><strong>Improved Reliability:</strong> Edge devices can continue to function even when cloud connectivity is limited or unavailable.</li>
      </ul>
      
      <h2>Applications of Edge Computing</h2>
      
      <h3>1. Internet of Things (IoT)</h3>
      
      <p>Edge computing is enabling more sophisticated IoT applications by processing data locally on devices or nearby edge servers.</p>
      
      <h3>2. Autonomous Vehicles</h3>
      
      <p>Self-driving cars require real-time data processing to make split-second decisions, making edge computing essential.</p>
      
      <h3>3. Smart Cities</h3>
      
      <p>Edge computing powers smart city applications like traffic management, public safety, and environmental monitoring.</p>
      
      <h3>4. Healthcare</h3>
      
      <p>Medical devices and wearables can process data locally, providing real-time insights while maintaining patient privacy.</p>
      
      <h2>The Future of Edge Computing</h2>
      
      <p>As 5G networks expand and edge computing technologies mature, we can expect to see:</p>
      
      <ul>
        <li>More sophisticated AI capabilities at the edge</li>
        <li>Greater integration between edge and cloud computing</li>
        <li>Expansion of edge computing into new industries and applications</li>
        <li>Development of specialized edge computing hardware and software</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Edge computing represents a significant shift in how data is processed and analyzed. By bringing computation closer to the data source, edge computing is enabling new applications and use cases that were previously impractical or impossible. Organizations that embrace edge computing will be well-positioned to leverage the benefits of real-time data processing and analysis.</p>
    `,
    date: "March 28, 2025",
    author: "David Wilson",
    authorRole: "Edge Computing Specialist",
    category: "Edge Computing",
    tags: ["Edge Computing", "IoT", "5G", "Data Processing"],
    image: "/images/diverse-team-planning.jpeg",
    relatedPosts: [
      {
        id: "future-of-ai-in-business",
        title: "The Future of AI in Business",
        excerpt: "Exploring how artificial intelligence is transforming business operations and decision-making.",
        image: "/images/diverse-team-planning.jpeg",
      },
      {
        id: "cloud-migration-strategies",
        title: "Cloud Migration Strategies",
        excerpt: "Best practices for moving your infrastructure to the cloud securely and efficiently.",
        image: "/images/business-presentation.jpeg",
      },
    ],
  },
  {
    id: "building-scalable-microservices",
    numericId: 5,
    title: "Building Scalable Microservices",
    excerpt: "Architectural patterns for designing resilient and scalable microservices.",
    content: `
      <p>Microservices architecture has become a popular approach for building complex applications, offering benefits like scalability, resilience, and development agility. This article explores key patterns and practices for building scalable microservices.</p>
      
      <h2>Fundamentals of Microservices</h2>
      
      <p>Microservices architecture involves breaking down applications into small, independent services that:</p>
      
      <ul>
        <li><strong>Are Focused on a Single Business Capability:</strong> Each service handles a specific business function.</li>
        <li><strong>Run in Their Own Process:</strong> Services operate independently and communicate via well-defined APIs.</li>
        <li><strong>Can Be Deployed Independently:</strong> Services can be updated and scaled without affecting the entire system.</li>
        <li><strong>Have Their Own Data Storage:</strong> Each service manages its own data, following the database-per-service pattern.</li>
      </ul>
      
      <h2>Key Patterns for Scalable Microservices</h2>
      
      <h3>1. API Gateway Pattern</h3>
      
      <p>An API gateway serves as a single entry point for client requests, routing them to the appropriate microservices.</p>
      
      <h3>2. Service Discovery</h3>
      
      <p>Service discovery mechanisms allow services to find and communicate with each other dynamically.</p>
      
      <h3>3. Circuit Breaker Pattern</h3>
      
      <p>Circuit breakers prevent cascading failures by detecting when a service is unavailable and redirecting or failing fast.</p>
      
      <h3>4. Event-Driven Architecture</h3>
      
      <p>Event-driven patterns enable loose coupling between services, improving scalability and resilience.</p>
      
      <h2>Best Practices for Microservices</h2>
      
      <p>To build truly scalable microservices, consider these best practices:</p>
      
      <ul>
        <li>Design services around business capabilities, not technical functions</li>
        <li>Implement proper monitoring and observability</li>
        <li>Use containerization and orchestration tools like Docker and Kubernetes</li>
        <li>Implement automated testing and continuous deployment</li>
        <li>Design for failure and implement proper error handling</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Building scalable microservices requires careful design and implementation of architectural patterns that promote resilience, independence, and maintainability. By following these patterns and best practices, organizations can create microservices architectures that scale effectively and adapt to changing business needs.</p>
    `,
    date: "March 20, 2025",
    author: "Emily Rodriguez",
    authorRole: "Software Architect",
    category: "Software Architecture",
    tags: ["Microservices", "Architecture", "Scalability", "DevOps"],
    image: "/images/casual-meeting.jpeg",
    relatedPosts: [
      {
        id: "cloud-migration-strategies",
        title: "Cloud Migration Strategies",
        excerpt: "Best practices for moving your infrastructure to the cloud securely and efficiently.",
        image: "/images/business-presentation.jpeg",
      },
      {
        id: "cybersecurity-trends-2025",
        title: "Cybersecurity Trends for 2025",
        excerpt: "Stay ahead of threats with these emerging cybersecurity trends and technologies.",
        image: "/images/team-celebration.jpeg",
      },
    ],
  },
  {
    id: "data-analytics-business-growth",
    numericId: 6,
    title: "Data Analytics for Business Growth",
    excerpt: "Leveraging data analytics to drive business decisions and accelerate growth.",
    content: `
      <p>Data analytics has become a critical tool for businesses seeking to gain competitive advantages, optimize operations, and drive growth. This article explores how organizations can leverage data analytics to make better decisions and accelerate business growth.</p>
      
      <h2>The Power of Data-Driven Decision Making</h2>
      
      <p>Data-driven decision making involves using facts, metrics, and data to guide strategic business decisions rather than intuition or observation alone. Benefits include:</p>
      
      <ul>
        <li><strong>Improved Accuracy:</strong> Decisions based on data tend to be more accurate and reliable.</li>
        <li><strong>Increased Objectivity:</strong> Data helps remove personal biases from the decision-making process.</li>
        <li><strong>Better Resource Allocation:</strong> Analytics helps identify where resources will have the greatest impact.</li>
        <li><strong>Proactive Problem Solving:</strong> Data can reveal issues before they become critical problems.</li>
      </ul>
      
      <h2>Key Types of Business Analytics</h2>
      
      <h3>1. Descriptive Analytics</h3>
      
      <p>Descriptive analytics answers the question "What happened?" by summarizing historical data to identify patterns and trends.</p>
      
      <h3>2. Diagnostic Analytics</h3>
      
      <p>Diagnostic analytics answers "Why did it happen?" by examining data to understand the causes of past outcomes.</p>
      
      <h3>3. Predictive Analytics</h3>
      
      <p>Predictive analytics answers "What might happen?" by using statistical models and forecasting techniques to understand the future.</p>
      
      <h3>4. Prescriptive Analytics</h3>
      
      <p>Prescriptive analytics answers "What should we do?" by suggesting actions to achieve desired outcomes and optimize performance.</p>
      
      <h2>Implementing Data Analytics for Growth</h2>
      
      <p>To effectively leverage data analytics for business growth, organizations should:</p>
      
      <ul>
        <li>Define clear business objectives and key performance indicators (KPIs)</li>
        <li>Ensure data quality and accessibility across the organization</li>
        <li>Invest in the right analytics tools and talent</li>
        <li>Foster a data-driven culture that values evidence-based decision making</li>
        <li>Continuously refine analytics processes based on outcomes and feedback</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Data analytics provides organizations with the insights needed to make better decisions, optimize operations, and drive business growth. By implementing a comprehensive data analytics strategy and fostering a data-driven culture, businesses can unlock new opportunities and gain competitive advantages in today's fast-paced market environment.</p>
    `,
    date: "March 15, 2025",
    author: "Alex Thompson",
    authorRole: "Data Analytics Director",
    category: "Data Analytics",
    tags: ["Data Analytics", "Business Intelligence", "Decision Making", "Growth Strategy"],
    image: "/images/data-analytics-team.jpeg",
    relatedPosts: [
      {
        id: "future-of-ai-in-business",
        title: "The Future of AI in Business",
        excerpt: "Exploring how artificial intelligence is transforming business operations and decision-making.",
        image: "/images/diverse-team-planning.jpeg",
      },
      {
        id: "building-scalable-microservices",
        title: "Building Scalable Microservices",
        excerpt: "Architectural patterns for designing resilient and scalable microservices.",
        image: "/images/casual-meeting.jpeg",
      },
    ],
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  // First try to find the post by string ID
  let post = blogPosts.find((p) => p.id === params.id)

  // If not found, try to find by numeric ID (converted to string from URL)
  if (!post) {
    const numericId = Number.parseInt(params.id, 10)
    if (!isNaN(numericId)) {
      post = blogPosts.find((p) => p.numericId === numericId)
    }
  }

  if (!post) {
    notFound()
  }

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-4">
            <Link
              href="/blog"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
              <p className="text-muted-foreground md:text-xl">{post.excerpt}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  <span>{post.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden mb-8">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>

              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

              <div className="mt-8 pt-8 border-t">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link key={index} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Button variant="outline" size="sm">
                        #{tag}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Comments (12)
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-8">
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">About the Author</h3>
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden">
                      <Image src="/confident-professional.png" alt={post.author} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold">{post.author}</h4>
                      <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4">Related Posts</h3>
                  <div className="space-y-4">
                    {post.relatedPosts.map((relatedPost, index) => (
                      <Link key={index} href={`/blog/${relatedPost.id}`}>
                        <div className="flex gap-4 group">
                          <div className="relative h-16 w-16 rounded overflow-hidden flex-shrink-0">
                            <Image
                              src={relatedPost.image || "/placeholder.svg"}
                              alt={relatedPost.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium group-hover:text-[#0055b3] transition-colors">
                              {relatedPost.title}
                            </h4>
                            <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Stay updated with our latest insights and articles.
                  </p>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                    <Button className="w-full">Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
