import xw from "xwind"
import styled from "@emotion/styled"
import { animated } from "react-spring"

export const SwitcherButton = styled.button`
  ${xw`self-center ml-auto`}
`

export const ItemsWrapper = animated(styled.div`
  ${xw`absolute top-0 left-0 w-full h-full px-4 py-6`}
  background: ${({ theme }) => theme.colors.navbarBackground};
  color: ${({ theme }) => theme.colors.text.primary};
`)

export const Item = styled.a<{ isActive: boolean }>`
  ${xw`block px-4 py-3 cursor-pointer`}
  color: ${({ isActive, theme }) => isActive && theme.brandColors.primary};
`
