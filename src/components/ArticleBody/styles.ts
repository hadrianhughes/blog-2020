import styled, { css } from 'styled-components'
import { rem, minWidth } from '../../styles/tools'
import { spacings, colors } from '../../styles/settings'
import Text from '../Text'

const bulletSize = 8

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
  max-width: 100%;

  ${minWidth('large')} {
    max-width: 90%;
  }
`

export const BodyHeading = styled(Text)`
  margin: ${spacings.xlarge}px 0 ${spacings.medium}px;
`

export const InlineCode = styled.code`
  ${({ $darkMode }): string => css`
    background-color: ${$darkMode ? colors.grey : colors.parchment};
    overflow-wrap: break-word;
    padding: ${spacings.xsmall}px ${spacings.small}px;
  `}
`

export const PublishedText = styled(Text)`
  ${({ $darkMode }): string => css`
    color: ${$darkMode ? colors.lightGrey : colors.grey};
    font-family: 'Karla', sans-serif;
  `}
`

export const Content = styled.div`
  ${({ $darkMode }): string => css`
    color: ${$darkMode ? 'white' : 'black'};
    margin-top: ${rem(spacings.large)};
  `}
`

export const Title = styled(Text)`
  margin-top: ${rem(spacings.large)};
`
