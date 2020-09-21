import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Results, { Result } from '../components/Results'

type ContentfulArticle = {
  node: {
    title: string
    createdAt: string
  }
}

interface HomeProps {
  data: {
    allContentfulArticle: {
      edges: ContentfulArticle[]
    }
  }
}

const Home: FunctionComponent<HomeProps> = ({ data }) => {
  const { allContentfulArticle } = data
  const resultItems: Result[] = allContentfulArticle.edges.map(({ node }) => ({
    title: node.title,
    url: node.title,
    publishedAt: node.createdAt
  }))

  return (
    <Layout>
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
          createdAt(formatString: "DD MMM YYYY")
        }
      }
    }
  }
`

export default Home
