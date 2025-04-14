import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About TechCorp</h1>
              <p className="text-muted-foreground md:text-xl">
                Founded in 2010, TechCorp has been at the forefront of technological innovation, providing cutting-edge
                solutions to businesses worldwide.
              </p>
              <p className="text-muted-foreground">
                Our mission is to empower businesses with technology that drives growth, efficiency, and competitive
                advantage. With a team of expert engineers, developers, and consultants, we deliver tailored solutions
                that address the unique challenges of each client.
              </p>
              <p className="text-muted-foreground">
                We believe in the transformative power of technology and are committed to helping our clients navigate
                the digital landscape with confidence.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/business-meeting.jpeg"
                alt="TechCorp Team Meeting"
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
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Values</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide everything we do.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            {[
              {
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible with technology.",
              },
              {
                title: "Excellence",
                description: "We are committed to delivering the highest quality in everything we do.",
              },
              {
                title: "Integrity",
                description: "We operate with transparency, honesty, and ethical business practices.",
              },
              {
                title: "Collaboration",
                description: "We work closely with our clients to ensure their success.",
              },
              {
                title: "Adaptability",
                description: "We embrace change and evolve with the rapidly shifting technology landscape.",
              },
              {
                title: "Impact",
                description: "We measure our success by the positive difference we make for our clients.",
              },
            ].map((value, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-center text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team Culture</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We believe in the power of collaboration and shared success.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image src="/images/hands-together.jpeg" alt="Team Collaboration" fill className="object-cover" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">United in Purpose</h3>
              <p className="text-muted-foreground">
                At TechCorp, we foster a culture of collaboration, innovation, and mutual respect. Our diverse team
                brings together unique perspectives and expertise, creating an environment where creativity thrives and
                exceptional solutions emerge.
              </p>
              <p className="text-muted-foreground">
                We believe that our greatest strength lies in our people and their ability to work together toward
                common goals. This collaborative spirit extends to our relationships with clients, whom we consider
                partners in the journey toward technological excellence.
              </p>
              <Button className="mt-4">Join Our Team</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Leadership Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the experts driving our vision forward.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            {[1, 2, 3].map((leader) => (
              <div key={leader} className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src={`/confident-professional.png?height=160&width=160&query=professional%20headshot%20${leader}`}
                    alt={`Team Member ${leader}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Jane Doe</h3>
                  <p className="text-muted-foreground">Chief Executive Officer</p>
                </div>
                <p className="text-center text-muted-foreground">
                  With over 15 years of experience in the tech industry, Jane leads our company with vision and
                  expertise.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f172a] text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Team</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're always looking for talented individuals to join our growing team.
              </p>
            </div>
            <Button size="lg" variant="secondary">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
