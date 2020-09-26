import styled from 'styled-components'
import { minWidth, rem } from '../../styles/tools'

export const ProfileImg = styled.img`
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  width: 60%;
`

export const Container = styled.section`
  margin-top: ${rem(30)};

  ${minWidth('small')} {
    margin-top: 0;
  }
`
