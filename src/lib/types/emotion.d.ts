import "@emotion/react"

declare module "@emotion/react" {
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
      bodyBackground: string
      text: {
        primary: string
        secondary: string
        alternate: string
      }
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
      notificationBg: string
      shoppingBagBg: string
      navbarBackground: string
      menuBackground: string
      guestDetailsBorder: string
      ratings: {
        empty: string
        full: string
      }
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
    }
  }
}

export interface ThemeProps {
  theme: Theme
}
