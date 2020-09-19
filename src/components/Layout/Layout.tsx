import React, { FunctionComponent, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import GlobalStyles from '../../styles/global'
import { breakpoints } from '../../styles/settings'
import Profile from '../Profile'
import { Container, Header, Main } from './styles'

const Layout: FunctionComponent = ({ children }) => {
  const [isOpen, setOpen] = useState(false)
  const isBigScreen = useMediaQuery({
    query: `(min-width: ${breakpoints.small + 1}px)`
  })

  return (
    <Container>
      <GlobalStyles />
      <Header>
        {
          isBigScreen || isOpen
            ? (
              <>
                <Profile />
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
