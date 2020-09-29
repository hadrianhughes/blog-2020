import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import Text from '../Text'
import { ProfileImg, Container } from './styles'

export interface ProfileProps {
  imgSrc: string
  imgSrcSet: string
  imgAlt: string
  heading: string
  introduction: string
}

const Profile: FunctionComponent<ProfileProps> = ({
  imgSrc,
  imgSrcSet,
  imgAlt,
  heading,
  introduction
}) => {
  return (
    <Container data-testid="profile">
      <Link to="/">
        <picture>
          <source srcSet={imgSrcSet} />
          <ProfileImg src={imgSrc} alt={imgAlt} />
        </picture>
      </Link>
      <Text align="center" tag="h2" size="large">{heading}</Text>
      <Text align="justify">{introduction}</Text>
    </Container>
  )
}

export default Profile
