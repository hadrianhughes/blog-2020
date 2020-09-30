import unwrapGraph, { GraphStructure } from './unwrapGraph'

describe('unwrapGraph function', () => {
  it('Should accept an argument of type GraphStructure and return an array of its contents', () => {
    const graph: GraphStructure = {
      edges: [
        { node: 1 },
        { node: 2 },
        { node: 3 }
      ]
    }

    expect(unwrapGraph(graph)).toStrictEqual([1, 2, 3])
  })
})
