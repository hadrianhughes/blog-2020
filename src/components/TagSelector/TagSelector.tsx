import React, { FunctionComponent } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Tag } from '../../types'
import { unwrapGraph } from '../../lib'

const TagSelector: FunctionComponent = () => {
  const result = useStaticQuery(
    graphql`
      query TagsQuery {
        allContentfulTag {
          edges {
            node {
              identifier
              name
            }
          }
        }
      }
    `
  )

  const tags = unwrapGraph(result.allContentfulTag)

  return (
    <ul>
      {
        tags.map(tag => (
          <li key={tag.identifier}>
            <Link to={`/results?tag=${tag.identifier}`}>{tag.name}</Link>
          </li>
        ))
      }
    </ul>
  )
}

export default TagSelector
