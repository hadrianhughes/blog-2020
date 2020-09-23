import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Results, { Result } from '../components/Results'
import { ContentfulArticleStub } from '../types'
import { queryToJson, filterByTag } from '../lib'

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
    publishedAt: node.createdAt,
    tags: node.tags
  }))

  const { tag: queryTag } = queryToJson(window.location.search)

  const filteredItems = queryTag
    ? filterByTag(resultItems, queryTag)
    : resultItems

  return (
    <Layout>
      <Results items={filteredItems} />
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
          tags {
            identifier
            name
          }
        }
      }
    }
  }
`

export default ResultsPage
