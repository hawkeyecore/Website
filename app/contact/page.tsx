"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    department: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, department: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Thank you for your message. We'll get back to you soon!")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      department: "",
    })
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We'd love to hear from you. Get in touch with our team.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 py-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select value={formData.department} onValueChange={handleSelectChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="billing">Billing</SelectItem>
                    <SelectItem value="general">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject of your message"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="text-muted-foreground">You can also reach us using the information below.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-[#0055b3]" />
                <div>
                  <h3 className="font-medium">Our Office</h3>
                  <p className="text-muted-foreground">
                    10780 Westview Dr Ste F PMB 10006
                    <br />
                    Houston, TX 77043
                    <br />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-[#0055b3]" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">+1 281-760-7332</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-[#0055b3]" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">info@hawkeye-core.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-[#0055b3]" />
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9am - 5pm
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border overflow-hidden">
              <div className="aspect-[16/9] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.525526603483!2d-95.5681177239516!3d29.791358330516733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640dbacf5ff8837%3A0x1c4b21fd66fb2263!2sHawkeye%20Core!5e0!3m2!1sen!2sus!4v1740730891466!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hawkeye Core Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
