"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export interface CaseStudyProps {
  id: string
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  testimonial?: {
    quote: string
    author: string
    position: string
  }
  imageUrl: string
  shortDescription?: string
}

interface CaseStudyCardProps {
  caseStudy: CaseStudyProps
}

export function CaseStudyDialog({ caseStudy }: { caseStudy: CaseStudyProps }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Read Full Case Study</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{caseStudy.title}</DialogTitle>
          <DialogDescription className="text-base font-medium text-gray-700">
            {caseStudy.client} | {caseStudy.industry}
          </DialogDescription>
        </DialogHeader>
        <div className="relative h-64 w-full my-4">
          <Image
            src={caseStudy.imageUrl || "/placeholder.svg"}
            alt={caseStudy.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-bold mb-2">Challenge</h4>
            <p className="text-gray-700">{caseStudy.challenge}</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Solution</h4>
            <p className="text-gray-700">{caseStudy.solution}</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Results</h4>
            <ul className="list-disc pl-5 space-y-1">
              {caseStudy.results.map((result, index) => (
                <li key={index} className="text-gray-700">
                  {result}
                </li>
              ))}
            </ul>
          </div>
          {caseStudy.testimonial && (
            <div className="bg-gray-50 p-4 rounded-md border-l-4 border-blue-500 italic">
              <p className="text-gray-700 mb-2">"{caseStudy.testimonial.quote}"</p>
              <p className="text-sm font-medium">
                — {caseStudy.testimonial.author}, {caseStudy.testimonial.position}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
