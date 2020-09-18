import { Breakpoint, breakpoints, baseFontSize } from './settings'

export const minWidth = (key: Breakpoint): string => `@media only screen and (min-width: ${breakpoints[key] + 1}px)`

export const rem = (px: number): string => `${px / baseFontSize}rem`
