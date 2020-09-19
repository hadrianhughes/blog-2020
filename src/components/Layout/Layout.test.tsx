import React from 'react'
import { shallow } from 'enzyme'
import Layout from './Layout'
import Profile from '../Profile'
import { Header, Main } from './styles'

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

  it('Should not render <Profile> by default at mobile', () => {
    useMediaQuery.mockImplementation(() => false)
    const wrapper = shallow(<Layout />)

    expect(wrapper.find(Profile).exists()).not.toBeTruthy()
  })
})
