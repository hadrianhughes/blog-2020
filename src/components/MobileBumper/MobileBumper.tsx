import React, { FunctionComponent } from 'react'
import { Heading, Container } from './styles'

export interface MobileBumperProps {
  heading: string
  onToggle: () => void
}

const MobileBumper: FunctionComponent<MobileBumperProps> = ({ heading, onToggle }) => (
  <Container>
    <Heading>{heading}</Heading>
    <button type="button" onClick={onToggle}>Toggle</button>
  </Container>
)

export default MobileBumper
