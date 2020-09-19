import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const Home = ({ data }) => (
  <Layout>
    <div>{data.contentfulProfile.introduction.introduction}</div>
  </Layout>
)

export const query = graphql`
  query ProfileQuery {
    contentfulProfile {
      profileImage {
        description
        file {
          url
        }
      }
      heading
      introduction {
        introduction
      }
    }
  }
`

export default Home
