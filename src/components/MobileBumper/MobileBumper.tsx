import React, { FunctionComponent } from 'react'
import { Heading, Container, ProfileButton } from './styles'

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
    <div>
      <ProfileButton type="button" onClick={onToggleProfile}>Profile</ProfileButton>
      <button type="button" onClick={onToggleMenu} id="btn-menu">Menu</button>
    </div>
  </Container>
)

export default MobileBumper
