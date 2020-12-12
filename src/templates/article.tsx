import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ArticleBody from '../components/ArticleBody'
import { ContentfulArticle } from '../types'

interface ArticlePageProps {
  data: {
    contentfulArticle: ContentfulArticle;
  };
}

const ArticlePage: FunctionComponent<ArticlePageProps> = ({ data }) => {
  const { title, content, description } = data.contentfulArticle

  return (
    <Layout title={title} description={description.description} mini>
      <article>
        <ArticleBody heading={title} markdown={content.content} />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ArticleContentByPath($pagePath: String!) {
    contentfulArticle(path: { eq: $pagePath }) {
      path
      title
      description {
        description
      }
      content {
        content
      }
    }
  }
`

export default ArticlePage
