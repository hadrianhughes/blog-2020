import React from 'react'
import { shallow } from 'enzyme'
import MobileBumper, { MobileBumperProps } from './MobileBumper'
import { Heading, Container } from './styles'

const baseProps: MobileBumperProps = {
  heading: 'heading',
  onOpen: jest.fn()
}

describe('MobileBumper component', () => {
  it('Should render a <Container>, <Heading> and <button>', () => {
    const wrapper = shallow(<MobileBumper {...baseProps} />)

    expect(wrapper.find(Container).exists()).toBeTruthy()
    expect(wrapper.find(Heading).exists()).toBeTruthy()
    expect(wrapper.find('button').exists()).toBeTruthy()
  })

  it('Should render the `heading` prop in an <h1>', () => {
    const heading = 'Test Heading'
    const wrapper = shallow(<MobileBumper {...baseProps} heading={heading} />)

    expect(wrapper.find(Heading).text()).toBe(heading)
  })

  it('Should call the `onOpen` prop when the <button> is clicked', () => {
    const onOpen = jest.fn()
    const wrapper = shallow(<MobileBumper {...baseProps} onOpen={onOpen} />)

    wrapper.find('button').simulate('click')

    expect(onOpen).toHaveBeenCalled()
  })
})
