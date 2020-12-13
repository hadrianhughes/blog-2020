import styled from 'styled-components'
import { minWidth, rem } from '../../styles/tools'
import { spacings } from '../../styles/settings'

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  ${minWidth('large')} {
    display: grid;
    grid-template-columns: 25% 75%;
  }
`

export const Header = styled.header`
  div {
    box-sizing: border-box;
    padding: ${rem(spacings.small, spacings.medium)};
    position: sticky;
    top: 0;
    width: 100%;

    ${minWidth('medium')} {
      padding: ${rem(spacings.small, spacings.large)};
    }

    ${minWidth('large')} {
      padding: ${rem(spacings.medium)};
    }
  }
`

export const Main = styled.main`
  box-sizing: border-box;
  padding: ${rem(spacings.medium)};
  width: 100%;

  ${minWidth('large')} {
    width: auto;
  }
`
