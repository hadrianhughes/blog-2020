import React from 'react'

jest.mock('gatsby', () => ({
  ...jest.requireActual('gatsby'),
  Link: ({ to, children, ...rest }) => <a href={to} {...rest}>{children}</a>,
  graphql: () => null,
  useStaticQuery: () => require('./useStaticQueryData.json')
}))

export {}
