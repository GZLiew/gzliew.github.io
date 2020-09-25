import SbEditable from "storyblok-react"
import { ICategorySubsection } from "@/lib/types/hotelInfo"
import RichTextField from "@/components/RichTextField"
import {
  SubsectionTitle,
  SubsectionWrapper,
  SubsectionIcon,
  EmptyIconSpacer,
  InnerContent
} from "../categorySubsection.styles"

import HotelInfoIcons from "@/assets/icons/HotelInfoIcons"

interface Props {
  subsection: ICategorySubsection
  hasAtLeastOneIcon?: boolean
}

export const Subsection = ({ subsection, hasAtLeastOneIcon }: Props) => {
  return (
    <SbEditable content={subsection}>
      <SubsectionWrapper>
        {subsection?.icon !== "" ? (
          <SubsectionIcon>{HotelInfoIcons[subsection?.icon]}</SubsectionIcon>
        ) : hasAtLeastOneIcon ? (
          <EmptyIconSpacer />
        ) : null}

        <InnerContent>
          <SubsectionTitle>{subsection?.title}</SubsectionTitle>
          <RichTextField data={subsection?.description} />
        </InnerContent>
      </SubsectionWrapper>
    </SbEditable>
  )
}
