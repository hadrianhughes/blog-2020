import '../../__mocks__/gatsby.mock'
import React from 'react'
import { render } from '@testing-library/react'
import TagSelector from './TagSelector'
import { Tag } from '../../types'

const tags: Tag[] = [
  { name: 'Tag 1', identifier: 'tag-1' },
  { name: 'Tag 2', identifier: 'tag-2' },
  { name: 'Tag 3', identifier: 'tag-3' }
]

describe('TagSelector component', () => {
  it('Should render a <ul>', () => {
    const { container } = render(<TagSelector tags={tags} />)

    expect(container.querySelector('ul')).toBeTruthy()
  })

  it('Should render a <li> for each tag', () => {
    const { container } = render(<TagSelector tags={tags} />)
    const items = container.querySelectorAll('li')

    expect(items.length).toBe(tags.length)

    items.forEach((item, index) => {
      expect(item.innerHTML.includes(tags[index].name)).toBeTruthy()
    })
  })

  it('Should render an <a> inside each item leading to the results page', () => {
    const { container } = render(<TagSelector tags={tags} />)
    const items = container.querySelectorAll('li a')

    expect(items.length).toBe(tags.length)

    items.forEach((item, index) => {
      expect(item).toHaveAttribute('href', '/results?tag=' + tags[index].identifier)
    })
  })
})
