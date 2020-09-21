import React, { FunctionComponent } from 'react'
import { List, ItemLink as Link } from './styles'

export type Result = {
  title: string
  url: string
}

interface ResultsProps {
  items: Result[]
}

const Results: FunctionComponent<ResultsProps> = ({ items }) => (
  <List>
    {
      items.map(item => (
        <li key={item.url}>
          <Link to={item.url}>{item.title}</Link>
        </li>
      ))
    }
  </List>
)

export default Results
