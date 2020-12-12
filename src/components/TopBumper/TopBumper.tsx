import React, { FunctionComponent } from 'react'
import Text from '../Text'
import { StyledLink as Link, ProfileImg } from './styles'

interface TopBumperProps {
  imgSrc: string;
  imgAlt: string;
  heading: string;
}

const TopBumper: FunctionComponent<TopBumperProps> = ({ imgSrc, imgAlt, heading }) => (
  <Link to="/" data-testid="top-bumper">
    <ProfileImg src={imgSrc} alt={imgAlt} />
    <Text align="center" tag="h2" size="large">{heading}</Text>
  </Link>
)

export default TopBumper
