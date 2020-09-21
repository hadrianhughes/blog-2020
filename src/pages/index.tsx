import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

interface HomeProps {
  data: {
    allContentfulArticle: {
      edges: { title: string }[]
    }
  }
}

const Home: FunctionComponent<HomeProps> = ({ data }) => (
  <Layout>
    <div />
  </Layout>
)

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
