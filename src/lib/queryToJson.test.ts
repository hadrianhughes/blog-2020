import queryToJson from './queryToJson'

delete global.window.location
global.window = Object.create(window)

describe('queryToJson function', () => {
  it('Should accept an empty query and return an empty object', () => {
    global.window.location = {
      ...global.window.location,
      search: ''
    }

    expect(queryToJson()).toStrictEqual({})
    expect(queryToJson()).toStrictEqual({})
  })

  it('Should accept a single key-value query and return that as an object', () => {
    const key = 'foo'
    const value = 'bar'

    global.window.location = {
      ...global.window.location,
      search: `?${key}=${value}`
    }

    expect(queryToJson()).toStrictEqual({
      [key]: value
    })
  })

  it('Should accept a series of & separated key-values and return a dictionary', () => {
    const inAndOut = {
      foo1: 'bar1',
      foo2: 'bar2',
      foo3: 'bar3'
    }

    global.window.location = {
      ...global.window.location,
      search: `?foo1=${inAndOut.foo1}&foo2=${inAndOut.foo2}&foo3=${inAndOut.foo3}`
    }


    const inAsString =
      Object.keys(inAndOut)
        .map(key => `${key}=${inAndOut[key]}`)
        .join('&')

    expect(queryToJson()).toStrictEqual(inAndOut)
  })
})
