import xw from "xwind"
/** @jsx jsx */
import { jsx, css, Global, withTheme, Theme } from "@emotion/react"

import { ThemeProps } from "@/lib/types/emotion"
import getButtonResponsiveSizes from "@/lib/utils/getButtonResponsiveSizes"

const { responsiveQueries } = getButtonResponsiveSizes()

const makeGlobalStyles = (theme: Theme) => css`
  ${xw`XWIND_BASE XWIND_GLOBAL`}
  :root {
    ${responsiveQueries}
  }

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

  svg {
    display: inline-block;
  }
`
const GlobalStyles = withTheme(({ theme }: ThemeProps) => <Global styles={makeGlobalStyles(theme)} />)

export default GlobalStyles
