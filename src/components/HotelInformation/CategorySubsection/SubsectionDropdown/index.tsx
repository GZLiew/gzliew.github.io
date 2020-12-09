import SbEditable from 'storyblok-react'

import { SubsectionWrapper, DescriptionText } from '../categorySubsection.styles'
import StyledContainer from '@/components/Container'
import RichTextField from '@/components/RichTextField'

import { ICategorySubsection } from '@/lib/types/hotelInfo'
import Accordion from '@/components/_common/Accordion'

interface Props {
  subsection: ICategorySubsection
}

export const SubsectionDropdown = ({ subsection }: Props) => (
  <SbEditable content={subsection}>
    <SubsectionWrapper isDropdown={subsection?.isDropdown}>
      <StyledContainer>
        <Accordion title={subsection.title}>
          <DescriptionText>
            <RichTextField data={subsection?.description} />
          </DescriptionText>
        </Accordion>
      </StyledContainer>
    </SubsectionWrapper>
  </SbEditable>
)
