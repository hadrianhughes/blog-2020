import React, { FunctionComponent } from 'react'
import Markdown from 'react-markdown'
import Text from '../Text'
import { Container, UL, BulletItem, Image, BodyHeading, InlineCode } from './styles'
import CodeBlock from './CodeBlock'

interface ArticleBodyProps {
  heading: string;
  markdown: string;
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

const ArticleBody: FunctionComponent<ArticleBodyProps> = ({ heading, markdown }) => (
  <Container>
    <Text tag="h1" size="headline">{heading}</Text>
    <Markdown renderers={renderers}>
      {markdown}
    </Markdown>
  </Container>
)

export default ArticleBody
