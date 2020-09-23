import styled from 'styled-components'
import { minWidth, rem } from '../../styles/tools'

export const Container = styled.div`
  ${minWidth('medium')} {
    display: grid;
    grid-template-columns: 1fr 2.5fr;
    min-height: 100vh;
  }

  ${minWidth('large')} {
    grid-template-columns: 1fr 3.5fr;
  }
`

export const Header = styled.header`
  padding: ${props => props.isBigScreen ? rem(20) : rem(10)};
`

export const Main = styled.main`
  padding: ${rem(20)};
`
