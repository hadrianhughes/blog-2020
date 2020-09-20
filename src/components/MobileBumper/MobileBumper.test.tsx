import React from 'react'
import { shallow } from 'enzyme'
import MobileBumper, { MobileBumperProps } from './MobileBumper'
import { Heading, Container } from './styles'

const baseProps: MobileBumperProps = {
  heading: 'heading',
  onToggleProfile: jest.fn(),
  onToggleMenu: jest.fn()
}

describe('MobileBumper component', () => {
  it('Should render a <Container>, <Heading> and 2 <button> tags', () => {
    const wrapper = shallow(<MobileBumper {...baseProps} />)

    expect(wrapper.find(Container).exists()).toBeTruthy()
    expect(wrapper.find(Heading).exists()).toBeTruthy()
    expect(wrapper.find('button').length).toBe(2)
  })

  it('Should render the `heading` prop in an <h1>', () => {
    const heading = 'Test Heading'
    const wrapper = shallow(<MobileBumper {...baseProps} heading={heading} />)

    expect(wrapper.find(Heading).text()).toBe(heading)
  })

  it('Should call the `onToggleProfile` prop when the <button id="btn-profile"> is clicked', () => {
    const onToggle = jest.fn()
    const wrapper = shallow(<MobileBumper {...baseProps} onToggleProfile={onToggle} />)

    wrapper.find('button#btn-profile').simulate('click')

    expect(onToggle).toHaveBeenCalled()
  })

  it('Should call the `onToggleMenu` prop when the <button id="btn-menu"> is clicked', () => {
    const onToggle = jest.fn()
    const wrapper = shallow(<MobileBumper {...baseProps} onToggleMenu={onToggle} />)

    wrapper.find('button#btn-menu').simulate('click')

    expect(onToggle).toHaveBeenCalled()
  })
})
