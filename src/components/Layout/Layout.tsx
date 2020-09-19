import React, { FunctionComponent } from 'react'
import GlobalStyles from '../../styles/global'
import Profile from '../Profile'
import { Container, Header, Main } from './styles'

const Layout: FunctionComponent = ({ children }) => (
  <Container>
    <GlobalStyles />
    <Header>
      <Profile />
      <hr />
    </Header>
    <Main>
      {children}
    </Main>
  </Container>
)

export default Layout
