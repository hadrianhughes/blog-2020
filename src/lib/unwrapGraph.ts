export type GraphStructure = {
  edges: { node: any }[]
}

const unwrapGraph = (graph: GraphStructure): any[] => {
  if (!graph.edges) return []

  return graph.edges.map(({ node }) => node)
}

export default unwrapGraph
