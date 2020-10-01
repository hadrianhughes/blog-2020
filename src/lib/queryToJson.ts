const queryToJson = (): { [key: string]: any } => {
  const query = window ? window.location.search : ''

  // ?x=y -> Minimum 4
  if (query.length < 4) return {}

  const queryWithoutQuestion = query.slice(1)
  const pairs = queryWithoutQuestion.split('&')

  return pairs.reduce((acc, pair) => {
    const [key, value] = pair.split('=')
    return { ...acc, [key]: value }
  }, {})
}

export default queryToJson
