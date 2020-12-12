import React, { FunctionComponent } from 'react'
import { FontSize } from '../../styles/settings'
import { StyledText } from './styles'

interface TextProps {
  tag?: string;
  size?: FontSize;
  className?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  noSpace?: boolean;
  testId?: string;
}

const Text: FunctionComponent<TextProps> = ({
  tag,
  size,
  children,
  className,
  align,
  noSpace,
  testId
}) => (
  <StyledText
    as={tag}
    className={className}
    size={size}
    align={align}
    noSpace={noSpace}
    data-testid={testId}>
    {children}
  </StyledText>
)

export default Text
