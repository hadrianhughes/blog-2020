import React from 'react'
import { shallow } from 'enzyme'
import Results, { Result } from './Results'
import { List, ItemLink as Link } from './styles'

const items: Result[] = [
  { title: 'Item 1', url: 'item-1' },
  { title: 'Item 2', url: 'item-2' },
]

describe('Results component', () => {
  it('Should render a <List>', () => {
    const wrapper = shallow(<Results items={[]} />)

    expect(wrapper.find(List).exists()).toBeTruthy()
  })

  it('Should render an <li> for each item', () => {
    const wrapper = shallow(<Results items={items} />)

    expect(wrapper.find('li').length).toBe(items.length)
  })

  it('Should render a <Link> for each item with the correct text and URL', () => {
    const wrapper = shallow(<Results items={items} />)

    items.forEach((item, i) => {
      const thisItem = wrapper.find(Link).at(i).find(Link)

      expect(thisItem.text()).toBe(item.title)
      expect(thisItem.prop('to')).toBe(item.url)
    })
  })
})
