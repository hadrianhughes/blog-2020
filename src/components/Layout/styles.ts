import styled from 'styled-components'
import { minWidth, rem } from '../../styles/tools'
import { spacings } from '../../styles/settings'

export const Container = styled.div`
  ${minWidth('large')} {
    display: grid;
    grid-template-columns: 25% 75%;
    min-height: 100vh;
  }
`

export const Header = styled.header`
  div {
    padding: ${(props): string => props.isBigScreen ? rem(spacings.medium) : rem(spacings.small, spacings.large)};
    position: sticky;
    top: 0;

    padding: ${rem(spacings.small, spacings.medium)};

    ${minWidth('medium')} {
      padding: ${rem(spacings.small, spacings.large)};
    }

    ${minWidth('large')} {
      padding: ${rem(spacings.medium)};
    }
  }
`

export const Main = styled.main`
  padding: ${rem(spacings.medium)};
`
