import styled, { css } from 'styled-components'
import Text from '../Text'
import { colors, spacings } from '../../styles/settings'
import { rem, minWidth } from '../../styles/tools'

const toggleWidth = 50
const toggleHeight = 30
const sliderSize = toggleHeight - 8

export const Label = styled(Text)`
  ${({ $darkMode }): string => css`
    align-items: center;
    color: ${$darkMode ? colors.white : colors.grey};
    display: flex;
    font-family: Karla, sans-serif;
    justify-content: center;
    margin-top: ${rem(spacings.large)};
    transition: color 0.2s;

    ${minWidth('medium')} {
      margin-top: ${rem(spacings.xlarge)};
    }

    span {
      line-height: 1;
      max-width: ${rem(50)};
    }
  `}
`

export const Checkbox = styled.input`
  appearance: none;
  background-color: ${colors.nightGrey};
  border: 2px solid ${colors.nightGrey};
  border-radius: ${rem(toggleHeight)};
  cursor: pointer;
  height: ${rem(toggleHeight)};
  margin: 0;
  margin-left: ${rem(spacings.small)};
  position: relative;
  width: ${rem(toggleWidth)};

  &::after {
    background-image: url(/img/sun.svg);
    background-size: contain;
    content: '';
    position: absolute;
    height: ${rem(sliderSize)};
    left: 2px;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.2s;
    width: ${rem(sliderSize)};
  }

  &:checked {
    background-color: ${colors.lightGrey};
    border: 2px solid ${colors.lightGrey};

    &::after {
      background-image: url(/img/moon.svg);
      transform: translate(calc(100% - 2px), -50%);
    }
  }
`
