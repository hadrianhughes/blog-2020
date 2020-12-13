import formatDate from './formatDate'

describe('formatDate function', () => {
  it('Should return `1st Jan 2000` for 01-01-2000', () => {
    const input = new Date('01-01-2000')
    expect(formatDate(input)).toBe('1st Jan 2000')
  })

  it('Should return `22nd Feb 2000` for 02-22-2000', () => {
    const input = new Date('02-22-2000')
    expect(formatDate(input)).toBe('22nd Feb 2000')
  })

  it('Should return `23rd Mar 2000` for 03-23-2000', () => {
    const input = new Date('03-23-2000')
    expect(formatDate(input)).toBe('23rd Mar 2000')
  })

  it('Should return `29th Apr 2000` for 04-29-2000', () => {
    const input = new Date('04-29-2000')
    expect(formatDate(input)).toBe('29th Apr 2000')
  })
})
