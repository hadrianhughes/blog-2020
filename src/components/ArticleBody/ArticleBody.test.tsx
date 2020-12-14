import React from 'react'
import { render } from '@testing-library/react'
import ArticleBody from './ArticleBody'

const markdown = `
# Hello World

Lorem ipsum dolor
`

describe('ArticleBody component', () => {
  const heading = 'test heading'

  it('Should render a <Container>', () => {
    const { container } = render(<ArticleBody markdown={markdown} heading={heading} publishedAt="1st Jan 2020" />)
    expect(container.querySelector('section')).toBeTruthy()
  })

  it('Should render the `heading` prop in an <h1>', () => {
    const { container } = render(<ArticleBody markdown={markdown} heading={heading} publishedAt="1st Jan 2020" />)
    expect(container.querySelector('h1')).toBeTruthy()
    expect(
      container
        .querySelector('h1')
        .innerHTML
    ).toBe(heading)
  })

  it('Should pass the `data` prop to the `documentToReactComponents` function', () => {
    const { container } = render(<ArticleBody markdown={markdown} heading={heading} publishedAt="1st Jan 2020" />)
    expect(container.querySelector('section').innerHTML).toMatchSnapshot()
  })
})
