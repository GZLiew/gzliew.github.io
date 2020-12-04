import SbEditable from "storyblok-react"
import { useRouter } from "next/router"

import { MenuTitle, MenuContainer, StyledMenuItem } from "./menu.styles"

import Section from "@/components/_common/Section"
import { IMenu } from "@/lib/types/roomService"

interface Props {
  menu: IMenu
  category: string
}

const Menu = ({ menu, category }: Props) => {
  const router = useRouter()

  return (
    <SbEditable content={menu}>
      <Section id={menu.slug}>
        <MenuContainer>
          <MenuTitle>{menu?.title}</MenuTitle>
        </MenuContainer>

        {menu?.subsections.map((subsection) => (
          <MenuContainer key={subsection._uid}>
            <StyledMenuItem
              onClick={() => router.push(`${category}/${subsection._uid}`)}
              image={subsection.image}
              title={subsection.title}
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia harum odit, rem dolorum culpan quibusdam."
              price={subsection.price}
            />
          </MenuContainer>
        ))}
      </Section>
    </SbEditable>
  )
}

export default Menu
