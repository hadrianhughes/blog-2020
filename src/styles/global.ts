import { createGlobalStyle } from 'styled-components'
import { rem, minWidth } from './tools'
import { baseFontSize, colors, spacings } from './settings'

const Globals = createGlobalStyle`
  html, body {
    background: ${colors.white};
    font-family: 'IBM Plex Serif', serif;
    font-size: ${baseFontSize}px;
    line-height: 1.75;
    margin: 0;
  }

  hr {
    border: 1px solid ${colors.brand};
    margin: ${rem(spacings.large * 1.5)} auto;
    width: 80%;

    ${minWidth('large')} {
      margin: ${rem(spacings.large * 2)} auto;
    }
  }
`

export default Globals
