import { UserCircle2 } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

function ContactInfoEmpty() {
  return (
    <ScrollArea className="h-[calc(100vh-56px)]">
      <div className="p-4">
        <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)] text-center">
          <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-4">
            <UserCircle2 className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="font-semibold text-lg mb-2">No Contact Selected</h3>
          <p className="text-sm text-muted-foreground max-w-[280px]">
            Select a contact from the chat list to view their information and details
          </p>
        </div>
      </div>
    </ScrollArea>
  );
}

export default ContactInfoEmpty; 