/** @jsx jsx */
import { jsx, css, Global, withTheme, Theme } from "@emotion/react"
import { ThemeProps } from "@/lib/types/emotion"

const makeGlobalStyles = (theme: Theme) => css`
  html {
    scroll-behavior: smooth;
    /* <html> doesn't accept a gradient as background, so set a solid color instead */
    background: ${theme.mode === "light" ? "#eaecee" : "#363b41"};
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
