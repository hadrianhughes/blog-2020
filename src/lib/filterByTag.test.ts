import filterByTag from './filterByTag'
import { Result } from '../components/Results'

describe('filterByTag function', () => {
  it('Should accept a list of results with tags and return a filtered list with matching tag', () => {
    const input: Result[] = [
      {
        title: 'Test 1',
        path: '/test1',
        publishedAt: 'published1',
        tags: [{ identifier: 'foo', name: 'Foo' }]
      },
      {
        title: 'Test 2',
        path: '/test2',
        publishedAt: 'published2',
        tags: [{ identifier: 'bar', name: 'Bar' }]
      },
      {
        title: 'Test 3',
        path: '/test3',
        publishedAt: 'published3',
        tags: []
      }
    ]

    const tag = 'foo'

    const expected: Result[] = [
      {
        title: 'Test 1',
        path: '/test1',
        publishedAt: 'published1',
        tags: [{ identifier: 'foo', name: 'Foo' }]
      }
    ]

    expect(filterByTag(input, tag)).toStrictEqual(expected)
  })
})
