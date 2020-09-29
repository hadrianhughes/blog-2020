import React from 'react'
import { render } from '@testing-library/react'
import '../../__mocks__/gatsby.mock'
import Results, { Result } from './Results'

const items: Result[] = [
  { title: 'Item 1', path: 'item-1', publishedAt: 'published-1', tags: [] },
  { title: 'Item 2', path: 'item-2', publishedAt: 'published-2', tags: [] }
]

describe('Results component', () => {
  it('Should render a <ul>', () => {
    const { container } = render(<Results items={items} />)

    expect(container.querySelector('ul')).toBeTruthy()
  })

  it('Should render an <li> for each item', () => {
    const { container } = render(<Results items={items} />)

    expect(container.querySelectorAll('li').length).toBe(items.length)
  })

  it('Should render a <Link> for each item with the correct URL', () => {
    const { container } = render(<Results items={items} />)

    items.forEach((item, i) => {
      const thisItem = container.querySelectorAll('a')[i]

      expect(thisItem).toHaveAttribute('href', '/' + item.path)
    })
  })

  it('Should render an <h3> for each item containing the title', () => {
    const { queryByText } = render(<Results items={items} />)

    items.forEach((item, i) => {
      expect(queryByText(item.title, { selector: 'h3' })).toBeTruthy()
    })
  })

  it('Should render a <p> for each item containing the publishedAt', () => {
    const { queryByText } = render(<Results items={items} />)

    items.forEach((item, i) => {
      expect(queryByText(item.publishedAt, { selector: 'p' })).toBeTruthy()
    })
  })
})
