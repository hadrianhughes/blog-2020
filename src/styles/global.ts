import { createGlobalStyle } from 'styled-components'
import { rem } from './tools'
import { baseFontSize, colors, spacings } from './settings'

const Globals = createGlobalStyle`
  html, body {
    background: ${colors.white};
    font-family: 'IBM Plex Serif', serif;
    font-size: ${baseFontSize}px;
    margin: 0;
  }

  hr {
    border: 1px solid ${colors.brand};
    margin: ${rem(spacings.large * 2)} auto;
    width: 80%;
  }
`

export default Globals
