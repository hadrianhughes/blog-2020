import styled, { css } from 'styled-components'
import { fontSizes } from '../../styles/settings'

export const StyledText = styled.p(({ size, align }) => (
  css`
    font-size: ${size ? fontSizes[size] : 1}rem;
    text-align: ${align || 'left'}
  `
))
