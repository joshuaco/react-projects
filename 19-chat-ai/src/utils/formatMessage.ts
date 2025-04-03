/**
 * Utility for formatting message text with markdown-like syntax
 */

/**
 * Format message text with markdown-like styling (bold, code blocks, headers)
 * @param text The raw message text
 * @param isDarkMode Current theme state for proper styling
 * @returns Formatted HTML string
 */
export const formatMessage = (text: string, isDarkMode: boolean) => {
  // First escape HTML to prevent injection
  const escapeHtml = (str: string) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  // Handle code blocks with triple backticks
  let formattedText = text.replace(/```([\s\S]*?)```/g, (_, code) => {
    const escapedCode = escapeHtml(code.trim());
    return `<pre class="${isDarkMode
      ? 'bg-gray-800 text-gray-100 border border-gray-700'
      : 'bg-gray-50 text-gray-800 border border-gray-200'
      } p-3 rounded-md my-1 overflow-x-auto font-mono text-sm leading-relaxed"
    ><code>${escapedCode}</code></pre>`;
  });

  // Replace **text** with bold text
  formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Handle inline code with single backticks
  formattedText = formattedText.replace(/`([^`]+)`/g, (_, code) => {
    return `<code class="${isDarkMode
      ? 'bg-gray-700 text-gray-100'
      : 'bg-gray-100 text-gray-800'
      } px-1.5 py-0.5 rounded font-mono text-sm">${escapeHtml(code)}</code>`;
  });

  // Handle headers with hash symbols
  formattedText = formattedText.replace(/^####\s+(.*?)$/gm, '<h4 class="text-lg font-bold mt-2 mb-1">$1</h4>');
  formattedText = formattedText.replace(/^###\s+(.*?)$/gm, '<h3 class="text-lg font-bold mt-2 mb-1">$1</h3>');
  formattedText = formattedText.replace(/^##\s+(.*?)$/gm, '<h2 class="text-xl font-bold mt-3 mb-1">$1</h2>');
  formattedText = formattedText.replace(/^#\s+(.*?)$/gm, '<h1 class="text-2xl font-bold mt-3 mb-2">$1</h1>');

  // Handle bullet lists
  formattedText = formattedText.replace(/^-\s+(.*?)$/gm, '<ul class="list-disc ml-6 my-1"><li>$1</li></ul>');

  // Handle numbered lists
  formattedText = formattedText.replace(/^\d+\.\s+(.*?)$/gm, '<ol class="list-decimal ml-6 my-1"><li>$1</li></ol>');

  return formattedText;
}; 