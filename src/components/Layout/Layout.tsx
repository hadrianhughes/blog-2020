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
import { DarkModeProvider } from '../../context/DarkMode'
import DarkModeToggler from '../DarkModeToggler'

type OpenState = 'profile' | 'menu' | null

interface LayoutProps {
  title: string;
  description?: string;
  mini?: boolean;
  tags?: string[];
  publishedAt?: string;
  path?: string;
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

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  title,
  description,
  mini,
  tags,
  publishedAt,
  path
}) => {
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
    <DarkModeProvider>
      <Container>
        <GlobalStyles />
        <Head
          title={title}
          description={description || introduction.introduction}
          tags={tags}
          publishedAt={publishedAt}
          path={path}
        />
        <Header>
          <div>
            <TopBumper
              imgSrc={profileImage.resize.src}
              imgAlt={profileImage.description}
              heading={heading} />
            {
              isSmallScreen && mini
                ? (
                  <DarkModeToggler />
                )
                : (
                  <>
                    <Text testId="introduction">{introduction.introduction}</Text>
                    <DarkModeToggler />
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
    </DarkModeProvider>
  )
}

export default Layout
