import styled from 'styled-components'
import { minWidth, rem } from '../../styles/tools'
import { colors } from '../../styles/settings'

export const Container = styled.div`
  ${minWidth('small')} {
    display: grid;
    grid-template-columns: 1fr 3.5fr;
    min-height: 100vh;
  }
`

export const Header = styled.header`
  padding: ${props => props.isBigScreen ? rem(20) : rem(10)};
`

export const Main = styled.main`
  padding: ${rem(20)};
`
