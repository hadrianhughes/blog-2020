import { Breakpoint, breakpoints, baseFontSize } from './settings'

export const minWidth = (key: Breakpoint): string => `@media only screen and (min-width: ${breakpoints[key] + 1}px)`

export const rem = (...pxs: number[]): string => pxs.map(px => `${px / baseFontSize}rem`).join(' ')
