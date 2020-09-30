import makeTitle from './makeTitle'

describe('makeTitle function', () => {
  it('Should accept any string and append " | Hadrian Hughes" to it', () => {
    const input = 'test'

    expect(makeTitle(input)).toBe(`${input} | Hadrian Hughes`)
  })
})
