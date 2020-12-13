import styled, { css } from 'styled-components'
import Text from '../Text'
import { colors, spacings } from '../../styles/settings'
import { rem } from '../../styles/tools'

export const Label = styled(Text)`
  ${({ $darkMode }): string => css`
    align-items: center;
    color: ${$darkMode ? colors.white : colors.grey};
    display: flex;
    font-family: Karla, sans-serif;
    justify-content: center;
    margin-top: ${rem(spacings.large)};
    transition: color 0.2s;
  `}
`

export const Checkbox = styled.input`
  margin: 0;
  margin-left: ${rem(spacings.small)};
`
