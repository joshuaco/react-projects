import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Send } from 'lucide-react';
import type { Message } from '@/types';

type InputFormProps = {
  setMessages: (messages: Message[]) => void;
  messages: Message[];
};

function InputForm({ setMessages, messages }: InputFormProps) {
  const [input, setInput] = useState('');
  const { darkMode } = useTheme();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');
  };

  return (
    <form className='relative' onSubmit={handleSubmit}>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Type your message...'
        className={`w-full p-4 pr-12 rounded-lg ${
          darkMode
            ? 'bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-500'
            : 'bg-white text-gray-900 placeholder-gray-400 focus:ring-blue-500'
        } shadow-sm focus:outline-none focus:ring-2`}
      />
      <button
        type='submit'
        className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg ${
          darkMode
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
