import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

import { css } from "@emotion/react"
import { transparentize } from "polished"

type ButtonWrapperProps = {
  bgColor?: string
  variant: string
  withIcon?: boolean
  size: "small" | "medium" | "large"
  disabled?: boolean
  hover?: boolean
  outline?: boolean
}

export const ButtonStyled = styled.span`
  ${tw`
  flex justify-center items-center
  h-full
  `}
  border-radius: 32px;
`

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  ${tw`
   relative
   transition duration-500 ease-in-out
   font-medium
   `}
  padding: 3px;
  border-radius: 32px;
  box-shadow: ${({ theme }) => theme.button.boxShadow};
  color: #fff;

  ${ButtonStyled} {
    ${tw` p-3 uppercase`}
    background: linear-gradient(135.3deg, #F95688 16.81%, #E1245E 76.81%);

    ${({ variant, theme, bgColor }) =>
      variant === "flat" &&
      css`
        background: ${transparentize(0.38, bgColor || theme.colors.gray)};
        color: ${theme.colors.gray};
      `}

    ${({ withIcon }) =>
      withIcon &&
      css`
        display: flex;
        justify-content: space-between;
      `}

    ${({ outline }) =>
      outline &&
      css`
        ${tw` p-2 `}
        background: transparent;
      `}

    ${({ disabled, theme, bgColor }) =>
      disabled &&
      css`
      ${tw` p-2 `}
        background: ${transparentize(0.8, bgColor || theme.colors.secondary)};
      `}

  }

  &:hover{
    ${ButtonStyled} {
      background: linear-gradient(135.3deg, #E1245E 16.81%, #F95688 76.81%);
    }
  },
  &:focus {
    outline: 0;

    ${ButtonStyled} {
      background: linear-gradient(135.3deg, #E1245E 16.81%, #F95688 76.81%);
    }
  }

  ${({ variant, theme, bgColor }) =>
    variant === "flat" &&
    css`
      box-shadow: none;
      background: transparent;
      padding: 0;

      &:hover,
      &:focus {
        ${ButtonStyled} {
          background: ${transparentize(0.7, bgColor || theme.colors.primary)};
        }
      }
    `}

  ${({ outline, theme }) =>
    outline &&
    css`
      border: 2px solid ${theme.colors.gray};
      background: transparent;
    `}

  ${({ disabled, theme, bgColor }) =>
    disabled &&
    css`
      border: 3px solid ${theme.colors.primary};
      background: linear-gradient(135.3deg, #3c3d42 16.81%, #2c2f34 76.81%);
      color: ${theme.colors.gray};

      &:hover,
      &:focus {
        ${ButtonStyled} {
          background: ${transparentize(0.7, bgColor || theme.colors.primary)};
        }
      }
    `} 

  ${({ size }) =>
    size === "small" &&
    css`
      height: 36px;
      ${ButtonStyled} {
        ${tw`text-xs px-5`}
      }
    `}

  ${({ size }) =>
    size === "medium" &&
    css`
      height: 48px;
      ${ButtonStyled} {
        ${tw`text-sm px-10`}
      }
    `}

  ${({ size }) =>
    size === "large" &&
    css`
      height: 63px;
      ${ButtonStyled} {
        ${tw`text-base px-32`}
      }
    `}
`
