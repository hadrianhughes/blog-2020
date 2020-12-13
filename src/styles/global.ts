import { createGlobalStyle, css } from 'styled-components'
import { rem } from './tools'
import { baseFontSize, colors, spacings } from './settings'

const Globals = createGlobalStyle`
  html, body {
    font-family: Merriweather, serif;
    font-size: ${baseFontSize}px;
    line-height: 1.75;
  }

  body {
    background: ${colors.white};
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    transition: 0.2s background-color;

    ${({ darkMode }): string => darkMode && css`
      background-color: ${colors.nightGrey};
    `}
  }

  hr {
    border: 1px solid ${colors.brand};
    margin: ${rem(spacings.large * 1.5)} auto;
    width: 80%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Karla, sans-serif;
    font-weight: bold;
  }
`

export default Globals
