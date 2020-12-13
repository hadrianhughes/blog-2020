import React, { FunctionComponent } from 'react'
import { useDarkMode } from '../../context/DarkMode'
import { Label, Checkbox } from './styles'

const DarkModeToggler: FunctionComponent = () => {
  const { active, setActive } = useDarkMode()

  const toggle = (): void => setActive(!active)

  return (
    <Label tag="label" htmlFor="darkmode">
      <span>Dark Mode:</span>
      <Checkbox
        id="darkmode"
        type="checkbox"
        checked={active}
        onChange={toggle}
      />
    </Label>
  )
}

export default DarkModeToggler
