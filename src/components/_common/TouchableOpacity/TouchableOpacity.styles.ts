import xw from "xwind"
import styled from "@emotion/styled"
import { animated } from "react-spring"

export const AnimatedDiv = styled(animated.div)`
  ${xw`select-none`}
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -o-user-select: none;
`
