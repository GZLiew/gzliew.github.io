import xw from 'xwind'
import styled from '@emotion/styled'

import { css } from '@emotion/react'
import { transparentize } from 'polished'

import getButtonResponsiveSizes from '@/lib/utils/getButtonResponsiveSizes'

const { sizeVar } = getButtonResponsiveSizes()

type ButtonWrapperProps = {
  maxWidth?: string
  height?: string
  bgColor?: string
  variant?: string
  withIcon?: boolean
}

export const ButtonStyled = styled.span`
  ${xw`
  flex justify-center items-center
  w-full h-full
  `}
  border-radius: 32px;
`

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  ${xw`
   relative
   w-full
   transition duration-500 ease-in-out
   font-semibold
   `}
  max-width: ${({ maxWidth }) => maxWidth || sizeVar};
  height: ${({ height }) => height || sizeVar};
  padding: 2px;
  border-radius: 32px;
  background: ${({ theme }) => theme.button.borderBg};
  box-shadow: ${({ theme }) => theme.button.boxShadow};
  color: #fff;

  ${ButtonStyled} {
    background: ${({ theme }) =>
      `linear-gradient(101deg, ${theme.colors.secondary} 17%, ${theme.colors.primary} 77%)`};

    ${({ variant, theme, bgColor }) =>
      variant === 'flat' &&
      css`
        background: ${transparentize(0.8, bgColor || theme.colors.primary)};
        color: ${theme.colors.primary};
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
      background: ${({ theme }) =>
        `linear-gradient(101deg, ${theme.colors.primary} 17%, ${theme.colors.secondary} 77%)`};
    }
  }

  ${({ variant, theme, bgColor }) =>
    variant === 'flat' &&
    css`
      box-shadow: none;
      background: transparent;
      padding: 0;
      font-weight: 500;

      &:hover,
      &:focus {
        ${ButtonStyled} {
          background: ${transparentize(0.7, bgColor || theme.colors.primary)};
        }
      }
    `}

  svg {
    /* approx. 24px for 44px sizeVar & 32px for 60px sizeVar */
    width: calc(${sizeVar} * 0.54);
    height: calc(${sizeVar} * 0.54);
  }
`
