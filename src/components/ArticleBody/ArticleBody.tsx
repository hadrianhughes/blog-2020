import React, { FunctionComponent } from 'react'
import { Document, BLOCKS } from '@contentful/rich-text-types'
import Markdown from 'react-markdown'
import Text from '../Text'
import { Container, UL, BulletItem } from './styles'
import CodeBlock from './CodeBlock'

interface ArticleBodyProps {
  heading: string
  markdown: string
}

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <Text tag="p" align="justify">{children}</Text>,
    [BLOCKS.UL_LIST]: (_, children) => <UL>{children}</UL>,
    [BLOCKS.LIST_ITEM]: (_, children) => <BulletItem>{children}</BulletItem>
  }
}

const ArticleBody: FunctionComponent<ArticleBodyProps> = ({ heading, markdown }) => (
  <Container>
    <Text tag="h1" size="headline">{heading}</Text>
    <Markdown renderers={{ code: CodeBlock }}>
      {markdown}
    </Markdown>
  </Container>
)

export default ArticleBody
