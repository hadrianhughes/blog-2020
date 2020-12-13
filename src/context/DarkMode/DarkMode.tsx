import React, { createContext, useState, FunctionComponent, useContext } from 'react'

export type DarkModeType = {
  active: boolean;
  setActive: React.Dispatch<boolean>;
}

export const DarkModeContext = createContext<DarkModeType>({ active: false, setActive: () => null })

export const DarkModeProvider: FunctionComponent = ({ children }) => {
  const [active, setActive] = useState(false)

  return (
    <DarkModeContext.Provider value={{ active, setActive }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = (): DarkModeType => {
  const ctx = useContext(DarkModeContext)
  return ctx
}
