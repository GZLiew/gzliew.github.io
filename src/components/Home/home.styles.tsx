import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const StyledTitle = styled.h2`
${tw`text-1xl pb-4 font-semibold`}
color: ${({ theme }) => theme.colors.text.primary};
margin-bottom: 38px;
`
export const SubHeading = styled.h1`
  ${tw`text-sm pt-4 font-regular`}
  color: ${({ theme }) => theme.colors.text.alternate};
`
