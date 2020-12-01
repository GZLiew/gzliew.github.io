import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const SIZES = {
  sm: tw`h-5 w-5`,
  md: tw`h-8 w-8`,
  lg: tw`h-16 w-16`,
  xl: tw`h-24 w-24`,
  xxl: tw`h-40 w-40`
}

type SvgProps = {
  size?: keyof typeof SIZES
}

export const StyledSvg = styled.svg<SvgProps>`
  ${tw`animate-spin -ml-1 mr-3 text-white`}
  color: ${({ theme }) => theme.brandColors.primary};
  ${({ size }) => SIZES[size]}
`

export const StyledCircle = styled.circle`
  ${tw`opacity-25`}
`

export const StyledPath = styled.path`
  ${tw`opacity-75`}
`
