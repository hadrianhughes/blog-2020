import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Results, { Result } from '../components/Results'
import Text from '../components/Text'
import { ContentfulArticleStub } from '../types'
import { DarkModeProvider } from '../context/DarkMode'
import { useQueryString, filterByTag, formatDate, withProvider } from '../lib'

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
    publishedAt: formatDate(new Date(node.createdAt)),
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

export default withProvider(ResultsPage)(DarkModeProvider)
