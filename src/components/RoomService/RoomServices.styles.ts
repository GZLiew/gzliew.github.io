import { css } from "@emotion/react"
import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"
import HeaderTitle from "@/components/_common/HeaderTitle"

type NavWrapperProps = {
  borderBottom?: boolean
}

export const NavWrapper = styled.div<NavWrapperProps>`
  ${tw`p-4 flex flex-col items-center justify-around relative`}
  ${({ theme, borderBottom }) =>
    borderBottom &&
    css`
      border-bottom: 1px solid ${theme?.mode === "light" ? theme?.colors?.primary : "#000"};
    `};
  color: ${({ theme }) => theme?.colors?.text?.alternate};
`

export const StyledHeaderTitle = styled(HeaderTitle)`
  ${tw`static transform-none`}
`
