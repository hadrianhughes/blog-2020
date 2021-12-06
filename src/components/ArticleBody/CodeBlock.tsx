import React, { FunctionComponent } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism'
import solarizedlight from 'react-syntax-highlighter/dist/cjs/styles/prism/solarizedlight'
import materialDark from 'react-syntax-highlighter/dist/cjs/styles/prism/material-dark'

interface CodeBlockProps {
  value: string;
  language: string;
  darkMode?: boolean;
}

const CodeBlock: FunctionComponent<CodeBlockProps> = ({ value, language, darkMode }) => (
  <SyntaxHighlighter language={language} style={darkMode ? materialDark : solarizedlight}>
    {value || ''}
  </SyntaxHighlighter>
)

export default CodeBlock
