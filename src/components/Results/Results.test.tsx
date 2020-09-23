import React from 'react'
import { shallow } from 'enzyme'
import Results, { Result } from './Results'
import { List, ItemLink as Link, ItemHeading, PublishedText } from './styles'

const items: Result[] = [
  { title: 'Item 1', path: 'item-1', publishedAt: 'published-1' },
  { title: 'Item 2', path: 'item-2', publishedAt: 'published-2' }
]

const wrapper = shallow(<Results items={items} />)

describe('Results component', () => {
  it('Should render a <List>', () => {
    expect(wrapper.find(List).exists()).toBeTruthy()
  })

  it('Should render an <li> for each item', () => {
    expect(wrapper.find('li').length).toBe(items.length)
  })

  it('Should render a <Link> for each item with the correct URL', () => {
    items.forEach((item, i) => {
      const thisItem = wrapper.find(Link).at(i)

      expect(thisItem.prop('to')).toBe('/' + item.path)
    })
  })

  it('Should render an <ItemHeading> for each item containing the title', () => {
    items.forEach((item, i) => {
      const thisItem = wrapper.find(ItemHeading).at(i)

      expect(thisItem.exists()).toBeTruthy()
      expect(thisItem.text()).toBe(item.title)
    })
  })

  it('Should render a <PublishedText> for each item containing the publishedAt', () => {
    items.forEach((item, i) => {
      const thisItem = wrapper.find(PublishedText).at(i)

      expect(thisItem.exists()).toBeTruthy()
      expect(thisItem.text()).toBe(item.publishedAt)
    })
  })
})
