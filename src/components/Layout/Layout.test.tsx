import React from 'react'
import { shallow } from 'enzyme'
import Layout from './Layout'
import Profile from '../Profile'
import { Header, Main } from './styles'

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

  it('Should render a <Profile> inside the <Header>', () => {
    const wrapper = shallow(<Layout />)

    expect(wrapper.find(Profile).exists()).toBeTruthy()
  })
})
