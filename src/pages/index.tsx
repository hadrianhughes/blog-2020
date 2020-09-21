import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Results, { Result } from '../components/Results'

interface HomeProps {
  data: {
    allContentfulArticle: {
      edges: { node: { title: string } }[]
    }
  }
}

const Home: FunctionComponent<HomeProps> = ({ data }) => {
  const { allContentfulArticle } = data
  const resultItems: Result[] = allContentfulArticle.edges.map(({ node }) => ({
    title: node.title,
    url: node.title
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
        }
      }
    }
  }
`

export default Home
