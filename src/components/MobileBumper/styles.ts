import styled, { css } from 'styled-components'
import { rem } from '../../styles/tools'

const buttonSize = rem(40)
const profileImagePath = '/img/hady_icon.webp'
const menuImagePath = '/img/search.svg'

export const Container = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const Heading = styled.h1`
  margin: 0;
`

const buttonStyles = css`
  background: none;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  border-radius: 50%;
  height: ${buttonSize};
  margin-right: ${rem(10)};
  text-indent: 9999px;
  width: ${buttonSize};
`

export const ProfileButton = styled.button`
  ${buttonStyles}
  background-size: cover;
  background-image: url(${profileImagePath});
`

export const MenuButton = styled.button`
  ${buttonStyles}
  background-size: 90%;
  background-image: url(${menuImagePath});
`
