import React, { useCallback, useRef, useState } from "react"
import { useGesture } from "react-use-gesture"
import { AnimatedDiv } from "./TouchableOpacity.styles"

type Props = React.ComponentProps<typeof AnimatedDiv>
type ExtraAttrs = { repeatCall?: boolean; disabled?: boolean }

const TouchableOpacity = ({ children, repeatCall, disabled, ...props }: Props & ExtraAttrs) => {
  const [down, setDown] = useState(false)
  const timerRef = useRef(null)
  const intervalRef = useRef(null)

  const actionDown = useCallback(() => {
    if (disabled) return
    setDown(true)
    if (!repeatCall) return
    if (!props.onClick) return
    timerRef.current = setTimeout(() => {
      intervalRef.current = setInterval(props.onClick, 50)
    }, 1000)
  }, [setDown, disabled])

  const actionUp = useCallback(() => {
    setDown(false)
    if (!props.onClick) return
    clearTimeout(timerRef.current)
    clearTimeout(intervalRef.current)
  }, [setDown])

  const bind = useGesture({
    onHover: () => false,
    onMouseDown: actionDown,
    onMouseUp: actionUp,
    onMouseLeave: actionUp,
    onTouchStart: actionDown,
    onTouchEnd: actionUp,
    onTouchEndCapture: actionUp,
    onTouchCancelCapture: actionUp
  })
  return (
    <AnimatedDiv {...bind()} {...props} style={{ opacity: down ? 0.45 : 1 }}>
      {children}
    </AnimatedDiv>
  )
}

export default TouchableOpacity
