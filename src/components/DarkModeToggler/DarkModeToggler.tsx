import React, { FunctionComponent } from 'react'
import { useDarkMode } from '../../context/DarkMode'
import { Checkbox } from './styles'

const DarkModeToggler: FunctionComponent = () => {
  const { active, setActive } = useDarkMode()

  const toggle = (): void => setActive(!active)

  return (
    <Checkbox
      type="checkbox"
      checked={active}
      onChange={toggle}
      aria-label="Dark Mode"
    />
  )
}

export default DarkModeToggler
