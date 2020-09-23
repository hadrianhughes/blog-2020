import React, { FunctionComponent } from 'react'
import { Document } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Container, Heading } from './styles'

interface ArticleBodyProps {
  heading: string
  data: Document
}

const ArticleBody: FunctionComponent<ArticleBodyProps> = ({ heading, data }) => (
  <Container>
    <Heading>{heading}</Heading>
    {documentToReactComponents(data)}
  </Container>
)

export default ArticleBody
