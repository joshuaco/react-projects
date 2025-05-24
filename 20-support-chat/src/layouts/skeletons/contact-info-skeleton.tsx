import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

function ContactInfoSkeleton() {
  return (
    <>
      <ScrollArea className="h-[calc(100vh-56px)]">
        <div className="p-4">
          <div className="flex flex-col items-center pb-6 border-b">
            <Skeleton className="h-20 w-20 rounded-full mb-3" />
            <Skeleton className="h-5 w-32 mb-2" />
            <Skeleton className="h-4 w-24 mb-2" />
            <div className="flex items-center mt-1">
              <Skeleton className="h-2 w-2 rounded-full mr-1" />
              <Skeleton className="h-3 w-12" />
            </div>
          </div>

          <div className="py-4 space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Contact Information</h4>
              <div className="space-y-2">
                {Array(3).fill(0).map((_, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-28" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Account Details</h4>
              <div className="space-y-2">
                {Array(3).fill(0).map((_, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-28" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <Skeleton className="h-9 w-full rounded-md" />
          </div>
        </div>
      </ScrollArea>
    </>
  );
}

export default ContactInfoSkeleton;