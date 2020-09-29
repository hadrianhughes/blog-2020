import '../../__mocks__/gatsby.mock'
import React from 'react'
import { render } from '@testing-library/react'
import Text from './Text'

describe('Text component', () => {
  it('Should render a <p>', () => {
    const { container } = render(<Text />)

    expect(container.querySelector('p')).toBeTruthy()
  })

  it('Should the element passed in the `tag` prop', () => {
    const { container: span } = render(<Text tag="span" />)
    const { container: article } = render(<Text tag="article" />)

    expect(span.querySelector('span')).toBeTruthy()
    expect(article.querySelector('article')).toBeTruthy()
  })

  it('Should render the `children` prop as children', () => {
    const childNode = 'test node'
    const { queryByText } = render(<Text>{childNode}</Text>)

    expect(queryByText(childNode)).toBeTruthy()
  })
})
