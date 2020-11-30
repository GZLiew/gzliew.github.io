import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const StyledSvg = styled.svg`
  ${tw`animate-spin -ml-1 mr-3 text-white`}
  color: ${({ theme }) => theme.brandColors.primary}
`
