import styled from 'styled-components'
import { colors } from '../../styles/settings'
import { rem } from '../../styles/tools'

const toggleWidth = 50
const toggleHeight = 30
const sliderSize = toggleHeight - 8

export const Checkbox = styled.input`
  appearance: none;
  background-color: ${colors.nightGrey};
  border: 2px solid ${colors.nightGrey};
  border-radius: ${rem(toggleHeight)};
  cursor: pointer;
  height: ${rem(toggleHeight)};
  margin: 0;
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
