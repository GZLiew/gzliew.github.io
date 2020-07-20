import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const Wrapper = styled.div`
  ${tw`flex items-center justify-between`}
`
export const Logo = styled.img`
  max-width: 69px;
`
export const StyledTitle = styled.h1`
${tw`text-2.5xl pb-2 font-bold`}
color: ${({ theme }) => theme.colors.text.primary};
`
export const SubHeading = styled.h2`
${tw`text-sm pt-4 font-regular`}
color: ${({ theme }) => theme.colors.pink.primary};`
