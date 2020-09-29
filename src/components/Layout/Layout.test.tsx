import React from 'react'
import { render, act, fireEvent } from '@testing-library/react'
import '../../__mocks__/gatsby.mock'
import Layout from './Layout'

jest.mock('react-responsive', () => ({
  useMediaQuery: jest.fn()
}))
import { useMediaQuery } from 'react-responsive'

describe('Layout component', () => {
  it('Should render a <Header> and <Main>', () => {
    const { container } = render(<Layout />)

    expect(container.querySelector('header')).toBeTruthy()
    expect(container.querySelector('main')).toBeTruthy()
  })

  it('Should render its children inside the <main> tag', () => {
    const { container } = render(<Layout><div id="render-me" /></Layout>)

    expect(container.querySelector('main #render-me')).toBeTruthy()
  })

  it('Should render a <Profile> inside the <Header> at desktop', () => {
    useMediaQuery.mockImplementation(() => true)
    const { queryByTestId } = render(<Layout />)

    expect(queryByTestId('profile')).toBeTruthy()
  })

  it('Should not render <Profile> by default at mobile', () => {
    useMediaQuery.mockImplementation(() => false)
    const { queryByTestId } = render(<Layout />)

    expect(queryByTestId('profile')).not.toBeTruthy()
  })

  it('Should render a <MobileBumper> by default at mobile', () => {
    useMediaQuery.mockImplementation(() => false)
    const { queryByTestId } = render(<Layout />)

    expect(queryByTestId('mobile-bumper')).toBeTruthy()
  })

  it('Should render <Profile> on mobile after `onToggleProfile` is clicked from <MobileBumper>', () => {
    useMediaQuery.mockImplementation(() => false)
    const { queryByTestId } = render(<Layout />)

    expect(queryByTestId('profile')).not.toBeTruthy()

    act(() => {
      const button = queryByTestId('mobile-bumper').querySelector('button')
      fireEvent.click(button)
    })

    expect(queryByTestId('profile')).toBeTruthy()
  })
})
