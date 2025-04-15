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
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export interface CaseStudyProps {
  id?: string | number
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[] | string // Allow both array and string formats
  testimonial?: {
    quote: string
    author: string
    position?: string
  }
  image?: string
  imageUrl?: string
  shortDescription?: string
}

// Default fallback image
const DEFAULT_IMAGE = "/data-driven-insights.png"

export function CaseStudyDialog({
  caseStudy,
  buttonVariant = "outline",
  buttonText = "Read Full Case Study",
}: {
  caseStudy: CaseStudyProps
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
  buttonText?: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  // Process results to handle both string and array formats
  const processResults = () => {
    if (Array.isArray(caseStudy.results)) {
      return caseStudy.results
    } else if (typeof caseStudy.results === "string") {
      // Split the string by newline characters to create an array
      return caseStudy.results.split("\n").filter((line) => line.trim() !== "")
    }
    return []
  }

  const resultsArray = processResults()

  // Get a valid image source or use default
  const getValidImageSource = () => {
    if (caseStudy.imageUrl && caseStudy.imageUrl.trim() !== "") {
      return caseStudy.imageUrl
    }
    if (caseStudy.image && caseStudy.image.trim() !== "") {
      return caseStudy.image
    }
    return DEFAULT_IMAGE
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant}>{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{caseStudy.title}</DialogTitle>
          <DialogDescription className="text-base font-medium">
            {caseStudy.client} | {caseStudy.industry}
          </DialogDescription>
        </DialogHeader>
        <div className="relative h-64 w-full my-4">
          <Image
            src={getValidImageSource() || "/placeholder.svg"}
            alt={caseStudy.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-bold mb-2">Challenge</h4>
            <p className="text-muted-foreground">{caseStudy.challenge}</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Solution</h4>
            <p className="text-muted-foreground whitespace-pre-line">{caseStudy.solution}</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Results</h4>
            <ul className="space-y-2">
              {resultsArray.map((result, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5 shrink-0" />
                  <span>{result.replace(/^- /, "")}</span>
                </li>
              ))}
            </ul>
          </div>
          {caseStudy.testimonial && (
            <div className="bg-muted p-4 rounded-md border-l-4 border-primary italic">
              <p className="mb-2">"{caseStudy.testimonial.quote}"</p>
              <p className="text-sm font-medium">
                — {caseStudy.testimonial.author}
                {caseStudy.testimonial.position && `, ${caseStudy.testimonial.position}`}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudyProps }) {
  // Get a valid image source or use default
  const getValidImageSource = () => {
    if (caseStudy.imageUrl && caseStudy.imageUrl.trim() !== "") {
      return caseStudy.imageUrl
    }
    if (caseStudy.image && caseStudy.image.trim() !== "") {
      return caseStudy.image
    }
    return DEFAULT_IMAGE
  }

  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <div className="aspect-video relative">
        <Image src={getValidImageSource() || "/placeholder.svg"} alt={caseStudy.title} fill className="object-cover" />
      </div>
      <CardContent className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">
          <strong>Client:</strong> {caseStudy.client} | <strong>Industry:</strong> {caseStudy.industry}
        </p>
        <p className="text-muted-foreground mb-4">
          {caseStudy.shortDescription || caseStudy.challenge.substring(0, 150)}...
        </p>
        <div className="mt-auto">
          <CaseStudyDialog caseStudy={caseStudy} />
        </div>
      </CardContent>
    </Card>
  )
}
