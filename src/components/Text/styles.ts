import styled, { css } from 'styled-components'
import { fontSizes } from '../../styles/settings'
import { minWidth } from '../../styles/tools'

export const StyledText = styled.p(({ size, align, noSpace }) => (
  css`
    font-size: ${size ? fontSizes[size].mobile : 1}rem;
    text-align: ${align || 'left'};

    ${noSpace && 'margin: 0;'}

    ${size === 'headline' && 'line-height: 1.5;'}

    ${minWidth('medium')} {
      font-size: ${size ? fontSizes[size].desktop : 1}rem;
    }
  `
))
