import React from 'react'
import { shallow } from 'enzyme'
import Layout from './Layout'
import Profile from '../Profile'
import MobileBumper from '../MobileBumper'
import { Header, Main } from './styles'

jest.mock('gatsby', () => ({
  ...jest.requireActual('gatsby'),
  graphql: () => null,
  useStaticQuery: () => ({
    contentfulProfile: {
      profileImage: {
        description: 'test-description',
        fluid: {
          srcSet: 'test-src-set',
          src: 'test-src'
        }
      },
      heading: 'test-heading',
      introduction: {
        introduction: 'test-introduction'
      }
    }
  })
}))

jest.mock('react-responsive', () => ({
  useMediaQuery: jest.fn()
}))
import { useMediaQuery } from 'react-responsive'

describe('Layout component', () => {
  it('Should render a <Header> and <Main>', () => {
    const wrapper = shallow(<Layout />)

    expect(wrapper.find(Header).exists()).toBeTruthy()
    expect(wrapper.find(Main).exists()).toBeTruthy()
  })

  it('Should render its children inside the <main> tag', () => {
    const wrapper = shallow(<Layout><div id="render-me" /></Layout>)

    expect(wrapper.find(Main).find('#render-me').exists()).toBeTruthy()
  })

  it('Should render a <Profile> inside the <Header> at desktop', () => {
    useMediaQuery.mockImplementation(() => true)
    const wrapper = shallow(<Layout />)

    expect(wrapper.find(Profile).exists()).toBeTruthy()
  })

  it('Should pass the Contentful data from `useStaticQuery` to the <Profile>', () => {
    useMediaQuery.mockImplementation(() => true)
    const wrapper = shallow(<Layout />)

    expect(wrapper.find(Profile).prop('imgSrc')).toBe('test-src')
    expect(wrapper.find(Profile).prop('imgSrcSet')).toBe('test-src-set')
    expect(wrapper.find(Profile).prop('imgAlt')).toBe('test-description')
    expect(wrapper.find(Profile).prop('heading')).toBe('test-heading')
    expect(wrapper.find(Profile).prop('introduction')).toBe('test-introduction')
  })

  it('Should not render <Profile> by default at mobile', () => {
    useMediaQuery.mockImplementation(() => false)
    const wrapper = shallow(<Layout />)

    expect(wrapper.find(Profile).exists()).not.toBeTruthy()
  })

  it('Should render a <MobileBumper> by default at mobile', () => {
    useMediaQuery.mockImplementation(() => false)
    const wrapper = shallow(<Layout />)

    expect(wrapper.find(MobileBumper).exists()).toBeTruthy()
  })

  it('Should pass the `heading` from Contentful to the <MobileBumper>', () => {
    useMediaQuery.mockImplementation(() => false)
    const wrapper = shallow(<Layout />)

    expect(wrapper.find(MobileBumper).prop('heading')).toBe('test-heading')
  })

  it('Should render <Profile> instead on mobile after `onOpen` is clicked on <MobileBumper>', () => {
    useMediaQuery.mockImplementation(() => false)
    const wrapper = shallow(<Layout />)

    wrapper.find(MobileBumper).prop('onOpen')()
    wrapper.update()

    expect(wrapper.find(MobileBumper).exists()).not.toBeTruthy()
    expect(wrapper.find(Profile).exists()).toBeTruthy()
  })
})
