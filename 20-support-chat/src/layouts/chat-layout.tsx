import { useState } from "react"
import { Outlet } from "react-router"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactList from "@/components/chat/contact-list"
import ContactInfoEmpty from "@/components/empty-state/contact-info-empty"

export default function ChatLayout() {
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
              <Button variant="ghost" size="icon" className="h-6 w-6 lg:hidden"
                onClick={() => setSidebarOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
        <ContactList />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-14 px-4 flex items-center justify-between">
            <div className="w-10" /> {/* Spacer for mobile menu button */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="inline-flex">
                Save conversation
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </header>
          <Outlet />
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
      <ContactInfoEmpty />
    </>
  )
}

