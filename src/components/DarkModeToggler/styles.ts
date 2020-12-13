import styled from 'styled-components'
import Text from '../Text'
import { colors, spacings } from '../../styles/settings'
import { rem } from '../../styles/tools'

export const Label = styled(Text)`
  align-items: center;
  color: ${colors.grey};
  display: flex;
  font-family: Karla, sans-serif;
  justify-content: center;
`

export const Checkbox = styled.input`
  margin: 0;
  margin-left: ${rem(spacings.small)};
`
