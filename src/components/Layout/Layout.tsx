import React, { FunctionComponent } from 'react'
import GlobalStyles from '../../styles/global'

const Layout: FunctionComponent = ({ children }) => (
  <>
    <GlobalStyles />
    <header>
      nav here
    </header>
    <main>
      {children}
    </main>
  </>
)

export default Layout
