import { ThemeContextProvider } from '../_hooks/useTheme'

interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>
}

export default ThemeProvider
