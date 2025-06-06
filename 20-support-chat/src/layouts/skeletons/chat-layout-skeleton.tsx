import { Outlet } from "react-router";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ContactInfoSkeleton from "./contact-info-skeleton";

export default function ChatLayoutSkeleton() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile Sidebar Trigger */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 left-2 h-10 w-10 lg:hidden z-50"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform lg:relative lg:translate-x-0 transition-transform duration-200 ease-in-out z-40 
          ${sidebarOpen ? "translate-x-0 bg-white" : "-translate-x-full"} 
          w-64 border-r bg-muted/10 lg:block`}
      >
        <div className="p-4 border-b h-14">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-primary animate-pulse" />
              <span className="font-semibold">NexTalk</span>
            </div>
            {sidebarOpen && (
              <Button variant="ghost" size="icon" className="h-6 w-6 lg:hidden" onClick={() => setSidebarOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-64px)]">
          <div className="p-4 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-5 w-5 rounded-full" />
              </div>
              <div className="space-y-1">
                {Array(5).fill(0).map((_, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg">
                    <div className="relative flex-shrink-0">
                      <Skeleton className="h-10 w-10 rounded-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-3 w-10" />
                      </div>
                      <Skeleton className="h-3 w-32 mt-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4 space-y-3">
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-5 w-5 rounded-full" />
              </div>
              <div className="space-y-1">
                {Array(2).fill(0).map((_, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg">
                    <div className="relative flex-shrink-0">
                      <Skeleton className="h-10 w-10 rounded-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-3 w-8" />
                      </div>
                      <Skeleton className="h-3 w-28 mt-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-14 px-4 flex items-center justify-between">
            <div className="w-10" /> {/* Spacer for mobile menu button */}
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-32 rounded-md hidden sm:inline-flex" />
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
          </header>
          <Outlet />
        </div>

        {/* Right Panel - Contact Details (Desktop) */}
        <div className="hidden lg:block w-80 border-l">
          <div className="h-14 border-b px-4 flex items-center">
            <h2 className="font-medium">Contact details</h2>
          </div>
          <ContactInfoSkeleton />
        </div>
      </div>
    </div>
  );
}