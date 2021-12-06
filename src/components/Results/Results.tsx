import React, { FunctionComponent } from 'react'
import { Tag } from '../../types'
import {
  List,
  ListItem,
  ItemLink as Link,
  PublishedText,
  ItemHeading
} from './styles'
import { useDarkMode } from '../../context/DarkMode'

export type Result = {
  title: string;
  path: string;
  publishedAt: string;
  tags: Tag[];
}

interface ResultsProps {
  items: Result[];
}

const Results: FunctionComponent<ResultsProps> = ({ items }) => {
  const { active: darkModeActive } = useDarkMode()

  return (
    <List>
      {
        items.map(item => (
          <ListItem key={item.path}>
            <Link to={'/' + item.path} $darkMode={darkModeActive}>
              <ItemHeading tag="h3" size="large">{item.title}</ItemHeading>
              <PublishedText noSpace $darkMode={darkModeActive}>{item.publishedAt}</PublishedText>
            </Link>
          </ListItem>
        ))
      }
    </List>
  )
}

export default Results
