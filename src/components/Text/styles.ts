import styled, { css } from 'styled-components'
import { fontSizes } from '../../styles/settings'
import { minWidth } from '../../styles/tools'

export const StyledText = styled.p(({ size, align, noSpace, bold }) => (
  css`
    font-size: ${size ? fontSizes[size].mobile : 1}rem;
    text-align: ${align || 'left'};

    ${noSpace && 'margin: 0;'}

    ${minWidth('medium')} {
      font-size: ${size ? fontSizes[size].desktop : 1}rem;
    }
  `
))
