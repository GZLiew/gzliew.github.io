import SbEditable from "storyblok-react"
import { ICategorySubsection } from "@/lib/types/hotelInfo"
import RichTextField from "@/components/RichTextField"
import {
  SubsectionTitle,
  SubsectionWrapper,
  SubsectionIcon,
  EmptyIconSpacer
} from "../categorySubsection.styles"

interface Props {
  subsection: ICategorySubsection
  hasAtLeastOneIcon?: boolean
}

export const Subsection = ({ subsection, hasAtLeastOneIcon }: Props) => {
  return (
    <SbEditable content={subsection}>
      <SubsectionWrapper>
        {subsection?.icon?.filename ? (
          <SubsectionIcon
            src={subsection?.icon?.filename}
            alt={subsection?.icon?.alt}
            title={subsection?.icon?.title}
          />
        ) : hasAtLeastOneIcon ? (
          <EmptyIconSpacer />
        ) : null}
        <div>
          <SubsectionTitle>{subsection?.title}</SubsectionTitle>

          <RichTextField data={subsection?.description} />
        </div>
      </SubsectionWrapper>
    </SbEditable>
  )
}
