import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { ContentfulArticle } from '../types'
import { ArticleHeading } from './styles'

interface ArticlePageProps {
  data: {
    contentfulArticle: ContentfulArticle
  }
}

const ArticlePage: FunctionComponent<ArticlePageProps> = ({ data }) => {
  const { title } = data.contentfulArticle

  return (
    <Layout>
      <article>
        <ArticleHeading>{title}</ArticleHeading>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ArticleContentByPath($pagePath: String!) {
    contentfulArticle(path: { eq: $pagePath }) {
      path
      title
      body {
        json
      }
    }
  }
`

export default ArticlePage
