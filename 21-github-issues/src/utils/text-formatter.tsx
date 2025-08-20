// Utility function to format HTML elements in text
export function formatCodeElements(text: string) {
  // Regex to match HTML tags like <div>, </div>, <span>, etc.
  const formatRegex = /(<\/?[a-zA-Z][a-zA-Z0-9]*(?:\s[^>]*)?\/?>|`[^`]+`)/g;

  const parts = text.split(formatRegex);

  return parts.map((part, idx) => {
    // Check if it's a backtick-wrapped word
    if (part.startsWith('`') && part.endsWith('`')) {
      // Remove the backticks and wrap in <code>
      const content = part.slice(1, -1);
      return (
        <code
          key={idx}
          className='bg-gray-200 px-1 py-0.5 rounded font-mono dark:bg-gray-500 dark:text-white'
        >
          {content}
        </code>
      );
    }
    return part;
  });
}
