import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"
import { transparentize } from "polished"

import getButtonResponsiveSizes from "@/lib/utils/getButtonResponsiveSizes"

const { sizeVar } = getButtonResponsiveSizes()

interface QuickButtonItemProp {
  bg?: string
}

export const QuickButtonWrapper = styled.div`
  ${tw`text-center
  flex items-center flex-col
  `}
`
export const QuickButtonItem = styled.div<QuickButtonItemProp>`
  ${tw`
    relative
    flex justify-center items-center
    rounded-full
    transition duration-500 ease-in-out
    overflow-hidden
  `}
  width: ${sizeVar};
  height: ${sizeVar};
  background: ${({ bg, theme }) =>
    bg ? (theme.mode === "dark" ? transparentize(0.7, bg) : bg) : theme?.colors?.gray};

  &:hover,
  &:focus {
    background: ${({ bg, theme }) =>
      bg
        ? theme.mode === "dark"
          ? transparentize(0.5, bg)
          : transparentize(0.2, bg)
        : transparentize(0.7, theme?.colors?.gray)};
  }

  & img {
    max-width: 32px;
    max-height: 32px;
  }

  & svg {
    /* approx. 24px for 44px sizeVar & 32px for 60px sizeVar */
    width: calc(${sizeVar} * 0.54);
    height: calc(${sizeVar} * 0.54);
  }
`

export const Title = styled.h4`
  font-size: 11px;
  line-height: 1.27;
  margin-top: 8px;
  color: ${({ theme }) => theme?.colors?.text?.secondary};
`
