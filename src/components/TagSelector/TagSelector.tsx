import React, { FunctionComponent } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Tag } from '../../types'
import { unwrapGraph, queryToJson } from '../../lib'
import { StyledLink as Link, List, Item, StyledText as Text } from './styles'

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

  const activeTag = queryToJson(window.location.search).tag
  const tags = unwrapGraph(result.allContentfulTag)

  return (
    <section>
      <Text align="center">Read about...</Text>
      <List>
        {
          tags.map(tag => (
            <Item key={tag.identifier}>
              <Link
                to={`/results?tag=${tag.identifier}`}
                $active={tag.identifier === activeTag}>
                {tag.name}
              </Link>
            </Item>
          ))
        }
      </List>
    </section>
  )
}

export default TagSelector
