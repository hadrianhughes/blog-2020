import React, { FunctionComponent } from 'react'
import GlobalStyles from '../../styles/global'
import { Container, Header, Main } from './styles'

const Layout: FunctionComponent = ({ children }) => (
  <Container>
    <GlobalStyles />
    <Header>
      nav here
    </Header>
    <Main>
      {children}
    </Main>
  </Container>
)

export default Layout
