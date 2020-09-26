import React, { FunctionComponent } from 'react'
import { Tag } from '../../types'
import {
  List,
  ItemLink as Link,
  PublishedText,
  ItemHeading
} from './styles'
import Text from '../Text'

export type Result = {
  title: string
  path: string
  publishedAt: string
  tags: Tag[]
}

interface ResultsProps {
  items: Result[]
}

const Results: FunctionComponent<ResultsProps> = ({ items }) => (
  <List>
    {
      items.map(item => (
        <li key={item.path}>
          <Link to={'/' + item.path}>
            <ItemHeading tag="h3" size="large">{item.title}</ItemHeading>
            <PublishedText noSpace>{item.publishedAt}</PublishedText>
          </Link>
        </li>
      ))
    }
  </List>
)

export default Results
