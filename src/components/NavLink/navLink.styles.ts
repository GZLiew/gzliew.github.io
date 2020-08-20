import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"
import { rgba } from "polished"

export const StyledLink = styled.a<{ showBg: boolean }>`
  ${tw`
      flex-auto
      w-full
      flex
      px-4
      py-3
      text-md
      font-medium
      rounded-full
      items-center
      `}

    background-color: ${({ showBg, theme }) =>
      showBg && (theme.mode === "light" ? rgba(theme.colors.pink.primary, 0.12) : rgba("black", 0.12))};

    &:focus {
      outline: none;
    }
`

export const IconWrapper = styled.div`
  ${tw`
    mr-8
  `}
  width: 24px;
  height: 24px;

  img {
    width: 100%;
  }
`
