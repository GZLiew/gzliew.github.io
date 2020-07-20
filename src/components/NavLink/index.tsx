import Link from "next/link"
import SbEditable from "storyblok-react"

import { StyledLink, IconWrapper } from "./navLink.styles"

import { ILayoutNavigationLink } from "@/lib/types/commonLayout"

interface Props {
  blok: ILayoutNavigationLink
}

const NavLink = ({ blok }: Props) => {
  return (
    <Link href={blok?.url?.cached_url || `#`}>
      <SbEditable content={blok}>
        <StyledLink>
          {blok?.icon?.filename && (
            <IconWrapper>
              <img src={blok?.icon.filename} alt={blok?.icon?.name} />
            </IconWrapper>
          )}
          <span>{blok?.title}</span>
        </StyledLink>
      </SbEditable>
    </Link>
  )
}

export default NavLink
