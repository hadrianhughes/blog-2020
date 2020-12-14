import React, { FunctionComponent, useMemo } from 'react'
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
  Content,
  Title
} from './styles'
import CodeBlock from './CodeBlock'
import { useDarkMode } from '../../context/DarkMode'
import { Dict } from '../../types'

interface ArticleBodyProps {
  heading: string;
  markdown: string;
  publishedAt: string;
}

const getRenderers = (darkMode: boolean): Dict<(props: any) => JSX.Element> => ({
  code: ({ value, language }): JSX.Element => (
    <CodeBlock
      darkMode={darkMode}
      value={value}
      language={language}
    />
  ),
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
        <Markdown renderers={renderers}>
          {markdown}
        </Markdown>
      </Content>
    </Container>
  )
}

export default ArticleBody
