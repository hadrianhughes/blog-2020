import styled from 'styled-components'
import { Link } from 'gatsby'
import { minWidth, rem } from '../../styles/tools'
import { spacings, colors } from '../../styles/settings'

export const ProfileImg = styled.img`
  border-radius: 50%;
  margin-right: ${rem(10)};
  width: 50px;
`

export const Container = styled.section`
  margin-top: ${rem(spacings.large)};

  ${minWidth('large')} {
    margin-top: 0;
  }
`

export const StyledLink = styled(Link)`
  align-items: center;
  color: ${colors.black};
  display: flex;
  text-decoration: none;

  ${minWidth('large')} {
    justify-content: center;
  }
`
