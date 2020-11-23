import { ReactChild, useState } from "react"
import useMeasure from "@/lib/hooks/useMeasurePolyfilled"
import { useSpring, animated } from "react-spring"
import ChevronDownSvg from "../../assets/icons/chevron-down.svg"
import { TitleWrapper, Title, SecondaryTitle, AccordionContent } from "./Accordion.styles"

interface Props {
  title: string
  secondaryTitle?: string
  children: ReactChild
}

const ChevronDown = animated(ChevronDownSvg)

const Accordion = (props: Props) => {
  const { title, secondaryTitle, children } = props
  const [isOpen, setIsOpen] = useState(false)
  const [ref, { height }] = useMeasure()
  const contentProps = useSpring({ height: isOpen ? height : 0 })
  const chevronStyles = useSpring({ transform: `rotate(${isOpen ? 180 : 0})` })

  const handleDropdownClick = () => setIsOpen(!isOpen)

  return (
    <>
      <TitleWrapper onClick={handleDropdownClick}>
        <div>
          <Title>{title}</Title>
          {secondaryTitle && <SecondaryTitle>{secondaryTitle}</SecondaryTitle>}
        </div>
        <ChevronDown {...chevronStyles} />
      </TitleWrapper>

      <animated.div style={{ overflow: "hidden", ...contentProps }}>
        <AccordionContent>
          <div ref={ref} style={{ paddingTop: "10px" }}>
            {children}
          </div>
        </AccordionContent>
      </animated.div>
    </>
  )
}

/** @component */
export default Accordion
