import { useState } from "react"
import useMeasure from "react-use-measure"
import { animated, useSpring } from "react-spring"

import SbEditable from "storyblok-react"

import { SubsectionWrapper, SubsectionTitle } from "../categorySubsection.styles"
import StyledContainer from "@/components/Container"
import RichTextField from "@/components/RichTextField"


import ChevronDownSvg from "../../../../assets/icons/chevron-down.svg"

import { ICategorySubsection } from "@/lib/types/hotelInfo"

const ChevronDown = animated(ChevronDownSvg)

interface Props {
  subsection: ICategorySubsection
}

export const SubsectionDropdown = ({ subsection }: Props) => {
  const [isToggled, setIsToggled] = useState(false)
  const [ref, { height }] = useMeasure()
  const props = useSpring({ height: isToggled ? height : 0 })
  const chevronStyles = useSpring({ transform: `rotate(${isToggled ? 180 : 0})` })

  const handleDropdownClick = () => setIsToggled(!isToggled)

  return (
    <SbEditable content={subsection}>
      <SubsectionWrapper isDropdown={subsection?.is_dropdown}>
        <StyledContainer>
          <SubsectionTitle isDropdown={subsection?.is_dropdown} onClick={handleDropdownClick}>
            <span>{subsection?.title}</span>
            <ChevronDown {...chevronStyles} />
          </SubsectionTitle>

          <animated.div style={{ overflow: "hidden", ...props }}>
            <div ref={ref}>
              <RichTextField data={subsection?.description} />
            </div>
          </animated.div>
        </StyledContainer>
      </SubsectionWrapper>
    </SbEditable>
  )
}
