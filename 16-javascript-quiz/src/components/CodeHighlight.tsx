import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CodeHighlight({ code }: { code: string }) {
  return (
    <>
      <SyntaxHighlighter
        language='javascript'
        style={atomOneDarkReasonable}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </>
  );
}

export default CodeHighlight;
