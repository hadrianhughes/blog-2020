import React, { FunctionComponent } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export type ProfileData = {
  contentfulProfile: {
    profileImage: {
      description: string
      fluid: {
        srcSet: string,
        src: string
      }
    }
    heading: string
    introduction: {
      introduction: string
    }
  }
}

const Profile: FunctionComponent = () => {
  const data: ProfileData = useStaticQuery(
    graphql`
      query ProfileQuery {
        contentfulProfile {
          profileImage {
            description
            fluid(toFormat: WEBP) {
              srcSet
              src
            }
          }
          heading
          introduction {
            introduction
          }
        }
      }
    `
  )

  const {
    contentfulProfile: {
      profileImage,
      heading,
      introduction
    }
  } = data

  return (
    <section>
      <picture>
        <source srcSet={profileImage.fluid.srcSet} />
        <img src={profileImage.fluid.src} alt={profileImage.description} />
      </picture>
      <h1>{heading}</h1>
      <p>{introduction.introduction}</p>
    </section>
  )
}

export default Profile
