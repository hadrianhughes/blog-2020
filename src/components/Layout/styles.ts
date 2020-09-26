import styled from 'styled-components'
import { minWidth, rem } from '../../styles/tools'
import { spacings } from '../../styles/settings'

export const Container = styled.div`
  ${minWidth('large')} {
    display: grid;
    grid-template-columns: 1fr 2.5fr;
    min-height: 100vh;
  }
`

export const Header = styled.header`
  padding: ${props => props.isBigScreen ? rem(spacings.medium) : rem(spacings.small)};
`

export const Main = styled.main`
  padding: ${rem(spacings.medium)};
`
