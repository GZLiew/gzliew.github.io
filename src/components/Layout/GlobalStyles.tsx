/** @jsx jsx */
import { jsx, css, Global, withTheme } from "@emotion/react"

const makeGlobalStyles = (theme) => css`
  body {
    background: ${theme.colors.bodyBackground};
  }
`
const GlobalStyles = withTheme(({ theme }) => <Global styles={makeGlobalStyles(theme)} />)

export default GlobalStyles
