import React, { FunctionComponent } from 'react'
import { Document, BLOCKS } from '@contentful/rich-text-types'
import Markdown from 'react-markdown'
import Text from '../Text'
import { Container, UL, BulletItem, Image, BodyHeading } from './styles'
import CodeBlock from './CodeBlock'

interface ArticleBodyProps {
  heading: string
  markdown: string
}

const renderers = {
  code: CodeBlock,
  paragraph: ({ children }) => <Text tag="p" align="justify">{children}</Text>,
  list: ({ children }) => <UL>{children}</UL>,
  listItem: ({ children }) => <BulletItem>{children}</BulletItem>,
  image: ({ src, alt }) => <Image src={src} alt={alt} />,
  heading: ({ level, children }) => {
    const size = level === 2 ? 'xlarge' : 'large'
    return <BodyHeading tag={`h${level}`} size={size}>{children}</BodyHeading>
  }
}

const ArticleBody: FunctionComponent<ArticleBodyProps> = ({ heading, markdown }) => (
  <Container>
    <Text tag="h1" size="headline">{heading}</Text>
    <Markdown renderers={renderers}>
      {markdown}
    </Markdown>
  </Container>
)

export default ArticleBody
