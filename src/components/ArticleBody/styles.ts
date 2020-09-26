import styled from 'styled-components'
import { rem, minWidth } from '../../styles/tools'

export const Container = styled.section`
  ${minWidth('medium')} {
    padding: 0 ${rem(30)};
  }
`
