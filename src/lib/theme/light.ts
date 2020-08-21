import commonColors from "./commonColors"

export default {
  mode: "light",
  colors: {
    ...commonColors,
    white: {
      primary: "#cfd4dc",
      secondary: "#ffffff"
    },
    bodyBackground: "#eaecee",
    text: {
      primary: "#101112",
      secondary: "#2C2F31",
      alternate: "#7A7D81"
    },
    widget: {
      background: "#fff"
    },
    separator: "#67758d",
    header: {
      background: "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(222,222,222,1) 98%);",
      boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.14)"
    },
    notificationBg: "linear-gradient(to bottom, rgba(233, 233, 233, 0), #d7dce2 40%, #caced2 99%)",
    shoppingBagBg: "#fff",
    navbarBackground: "linear-gradient(to bottom, #eaeaea, #eaecee)",
    guestDetailsBorder: "#dde0e4",
    ratings: {
      full: "#f7b500",
      empty: "#dadada"
    },
    amenityBackground: "#fff",
    icon: "#101112",
    categoryTabs: {
      background: "#d6dadd",
      border: "rgba(0,0,0,0.11)"
    }
  },
  button: {
    boxShadow: "-7px -5px 9px 0 #ffffff, 7px 5px 9px 0 #c7ced8;",
    borderBg: "linear-gradient(108deg, #e4e8ed 22%, #e5e9ee 76%);"
  }
}
