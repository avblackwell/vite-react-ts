import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { useCallback } from 'react'

export type Theme = 'zinc' | 'blue' | 'red' | 'green' | 'orange' | 'rose' | 'yellow' | 'violet'

export type Mode = 'light' | 'dark' | 'system'

export const themeAtom = atomWithStorage<Theme>('theme', 'zinc')
export const modeAtom = atomWithStorage<Mode>('mode', 'system')

export function useTheme() {
  const [theme, setTheme] = useAtom(themeAtom)
  const [mode, setMode] = useAtom(modeAtom)

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
