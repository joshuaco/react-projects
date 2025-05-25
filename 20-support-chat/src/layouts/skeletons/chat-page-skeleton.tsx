import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"

export default function ChatPageSkeleton() {
  return (
    <div className="flex-1 flex flex-col">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {/* Agent message skeleton */}
          <div className="flex gap-2 max-w-[80%]">
            <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-32" />
              </div>
              <Skeleton className="h-24 w-[300px] rounded-lg" />
              <div className="flex items-center gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-8 w-8 rounded-md" />
                ))}
              </div>
            </div>
          </div>

          {/* User message skeleton */}
          <div className="flex flex-col items-end">
            <div className="text-right mb-1">
              <Skeleton className="h-4 w-32 ml-auto" />
            </div>
            <Skeleton className="h-20 w-[250px] rounded-lg" />
          </div>

          {/* Repeat a few more message skeletons */}
          <div className="flex gap-2 max-w-[80%]">
            <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-32" />
              </div>
              <Skeleton className="h-16 w-[280px] rounded-lg" />
              <div className="flex items-center gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-8 w-8 rounded-md" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
      <div className="p-4 border-t">
        <div className="flex items-center gap-2">
          <Skeleton className="h-[44px] w-full" />
          <Skeleton className="h-[44px] w-[100px]" />
        </div>
      </div>
    </div>
  )
} 