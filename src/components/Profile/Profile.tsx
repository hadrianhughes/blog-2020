import React, { FunctionComponent } from 'react'
import Text from '../Text'
import { ProfileImg, Container, StyledLink as Link } from './styles'

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
        <Text align="center" tag="h2" size="large" noSpace>
          {heading}
        </Text>
      </Link>
      <Text>{introduction}</Text>
    </Container>
  )
}

export default Profile
