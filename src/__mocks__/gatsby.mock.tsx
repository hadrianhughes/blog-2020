import React from 'react'

jest.mock('gatsby', () => ({
  ...jest.requireActual('gatsby'),
  Link: ({ to, children, ...rest }) => <a href={to} {...rest}>{children}</a>,
  graphql: () => null,
  useStaticQuery: () => ({
    contentfulProfile: {
      profileImage: {
        description: 'test-description',
        fluid: {
          srcSet: 'test-src-set',
          src: 'test-src'
        }
      },
      heading: 'test-heading',
      introduction: {
        introduction: 'test-introduction'
      }
    }
  })
}))

export {}
