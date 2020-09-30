import React, { FunctionComponent } from 'react'
import { Document, BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Text from '../Text'
import { Container, UL, BulletItem } from './styles'

interface ArticleBodyProps {
  heading: string
  data: Document
}

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <Text tag="p" align="justify">{children}</Text>,
    [BLOCKS.UL_LIST]: (_, children) => <UL>{children}</UL>,
    [BLOCKS.LIST_ITEM]: (_, children) => <BulletItem>{children}</BulletItem>
  }
}

const ArticleBody: FunctionComponent<ArticleBodyProps> = ({ heading, data }) => (
  <Container>
    <Text tag="h1" size="headline">{heading}</Text>
    {documentToReactComponents(data, options)}
  </Container>
)

export default ArticleBody
