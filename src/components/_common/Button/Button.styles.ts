import xw from "xwind"
import styled from "@emotion/styled"
import { css, Theme } from "@emotion/react"
import isPropValid from "@emotion/is-prop-valid"
import { lighten } from "polished"
import TouchableOpacity from "@/components/_common/TouchableOpacity"

export type ButtonWrapperProps = {
  /** The color of the button background */
  bgColor?: string
  variant?: "flat"
  disabled?: boolean
  outline?: boolean
  withIcon?: boolean
  size: "small" | "medium" | "large"
  raised?: boolean
  hover?: boolean
  round?: boolean
  /** Whether a variant button should animate the background */
  shouldAnimate?: boolean
  /** The button wrapper background color  */
  wrapperBgColor?: string
  outlineColor?: string
} & React.ComponentProps<typeof TouchableOpacity>

export const ContentContainer = styled.div`
  z-index: 1;
`

export const ButtonStyled = styled.div`
  ${xw`flex justify-center items-center h-full w-full py-2.5 px-6 uppercase`}
  z-index: 1;
`

export const ButtonBackground = styled.div`
  ${xw`absolute top-0 left-0 h-full w-full z-0 rounded-full`}
`

const BackgroundStyles = ({
  bgColor,
  theme,
  shouldAnimate,
  variant,
  outline,
  disabled
}: ButtonWrapperProps & { theme: Theme }) => css`
  background: linear-gradient(135.3deg, ${
    bgColor ? lighten(0.25, bgColor) : theme.brandColors.secondary
  } 16.81%, ${bgColor || theme.brandColors.primary} 76.81%);

  ${
    shouldAnimate &&
    `
     transform: scale(1);
     transition: transform 0.2s ease-out;
    `
  }

  ${
    variant === "flat" &&
    `
     background: ${bgColor || theme.button.flatBg};
    `
  }

  ${
    variant &&
    shouldAnimate &&
    `
     transform: scale(0);
     transition: transform 0.2s ease-in;
    `
  }

  ${
    outline &&
    `
     background: ${bgColor || "transparent"};
    `
  }

  ${
    disabled &&
    `
     background: ${theme.button.disabled};
    `
  }
`

const ContentStyles = ({
  theme,
  variant,
  outline,
  disabled,
  round
}: ButtonWrapperProps & { theme: Theme }) => css`
  ${
    variant === "flat" &&
    `
     color: ${theme.colors.text.primary};
    `
  }

  ${
    outline &&
    `
     padding-right: 1.375rem;
     padding-left: 1.375rem;
    `
  }

  ${
    disabled &&
    `
     color: ${theme.mode === "light" ? theme.colors.gray : "white"};
    `
  }

  ${
    round &&
    `
      width: 3rem;
      height: 3rem;
    `
  }

  ${
    round &&
    outline &&
    `
      width: 2.750rem;
      height: 2.750rem;
    `
  }
`

export const ButtonWrapper = styled(TouchableOpacity, {
  shouldForwardProp: (prop: string) => isPropValid(prop)
})<ButtonWrapperProps>`
  ${xw`relative font-medium overflow-hidden rounded-full text-white inline-block`}
  ${({ raised, theme }) =>
    raised &&
    css`
      box-shadow: ${theme.button.boxShadow};
      border: ${theme.button.border};
    `}

  &:focus {
    outline: 0;
  }

  ${ButtonBackground} {
    ${(allProps) => BackgroundStyles(allProps)}
  }

  ${ButtonStyled} {
    ${({ outline }) => outline && xw`py-2`}
    ${(allProps) => ContentStyles(allProps)}
  }

  ${ContentContainer} {
    ${({ withIcon }) => withIcon && xw`flex w-full justify-between items-center`}
  }

  ${({ wrapperBgColor, shouldAnimate }) =>
    wrapperBgColor &&
    shouldAnimate &&
    css`
      background: ${wrapperBgColor};
    `}

  ${({ outline, theme, outlineColor }) =>
    outline &&
    css`
      border: 2px solid ${outlineColor || theme.colors.gray};
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      ${ButtonStyled} {
        ${xw`text-xs`}
      }
    `}

  ${({ size }) =>
    size === "medium" &&
    css`
      min-width: 11rem;
      ${ButtonStyled} {
        ${xw`text-base`}
      }
    `}

  ${({ size }) =>
    size === "large" &&
    css`
      ${xw`text-lg w-full`}
    `}
`
