import { Result } from '../components/Results'

const filterByTag = (results: Result[], tag: string): Result[] =>
  results.filter(result => (
    (result.tags || [])
      .map(t => t.identifier)
      .includes(tag)
  ))

export default filterByTag
