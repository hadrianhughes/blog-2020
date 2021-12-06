import React, { FunctionComponent, useMemo } from 'react'
import Markdown from 'react-markdown'
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import Text from '../Text'
import {
  Container,
  UL,
  BulletItem,
  Image,
  BodyHeading,
  InlineCode,
  PublishedText,
  Content,
  Title
} from './styles'
import CodeBlock from './CodeBlock'
import { useDarkMode } from '../../context/DarkMode'
import { Dict } from '../../types'
import 'katex/dist/katex.min.css'

interface ArticleBodyProps {
  heading: string;
  markdown: string;
  publishedAt: string;
}

const getRenderers = (darkMode: boolean): Dict<(props: any) => JSX.Element> => ({
  code: ({ children, className, inline, ...props }): JSX.Element => {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <CodeBlock
        darkMode={darkMode}
        value={children}
        language={match[1]}
        {...props}
      />
    ) : (
      <code {...props}>{children}</code>
    )
  },
  paragraph: ({ children }): JSX.Element => <Text tag="p" align="justify">{children}</Text>,
  list: UL,
  listItem: BulletItem,
  image: ({ src, alt }): JSX.Element => <Image src={src + (src.includes('?') ? '&' : '?') + 'fm=webp'} alt={alt} />,
  heading: ({ level, children }): JSX.Element  => {
    const size = level === 2 ? 'xlarge' : 'large'
    return <BodyHeading tag={`h${level}`} size={size}>{children}</BodyHeading>
  },
  inlineCode: ({ children }): JSX.Element => <InlineCode $darkMode={darkMode}>{children}</InlineCode>
})

const ArticleBody: FunctionComponent<ArticleBodyProps> = ({
  heading,
  markdown,
  publishedAt
}) => {
  const { active: darkModeActive } = useDarkMode()

  const renderers = useMemo(() => getRenderers(darkModeActive), [darkModeActive])

  return (
    <Container>
      <Title tag="h1" size="headline" noSpace>{heading}</Title>
      <PublishedText noSpace $darkMode={darkModeActive}>{publishedAt}</PublishedText>
      <Content>
        <Markdown components={renderers} rehypePlugins={[rehypeKatex]} remarkPlugins={[remarkMath]}>
          {markdown}
        </Markdown>
      </Content>
    </Container>
  )
}

export default ArticleBody
