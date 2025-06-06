import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Outlet, useNavigate } from 'react-router';
import { LogOut, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactList from '@/components/chat/contact-list';
import ContactDetails from '@/components/chat/contact-details';

export default function ChatLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    queryClient.clear();
    navigate('/auth', { replace: true });
  };

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
      <aside
        className={`fixed inset-y-0 left-0 transform lg:relative lg:translate-x-0 transition-transform duration-200 ease-in-out z-40 overflow-y-auto w-64 border-r bg-muted/10 lg:block 
          ${sidebarOpen ? 'translate-x-0 bg-white' : '-translate-x-full'}`}
      >
        <div className="p-4 border-b h-14">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-primary" />
              <span className="font-semibold">NexTalk</span>
            </div>
            {sidebarOpen && (
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
        <ContactList />

        <div className="py-2 px-4 border-t h-14">
          <Button
            variant="ghost"
            size="icon"
            className="w-full justify-start cursor-pointer"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            <span className="text-sm ml-2">Logout</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-14 px-4 flex items-center justify-between border-b">
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
  );
}

function RightPanelContent() {
  return (
    <>
      <div className="h-14 border-b px-4 flex items-center">
        <h2 className="font-medium">Contact details</h2>
      </div>
      <ContactDetails />
    </>
  );
}
