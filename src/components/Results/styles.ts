import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { rem } from '../../styles/tools'
import { colors, spacings } from '../../styles/settings'
import Text from '../Text'

const pseudoWidth = 10

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const ListItem = styled.li`
  margin: ${rem(spacings.small)} 0;
`

export const ItemHeading = styled(Text)`
  line-height: 1.4;
  margin: 0;
`

export const ItemLink = styled(Link)`
  ${({ $darkMode }): string => css`
    background: ${$darkMode ? colors.grey : colors.lightGrey};
    box-sizing: border-box;
    color: ${colors.black};
    display: block;
    padding: ${rem(spacings.small, spacings.large)};
    position: relative;
    text-decoration: none;
    transition: background 0.2s;
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
      background: ${$darkMode ? colors.darkGrey : colors.midGrey};

      ${ItemHeading} {
        text-decoration: underline;
      }
    }
  `}
`

export const PublishedText = styled(Text)`
  ${({ $darkMode }): string => css`
    color: ${$darkMode ? colors.lightGrey : colors.grey};
    font-family: 'Karla', sans-serif;
    transition: color 0.2s;
  `}
`
