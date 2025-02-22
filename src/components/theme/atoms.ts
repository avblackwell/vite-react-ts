import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { useCallback } from 'react'

// Theme is the theme of the app
export type Theme = 'zinc' | 'blue' | 'red' | 'green' | 'orange' | 'rose' | 'yellow' | 'violet'

// Mode is the mode of the app
export type Mode = 'light' | 'dark' | 'system'

// themeAtom is the atom that stores the theme of the app
export const themeAtom = atomWithStorage<Theme>('theme', 'zinc')
// modeAtom is the atom that stores the mode of the app
export const modeAtom = atomWithStorage<Mode>('mode', 'system')

// useTheme is a hook that returns the theme and mode and a function to toggle the mode
export function useTheme() {
  const [theme, setTheme] = useAtom(themeAtom)
  const [mode, setMode] = useAtom(modeAtom)

  // toggleMode is a function that toggles the mode of the app
  const toggleMode = useCallback(() => {
    setMode((prev: Mode) => (prev === 'dark' ? 'light' : 'dark'))
  }, [setMode])

  return {
    theme,
    mode,
    setTheme,
    setMode,
    toggleMode,
  }
}
