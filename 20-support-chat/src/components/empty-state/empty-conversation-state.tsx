import { MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EmptyConversationState() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <MessageCircle className="w-8 h-8 text-primary" />
      </div>
      <h2 className="text-2xl font-semibold mb-2">No messages yet</h2>
      <p className="text-muted-foreground mb-6 max-w-sm">
        Start a conversation with your customer by sending your first message
      </p>
      <Button className="gap-2">
        <Send className="w-4 h-4" />
        <span>Send first message</span>
      </Button>
    </div>
  )
} 