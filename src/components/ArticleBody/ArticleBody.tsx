import React, { FunctionComponent } from 'react'
import Markdown from 'react-markdown'
import Text from '../Text'
import {
  Container,
  UL,
  BulletItem,
  Image,
  BodyHeading,
  InlineCode,
  PublishedText,
  Content
} from './styles'
import CodeBlock from './CodeBlock'

interface ArticleBodyProps {
  heading: string;
  markdown: string;
  publishedAt: string;
}

const renderers = {
  code: CodeBlock,
  paragraph: ({ children }): JSX.Element => <Text tag="p" align="justify">{children}</Text>,
  list: UL,
  listItem: BulletItem,
  image: ({ src, alt }): JSX.Element => <Image src={src + (src.includes('?') ? '&' : '?') + 'fm=webp'} alt={alt} />,
  heading: ({ level, children }): JSX.Element  => {
    const size = level === 2 ? 'xlarge' : 'large'
    return <BodyHeading tag={`h${level}`} size={size}>{children}</BodyHeading>
  },
  inlineCode: InlineCode
}

const ArticleBody: FunctionComponent<ArticleBodyProps> = ({
  heading,
  markdown,
  publishedAt
}) => (
  <Container>
    <Text tag="h1" size="headline" noSpace>{heading}</Text>
    <PublishedText noSpace>{publishedAt}</PublishedText>
    <Content>
      <Markdown renderers={renderers}>
        {markdown}
      </Markdown>
    </Content>
  </Container>
)

export default ArticleBody
