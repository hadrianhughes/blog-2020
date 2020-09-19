import React, { FunctionComponent } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ProfileImg, Heading, Introduction } from './styles'

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
        <ProfileImg src={profileImage.fluid.src} alt={profileImage.description} />
      </picture>
      <Heading>{heading}</Heading>
      <Introduction>{introduction.introduction}</Introduction>
    </section>
  )
}

export default Profile
