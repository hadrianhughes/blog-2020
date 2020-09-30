import { createGlobalStyle } from 'styled-components'
import { rem } from './tools'
import { baseFontSize, colors, spacings } from './settings'

const Globals = createGlobalStyle`
  html, body {
    background: ${colors.white};
    font-family: Merriweather;
    font-size: ${baseFontSize}px;
    margin: 0;
  }

  hr {
    border: 1px solid ${colors.brand};
    margin: ${rem(spacings.large * 2)} auto;
    width: 80%;
  }

  @font-face {
    font-family: Merriweather;
    src: url('/fonts/Merriweather-Regular.ttf');
  }

  @font-face {
    font-family: Merriweather;
    font-weight: bold;
    src: url('/fonts/Merriweather-Bold.ttf');
  }

  @font-face {
    font-family: Merriweather;
    font-style: italic;
    src: url('/fonts/Merriweather-Italic.ttf');
  }

  @font-face {
    font-family: Merriweather;
    font-style: italic;
    font-weight: bold;
    src: url('/fonts/Merriweather-BoldItalic.ttf');
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/OpenSans-Regular.ttf');
  }
`

export default Globals
