import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"
import { rgba } from "polished"

import Link from "next/link"

export const StyledLink = styled.a`
  ${tw`
      flex-auto
      w-full
      flex
      px-4
      py-3
      text-md
      font-medium
      rounded-full
      `}

  &:hover, &:focus, &:active {
    background-color: ${({ theme }) => rgba(theme.colors.pink.primary, 0.12)};
  }

  .navlink-icon {
    ${tw`
    mr-8
    `}
  }
`
