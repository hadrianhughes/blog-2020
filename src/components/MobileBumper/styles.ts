import styled from 'styled-components'
import { rem } from '../../styles/tools'

const buttonSize = rem(40)

export const Container = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const Heading = styled.h1`
  margin: 0;
`

export const ProfileButton = styled.button`
  background-color: none;
  background-image: url('/img/hady_icon.jpg');
  background-size: cover;
  border: none;
  border-radius: 50%;
  height: ${buttonSize};
  margin-right: ${rem(10)};
  text-indent: 9999px;
  width: ${buttonSize};
`
