import { Outlet } from "react-router";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

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
          <div className="space-y-4 p-4">
            <div className="space-y-1">
              <h3 className="px-2 text-sm font-semibold">Contacts</h3>
              <div className="space-y-1">
                {Array(5).fill(0).map((_, i) => (
                  <div key={i} className="flex items-center p-2 rounded-md">
                    <Skeleton className="h-6 w-6 rounded-full mr-2" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t mt-4">
              <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
              {Array(2).fill(0).map((_, i) => (
                <div key={i} className="flex items-center p-2 rounded-md">
                  <Skeleton className="h-6 w-6 rounded-full mr-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-14 px-4 flex items-center justify-between">
            <div className="lg:hidden w-10" /> {/* Spacer for mobile menu button */}
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-32 rounded-md hidden sm:inline-flex" />
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
          </header>
          <Outlet />
        </div>

        {/* Right Panel - Contact Details (Desktop) */}
        <div className="hidden lg:block w-80 border-l">
          <RightPanelSkeleton />
        </div>
      </div>
    </div>
  );
}

function RightPanelSkeleton() {
  return (
    <>
      <div className="h-14 border-b px-4 flex items-center">
        <h2 className="font-medium">Contact details</h2>
      </div>
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