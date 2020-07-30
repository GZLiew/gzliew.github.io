/** @jsx jsx */
import { jsx, css, Global, withTheme, Theme } from "@emotion/react"
import { ThemeProps } from "@/lib/types/emotion"

const makeGlobalStyles = (theme) => css`
  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${theme.colors.bodyBackground};

    &.lock {
      overflow: hidden;
    }
  }
`
const GlobalStyles = withTheme(({ theme }: ThemeProps) => <Global styles={makeGlobalStyles(theme)} />)

export default GlobalStyles
