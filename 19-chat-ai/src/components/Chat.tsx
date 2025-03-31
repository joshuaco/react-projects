import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Bot, User } from 'lucide-react';
import type { Message } from '@/types';
import InputForm from './InputForm';

function Chat() {
  const { darkMode } = useTheme();
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al recibir nuevos mensajes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <div
        className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-md mb-4 min-h-[450px] max-h-[500px] overflow-y-auto p-4 space-y-6`}
      >
        {messages.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-full'>
            <div
              className={`p-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'
                } mb-4`}
            >
              <Bot
                size={28}
                className={darkMode ? 'text-blue-400' : 'text-blue-500'}
              />
            </div>
            <p
              className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'
                } font-medium`}
            >
              Inicia una conversación con el asistente AI
            </p>
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
            >
              <div
                className={`flex ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                  } items-end max-w-[85%] gap-2`}
              >
                <div
                  className={`p-2 rounded-full flex-shrink-0 ${message.role === 'assistant'
                      ? darkMode
                        ? 'bg-blue-600'
                        : 'bg-blue-500'
                      : darkMode
                        ? 'bg-gray-700'
                        : 'bg-gray-200'
                    }`}
                >
                  {message.role === 'assistant' ? (
                    <Bot size={20} />
                  ) : (
                    <User size={20} />
                  )}
                </div>

                <div
                  className={`rounded-2xl px-4 py-3 
                           ${message.role === 'assistant'
                      ? darkMode
                        ? 'bg-gray-700 text-white'
                        : 'bg-gray-100 text-gray-800'
                      : darkMode
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-500 text-white'
                    }
                           ${message.role === 'user'
                      ? 'rounded-br-sm'
                      : 'rounded-bl-sm'
                    }`}
                >
                  {message.content}
                </div>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      <InputForm setMessages={setMessages} />
    </>
  );
}

export default Chat;
