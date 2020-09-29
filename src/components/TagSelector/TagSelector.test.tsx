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

    items.forEach((item, index) => {
      expect(item.innerHTML).toBe(tags[index].name)
    })
  })
})
