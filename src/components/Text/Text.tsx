import React, { FunctionComponent, ComponentClass } from 'react'
import { FontSize } from '../../styles/settings'
import { StyledText } from './styles'

interface TextProps {
  tag?: string
  size?: FontSize
  className?: string
  align?: 'left' | 'center' | 'right'
}

const Text: FunctionComponent<TextProps> = ({
  tag,
  size,
  children,
  className,
  align
}) => (
  <StyledText
    as={tag}
    className={className}
    size={size}
    align={align}>
    {children}
  </StyledText>
)

export default Text
