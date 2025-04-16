"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export interface CaseStudyProps {
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
  imageUrl?: string
}

interface CaseStudyDialogProps {
  caseStudy: CaseStudyProps
  buttonVariant?: "default" | "outline" | "secondary"
  buttonText?: string
}

export function CaseStudyDialog({
  caseStudy,
  buttonVariant = "outline",
  buttonText = "Read Full Case Study",
}: CaseStudyDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant={buttonVariant} onClick={() => setOpen(true)}>
        {buttonText}
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{caseStudy.title}</DialogTitle>
            <DialogDescription className="text-base">
              {caseStudy.client} | {caseStudy.industry}
            </DialogDescription>
          </DialogHeader>

          {caseStudy.imageUrl && (
            <div className="relative h-[200px] md:h-[300px] w-full rounded-md overflow-hidden my-4">
              <Image
                src={caseStudy.imageUrl || "/placeholder.svg"}
                alt={caseStudy.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Challenge</h3>
              <p className="text-muted-foreground">{caseStudy.challenge}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Solution</h3>
              <p className="text-muted-foreground">{caseStudy.solution}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Results</h3>
              <ul className="space-y-2">
                {caseStudy.results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00a3e0] mt-0.5" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {caseStudy.testimonial && (
              <div className="bg-muted p-4 rounded-md italic">
                <p className="mb-2">"{caseStudy.testimonial.quote}"</p>
                <p className="text-sm font-medium">
                  — {caseStudy.testimonial.author}, {caseStudy.testimonial.position}
                </p>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
