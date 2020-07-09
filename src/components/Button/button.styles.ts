import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

import { css } from "@emotion/react"
import { transparentize } from "polished"

type ButtonWrapperProps = {
  maxWith?: string
  height?: string
  bgColor?: string
  variant?: string
  withIcon?: boolean
}

export const ButtonStyled = styled.span`
  ${tw`
  flex justify-center items-center
  w-full h-full
  `}
  border-radius: 32px;
`

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  ${tw`
   relative 
   w-full
   transition duration-500 ease-in-out`}
  max-width: ${({ maxWith }) => maxWith};
  height: ${({ height }) => height};
  padding: 2px;
  border-radius: 32px;
  background: ${({ theme }) => theme.button.borderBg};
  box-shadow: ${({ theme }) => theme.button.boxShadow};

  ${ButtonStyled} {
    background: ${({ theme, bgColor }) =>
      `linear-gradient(101deg, ${theme.colors[bgColor]?.secondary} 17%, ${theme.colors[bgColor]?.primary} 77%)`};
  
  ${({ variant, theme, bgColor }) =>
    variant === "flat" &&
    css`
      background: ${transparentize(0.8, theme.colors[bgColor]?.primary)};
      color: ${theme.colors[bgColor]?.primary};
      font-size: 12px;
    `}

    ${({ withIcon }) =>
      withIcon &&
      css`
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
      `}
  }

  &:hover,
  &:focus {
    outline: 0;

    ${ButtonStyled} {
      background: ${({ theme, bgColor }) =>
        `linear-gradient(101deg, ${theme.colors[bgColor]?.primary} 17%, ${theme.colors[bgColor]?.secondary} 77%)`}; 
    }
  }

  ${({ variant, theme, bgColor }) =>
    variant === "flat" &&
    css`
      box-shadow: none;
      background: transparent;
      padding: 0;
      font-weight: 500;

      &:hover,
      &:focus {
        ${ButtonStyled} {
          background: ${transparentize(0.7, theme.colors[bgColor]?.primary)};
        }
      }
    `}
`
