import React, { FunctionComponent } from 'react'
import { render } from '@testing-library/react'
import useQueryString from './useQueryString'

global.window = Object.create(global.window)
Object.defineProperty(window, 'location', {
  value: {
    search: '?foo=bar'
  }
})


const QueryUser: FunctionComponent = () => {
  const query = useQueryString()

  return (
    <div id="query">{JSON.stringify(query)}</div>
  )
}

describe('useQueryString hook', () => {
  it('Should return a flat object of key: {string} pairs for any query string', () => {
    const { container } = render(<QueryUser />)

    expect(JSON.parse(container.querySelector('#query').innerHTML)).toStrictEqual({
      foo: 'bar'
    })
  })
})
