import { Skeleton } from "@/components/ui/skeleton"

export default function ContactLoading() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4 text-center">
          <Skeleton className="h-10 w-[250px] mx-auto" />
          <Skeleton className="h-20 w-full max-w-[700px] mx-auto" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Skeleton className="h-[500px] w-full rounded-lg" />
          <div className="space-y-6">
            <Skeleton className="h-[200px] w-full rounded-lg" />
            <Skeleton className="h-[200px] w-full rounded-lg" />
          </div>
        </div>

        <div className="mx-auto max-w-[700px] text-center">
          <Skeleton className="h-8 w-[300px] mx-auto" />
          <Skeleton className="h-16 w-full mt-2" />
          <div className="mt-4 flex justify-center gap-4">
            <Skeleton className="h-10 w-[150px]" />
            <Skeleton className="h-10 w-[150px]" />
          </div>
        </div>
      </div>
    </div>
  )
}
