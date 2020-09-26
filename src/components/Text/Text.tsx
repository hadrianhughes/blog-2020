import React, { FunctionComponent, ComponentClass } from 'react'
import { FontSize, Spacing } from '../../styles/settings'
import { StyledText } from './styles'

interface TextProps {
  tag?: string
  size?: FontSize
  className?: string
  align?: 'left' | 'center' | 'right' | 'justify'
  noSpace?: boolean
}

const Text: FunctionComponent<TextProps> = ({
  tag,
  size,
  children,
  className,
  align,
  noSpace
}) => (
  <StyledText
    as={tag}
    className={className}
    size={size}
    align={align}
    noSpace={noSpace}>
    {children}
  </StyledText>
)

export default Text
