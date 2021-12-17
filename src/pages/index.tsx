import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Results, { Result } from '../components/Results'
import { ContentfulArticleStub } from '../types'
import { siteTitle } from '../globals'

interface HomeProps {
  data: {
    allContentfulArticle: {
      edges: {
        node: ContentfulArticleStub;
      }[];
    };
  };
}

const Home: FunctionComponent<HomeProps> = ({ data }) => {
  const { allContentfulArticle } = data
  const resultItems: Result[] = allContentfulArticle.edges.map(({ node }) => ({
    title: node.title,
    path: node.path,
    publishedAt: node.published,
    tags: []
  }))

  return (
    <Layout title={siteTitle}>
      <Results items={resultItems} />
    </Layout>
  )
}

export const query = graphql`
  query HomeQuery {
    allContentfulArticle(sort: { fields: createdAt }) {
      edges {
        node {
          title
          path
          published(formatString: "DD MMM YYYY")
        }
      }
    }
  }
`

export default Home
