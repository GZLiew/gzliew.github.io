import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"
import { animated } from "react-spring"

export const SwitcherButton = styled.button`
  ${tw`self-center ml-auto`}
`

export const ItemsWrapper = animated(styled.div`
  ${tw`absolute top-0 left-0 w-full h-full px-4 py-6`}
  background: ${({ theme }) => theme.colors.navbarBackground};
  color: ${({ theme }) => theme.colors.text.primary};
`)

export const Item = styled.a<{ isActive: boolean }>`
  ${tw`block px-4 py-3 cursor-pointer`}
  color: ${({ isActive, theme }) => isActive && theme.brandColors.primary};
`
