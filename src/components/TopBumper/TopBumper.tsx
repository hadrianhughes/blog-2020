import React, { FunctionComponent } from 'react'
import { StyledLink as Link, ProfileImg, Title, Container } from './styles'
import DarkModeToggler from '../DarkModeToggler'

interface TopBumperProps {
  imgSrc: string;
  imgAlt: string;
  heading: string;
}

const TopBumper: FunctionComponent<TopBumperProps> = ({ imgSrc, imgAlt, heading }) => (
  <Container>
    <Link to="/" data-testid="top-bumper">
      <ProfileImg src={imgSrc} alt={imgAlt} />
      <Title align="left" tag="h2" size="large">{heading}</Title>
    </Link>
    <DarkModeToggler />
  </Container>
)

export default TopBumper
