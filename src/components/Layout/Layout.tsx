import React, { FunctionComponent, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import GlobalStyles from '../../styles/global'
import { breakpoints } from '../../styles/settings'
import Profile from '../Profile'
import TagSelector from '../TagSelector'
import { ProfileData } from '../../types'
import { Container, Header, Main } from './styles'
import Head from '../Head'

type OpenState = 'profile' | 'menu' | null

const profileQuery = graphql`
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

const Layout: FunctionComponent = ({ children }) => {
  const data: ProfileData = useStaticQuery(profileQuery)
  const {
    contentfulProfile: {
      profileImage,
      heading,
      introduction
    }
  } = data

  return (
    <Container>
      <GlobalStyles />
      <Head />
      <Header>
        <div>
          <Profile
            imgSrc={profileImage.fluid.src}
            imgSrcSet={profileImage.fluid.srcSet}
            imgAlt={profileImage.description}
            heading={heading}
            introduction={introduction.introduction} />
          <hr />
          <TagSelector />
        </div>
      </Header>
      <Main>
        {children}
      </Main>
    </Container>
  )
}

export default Layout
