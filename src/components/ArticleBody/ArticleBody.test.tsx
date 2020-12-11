import React from 'react'
import { render } from '@testing-library/react'
import { Document, BLOCKS } from '@contentful/rich-text-types'
import ArticleBody from './ArticleBody'

const markdown = `
# Hello World

Lorem ipsum dolor
`

const data: Document = {
  data: {},
  nodeType: 'document' as BLOCKS.DOCUMENT,
  content: [
    {
      data: {},
      nodeType: 'paragraph' as BLOCKS.PARAGRAPH,
      content: [
        {
          data: {},
          nodeType: 'text',
          marks: [],
          value: 'Hello World'
        }
      ]
    }
  ]
}

describe('ArticleBody component', () => {
  const heading = 'test heading'

  it('Should render a <Container>', () => {
    const { container } = render(<ArticleBody markdown={markdown} heading={heading} />)
    expect(container.querySelector('section')).toBeTruthy()
  })

  it('Should render the `heading` prop in an <h1>', () => {
    const { container } = render(<ArticleBody markdown={markdown} heading={heading} />)
    expect(container.querySelector('h1')).toBeTruthy()
    expect(
      container
        .querySelector('h1')
        .innerHTML
    ).toBe(heading)
  })

  it('Should pass the `data` prop to the `documentToReactComponents` function', () => {
    const { container } = render(<ArticleBody markdown={markdown} heading={heading} />)
    expect(container.querySelector('section').innerHTML).toMatchSnapshot()
  })
})
