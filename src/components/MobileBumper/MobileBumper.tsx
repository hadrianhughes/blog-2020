import React, { FunctionComponent } from 'react'
import { Heading, Container } from './styles'

export interface MobileBumperProps {
  heading: string
  onOpen: () => void
}

const MobileBumper: FunctionComponent<MobileBumperProps> = ({ heading, onOpen }) => (
  <Container>
    <Heading>{heading}</Heading>
    <button type="button" onClick={onOpen}>Toggle</button>
  </Container>
)

export default MobileBumper
