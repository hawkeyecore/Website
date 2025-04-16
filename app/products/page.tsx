import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Calendar,
  Clock,
  Bell,
  DropletsIcon as DragDropIcon,
  Brain,
  History,
  Smartphone,
  Globe,
  Lock,
  BarChart3,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Products | Scheduling Dispatch",
  description:
    "Discover our innovative technology products designed to enhance your business operations. Scheduling Dispatch is a smart job scheduling app that helps businesses assign tasks, track progress, and manage teams effortlessly.",
  keywords: [
    "scheduling software",
    "job management",
    "team management",
    "task scheduling",
    "business software",
    "productivity tools",
  ],
  alternates: {
    canonical: "https://hawkeye-core.com/products",
  },
}

export default function ProductsPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Product</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Innovative technology solution designed to help your business thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Scheduling Dispatch</h2>
              <p className="text-2xl font-medium text-muted-foreground mb-6">The Easiest Way to Manage Jobs & Teams</p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">What is Scheduling Dispatch?</h3>
                  <p className="text-muted-foreground">
                    Scheduling Dispatch is a smart job scheduling app that helps businesses assign tasks, track
                    progress, and manage teams effortlessly. Whether you run a delivery service, field repair team, or
                    project-based business, this tool ensures smooth operations and efficient workforce management.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <p className="flex items-start">
                    <span className="text-blue-600 mr-2">💡</span>
                    <span className="font-medium">
                      Best of all, you can integrate Scheduling Dispatch directly into your website! Your customers or
                      employees can access the system without needing a separate app.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/scheduling-dashboard-calendar.png"
                alt="Scheduling Dispatch Dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Watch How It Works</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-3xl aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/QWiYHSWdffE?start=10"
                title="How to use Scheduling Dispatch"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Top Features</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Clock className="h-6 w-6 text-blue-600" />}
              title="Quick Job Assignments"
              description="Create and assign tasks in seconds. No paperwork, no confusion."
            />
            <FeatureCard
              icon={<Calendar className="h-6 w-6 text-blue-600" />}
              title="Live Tracking & Updates"
              description="See job progress in real-time so you always know what's happening."
            />
            <FeatureCard
              icon={<Bell className="h-6 w-6 text-blue-600" />}
              title="Automated Reminders"
              description="Team members get instant notifications for new tasks or schedule changes."
            />
            <FeatureCard
              icon={<Calendar className="h-6 w-6 text-blue-600" />}
              title="Easy Calendar View"
              description="Check schedules for the day, week, or month in one simple dashboard."
            />
            <FeatureCard
              icon={<DragDropIcon className="h-6 w-6 text-blue-600" />}
              title="Drag & Drop Rescheduling"
              description="Move jobs around easily when things change."
            />
            <FeatureCard
              icon={<Brain className="h-6 w-6 text-blue-600" />}
              title="Smart Team Matching"
              description="Automatically assign jobs to the right person based on skills and availability."
            />
            <FeatureCard
              icon={<History className="h-6 w-6 text-blue-600" />}
              title="Customer & Job History"
              description="Keep records of past jobs to track performance and trends."
            />
            <FeatureCard
              icon={<Smartphone className="h-6 w-6 text-blue-600" />}
              title="Mobile-Friendly Access"
              description="Manage schedules from your phone, tablet, or computer—anytime, anywhere."
            />
            <FeatureCard
              icon={<Globe className="h-6 w-6 text-blue-600" />}
              title="Website Integration"
              description="Link Scheduling Dispatch to your website so employees or customers can access it directly!"
            />
            <FeatureCard
              icon={<Lock className="h-6 w-6 text-blue-600" />}
              title="Access Control"
              description="Set permissions so only the right people can make changes."
            />
            <FeatureCard
              icon={<BarChart3 className="h-6 w-6 text-blue-600" />}
              title="Reports & Insights"
              description="Get useful reports on job completion, worker efficiency, and customer requests."
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Businesses Love Scheduling Dispatch</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <BenefitCard
              title="Saves Time"
              description="No more back-and-forth calls or manual tracking. Everything is automated."
            />
            <BenefitCard
              title="Boosts Productivity"
              description="Assign tasks faster, keep teams on schedule, and complete more jobs per day."
            />
            <BenefitCard
              title="Improves Customer Service"
              description="Faster response times and better organization mean happier customers."
            />
            <BenefitCard
              title="Reduces Errors"
              description="No missed jobs or scheduling mix-ups—everyone gets the right info instantly."
            />
            <BenefitCard
              title="Seamless Website Integration"
              description="Let customers book services or employees view schedules directly on your site!"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f172a] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get Scheduling Dispatch Today!</h2>
              <p className="max-w-[900px] md:text-xl/relaxed">
                Upgrade your business with a simple, fast, and smart scheduling solution.
              </p>
            </div>
            <div className="space-y-4 w-full max-w-md">
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="flex items-center justify-center">
                  <span className="text-white mr-2">📌</span>
                  <span>Want to integrate it with your website? Contact us!</span>
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="flex items-center justify-center">
                  <span className="text-white mr-2">💰</span>
                  <span>For pricing details, contact us:</span>
                </p>
              </div>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            {icon}
            <h3 className="font-bold">{title}</h3>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex space-x-4">
      <div className="mt-1">
        <CheckCircle className="h-6 w-6 text-blue-600" />
      </div>
      <div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
