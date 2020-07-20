import Link from "next/link"
import SbEditable from "storyblok-react"

import { StyledLink, IconWrapper } from "./navLink.styles"

import { LinkItem } from "@/lib/types/linkItem"

interface Props {
  blok: LinkItem
}

const NavLink = ({ blok }: Props) => {
  return (
    <SbEditable content={blok}>
      <Link href={`/${blok?.url?.cached_url || "#"}`} passHref>
        <StyledLink>
          {blok?.icon?.filename && (
            <IconWrapper>
              <img src={blok?.icon.filename} alt={blok?.icon?.name} />
            </IconWrapper>
          )}
          <span>{blok?.title}</span>
        </StyledLink>
      </Link>
    </SbEditable>
  )
}

export default NavLink
