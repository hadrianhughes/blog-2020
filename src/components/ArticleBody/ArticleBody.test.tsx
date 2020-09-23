import React from 'react'
import { mount } from 'enzyme'
import { Document, BLOCKS } from '@contentful/rich-text-types'
import toJson from 'enzyme-to-json'
import ArticleBody from './ArticleBody'

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
  const wrapper = mount(<ArticleBody data={data} />)

  it('Should render a <section>', () => {
    expect(wrapper.find('section').exists()).toBeTruthy()
  })

  it('Should pass the `data` prop to the `documentToReactComponents` function', () => {
    expect(toJson(wrapper.find('section').children())).toMatchSnapshot()
  })
})
