import SbEditable from 'storyblok-react'

import { Section } from '../Sections'
import { CategoryTitle } from './category.styles'
import { Subsection, SubsectionDropdown } from '../CategorySubsection'
import Container from '@/components/Container'

import { ICategory } from '@/lib/types/hotelInfo'

interface Props {
  category: ICategory
}

const Category = ({ category }: Props) => {
  // The category has at least one subsection with an icon
  const hasSubsectionWithIcon = category?.subsections.some((sub) => sub?.icon !== '')

  return (
    <SbEditable content={category}>
      <Section id={category.slug}>
        <Container>
          <CategoryTitle>{category?.title}</CategoryTitle>
        </Container>

        {category?.subsections.map((subsection) =>
          subsection?.isDropdown ? (
            <SubsectionDropdown key={subsection._uid} subsection={subsection} />
          ) : (
            <Container key={subsection._uid}>
              <Subsection subsection={subsection} hasAtLeastOneIcon={hasSubsectionWithIcon} />
            </Container>
          )
        )}
      </Section>
    </SbEditable>
  )
}

export default Category
