import xw from 'xwind'
import styled from '@emotion/styled'

import { Section as BaseSection } from './Sections'

export const Wrapper = styled.div`
  ${xw`flex items-center justify-between`}
`

export const Section = styled(BaseSection)(xw`pt-0 pb-8`)

export const Logo = styled.img`
  max-width: 69px;
`
export const StyledTitle = styled.h1`
  ${xw`text-2xl pb-2 font-bold`}
  color: ${({ theme }) => theme.colors.text.primary};
`
export const SubHeading = styled.h2`
  ${xw`text-sm pt-4 font-normal`}
  color: ${({ theme }) => theme?.brandColors?.primary};
`
