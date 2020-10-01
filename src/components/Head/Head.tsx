import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { makeTitle } from '../../lib'

interface HeadProps {
  title: string
}

const Head: FunctionComponent<HeadProps> = ({ title }) => (
  <Helmet>
    <html lang="en" />
    <title>{makeTitle(title)}</title>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,400;0,600;1,400;1,600&family=Open+Sans:ital,wght@0,400;0,600;1,600&display=swap" rel="stylesheet" />
  </Helmet>
)

export default Head
