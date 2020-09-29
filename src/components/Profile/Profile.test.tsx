import React from 'react'
import { render } from '@testing-library/react'
import '../../__mocks__/gatsby.mock'
import Profile, { ProfileProps } from './Profile'

const baseProps: ProfileProps = {
  imgSrc: 'img-src',
  imgSrcSet: 'img-src-set',
  imgAlt: 'img-alt',
  heading: 'heading',
  introduction: 'introduction'
}

describe('Profile component', () => {
  it('Should render a <section>', () => {
    const { container } = render(<Profile {...baseProps} />)
    expect(container.querySelector('section')).toBeTruthy()
  })

  it('Should render an <a> to the homepage', () => {
    const { container } = render(<Profile {...baseProps} />)

    expect(container.querySelector('a[href="/"]')).toBeTruthy()
  })

  it('Should render a picture tag inside the <a>', () => {
    const { container } = render(<Profile {...baseProps} />)
    expect(container.querySelector('a picture')).toBeTruthy()
  })

  it('Should render the `imgSrcSet` prop into a <source>', () => {
    const imgSrcSet = 'test-src-set'
    const { container } = render(<Profile {...baseProps} imgSrcSet={imgSrcSet} />)

    expect(container.querySelector(`picture > source[srcset="${imgSrcSet}"]`)).toBeTruthy()
  })

  it('Should render the `imgSrc` prop into an <img>', () => {
    const imgSrc = 'test-src'
    const { container } = render(<Profile {...baseProps} imgSrc={imgSrc} />)

    expect(container.querySelector(`picture > img[src="${imgSrc}"]`)).toBeTruthy()
  })

  it('Should use the `description` property for the <img> alt', () => {
    const imgAlt = 'test-alt'
    const { container } = render(<Profile {...baseProps} imgAlt={imgAlt} />)

    expect(container.querySelector(`picture > img[alt="${imgAlt}"]`)).toBeTruthy()
  })

  it('Should render the `heading` property in an <h2>', () => {
    const heading = 'test-heading'
    const { queryByText } = render(<Profile {...baseProps} heading={heading} />)

    expect(queryByText(heading, { selector: 'h2' })).toBeTruthy()
  })

  it('Should render the `introduction` property in a <p>', () => {
    const introduction = 'test-introduction'
    const { queryByText } = render(<Profile {...baseProps} introduction={introduction} />)

    expect(queryByText(introduction, { selector: 'p' })).toBeTruthy()
  })
})
