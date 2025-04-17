import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <head>
        <title>About Us - Hawkeye Core</title>
        <meta name="description" content="Learn more about Hawkeye Core, our mission, and our team." />
        <meta name="keywords" content="About Hawkeye Core, IT consulting, technology solutions" />
        <link rel="canonical" href="https://www.hawkeye-core.com/about" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <header className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h1>
          </header>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Hawkeye Core</h2>
              <p className="text-muted-foreground md:text-xl">
                Founded in 2022 and based in Houston, Texas, Hawkeye Core is an IT consulting company committed to
                delivering cutting-edge technology solutions that empower businesses to excel in today's competitive
                landscape.
              </p>
              <p className="text-muted-foreground">
                We specialize in a broad range of services, including the development and deployment of software agents,
                IT consulting, app and website support, network solutions, and professional training.
              </p>
              <p className="text-muted-foreground">
                At Hawkeye Core, our team of skilled professionals is dedicated to understanding your unique business
                challenges and crafting tailored solutions that drive efficiency, enhance security, and optimize
                performance.
              </p>
              <p className="text-muted-foreground">
                Whether you are seeking to improve your existing systems or implement new technologies, we are your
                trusted partner in achieving technological excellence.
              </p>
              <p className="text-muted-foreground">
                Our mission is to help businesses leverage advanced IT solutions to streamline operations, improve user
                experiences, and foster long-term growth. With a focus on innovation and client satisfaction, Hawkeye
                Core ensures that your business remains agile and ahead in an ever-changing digital landscape.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/business-meeting.jpeg"
                alt="Hawkeye Core Team Meeting"
                width={550}
                height={550}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Satisfied Customers",
                description: "We prioritize client satisfaction in every project we undertake.",
              },
              {
                title: "Professional Staff",
                description: "Our team consists of skilled IT professionals with extensive industry experience.",
              },
              {
                title: "Support",
                description: "We provide ongoing support to ensure your systems run smoothly.",
              },
              {
                title: "Fair Prices",
                description: "We offer competitive pricing without compromising on quality.",
              },
            ].map((value, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <CheckCircle className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-center text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <Link href="/contact">
            <Button size="lg" className="mx-auto">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
