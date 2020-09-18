import React, { FunctionComponent } from 'react'

const Layout: FunctionComponent = ({ children }) => (
  <>
    <header>
      nav here
    </header>
    <main>
      {children}
    </main>
  </>
)

export default Layout
