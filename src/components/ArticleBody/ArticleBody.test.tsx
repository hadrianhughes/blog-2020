import React from 'react'
import { shallow } from 'enzyme'
import { Document, BLOCKS } from '@contentful/rich-text-types'
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
  it('Should pass the `data` prop to the `documentToReactComponents` function', () => {
    const wrapper = shallow(<ArticleBody data={data} />)
    expect(wrapper).toMatchSnapshot()
  })
})
