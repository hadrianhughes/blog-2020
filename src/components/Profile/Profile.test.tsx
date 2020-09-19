import React from 'react'
import { shallow } from 'enzyme'
import Profile from './Profile'

jest.mock('gatsby', () => ({
  ...jest.requireActual('gatsby'),
  useStaticQuery: () => require('./_test-data.json'),
  graphql: () => null
}))

describe('Profile component', () => {
  const wrapper = shallow(<Profile />)

  it('Should render a <section>', () => {
    expect(wrapper.find('section').exists).toBeTruthy()
  })

  it('Should render a picture tag inside the <section>', () => {
    expect(wrapper.find('section > picture').exists).toBeTruthy()
  })

  it('Should render the `srcSet` property into a <source>', () => {
    expect(wrapper.find('section > picture > source').prop('srcSet')).toBe('test-srcset')
  })

  it('Should render the `src` property into an <img>', () => {
    expect(wrapper.find('section > picture > img').prop('src')).toBe('test-src')
  })

  it('Should use the `description` property for the <img> alt', () => {
    expect(wrapper.find('section > picture > img').prop('alt')).toBe('test-description')
  })

  it('Should render the `heading` property in an <h1>', () => {
    expect(wrapper.find('section > h1').text()).toBe('test-heading')
  })

  it('Should render the `introduction` property in a <p>', () => {
    expect(wrapper.find('section > p').text()).toBe('test-introduction')
  })
})
