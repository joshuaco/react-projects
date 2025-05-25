import { MessageSquare } from "lucide-react"

export default function EmptyChatState() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <MessageSquare className="w-8 h-8 text-primary" />
      </div>
      <h2 className="text-2xl font-semibold mb-2">No chat selected</h2>
      <p className="text-muted-foreground mb-6 max-w-sm">
        Select a conversation from the sidebar to start chatting with your customers
      </p>
    </div>
  )
};