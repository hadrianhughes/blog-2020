import React from 'react'
import { shallow } from 'enzyme'
import Text from '../Text'
import MobileBumper, { MobileBumperProps } from './MobileBumper'
import { Container, ProfileButton, MenuButton } from './styles'

const baseProps: MobileBumperProps = {
  heading: 'heading',
  onToggleProfile: jest.fn(),
  onToggleMenu: jest.fn()
}

describe('MobileBumper component', () => {
  it('Should render a <Container>, <Heading> and 2 buttons', () => {
    const wrapper = shallow(<MobileBumper {...baseProps} />)

    expect(wrapper.find(Container).exists()).toBeTruthy()
    expect(wrapper.find(Text).exists()).toBeTruthy()
    expect(wrapper.find(ProfileButton).exists()).toBeTruthy()
    expect(wrapper.find(MenuButton).exists()).toBeTruthy()
  })

  it('Should render the `heading` prop in an <h1>', () => {
    const heading = 'Test Heading'
    const wrapper = shallow(<MobileBumper {...baseProps} heading={heading} />)

    expect(wrapper.find(Text).prop('children')).toBe(heading)
  })

  it('Should call the `onToggleProfile` prop when the <ProfileButton> is clicked', () => {
    const onToggle = jest.fn()
    const wrapper = shallow(<MobileBumper {...baseProps} onToggleProfile={onToggle} />)

    wrapper.find(ProfileButton).simulate('click')

    expect(onToggle).toHaveBeenCalled()
  })

  it('Should call the `onToggleMenu` prop when the <button id="btn-menu"> is clicked', () => {
    const onToggle = jest.fn()
    const wrapper = shallow(<MobileBumper {...baseProps} onToggleMenu={onToggle} />)

    wrapper.find(MenuButton).simulate('click')

    expect(onToggle).toHaveBeenCalled()
  })
})
