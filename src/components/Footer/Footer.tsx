import React, { FunctionComponent } from 'react'
import Text from '../Text'
import { StyledFooter } from './styles'

const Footer: FunctionComponent = () => (
  <StyledFooter>
    <Text align="center">Copyright &copy; {(new Date()).getFullYear()} Hadrian Hughes. All rights reserved.</Text>
  </StyledFooter>
)

export default Footer;
