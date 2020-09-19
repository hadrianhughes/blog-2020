import React from 'react'
import { shallow } from 'enzyme'
import Navigation from './Navigation'

describe('Navigation component', () => {
  it('Should render a nav element', () => {
    const wrapper = shallow(<Navigation />)

    expect(wrapper.find('nav').exists).toBeTruthy()
  })
})
