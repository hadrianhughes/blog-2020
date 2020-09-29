import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { Tag } from '../../types'

interface TagSelectorProps {
  tags: Tag[]
}

const TagSelector: FunctionComponent<TagSelectorProps> = ({ tags }) => (
  <ul>
    {
      tags.map((tag: Tag) => (
        <li key={tag.identifier}>
          <Link to={`/results?tag=${tag.identifier}`}>{tag.name}</Link>
        </li>
      ))
    }
  </ul>
)

export default TagSelector
