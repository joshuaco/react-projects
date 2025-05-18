import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

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
              <div className="h-6 w-6 rounded-full bg-primary" />
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
                <Button variant="secondary" className="w-full justify-start">
                  <div className="h-6 w-6 rounded-full bg-blue-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                    G5
                  </div>
                  G5 Customer
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <div className="h-6 w-6 rounded-full bg-green-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                    JD
                  </div>
                  John Doe
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <div className="h-6 w-6 rounded-full bg-purple-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                    AS
                  </div>
                  Alice Smith
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <div className="h-6 w-6 rounded-full bg-yellow-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                    RJ
                  </div>
                  Robert Johnson
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <div className="h-6 w-6 rounded-full bg-pink-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                    EW
                  </div>
                  Emma Wilson
                </Button>
              </div>
            </div>
            <div className="pt-4 border-t mt-4">
              <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
              <Button variant="ghost" className="w-full justify-start">
                <div className="h-6 w-6 rounded-full bg-gray-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                  TM
                </div>
                Thomas Miller
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <div className="h-6 w-6 rounded-full bg-red-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                  SB
                </div>
                Sarah Brown
              </Button>
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
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                Save conversation
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </header>
          {children}
        </div>

        {/* Right Panel - Contact Details (Desktop) */}
        <div className="hidden lg:block w-80 border-l">
          <RightPanelContent />
        </div>
      </div>
    </div>
  )
}

function RightPanelContent() {
  return (
    <>
      <div className="h-14 border-b px-4 flex items-center">
        <h2 className="font-medium">Contact details</h2>
      </div>
      <ScrollArea className="h-[calc(100vh-56px)]">
        <div className="p-4">
          <div className="flex flex-col items-center pb-6 border-b">
            <div className="h-20 w-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl mb-3">
              G5
            </div>
            <h3 className="font-semibold text-lg">G5 Customer</h3>
            <p className="text-sm text-muted-foreground">Premium Account</p>
            <div className="flex items-center mt-1">
              <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
              <span className="text-xs text-muted-foreground">Online</span>
            </div>
          </div>

          <div className="py-4 space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Contact Information</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Email:</span>
                  <span>customer@g5.com</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Phone:</span>
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Customer ID:</span>
                  <span>G5-12345</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Account Details</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Plan:</span>
                  <span>Premium</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Member since:</span>
                  <span>Jan 2023</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Last bill:</span>
                  <span>$150.00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <Button variant="outline" size="sm" className="w-full">
              View full profile
            </Button>
          </div>
        </div>
      </ScrollArea>
    </>
  )
}

