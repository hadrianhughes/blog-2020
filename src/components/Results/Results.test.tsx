import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'gatsby'
import Results, { Result } from './Results'

describe('Results component', () => {
  it('Should render a <ul>', () => {
    const wrapper = shallow(<Results items={[]} />)

    expect(wrapper.find('ul').exists()).toBeTruthy()
  })

  it('Should render an <li> for each item', () => {
    const items: Result[] = [
      { title: 'Item 1', url: 'item-1' },
      { title: 'Item 2', url: 'item-2' },
    ]

    const wrapper = shallow(<Results items={items} />)

    items.forEach((item, i) => {
      const thisItem = wrapper.find('li').at(i).find(Link)

      expect(thisItem.text()).toBe(item.title)
      expect(thisItem.prop('to')).toBe(item.url)
    })
  })
})
