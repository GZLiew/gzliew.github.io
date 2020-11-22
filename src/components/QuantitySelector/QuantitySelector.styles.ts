import { css } from "@emotion/react"
import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

type SelectorWrapperProps = {
  size?: "small" | "large"
  disabled?: boolean
}

type ColumnWrapperProps = {
  bgColor?: string
  hover?: boolean
}

export const SelectorWrapper = styled.div<SelectorWrapperProps>`
  ${tw`inline-flex font-medium rounded-full border overflow-hidden`}
  ${({ size }) => (size === "small" ? tw`text-md` : tw`text-1xl`)}
  color: ${({ theme }) => theme?.colors?.text?.primary};
  border-color: ${({ theme, disabled }) => (disabled ? theme.colors.gray : theme.brandColors.primary)};
  -webkit-tap-highlight-color: transparent;
`

export const ColumnWrapper = styled.div<ColumnWrapperProps>`
  ${tw`px-3 py-2 text-center`}
  background-color: ${({ bgColor }) => bgColor || "inherit"};
  min-width: 40px;
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  ${({ hover }) =>
    hover &&
    css`
      &:hover {
        outline: 0;
        background-color: rgba(255, 255, 255, 0.5);
      }
    `}
`
