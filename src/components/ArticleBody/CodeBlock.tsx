import React, { FunctionComponent } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism'
import solarizedlight from 'react-syntax-highlighter/dist/cjs/styles/prism/solarizedlight'
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula'

interface CodeBlockProps {
  value: string;
  language: string;
  darkMode?: boolean;
}

const CodeBlock: FunctionComponent<CodeBlockProps> = ({ value, language, darkMode }) => (
  <SyntaxHighlighter language={language} style={darkMode ? dracula : solarizedlight}>
    {value}
  </SyntaxHighlighter>
)

export default CodeBlock
