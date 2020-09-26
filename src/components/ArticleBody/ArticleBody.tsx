import React, { FunctionComponent } from 'react'
import { Document, BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Text from '../Text'
import { Container } from './styles'

interface ArticleBodyProps {
  heading: string
  data: Document
}

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <Text tag="p" align="justify">{children}</Text>
  }
}

const ArticleBody: FunctionComponent<ArticleBodyProps> = ({ heading, data }) => (
  <Container>
    <Text tag="h1" size="headline">{heading}</Text>
    {documentToReactComponents(data, options)}
  </Container>
)

export default ArticleBody
