import { useState, useRef, useEffect } from "react"
import useMeasure from "@/lib/hooks/useMeasurePolyfilled"
import { useSpring, animated } from "react-spring"
import { Richtext } from "storyblok-js-client"

import RichTextSection from "../RichTextSection"
import { SectionContent } from "../RichTextSection/richTextSection.styles"
import { ToggleButton } from "./aboutSection.styles"

interface Props {
  content: Richtext
}

const AboutSection = ({ content }: Props) => {
  const [isReadMoreOpen, set] = useState(false)
  const [ref, { height }] = useMeasure()
  // Refs to store mutable values, see https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables
  const initialHeight = useRef<number>()
  const maxHeight = useRef<number>(126)
  const offsetBuffer = useRef<number>(16)
  const hasRequiredMinHeight = useRef<boolean>()
  const props = useSpring({
    maxHeight: isReadMoreOpen ? initialHeight.current : maxHeight.current
  })

  // update values when element height changes
  useEffect(() => {
    initialHeight.current = height
    hasRequiredMinHeight.current = Boolean(initialHeight.current > maxHeight.current + offsetBuffer.current)
  }, [height])

  const toggleCollapse = () => {
    set(!isReadMoreOpen)
  }

  const animatedStyles = hasRequiredMinHeight.current ? props : {}

  return (
    <RichTextSection title="About">
      <animated.div
        style={{
          overflow: `hidden`,
          ...animatedStyles
        }}>
        <div ref={ref}>
          <SectionContent data={content} />
        </div>
      </animated.div>
      {hasRequiredMinHeight.current && (
        <ToggleButton onClick={toggleCollapse}>{isReadMoreOpen ? `Less` : `More`}</ToggleButton>
      )}
    </RichTextSection>
  )
}

export default AboutSection
