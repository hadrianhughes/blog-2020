import React from 'react'

jest.mock('gatsby', () => ({
  ...jest.requireActual('gatsby'),
  Link: ({ to, children, ...rest }): JSX.Element => <a href={to} {...rest}>{children}</a>,
  graphql: (): any => null,
  useStaticQuery: (): any => require('./useStaticQueryData.json')
}))

export {}
