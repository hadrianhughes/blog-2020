import React, { FunctionComponent } from 'react'
import { Document, BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Container, Heading, Paragraph } from './styles'

interface ArticleBodyProps {
  heading: string
  data: Document
}

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <Paragraph>{children}</Paragraph>
  }
}

const ArticleBody: FunctionComponent<ArticleBodyProps> = ({ heading, data }) => (
  <Container>
    <Heading>{heading}</Heading>
    {documentToReactComponents(data, options)}
  </Container>
)

export default ArticleBody
