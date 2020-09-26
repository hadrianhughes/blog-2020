import styled from 'styled-components'
import { Link } from 'gatsby'
import { rem } from '../../styles/tools'
import { colors } from '../../styles/settings'
import Text from '../Text'

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const ItemHeading = styled(Text)`
  margin: 0 0 ${rem(10)};
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

  &:hover {
    border: 1px solid ${colors.black};

    ${ItemHeading} {
      text-decoration: underline;
    }
  }
`

export const PublishedText = styled(Text)`
  color: ${colors.grey};
  font-family: 'Open Sans', sans-serif;
`
