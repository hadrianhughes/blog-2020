import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Results, { Result } from '../components/Results'
import Text from '../components/Text'
import { ContentfulArticleStub } from '../types'
import { useQueryString, filterByTag, formatDate } from '../lib'

interface ResultsPageProps {
  data: {
    allContentfulArticle: {
      edges: {
        node: ContentfulArticleStub;
      }[];
    };
  };
}

const ResultsPage: FunctionComponent<ResultsPageProps> = ({ data }) => {
  const { allContentfulArticle } = data
  const resultItems: Result[] = allContentfulArticle.edges.map(({ node }) => ({
    title: node.title,
    path: node.path,
    publishedAt: formatDate(new Date(node.published)),
    tags: node.tags
  }))

  const { tag: queryTag } = useQueryString()

  const filteredItems = queryTag
    ? filterByTag(resultItems, queryTag)
    : resultItems

  return (
    <Layout title={queryTag || 'Results'}>
      {
        filteredItems.length > 0
          ? <Results items={filteredItems} />
          : <Text tag="p" align="center" size="large">No Results</Text>
      }
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
          createdAt
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
