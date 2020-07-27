import SbEditable from "storyblok-react"
import { ICategorySubsection } from "@/lib/types/hotelInfo"
import RichTextField from "@/components/RichTextField"
import { SubsectionTitle, SubsectionWrapper, SubsectionIcon } from "../categorySubsection.styles"

interface Props {
  subsection: ICategorySubsection
}

export const Subsection = ({ subsection }: Props) => {
  return (
    <SbEditable content={subsection}>
      <SubsectionWrapper>
        {subsection?.icon?.filename !== "" && <SubsectionIcon src={subsection?.icon?.filename} alt="" />}
        <div>
          <SubsectionTitle>{subsection?.title}</SubsectionTitle>

          <RichTextField data={subsection?.description} />
        </div>
      </SubsectionWrapper>
    </SbEditable>
  )
}
