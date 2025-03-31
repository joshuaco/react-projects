import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import type { Message } from "@/types";
import InputForm from "./InputForm";

function Chat() {
   const { darkMode } = useTheme();
   const [messages, setMessages] = useState<Message[]>([]);

   return (
      <>
         <div className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-sm mb-4 min-h-[450px] max-h-[500px] overflow-y-auto p-4 space-y-4`}>
            {messages.length === 0 ? (
               <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Start a conversation with the AI assistant
               </p>
            ) : (
               messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} space-x-3`}>
                     {message.content && (
                        <div className={`p-2 rounded-lg ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                           }`}>
                           {message.content}
                        </div>
                     )}
                  </div>
               ))
            )}
         </div>
         <InputForm setMessages={setMessages} messages={messages} />
      </>

   )
}

export default Chat;