import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { streamText } from 'ai';

const openrouter = createOpenRouter({
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY
});

export const generate = async (input: string, model: string) => {
  const result = streamText({
    model: openrouter(model),
    prompt: input
  });

  return result.textStream;
};
