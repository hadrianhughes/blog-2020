import { useEffect, useState, useCallback } from 'react'

const useQueryString = (): { [key: string]: string } => {
  const [query, setQuery] = useState({})

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
  }, [])

  return query
}

export default useQueryString
