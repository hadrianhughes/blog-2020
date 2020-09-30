import styled from 'styled-components'
import { Link } from 'gatsby'
import { rem } from '../../styles/tools'
import { colors, spacings } from '../../styles/settings'
import Text from '../Text'

const pseudoWidth = 10

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const ItemHeading = styled(Text)`
  margin: 0 0 ${rem(spacings.small)};
`

export const ItemLink = styled(Link)`
  background: ${colors.white};
  box-sizing: border-box;
  color: ${colors.black};
  display: block;
  padding: ${rem(spacings.medium, spacings.large)};
  position: relative;
  text-decoration: none;
  transition: background 0.5s;
  width: 100%;

  &::before {
    background-color: ${colors.brand};
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: ${pseudoWidth}px;
  }

  &:hover {
    background: ${colors.lightGrey};

    ${ItemHeading} {
      text-decoration: underline;
    }
  }
`

export const PublishedText = styled(Text)`
  color: ${colors.grey};
  font-family: 'Open Sans', sans-serif;
`
