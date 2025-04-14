import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, User, Tag, ArrowRight } from "lucide-react"

export default function AIInnovationPage() {
  // Sample AI blog posts
  const blogPosts = [
    {
      id: "future-of-ai-in-business",
      title: "The Future of AI in Business",
      excerpt: "Exploring how artificial intelligence is transforming business operations and decision-making.",
      date: "April 15, 2025",
      author: "Dr. Sarah Chen",
      category: "Artificial Intelligence",
      image: "/images/ai-robot-assistant.jpeg",
    },
    {
      id: "machine-learning-trends",
      title: "Top Machine Learning Trends for 2025",
      excerpt: "Discover the latest advancements in machine learning that are shaping the future of technology.",
      date: "April 8, 2025",
      author: "Michael Johnson",
      category: "Machine Learning",
      image: "/images/diverse-team-planning.jpeg",
    },
    {
      id: "ethical-ai-development",
      title: "Ethical Considerations in AI Development",
      excerpt: "Exploring the ethical challenges and responsibilities in developing artificial intelligence systems.",
      date: "March 30, 2025",
      author: "Dr. Emily Rodriguez",
      category: "AI Ethics",
      image: "/images/casual-meeting.jpeg",
    },
    {
      id: "ai-driven-automation",
      title: "AI-Driven Automation in Manufacturing",
      excerpt: "How artificial intelligence is revolutionizing manufacturing processes and increasing efficiency.",
      date: "March 22, 2025",
      author: "Robert Thompson",
      category: "Industrial AI",
      image: "/images/corporate-training.jpeg",
    },
  ]

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI Innovation</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Exploring the cutting edge of artificial intelligence and its transformative impact on business and
                society.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Transforming Business with AI</h2>
              <p className="text-muted-foreground md:text-xl">
                Artificial intelligence is revolutionizing how businesses operate, make decisions, and engage with
                customers. Our AI solutions help organizations harness the power of machine learning, natural language
                processing, and computer vision to drive innovation and growth.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button>Explore AI Solutions</Button>
                <Button variant="outline">Read AI Case Studies</Button>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image src="/images/ai-robot-assistant.jpeg" alt="AI Robot Assistant" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest AI Insights</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with our latest articles, research, and case studies on artificial intelligence.
              </p>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Topics</TabsTrigger>
                <TabsTrigger value="business">Business AI</TabsTrigger>
                <TabsTrigger value="ethics">AI Ethics</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                {blogPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="business" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                {blogPosts
                  .filter((post) => post.id === "future-of-ai-in-business" || post.id === "ai-driven-automation")
                  .map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="ethics" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                {blogPosts
                  .filter((post) => post.id === "ethical-ai-development")
                  .map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="technical" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                {blogPosts
                  .filter((post) => post.id === "machine-learning-trends")
                  .map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/images/team-collaboration.jpeg"
                alt="AI research team collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">AI Research & Development</h2>
              <p className="text-muted-foreground">
                Our team of AI researchers and engineers are constantly pushing the boundaries of what's possible with
                artificial intelligence. We're committed to developing responsible AI solutions that deliver real
                business value while addressing ethical considerations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-[#0f172a]"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Advanced natural language processing</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-[#0f172a]"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Computer vision and image recognition</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-[#0f172a]"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Predictive analytics and forecasting</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-[#0f172a]"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Reinforcement learning for optimization</span>
                </li>
              </ul>
              <Button>Learn About Our Research</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f172a] text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to leverage AI in your business?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed">
                Our AI experts can help you identify opportunities and develop custom solutions tailored to your
                specific needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary">
                Schedule a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
              >
                View AI Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function BlogCard({ post }: { post: any }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>
            <h3 className="text-xl font-bold">{post.title}</h3>
            <div className="flex items-center gap-1">
              <Tag className="h-4 w-4 text-[#0f172a]" />
              <span className="text-sm font-medium text-[#0f172a]">{post.category}</span>
            </div>
            <p className="text-muted-foreground">{post.excerpt}</p>
          </div>
          <Link href={`/blog/${post.id}`}>
            <Button variant="link" className="p-0 flex items-center">
              Read More <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
