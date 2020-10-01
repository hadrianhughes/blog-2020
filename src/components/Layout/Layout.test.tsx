import React from 'react'
import { render } from '@testing-library/react'
import '../../__mocks__/gatsby.mock'
import Layout from './Layout'

jest.mock('react-responsive')
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
    const { queryByTestId } = render(<Layout title="test-title" />)

    expect(queryByTestId('top-bumper')).toBeTruthy()
  })

  it('Should render a <Text> and <TagSelector> by default', () => {
    const { queryByTestId } = render(<Layout title="test-title" />)

    expect(queryByTestId('tag-selector')).toBeInTheDocument()
    expect(queryByTestId('introduction')).toBeInTheDocument()
  })

  it('Should not render the above when the `mini` prop is given AND on tablet or mobile', () => {
    useMediaQuery.mockImplementation(() => true)
    const { queryByTestId } = render(<Layout title="test-title" mini />)

    expect(queryByTestId('tag-selector')).not.toBeInTheDocument()
    expect(queryByTestId('introduction')).not.toBeInTheDocument()
  })
})
