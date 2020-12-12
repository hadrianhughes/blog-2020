import React, { FunctionComponent } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism'
import solarizedlight from 'react-syntax-highlighter/dist/cjs/styles/prism/solarizedlight'

interface CodeBlockProps {
  value: string;
  language: string;
}

const CodeBlock: FunctionComponent<CodeBlockProps> = ({ value, language }) => (
  <SyntaxHighlighter language={language} style={solarizedlight}>
    {value}
  </SyntaxHighlighter>
)

export default CodeBlock
