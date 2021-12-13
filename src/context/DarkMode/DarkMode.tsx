import React, {
  createContext,
  useState,
  FunctionComponent,
  useContext,
} from 'react'

export type DarkModeType = {
  active: boolean;
  setActive: React.Dispatch<boolean>;
}

const isNight = ((): boolean => {
  const hours = new Date().getHours()
  return hours < 6 || hours >= 18
})()

export const DarkModeContext = createContext<DarkModeType>({ active: isNight, setActive: () => null })

interface DarkModeProviderProps {
  testing?: boolean;
}

export const DarkModeProvider: FunctionComponent<DarkModeProviderProps> = ({ children }) => {
  const [active, setActive] = useState(isNight)

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
