import React, { FunctionComponent } from 'react'
import GlobalStyles from '../../styles/global'
import { Container } from './styles'

const Layout: FunctionComponent = ({ children }) => (
  <Container>
    <GlobalStyles />
    <header>
      nav here
    </header>
    <main>
      {children}
    </main>
  </Container>
)

export default Layout
