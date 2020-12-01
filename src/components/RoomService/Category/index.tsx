import SbEditable from "storyblok-react"

import { CategoryTitle, CategoryContainer, StyledMenuItem } from "./category.styles"

import Section from "@/components/_common/Section"
import { ICategory } from "@/lib/types/hotelInfo"

interface Props {
  category: ICategory
}

const Category = ({ category }: Props) => {
  return (
    <SbEditable content={category}>
      <Section id={category.slug}>
        <CategoryContainer>
          <CategoryTitle>{category?.title}</CategoryTitle>
        </CategoryContainer>

        {category?.subsections.map((subsection) => (
          <CategoryContainer key={subsection._uid}>
            <StyledMenuItem
              image={{ name: "image", filename: "https://picsum.photos/200" }}
              title="Add title"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia harum odit, rem dolorum culpan quibusdam."
              price={25}
            />
          </CategoryContainer>
        ))}
      </Section>
    </SbEditable>
  )
}

export default Category
