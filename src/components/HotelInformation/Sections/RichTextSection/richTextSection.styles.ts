import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

import { Section as BaseSection } from "../"
import RichTextField from "@/components/RichTextField"

export const Section = styled(BaseSection)(tw`pb-8`)

export const SectionTitle = styled.h2`
  ${tw`mb-2 text-xl font-bold`}
  color: ${({ theme }) => theme?.colors?.text?.primary};
`

export const SectionContent = styled(RichTextField)`
  ${tw`text-xs`}
  color: ${({ theme }) => theme?.colors?.text?.primary};
`
