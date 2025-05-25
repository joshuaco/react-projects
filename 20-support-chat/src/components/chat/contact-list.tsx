import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router";

import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

import { getClients } from "@/mock/fake-data";
import { cn } from "@/lib/utils"
import type { Client } from "@/interfaces/chat";

function ContactItem({ contact }: { contact: Client; }) {
  const contactPath = `/chat/${contact.id}`;

  return (
    <NavLink
      to={contactPath}
      className={({ isActive: routeIsActive }) =>
        cn(
          "flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/60 group",
          (routeIsActive) && "bg-muted border border-border"
        )
      }
    >
      <>
        <div className="relative flex-shrink-0">
          <div className={cn(
            "h-10 w-10 rounded-full flex items-center justify-center text-white text-sm font-medium shadow-sm",
            "bg-primary"
          )}>
            {contact.name.split(' ').map(name => name.charAt(0)).join('')}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-sm truncate text-foreground">
              {contact.name}
            </h4>
          </div>
        </div>
      </>
    </NavLink>
  );
}

function ContactList() {
  const { data: contacts } = useQuery({
    queryKey: ["clients"],
    queryFn: getClients
  })

  return (
    <ScrollArea className="h-[calc(100vh-64px)]">
      <div className="p-4 space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">Contacts</h3>
            <Badge variant="secondary" className="text-xs">
              {contacts?.length}
            </Badge>
          </div>
          <div className="space-y-1">
            {contacts?.map((contact) => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t space-y-6">
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">Recent</h3>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}

export default ContactList;