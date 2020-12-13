import styled, { css } from 'styled-components'
import { fontSizes, colors } from '../../styles/settings'
import { minWidth } from '../../styles/tools'

export const StyledText = styled.p(({ size, align, noSpace }) => (
  css`
    font-size: ${size ? fontSizes[size].mobile : 1}rem;
    text-align: ${align || 'left'};
    transition: color 0.2s;

    ${noSpace && 'margin: 0;'}

    ${size === 'headline' && 'line-height: 1.5;'}

    ${minWidth('medium')} {
      font-size: ${size ? fontSizes[size].desktop : 1}rem;
    }

    ${({ $darkMode }): string => $darkMode && css`
      color: ${colors.white};
    `}
  `
))
