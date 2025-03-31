import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useModel } from '@/context/ModelContext';
import { Send } from 'lucide-react';
import { generateText } from '@/utils';
import type { Message } from '@/types';

type InputFormProps = {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};

function InputForm({ setMessages }: InputFormProps) {
  const [input, setInput] = useState('');
  const { darkMode } = useTheme();
  const { selectedModel } = useModel();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages((prevMessages) => [...prevMessages, { role: 'user', content: input }]);
    setInput('');

    // Add initial "thinking" message from assistant
    setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: '...' }]);

    try {
      const result = generateText(input, selectedModel.id);

      // Replace thinking indicator with actual response
      let isFirstChunk = true;

      for await (const text of result.textStream) {
        setMessages((prevMessages) => {
          const lastMessage = prevMessages[prevMessages.length - 1];

          if (lastMessage && lastMessage.role === 'assistant') {
            return [
              ...prevMessages.slice(0, -1),
              {
                ...lastMessage,
                content: isFirstChunk ? text : lastMessage.content + text
              }
            ];
          } else {
            return [
              ...prevMessages,
              { role: 'assistant', content: text }
            ];
          }
        });

        isFirstChunk = false;
      }
    } catch (error) {
      // If error occurs, update the thinking message to show error
      setMessages((prevMessages) => {
        const lastMessage = prevMessages[prevMessages.length - 1];
        if (lastMessage && lastMessage.role === 'assistant') {
          return [...prevMessages.slice(0, -1), {
            ...lastMessage,
            content: 'Sorry, there was an error generating the response.'
          }];
        }
        return prevMessages;
      });
    }
  };

  return (
    <form className='relative' onSubmit={handleSubmit}>
      <input
        type='text'
        name='prompt'
        id='prompt'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Type your message...'
        className={`w-full p-4 pr-12 rounded-lg ${darkMode
          ? 'bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-500'
          : 'bg-white text-gray-900 placeholder-gray-400 focus:ring-blue-500'
          } shadow-sm focus:outline-none focus:ring-2`}
      />
      <button
        type='submit'
        className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg ${darkMode
          ? 'text-blue-400 hover:bg-gray-700'
          : 'text-blue-500 hover:bg-gray-100'
          } transition-colors duration-200`}
      >
        <Send size={20} />
      </button>
    </form>
  );
}

export default InputForm;
