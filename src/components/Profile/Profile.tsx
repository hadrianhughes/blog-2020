import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'

const Profile: FunctionComponent = () => (
  <nav></nav>
)

export const query = graphql`
  query ProfileQuery {
    contentfulProfile {
      profileImage {
        description
        fluid(toFormat: WEBP) {
          srcSet
        }
      }
      heading
      introduction {
        introduction
      }
    }
  }
`

export default Profile
