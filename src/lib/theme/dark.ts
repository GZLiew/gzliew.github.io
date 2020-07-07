import commonColors from "./commonColors"

export default {
  colors: {
    ...commonColors,
    bodyBackground: "linear-gradient(to bottom, #363b41, #24282d 55%, #16181c)",
    text: {
      primary: "#BCBDBF",
      secondary: "#919396",
      alternate: "#686A6E"
    }
  },
  button: {
    boxShadow: "-7px -5px 9px 0 rgba(81, 85, 93, 0.26), 7px 5px 9px 0 rgba(0, 0, 0, 0.24);",
    borderBg: "linear-gradient(108deg, #11151a 22%, #293037 76%);"
  }
}
