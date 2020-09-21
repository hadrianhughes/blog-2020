import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { ContentfulArticle } from './types'

interface ArticlePageProps {
  data: {
    contentfulArticle: ContentfulArticle
  }
}

const ArticlePage: FunctionComponent<ArticlePageProps> = ({ data }) => (
  <Layout>
    {data.contentfulArticle.title}
  </Layout>
)

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
