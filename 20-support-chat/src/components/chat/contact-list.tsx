import { NavLink } from "react-router";
import { ScrollArea } from "../ui/scroll-area";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

interface Contact {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  isOnline?: boolean;
  lastMessage?: string;
  timestamp?: string;
  unreadCount?: number;
}

const contacts: Contact[] = [
  {
    id: "g5",
    name: "G5 Customer",
    initials: "G5",
    avatarColor: "bg-blue-500",
    isOnline: true,
    lastMessage: "Thanks for your help!",
    timestamp: "2m ago",
    unreadCount: 2
  },
  {
    id: "1",
    name: "John Doe",
    initials: "JD",
    avatarColor: "bg-green-500",
    isOnline: true,
    lastMessage: "Can we schedule a call?",
    timestamp: "5m ago"
  },
  {
    id: "alice",
    name: "Alice Smith",
    initials: "AS",
    avatarColor: "bg-purple-500",
    isOnline: false,
    lastMessage: "Perfect, let's proceed",
    timestamp: "1h ago"
  },
  {
    id: "robert",
    name: "Robert Johnson",
    initials: "RJ",
    avatarColor: "bg-yellow-500",
    isOnline: true,
    lastMessage: "I'll review the documents",
    timestamp: "2h ago"
  },
  {
    id: "emma",
    name: "Emma Wilson",
    initials: "EW",
    avatarColor: "bg-pink-500",
    isOnline: false,
    lastMessage: "Great work on the project",
    timestamp: "1d ago"
  }
];

const recentContacts: Contact[] = [
  {
    id: "thomas",
    name: "Thomas Miller",
    initials: "TM",
    avatarColor: "bg-gray-500",
    isOnline: false,
    lastMessage: "Thanks for the update",
    timestamp: "2d ago"
  },
  {
    id: "sarah",
    name: "Sarah Brown",
    initials: "SB",
    avatarColor: "bg-red-500",
    isOnline: true,
    lastMessage: "See you tomorrow",
    timestamp: "3d ago"
  }
];

function ContactItem({ contact, isActive = false }: { contact: Contact; isActive?: boolean }) {
  const contactPath = contact.id === "1" ? "/chat/1" : `/chat/${contact.id}`;

  return (
    <NavLink
      to={contactPath}
      className={({ isActive: routeIsActive }) =>
        cn(
          "flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-muted/60 group",
          (routeIsActive || isActive) && "bg-muted border border-border"
        )
      }
    >
      {() => (
        <>
          <div className="relative flex-shrink-0">
            <div className={cn(
              "h-10 w-10 rounded-full flex items-center justify-center text-white text-sm font-medium shadow-sm",
              contact.avatarColor
            )}>
              {contact.initials}
            </div>
            {contact.isOnline && (
              <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-400 border-2 border-background rounded-full"></div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-sm truncate text-foreground">
                {contact.name}
              </h4>
              <div className="flex items-center gap-1.5">
                {contact.timestamp && (
                  <span className="text-xs text-muted-foreground">
                    {contact.timestamp}
                  </span>
                )}
              </div>
            </div>
            {contact.lastMessage && (
              <p className="text-xs text-muted-foreground truncate mt-0.5">
                {contact.lastMessage}
              </p>
            )}
          </div>
        </>
      )}
    </NavLink>
  );
}

function ContactList() {
  return (
    <ScrollArea className="h-[calc(100vh-64px)]">
      <div className="p-4 space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">Contacts</h3>
            <Badge variant="secondary" className="text-xs">
              {contacts.length}
            </Badge>
          </div>
          <div className="space-y-1">
            {contacts.map((contact) => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t space-y-6">
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">Recent</h3>
            <Badge variant="outline" className="text-xs">
              {recentContacts.length}
            </Badge>
          </div>
          <div className="space-y-1">
            {recentContacts.map((contact) => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
          </div>
        </div>

      </div>

    </ScrollArea>
  );
}

export default ContactList;