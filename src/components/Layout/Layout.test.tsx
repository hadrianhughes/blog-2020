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
    const { container } = render(<Layout title="test-title" />)

    expect(container.querySelector('header')).toBeTruthy()
    expect(container.querySelector('main')).toBeTruthy()
  })

  it('Should render its children inside the <main> tag', () => {
    const { container } = render(
      <Layout title="test-title">
        <div id="render-me" />
      </Layout>
    )

    expect(container.querySelector('main #render-me')).toBeTruthy()
  })

  it('Should render a <TopBumper>', () => {
    useMediaQuery.mockImplementation(() => true)
    const { queryByTestId } = render(<Layout title="test-title" />)

    expect(queryByTestId('top-bumper')).toBeTruthy()
  })
})
