import React, {
  createContext,
  useState,
  FunctionComponent,
  useContext,
  useEffect
} from 'react'
import { darkModeLSKey } from '../../globals'

export type DarkModeType = {
  active: boolean;
  setActive: React.Dispatch<boolean>;
}

export const DarkModeContext = createContext<DarkModeType>({ active: false, setActive: () => null })

interface DarkModeProviderProps {
  testing?: boolean;
}

export const DarkModeProvider: FunctionComponent<DarkModeProviderProps> = ({ children, testing }) => {
  const [active, setActive] = useState(false)

  const setDarkMode = (value: boolean): void => {
    setActive(value)

    if (typeof window !== 'undefined' && !testing) {
      window.localStorage.setItem(darkModeLSKey, String(value))
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && !testing) {
      const lsDarkModeActive = window.localStorage.getItem(darkModeLSKey)

      if (lsDarkModeActive === 'true') {
        setActive(true)
      } else if (lsDarkModeActive === 'false') {
        setActive(false)
      }
    }
  }, [])

  return (
    <DarkModeContext.Provider value={{ active, setActive: setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = (): DarkModeType => {
  const ctx = useContext(DarkModeContext)
  return ctx
}
