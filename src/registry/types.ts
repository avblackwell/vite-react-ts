export interface Registry {
  items: Array<{
    name: string
    type: string
    cssVars: {
      light: Record<string, string>
      dark: Record<string, string>
    }
  }>
}
