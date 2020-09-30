import React, { FunctionComponent } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Tag } from '../../types'
import { unwrapGraph } from '../../lib'
import { StyledLink as Link, List, Item } from './styles'

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
    <List>
      {
        tags.map(tag => (
          <Item key={tag.identifier}>
            <Link to={`/results?tag=${tag.identifier}`}>{tag.name}</Link>
          </Item>
        ))
      }
    </List>
  )
}

export default TagSelector
