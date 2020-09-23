import React from 'react'
import { mount } from 'enzyme'
import { Document, BLOCKS } from '@contentful/rich-text-types'
import toJson from 'enzyme-to-json'
import ArticleBody from './ArticleBody'
import { Container, Heading } from './styles'

const data: Document = {
  data: {},
  nodeType: 'document' as BLOCKS.DOCUMENT,
  content: [
    {
      data: {},
      nodeType: 'paragraph' as BLOCKS.PARAGRAPH,
      content: [
        {
          data: {},
          nodeType: 'text',
          marks: [],
          value: 'Hello World'
        }
      ]
    }
  ]
}

describe('ArticleBody component', () => {
  const heading = 'test heading'
  const wrapper = mount(<ArticleBody data={data} heading={heading} />)

  it('Should render a <Container>', () => {
    expect(wrapper.find(Container).exists()).toBeTruthy()
  })

  it('Should render the `heading` prop in a <Heading>', () => {
    expect(wrapper.find(Heading).exists()).toBeTruthy()
    expect(wrapper.find(Heading).text()).toBe(heading)
  })

  it('Should pass the `data` prop to the `documentToReactComponents` function', () => {
    expect(toJson(wrapper.find('section').children())).toMatchSnapshot()
  })
})
