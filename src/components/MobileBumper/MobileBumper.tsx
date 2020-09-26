import React, { FunctionComponent } from 'react'
import Text from '../Text'
import { Container, ProfileButton, MenuButton } from './styles'

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
    <Text tag="h2" size="large" noSpace>{heading}</Text>
    <div>
      <ProfileButton type="button" onClick={onToggleProfile}>Profile</ProfileButton>
      <MenuButton type="button" onClick={onToggleMenu}>Menu</MenuButton>
    </div>
  </Container>
)

export default MobileBumper
