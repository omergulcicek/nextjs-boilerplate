"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

export function Providers(props) {
  return (
    <>
      <NextThemesProvider {...props} />
    </>
  )
}
