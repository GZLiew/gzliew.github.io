import xw from "xwind"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import HeaderTitle from "@/components/_common/HeaderTitle"

type NavWrapperProps = {
  borderBottom?: boolean
}

export const NavWrapper = styled.div<NavWrapperProps>`
  ${xw`p-4 flex flex-col items-center justify-around relative`}
  ${({ theme, borderBottom }) =>
    borderBottom &&
    css`
      border-bottom: 1px solid ${theme?.mode === "light" ? theme?.colors?.primary : "#000"};
    `};
  color: ${({ theme }) => theme?.colors?.text?.alternate};
`

export const StyledHeaderTitle = styled(HeaderTitle)`
  ${xw`static transform-none`}
`
