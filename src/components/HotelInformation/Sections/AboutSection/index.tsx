import { useState, useRef, useEffect } from "react"
import { useSpring, animated } from "react-spring"
import { Richtext } from "storyblok-js-client"

import Container from "@/components/Container"

import { Section, SectionTitle, SectionContent, ToggleButton } from "./aboutSection.styles"

import useMeasure from "@/lib/hooks/useMeasure"

interface Props {
  content: Richtext
}

export const AboutSection = ({ content }: Props) => {
  const [isReadMoreOpen, set] = useState(false)
  const [bind, { height }] = useMeasure<HTMLDivElement>()
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
    <Section>
      <Container>
        <SectionTitle>About</SectionTitle>
        <animated.div
          style={{
            overflow: `hidden`,
            ...animatedStyles
          }}>
          <div {...bind}>
            <SectionContent data={content} />
          </div>
        </animated.div>
        {hasRequiredMinHeight.current && (
          <ToggleButton onClick={toggleCollapse}>{isReadMoreOpen ? `Less` : `More`}</ToggleButton>
        )}
      </Container>
    </Section>
  )
}
