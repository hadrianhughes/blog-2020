import React from 'react'
import { render, act, fireEvent } from '@testing-library/react'
import MobileBumper, { MobileBumperProps } from './MobileBumper'

const baseProps: MobileBumperProps = {
  heading: 'heading',
  onToggleProfile: jest.fn(),
  onToggleMenu: jest.fn()
}

describe('MobileBumper component', () => {
  it('Should render a <h2>', () => {
    const { container, queryByText } = render(<MobileBumper {...baseProps} />)

    expect(container.querySelector('section')).toBeTruthy()
  })

  it('Should render the `heading` prop in an <h1>', () => {
    const heading = 'Test Heading'
    const { queryByText } = render(<MobileBumper {...baseProps} heading={heading} />)

    expect(queryByText(heading, { selector: 'h2' })).toBeTruthy()
  })

  it('Should call the `onToggleProfile` prop when the <ProfileButton> is clicked', () => {
    const onToggle = jest.fn()
    const { queryByText } = render(<MobileBumper {...baseProps} onToggleProfile={onToggle} />)

    act(() => {
      fireEvent.click(queryByText('Profile', { selector: 'button' }))
    })

    expect(onToggle).toHaveBeenCalled()
  })

  it('Should call the `onToggleMenu` prop when the <button id="btn-menu"> is clicked', () => {
    const onToggle = jest.fn()
    const { queryByText } = render(<MobileBumper {...baseProps} onToggleMenu={onToggle} />)

    act(() => {
      fireEvent.click(queryByText('Menu', { selector: 'button' }))
    })

    expect(onToggle).toHaveBeenCalled()
  })
})
