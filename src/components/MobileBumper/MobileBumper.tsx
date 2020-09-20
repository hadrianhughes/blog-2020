import React, { FunctionComponent } from 'react'
import { Heading, Container } from './styles'

export interface MobileBumperProps {
  heading: string
  onToggleProfile: () => void
  onToggleMenu: () => void
}

const MobileBumper: FunctionComponent<MobileBumperProps> = ({
  heading,
  onToggleProfile,
  onToggleMenu
}) => (
  <Container>
    <Heading>{heading}</Heading>
    <button type="button" onClick={onToggleProfile} id="btn-profile">Profile</button>
    <button type="button" onClick={onToggleMenu} id="btn-menu">Menu</button>
  </Container>
)

export default MobileBumper
