import styled from 'styled-components'
import { rem, minWidth } from '../../styles/tools'
import { spacings, colors } from '../../styles/settings'
import Text from '../Text'

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

export const BodyHeading = styled(Text)`
  margin: ${spacings.xlarge}px 0 ${spacings.medium}px;
`

export const InlineCode = styled.code`
  background-color: ${colors.parchment};
  padding: ${spacings.xsmall}px ${spacings.small}px;
`

export const PublishedText = styled(Text)`
  color: ${colors.grey};
  font-family: 'Karla', sans-serif;
`

export const Content = styled.div`
  margin-top: ${rem(spacings.large)};
`
