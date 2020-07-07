import "@emotion/react"

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      pink: {
        primary: string
        secondary: string
      }
      red: {
        primary: string
        secondary: string
      }
      blue: {
        primary: string
        secondary: string
      }
      green: {
        primary: string
        secondary: string
      }
      purple: {
        primary: string
        secondary: string
      }
      yellow: {
        primary: string
        secondary: string
      }
      brown: {
        primary: string
        secondary: string
      }
      black: {
        primary: string
        secondary: string
      }
      bodyBackground: string
      text: {
        primary: string
        secondary: string
        alternate: string
      }
    }
    button: {
      boxShadow: string
      borderBg: string
    }
  }
}
