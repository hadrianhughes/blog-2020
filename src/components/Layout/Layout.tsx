import React, { FunctionComponent } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import GlobalStyles from '../../styles/global'
import { breakpoints } from '../../styles/settings'
import TagSelector from '../TagSelector'
import { ProfileData } from '../../types'
import { Container, Header, Main } from './styles'
import Head from '../Head'
import Footer from '../Footer'
import TopBumper from '../TopBumper'
import Text from '../Text'

type OpenState = 'profile' | 'menu' | null

interface LayoutProps {
  title: string;
  description?: string;
  mini?: boolean;
}

const profileQuery = graphql`
  query ProfileQuery {
    contentfulProfile {
      profileImage {
        description
        resize(toFormat: WEBP, width: 150, height: 150, jpegProgressive: false) {
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

const Layout: FunctionComponent<LayoutProps> = ({ children, title, description, mini }) => {
  const data: ProfileData = useStaticQuery(profileQuery)
  const {
    contentfulProfile: {
      profileImage,
      heading,
      introduction
    }
  } = data

  const isSmallScreen = useMediaQuery({ query: `(max-width: ${breakpoints.medium}px)` })

  return (
    <Container>
      <GlobalStyles />
      <Head title={title} description={description || introduction.introduction} />
      <Header>
        <div>
          <TopBumper
            imgSrc={profileImage.resize.src}
            imgAlt={profileImage.description}
            heading={heading} />
          {
            isSmallScreen && mini
              ? null
              : (
                <>
                  <Text testId="introduction">{introduction.introduction}</Text>
                  <hr />
                  <TagSelector />
                </>
              )
          }
        </div>
      </Header>
      <Main>
        {children}
      </Main>
      <Footer />
    </Container>
  )
}

export default Layout
