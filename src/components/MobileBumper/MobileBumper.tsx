import React, { FunctionComponent } from 'react'
import { Heading, Container, ProfileButton, MenuButton } from './styles'

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
      <MenuButton type="button" onClick={onToggleMenu}>Menu</MenuButton>
    </div>
  </Container>
)

export default MobileBumper
