import styled from 'styled-components'
import { Link } from 'gatsby'
import { minWidth, rem } from '../../styles/tools'
import { colors } from '../../styles/settings'

export const StyledLink = styled(Link)`
  align-items: center;
  color: ${colors.black};
  display: flex;
  text-decoration: none;

  ${minWidth('large')} {
    justify-content: center;
  }
`

export const ProfileImg = styled.img`
  border-radius: 50%;
  margin-right: ${rem(10)};
  width: ${rem(50)};
`
