import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const TitleContainer = styled.div(tw`container mx-auto px-5 py-8 pb-0`)

export const CategoryTitle = styled.h4`
  ${tw`mb-5 text-base font-bold`}
  color: ${({ theme }) => theme?.colors?.text?.primary};
`
