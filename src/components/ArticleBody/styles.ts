import styled from 'styled-components'
import { rem, minWidth } from '../../styles/tools'

export const Container = styled.section`
  padding: 0 ${rem(10)};
`

export const Heading = styled.h1`
  font-size: 2rem;

  ${minWidth('medium')} {
    font-size: 3rem;
  }
`

export const Paragraph = styled.p`
  text-align: justify;
`
