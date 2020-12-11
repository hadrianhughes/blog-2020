import React, { FunctionComponent } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedlight } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface CodeBlockProps {
  value: string
  language: string
}

const CodeBlock: FunctionComponent<CodeBlockProps> = ({ value, language }) => (
  <SyntaxHighlighter language={language} style={solarizedlight}>
    {value}
  </SyntaxHighlighter>
)

export default CodeBlock
