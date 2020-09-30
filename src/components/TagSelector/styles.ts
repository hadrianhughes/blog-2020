import styled from 'styled-components'
import { rem } from '../../styles/tools'
import { colors } from '../../styles/settings'
import { Link } from 'gatsby'

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`

export const Item = styled.li`
  font-family: 'Open Sans', sans-serif;
  margin: 0 ${rem(10)};
  overflow: hidden;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

export const StyledLink = styled(Link)`
  background-color: ${colors.grey};
  border-radius: 20px;
  box-sizing: border-box;
  color: ${colors.white};
  display: block;
  height: 100%;
  padding: ${rem(10)};
  text-decoration: none;
  width: 100%;
`
