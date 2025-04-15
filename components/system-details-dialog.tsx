"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export interface SystemDetailsProps {
  name: string
  description: string
  features: string[]
  benefits?: string[]
  imageUrl?: string | null
  industry?: string
}

interface SystemDetailsDialogProps {
  system: SystemDetailsProps | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

// Hardcoded fallback image that we know exists
const FALLBACK_IMAGE = "/interconnected-healthcare.png"

export function SystemDetailsDialog({ system, open, onOpenChange }: SystemDetailsDialogProps) {
  if (!system) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{system.name}</DialogTitle>
          <DialogDescription className="text-base text-foreground/70">
            {system.industry && <span className="font-medium text-primary">{system.industry}</span>}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
            {/* Completely avoid using system.imageUrl directly in the src attribute */}
            {/* Instead, conditionally render different Image components */}
            {system.imageUrl && system.imageUrl.trim() !== "" ? (
              <Image
                src={system.imageUrl || "/placeholder.svg"}
                alt={system.name}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <Image
                src={FALLBACK_IMAGE || "/placeholder.svg"}
                alt={system.name}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Overview</h3>
            <p className="text-muted-foreground">{system.description}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="space-y-2">
              {system.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          {system.benefits && system.benefits.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Benefits</h3>
              <ul className="space-y-2">
                {system.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#0055b3] mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex justify-end">
            <Button onClick={() => onOpenChange(false)}>Close</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
