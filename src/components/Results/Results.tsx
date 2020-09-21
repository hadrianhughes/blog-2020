import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'

export type Result = {
  title: string
  url: string
}

interface ResultsProps {
  items: Result[]
}

const Results: FunctionComponent<ResultsProps> = ({ items }) => (
  <ul>
    {
      items.map(item => (
        <li key={item.url}>
          <Link to={item.url}>{item.title}</Link>
        </li>
      ))
    }
  </ul>
)

export default Results
