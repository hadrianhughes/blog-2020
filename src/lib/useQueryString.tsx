import { useEffect, useState } from 'react'

const useQueryString = (): { [key: string]: string } => {
  const [query, setQuery] = useState({})

  if (typeof window === 'undefined') {
    return query
  }

  useEffect(() => {
    const rawQuery = window.location.search

    // ?x=y -> Minimum 4
    if (rawQuery.length < 4) return

    const pairs = rawQuery.slice(1).split('&')

    const jsonPairs = pairs.reduce((acc, pair) => {
      const [key, value] = pair.split('=')
      return { ...acc, [key]: value }
    }, {})

    setQuery(jsonPairs)
  }, [window.location.search])

  return query
}

export default useQueryString
