import { createContext, useState, useContext } from 'react'

type ThemeContextProps = {
  color: string
  setColor: (color: string) => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

interface ThemeContextProviderProps {
  children: React.ReactNode
}

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [color, setColor] = useState('')

  return <ThemeContext.Provider value={{ color, setColor }}>{children}</ThemeContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext) // get context

  // throw error if context is undefined
  if (context === undefined) {
    throw new Error('useData must be used within a DataContextProvider')
  }

  return context
}
