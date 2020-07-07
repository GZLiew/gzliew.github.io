/** @jsx jsx */
import { jsx, css, Global, withTheme, Theme } from "@emotion/react"
import { ThemeProps } from "@/lib/types/emotion"

const makeGlobalStyles = (theme) => css`
  body {
    background: ${theme.colors.bodyBackground};
  }
`
const GlobalStyles = withTheme(({ theme }: ThemeProps) => <Global styles={makeGlobalStyles(theme)} />)

export default GlobalStyles
