import styled from 'styled-components'
import { Link } from 'gatsby'
import { rem, minWidth } from '../../styles/tools'
import { colors } from '../../styles/settings'
import Text from '../Text'

export const StyledLink = styled(Link)`
  align-items: center;
  color: ${colors.black};
  display: flex;
  text-decoration: none;
`

export const ProfileImg = styled.img`
  border: 2px solid ${colors.white};
  border-radius: 50%;
  margin-right: ${rem(10)};
  width: ${rem(50)};

  ${minWidth('large')} {
    display: none;
  }

  ${minWidth('xlarge')} {
    display: block;
  }
`

export const Title = styled(Text)`
  line-height: 1;
  max-width: 50%;

  ${minWidth('medium')} {
    max-width: none;
  }
`

export const Container = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
`
