import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Results, { Result } from '../components/Results'
import { ContentfulArticleStub } from '../types'

interface ResultsPageProps {
  data: {
    allContentfulArticle: {
      edges: {
        node: ContentfulArticleStub
      }[]
    }
  }
}

const ResultsPage: FunctionComponent<ResultsPageProps> = ({ data }) => {
  const { allContentfulArticle } = data
  const resultItems: Result[] = allContentfulArticle.edges.map(({ node }) => ({
    title: node.title,
    path: node.path,
    publishedAt: node.createdAt
  }))

  return (
    <Layout>
      <Results items={resultItems} />
    </Layout>
  )
}

export const query = graphql`
  query ResultsQuery {
    allContentfulArticle(sort: { fields: createdAt }) {
      edges {
        node {
          title
          path
          createdAt(formatString: "DD MMM YYYY")
        }
      }
    }
  }
`

export default ResultsPage
