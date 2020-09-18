import { createGlobalStyle } from 'styled-components'
import { baseFontSize } from './settings'

const Globals = createGlobalStyle`
  html, body {
    font-family: Merriweather;
    font-size: ${baseFontSize}px;
    margin: 0;
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
`

export default Globals
