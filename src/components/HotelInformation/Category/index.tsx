import { useContext } from "react"
import SbEditable from "storyblok-react"

import { Section } from "../Sections"
import { CategoryTitle } from "./category.styles"
import { Subsection, SubsectionDropdown } from "../CategorySubsection"
import Container from "@/components/Container"

import HeaderHeightContext from "@/lib/context/HeaderHeightContext"
import TabsHeightContext from "@/lib/context/TabsHeightContext"

import { ICategory } from "@/lib/types/hotelInfo"

interface Props {
  category: ICategory
}
const Category = ({ category }: Props) => {
  const headerHeight = useContext(HeaderHeightContext)
  const tabsHeight = useContext(TabsHeightContext)

  // The category has at least one subsection with an icon
  const hasSubsectionWithIcon = category?.subsections.some((sub) => sub?.icon?.filename !== "")

  return (
    <SbEditable content={category}>
      <Section id={category.slug} style={{ scrollMarginTop: headerHeight + tabsHeight - 10 }}>
        <Container>
          <CategoryTitle>{category?.title}</CategoryTitle>
        </Container>
        {category?.subsections.map((subsection) =>
          subsection?.is_dropdown ? (
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
