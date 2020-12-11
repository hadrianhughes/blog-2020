import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { rem, minWidth } from '../../styles/tools'
import { spacings, colors } from '../../styles/settings'

const bulletSize = 8;

export const Container = styled.section`
  ${minWidth('medium')} {
    padding: 0 ${rem(spacings.large)};
  }
`

export const UL = styled.ul`
  list-style-type: none;
`

export const BulletItem = styled.li`
  ul & {
    position: relative;

    &::before {
      background-color: ${colors.brand};
      content: '';
      height: ${bulletSize}px;
      left: -${bulletSize * 3}px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: ${bulletSize}px;
    }
  }
`

export const Image = styled.img`
  display: block;
  margin: ${rem(spacings.large)} auto;
  width: 100%;

  ${minWidth('large')} {
    width: 90%;
  }
`

export const headingForLevel = (level: number): FunctionComponent => styled[`h${level}`]`
  margin: ${spacings.xlarge}px 0 ${spacings.medium}px;
`
