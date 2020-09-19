import React from 'react'
import { shallow } from 'enzyme'
import MobileBumper, { MobileBumperProps } from './MobileBumper'

const baseProps: MobileBumperProps = {
  heading: 'heading',
  onOpen: jest.fn()
}

describe('MobileBumper component', () => {
  it('Should render a <section>, <h1> and <button>', () => {
    const wrapper = shallow(<MobileBumper {...baseProps} />)

    expect(wrapper.find('section').exists()).toBeTruthy()
    expect(wrapper.find('h1').exists()).toBeTruthy()
    expect(wrapper.find('button').exists()).toBeTruthy()
  })

  it('Should render the `heading` prop in an <h1>', () => {
    const heading = 'Test Heading'
    const wrapper = shallow(<MobileBumper {...baseProps} heading={heading} />)

    expect(wrapper.find('h1').text()).toBe(heading)
  })

  it('Should call the `onOpen` prop when the <button> is clicked', () => {
    const onOpen = jest.fn()
    const wrapper = shallow(<MobileBumper {...baseProps} onOpen={onOpen} />)

    wrapper.find('button').simulate('click')

    expect(onOpen).toHaveBeenCalled()
  })
})
