import xw from "xwind"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

type SelectorWrapperProps = {
  size?: "small" | "large"
  disabled?: boolean
}

type ColumnWrapperProps = {
  bgColor?: string
  hover?: boolean
}

export const SelectorWrapper = styled.div<SelectorWrapperProps>`
  ${xw`inline-flex font-medium rounded-full border overflow-hidden`}
  ${({ size }) => (size === "small" ? xw`text-lg` : xw`text-2xl`)}
  color: ${({ theme }) => theme?.colors?.text?.primary};
  border-color: ${({ theme, disabled }) => (disabled ? theme.colors.gray : theme.brandColors.primary)};
  -webkit-tap-highlight-color: transparent;
`

export const ColumnWrapper = styled.div<ColumnWrapperProps>`
  ${xw`px-3 py-2 text-center`}
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.bodyBackground};
  min-width: 40px;
  ${({ hover }) =>
    hover &&
    css`
      &:hover {
        outline: 0;
        background-color: rgba(255, 255, 255, 0.5);
      }
    `}
`
