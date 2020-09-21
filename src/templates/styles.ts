import styled from 'styled-components'
import { minWidth } from '../styles/tools'

export const ArticleHeading = styled.h1`
  font-size: 2rem;

  ${minWidth('medium')} {
    font-size: 3rem;
  }
`
