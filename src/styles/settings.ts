export const baseFontSize = 16

export type Breakpoint = 'small' | 'medium' | 'large'
export type FontSize = 'body' | 'large' | 'headline'
export type Spacing = 'small' | 'medium' | 'large'

export const breakpoints = {
  small: 375,
  medium: 768,
  large: 1024
}

export const colors = {
  white: '#fff',
  black: '#000',
  grey: '#8e8e8e',
  blueGrey: '#fafafb',
  parchment: '#fdfcf7',
  lightGrey: '#eaeaea'
}

export const fontSizes = {
  body: { mobile: 1, desktop: 1 },
  large: { mobile: 1.5, desktop: 1.5 },
  headline: { mobile: 2, desktop: 3 }
}

export const spacings = {
  small: 10,
  medium: 20,
  large: 30
}
