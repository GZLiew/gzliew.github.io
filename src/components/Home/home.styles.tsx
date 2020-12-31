import xw from 'xwind'
import styled from '@emotion/styled'
import Container from '@/components/Container'

export const StyledHomeContainer = styled(Container)`
  ${xw`pb-4 pt-4 mb-24`}
`

export const StyledTitle = styled.h2`
  ${xw`text-xl pb-4 font-semibold`}
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 38px;
`
export const SubHeading = styled.h1`
  ${xw`text-sm pt-4 font-normal`}
  color: ${({ theme }) => theme.colors.text.alternate};
`
