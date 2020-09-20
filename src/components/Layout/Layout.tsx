import React, { FunctionComponent, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import GlobalStyles from '../../styles/global'
import { breakpoints } from '../../styles/settings'
import Profile from '../Profile'
import MobileBumper from '../MobileBumper'
import { ProfileData } from '../../types'
import { Container, Header, Main } from './styles'

type OpenState = 'profile' | 'menu' | null

const Layout: FunctionComponent = ({ children }) => {
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


  const [openState, setOpenState] = useState<OpenState>(null)
  const isBigScreen = useMediaQuery({
    query: `(min-width: ${breakpoints.small + 1}px)`
  })

  const toggleProfile = () => setOpenState(openState === 'profile' ? null : 'profile')
  const toggleMenu = () => setOpenState(openState === 'menu' ? null : 'menu')

  return (
    <Container>
      <GlobalStyles />
      <Header isBigScreen={isBigScreen}>
        {
          !isBigScreen
            ? (
              <MobileBumper
                heading={heading}
                onToggleProfile={toggleProfile}
                onToggleMenu={toggleMenu} />
            ) : null
        }
        {
          isBigScreen || openState === 'profile'
            ? (
              <>
                <Profile
                  imgSrc={profileImage.fluid.src}
                  imgSrcSet={profileImage.fluid.srcSet}
                  imgAlt={profileImage.description}
                  heading={heading}
                  introduction={introduction.introduction} />
                <hr />
              </>
            )
            : null
        }
      </Header>
      <Main>
        {children}
      </Main>
    </Container>
  )
}

export default Layout
