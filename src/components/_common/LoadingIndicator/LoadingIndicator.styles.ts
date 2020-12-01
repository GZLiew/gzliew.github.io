import xw from "xwind"
import styled from "@emotion/styled"

export const SIZES = {
  sm: xw`h-5 w-5`,
  md: xw`h-8 w-8`,
  lg: xw`h-16 w-16`,
  xl: xw`h-24 w-24`,
  xxl: xw`h-40 w-40`
}

type SvgProps = {
  size?: keyof typeof SIZES
}

export const StyledSvg = styled.svg<SvgProps>`
  ${xw`animate-spin -ml-1 mr-3 text-white`}
  color: ${({ theme }) => theme.brandColors.primary};
  ${({ size }) => SIZES[size]}
`

export const StyledCircle = styled.circle`
  ${xw`opacity-25`}
`

export const StyledPath = styled.path`
  ${xw`opacity-75`}
`
