import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    mode: string
    brandColors: {
      primary: string
      secondary: string
    }
    colors: {
      gray: string
      primary: string
      secondary: string
      welcomeBackground: string
      bodyBackground: string
      text: {
        primary: string
        secondary: string
        alternate: string
      }
      inputBackground: string
      widget: {
        background: string
      }
      separator: string
      header: {
        background: string
        boxShadow: string
      }
      footer: {
        background: string
        boxShadow: string
      }
      bottomSheet: {
        background: string
        boxShadow: string
      }
      bottomTabs: {
        background: string
        boxShadow: string
      }
      notificationBg: string
      shoppingBagBg: string
      navbarBackground: string
      menuBackground: string
      guestDetailsBorder: string
      ratings: {
        empty: string
        full: string
      }
      timeblock: string
      amenityBackground: string
      icon: string
      categoryTabs: {
        background: string
        border: string
      }
    }
    button: {
      boxShadow: string
      borderBg: string
      border: string
      flatBg: string
      notAnimatedBg: string
      disabled: string
      guestService: string
    }
  }
}

export interface ThemeProps {
  theme: Theme
}
