import React from 'react'
import { shallow } from 'enzyme'
import Profile, { ProfileProps } from './Profile'
import { ProfileImg, Heading, Introduction, Container } from './styles'

const baseProps: ProfileProps = {
  imgSrc: 'img-src',
  imgSrcSet: 'img-src-set',
  imgAlt: 'img-alt',
  heading: 'heading',
  introduction: 'introduction'
}

describe('Profile component', () => {
  it('Should render a <Container>', () => {
    const wrapper = shallow(<Profile {...baseProps} />)
    expect(wrapper.find(Container).exists()).toBeTruthy()
  })

  it('Should render a picture tag inside the <Container>', () => {
    const wrapper = shallow(<Profile {...baseProps} />)
    expect(
      wrapper
        .find(Container)
        .find('picture')
        .exists()
    ).toBeTruthy()
  })

  it('Should render the `imgSrcSet` prop into a <source>', () => {
    const imgSrcSet = 'test-src-set'
    const wrapper = shallow(<Profile {...baseProps} imgSrcSet={imgSrcSet} />)

    expect(
      wrapper
        .find(Container)
        .find('picture > source')
        .prop('srcSet')
    ).toBe(imgSrcSet)
  })

  it('Should render the `imgSrc` prop into a <ProfileImg>', () => {
    const imgSrc = 'test-src'
    const wrapper = shallow(<Profile {...baseProps} imgSrc={imgSrc} />)

    expect(
      wrapper
        .find(Container)
        .find('picture')
        .find(ProfileImg)
        .prop('src')
    ).toBe(imgSrc)
  })

  it('Should use the `description` property for the <img> alt', () => {
    const imgAlt = 'test-alt'
    const wrapper = shallow(<Profile {...baseProps} imgAlt={imgAlt} />)

    expect(
      wrapper
        .find(Container)
        .find('picture')
        .find(ProfileImg)
        .prop('alt')
    ).toBe(imgAlt)
  })

  it('Should render the `heading` property in a <Heading>', () => {
    const heading = 'test-heading'
    const wrapper = shallow(<Profile {...baseProps} heading={heading} />)

    expect(
      wrapper
        .find(Container)
        .find(Heading)
        .text()
    ).toBe(heading)
  })

  it('Should render the `introduction` property in an <Introduction>', () => {
    const introduction = 'test-introduction'
    const wrapper = shallow(<Profile {...baseProps} introduction={introduction} />)

    expect(
      wrapper
        .find(Container)
        .find(Introduction)
        .text()
    ).toBe(introduction)
  })
})
