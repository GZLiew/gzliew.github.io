import React, { useState, useRef, useEffect, ReactNode } from "react"
import { useSpring, animated } from "react-spring"

import useMeasure from "@/lib/hooks/useMeasurePolyfilled"

import { ToggleButton } from "./ReadMore.styles"

type Props = {
  children: ReactNode
}

const INITIAL_MAX_HEIGHT = 126
const INITIAL_OFFSET = 16

const ReadMore = ({ children }: Props) => {
  const [isReadMoreOpen, set] = useState(false)
  const [ref, { height }] = useMeasure()
  const [hasRequiredMinHeight, setHasRequiredMinHeight] = useState<boolean>(false)
  // Refs to store mutable values, see https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables
  const initialHeight = useRef<number>()
  const maxHeight = useRef<number>(INITIAL_MAX_HEIGHT)
  const offsetBuffer = useRef<number>(INITIAL_OFFSET)
  const props = useSpring({
    maxHeight: isReadMoreOpen ? initialHeight.current : maxHeight.current
  })
  const mounted = useRef<boolean>(false)

  useEffect(() => {
    initialHeight.current = height
  }, [])

  // update values when element height changes
  useEffect(() => {
    // skip the first render, as `height` still has no value
    if (mounted.current) {
      initialHeight.current = height
      setHasRequiredMinHeight(Boolean(initialHeight.current > maxHeight.current + offsetBuffer.current))
    } else {
      mounted.current = true
    }
  }, [height])

  const toggleCollapse = () => {
    set(!isReadMoreOpen)
  }

  return (
    <>
      <animated.div
        style={{
          overflow: `hidden`,
          ...(hasRequiredMinHeight ? props : {})
        }}>
        <div ref={ref}>{children}</div>
      </animated.div>

      {hasRequiredMinHeight && (
        <ToggleButton onClick={toggleCollapse}>{isReadMoreOpen ? `Less` : `More`}</ToggleButton>
      )}
    </>
  )
}

export default ReadMore
