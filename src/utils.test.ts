import { queryToJson } from './utils'

describe('queryToJson function', () => {
  it('Should accept an empty query and return an empty object', () => {
    expect(queryToJson('')).toStrictEqual({})
    expect(queryToJson('?')).toStrictEqual({})
  })

  it('Should accept a single key-value query and return that as an object', () => {
    const key = 'foo'
    const value = 'bar'

    expect(queryToJson(`?${key}=${value}`)).toStrictEqual({
      [key]: value
    })
  })

  it('Should accept a series of & separated key-values and return a dictionary', () => {
    const inAndOut = {
      foo1: 'bar1',
      foo2: 'bar2',
      foo3: 'bar3'
    }

    const inAsString =
      Object.keys(inAndOut)
        .map(key => `${key}=${inAndOut[key]}`)
        .join('&')

    expect(queryToJson('?' + inAsString)).toStrictEqual(inAndOut)
  })
})
