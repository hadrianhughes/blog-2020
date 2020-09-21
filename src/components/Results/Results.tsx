import React, { FunctionComponent } from 'react'
import {
  List,
  ItemLink as Link,
  ItemHeading,
  PublishedText
} from './styles'

export type Result = {
  title: string
  url: string
  publishedAt: string
}

interface ResultsProps {
  items: Result[]
}

const Results: FunctionComponent<ResultsProps> = ({ items }) => (
  <List>
    {
      items.map(item => (
        <li key={item.url}>
          <Link to={item.url}>
            <ItemHeading>{item.title}</ItemHeading>
            <PublishedText>{item.publishedAt}</PublishedText>
          </Link>
        </li>
      ))
    }
  </List>
)

export default Results
