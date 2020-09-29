import React, { FunctionComponent } from 'react'
import { Tag } from '../../types'

interface TagSelectorProps {
  tags: Tag[]
}

const TagSelector: FunctionComponent<TagSelectorProps> = ({ tags }) => (
  <ul>
    {
      tags.map((tag: Tag) => <li key={tag.identifier}>{tag.name}</li>)
    }
  </ul>
)

export default TagSelector
