import '../../__mocks__/gatsby.mock'
import React from 'react'
import { render } from '@testing-library/react'
import TopBumper from './TopBumper'

const props = {
  imgSrc: 'test-src',
  imgAlt: 'test-alt',
  heading: 'test-heading'
}

describe('TopBumper component', () => {
  it('Should render a link to the homepage', () => {
    const { container } = render(<TopBumper {...props} />)

    expect(container.querySelector('a[href="/"]')).toBeInTheDocument()
  })

  it('Should render an <img>', () => {
    const { container } = render(<TopBumper {...props} />)

    expect(container.querySelector('img')).toBeInTheDocument()
  })

  it('Should render an <h2>', () => {
    const { container } = render(<TopBumper {...props} />)

    expect(container.querySelector('h2')).toBeInTheDocument()
  })
})
