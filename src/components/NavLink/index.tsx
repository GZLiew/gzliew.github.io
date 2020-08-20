import SbEditable from "storyblok-react"
import { usePress, useHover } from "@react-aria/interactions"

import { StyledLink, IconWrapper } from "./navLink.styles"

import BaseLink from "../BaseLink"

import { ILayoutNavigationLink } from "@/lib/types/commonLayout"

import NavIcons from "@/assets/icons/NavbarIcons"

interface Props {
  blok: ILayoutNavigationLink
}

const NavLink = ({ blok }: Props) => {
  const { pressProps, isPressed } = usePress({})
  const { hoverProps, isHovered } = useHover({})

  return (
    <SbEditable content={blok}>
      <BaseLink storyblokLink={blok?.url} passHref>
        <StyledLink {...pressProps} {...hoverProps} showBg={isPressed || isHovered}>
          {blok?.iconName && <IconWrapper>{NavIcons[blok?.iconName]}</IconWrapper>}
          <span>{blok?.title}</span>
        </StyledLink>
      </BaseLink>
    </SbEditable>
  )
}

export default NavLink
