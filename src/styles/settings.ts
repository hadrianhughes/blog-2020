export const baseFontSize = 16

export type Breakpoint = 'small' | 'medium' | 'large'
export type FontSize = 'body' | 'large' | 'xlarge' | 'headline'
export type Spacing = 'xsmall' | 'small' | 'medium' | 'large'

export const breakpoints = {
  small: 375,
  medium: 768,
  large: 1024
}

export const colors = {
  white: '#fff',
  black: '#000',
  grey: '#6d6b6b',
  blueGrey: '#fafafb',
  lightGrey: '#fbfbfb',
  midGrey: '#d4d4d4',
  darkGrey: '#808080',
  parchment: '#fdf8eb',
  brand: '#10D9A3',
  mintWhite: '#f9fffc'
}

export const fontSizes = {
  body: { mobile: 1, desktop: 1 },
  large: { mobile: 1.75, desktop: 1.75 },
  xlarge: { mobile: 2, desktop: 2 },
  headline: { mobile: 2.5, desktop: 3 }
}

export const spacings = {
  xsmall: 3,
  small: 10,
  medium: 20,
  large: 30,
  xlarge: 50
}
