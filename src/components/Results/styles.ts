import styled from 'styled-components'
import { Link } from 'gatsby'
import { rem } from '../../styles/tools'
import { colors } from '../../styles/settings'

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const ItemHeading = styled.h3`
  font-size: 1.5rem;
`

export const ItemLink = styled(Link)`
  background: ${colors.white};
  border: 1px solid ${colors.lightGrey};
  border-radius: 10px;
  box-sizing: border-box;
  color: ${colors.black};
  display: block;
  padding: ${rem(20, 30)};
  text-decoration: none;
  width: 100%;

  &:hover ${ItemHeading} {
    text-decoration: underline;
  }
`

export const PublishedText = styled.p`
  color: ${colors.grey};
  font-family: 'Open Sans', sans-serif;
`
