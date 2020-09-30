import styled, { css } from 'styled-components'
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
  ${({ $active }) => $active
    ? css`
      background-color: ${colors.brand};
      border: 2px solid ${colors.brand};
      color: ${colors.white};
    `
    : css`
      background-color: ${colors.white};
      border: 2px solid ${colors.midGrey};
      color: ${colors.black};


      &:hover {
        background-color: ${colors.mintWhite};
        border: 2px solid ${colors.brand};
      }
    `
  }

  border-radius: 20px;
  box-sizing: border-box;
  display: block;
  font-weight: bold;
  height: 100%;
  padding: ${rem(10, 20)};
  text-decoration: none;
  transition: background-color 0.5s, border 0.5s;
  width: 100%;
`
