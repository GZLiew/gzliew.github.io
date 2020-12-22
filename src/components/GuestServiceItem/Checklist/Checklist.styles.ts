import xw from 'xwind'
import styled from '@emotion/styled'
import Container from '@/components/Container'

export const CheckListContainer = styled(Container)`
  ${xw`flex flex-col items-center text-center pb-4`}
  color: ${({ theme }) => theme?.colors?.text?.primary};
`

export const SubtitleContainer = styled.div`
  ${xw`pb-4`}
`
