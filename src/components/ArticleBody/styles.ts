import styled from 'styled-components'
import { rem, minWidth } from '../../styles/tools'
import { spacings } from '../../styles/settings'

export const Container = styled.section`
  ${minWidth('medium')} {
    padding: 0 ${rem(spacings.large)};
  }
`
