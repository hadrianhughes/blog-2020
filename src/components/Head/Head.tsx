import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { makeTitle } from '../../lib'

interface HeadProps {
  title: string;
  description: string;
}

const Head: FunctionComponent<HeadProps> = ({ title, description }) => (
  <Helmet>
    <html lang="en" />

    <title>{makeTitle(title)}</title>
    <meta name="description" content={description} />

    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,500;0,700;1,500;1,700&family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  </Helmet>
)

export default Head
