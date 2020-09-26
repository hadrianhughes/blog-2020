import React from 'react'
import { shallow, mount } from 'enzyme'
import Text from './Text'
import { StyledText } from './styles'

describe('Text component', () => {
  it('Should render a <StyledText>', () => {
    const wrapper = shallow(<Text />)

    expect(wrapper.find(StyledText).exists()).toBeTruthy()
  })

  it('Should the element passed in the `tag` prop', () => {
    const span = mount(<Text tag="span" />)
    const article = mount(<Text tag="article" />)

    expect(span.find('span').exists()).toBeTruthy()
    expect(article.find('article').exists()).toBeTruthy()
  })

  it('Should forward the `className` prop to the element', () => {
    const className = 'test-class'
    const wrapper = shallow(<Text className={className} />)

    expect(wrapper.find(StyledText).prop('className')).toBe(className)
  })

  it('Should render the `children` prop as children', () => {
    const childNode = 'test node'
    const wrapper = shallow(<Text>{childNode}</Text>)

    expect(wrapper.find(StyledText).text()).toBe(childNode)
  })
})
