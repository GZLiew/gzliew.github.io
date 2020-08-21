import { useState, useRef, useEffect } from "react"
import useMeasure from "@/lib/hooks/useMeasurePolyfilled"
import { useSpring, animated, AnimatedValue } from "react-spring"
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
  const [hasRequiredMinHeight, setHasRequiredMinHeight] = useState<boolean>(false)
  // Refs to store mutable values, see https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables
  const initialHeight = useRef<number>()
  const maxHeight = useRef<number>(126)
  const offsetBuffer = useRef<number>(16)
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
    <RichTextSection title="About">
      <animated.div
        style={{
          overflow: `hidden`,
          ...(hasRequiredMinHeight ? props : {})
        }}>
        <div ref={ref}>
          <SectionContent data={content} />
        </div>
      </animated.div>
      {hasRequiredMinHeight && (
        <ToggleButton onClick={toggleCollapse}>{isReadMoreOpen ? `Less` : `More`}</ToggleButton>
      )}
    </RichTextSection>
  )
}

export default AboutSection
