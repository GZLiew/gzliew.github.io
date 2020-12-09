import xw from 'xwind'
import styled from '@emotion/styled'

export const TitleContainer = styled.div(xw`container mx-auto px-5 py-8 pb-0`)

export const CategoryTitle = styled.h4`
  ${xw`mb-5 text-base font-bold`}
  color: ${({ theme }) => theme?.colors?.text?.primary};
`
