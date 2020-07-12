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
    notificationBg: "linear-gradient(to bottom, rgba(233, 233, 233, 0), #d7dce2 40%, #caced2 99%)"
  },
  button: {
    boxShadow: "-7px -5px 9px 0 #ffffff, 7px 5px 9px 0 #c7ced8;",
    borderBg: "linear-gradient(108deg, #e4e8ed 22%, #e5e9ee 76%);"
  }
}
