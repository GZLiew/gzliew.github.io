import SbEditable from "storyblok-react"

import { Section } from "../Sections"
import { CategoryTitle } from "./category.styles"
import { Subsection, SubsectionDropdown } from "../CategorySubsection"
import Container from "@/components/Container"

import { ICategory } from "@/lib/types/hotelInfo"

interface Props {
  category: ICategory
}
const Category = ({ category }: Props) => {
  return (
    <SbEditable content={category}>
      <Section>
        <Container>
          <CategoryTitle>{category?.title}</CategoryTitle>
        </Container>
        {category?.sub_sections.map((subsection) =>
          subsection?.is_dropdown ? (
            <SubsectionDropdown key={subsection._uid} subsection={subsection} />
          ) : (
            <Container key={subsection._uid}>
              <Subsection subsection={subsection} />
            </Container>
          )
        )}
      </Section>
    </SbEditable>
  )
}

export default Category
