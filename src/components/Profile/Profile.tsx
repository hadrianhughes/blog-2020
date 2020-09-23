import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { ProfileImg, Heading, Introduction, Container } from './styles'

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
    <Container>
      <Link to="/">
        <picture>
          <source srcSet={imgSrcSet} />
          <ProfileImg src={imgSrc} alt={imgAlt} />
        </picture>
      </Link>
      <Heading>{heading}</Heading>
      <Introduction>{introduction}</Introduction>
    </Container>
  )
}

export default Profile
