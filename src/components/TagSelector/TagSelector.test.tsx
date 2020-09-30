import '../../__mocks__/gatsby.mock'
import React from 'react'
import { render } from '@testing-library/react'
import TagSelector from './TagSelector'
import { Tag } from '../../types'
import mockData from '../../__mocks__/useStaticQueryData.json'

describe('TagSelector component', () => {
  it('Should render a <ul>', () => {
    const { container } = render(<TagSelector />)

    expect(container.querySelector('ul')).toBeTruthy()
  })

  it('Should render a <li> for each tag', () => {
    const { container } = render(<TagSelector />)
    const items = container.querySelectorAll('li')

    expect(items.length).toBe(mockData.allContentfulTag.edges.length)

    items.forEach((item, index) => {
      expect(item.innerHTML.includes(mockData.allContentfulTag.edges[index].node.name)).toBeTruthy()
    })
  })

  it('Should render an <a> inside each item leading to the results page', () => {
    const { container } = render(<TagSelector />)
    const items = container.querySelectorAll('li a')

    items.forEach((item, index) => {
      expect(item).toHaveAttribute('href', '/results?tag=' + mockData.allContentfulTag.edges[index].node.identifier)
    })
  })
})
