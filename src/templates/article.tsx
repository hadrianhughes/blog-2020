import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ArticleBody from '../components/ArticleBody'
import { ContentfulArticle } from '../types'
import { formatDate } from '../lib'

interface ArticlePageProps {
  data: {
    contentfulArticle: ContentfulArticle;
  };
}

const ArticlePage: FunctionComponent<ArticlePageProps> = ({ data }) => {
  const {
    title,
    content,
    description,
    tags,
    createdAt,
    path
  } = data.contentfulArticle

  return (
    <Layout
      title={title}
      description={description.description}
      mini
      tags={tags.map(t => t.name)}
      publishedAt={createdAt}
      path={path}
    >
      <article>
        <ArticleBody
          heading={title}
          markdown={content.content}
          publishedAt={formatDate(new Date(createdAt))}
        />
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
      createdAt
      tags {
        name
      }
    }
  }
`

export default ArticlePage
