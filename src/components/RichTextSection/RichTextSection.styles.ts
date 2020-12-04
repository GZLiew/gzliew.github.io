import xw from "xwind"
import styled from "@emotion/styled"

import BaseSection from "@/components/_common/Section"
import RichTextField from "@/components/RichTextField"

export const Section = styled(BaseSection)(xw`pb-8`)

export const SectionTitle = styled.h2`
  ${xw`mb-2 text-xl font-bold`}
  color: ${({ theme }) => theme?.colors?.text?.primary};
`

export const SectionContent = styled(RichTextField)`
  ${xw`text-xs`}
  color: ${({ theme }) => theme?.colors?.text?.primary};
`
