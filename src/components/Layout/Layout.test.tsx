import React from 'react'
import { shallow } from 'enzyme'
import Layout from './Layout'

describe('Layout component', () => {
  it('Should render a <header> and <main>', () => {
    const wrapper = shallow(<Layout />)

    expect(wrapper.find('header').exists).toBeTruthy()
    expect(wrapper.find('main').exists).toBeTruthy()
  })

  it('Should render its children inside the <main> tag', () => {
    const wrapper = shallow(<Layout><div id="render-me" /></Layout>)

    expect(wrapper.find('main #render-me').exists).toBeTruthy()
  })
})
