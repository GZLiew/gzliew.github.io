import xw from 'xwind'
import styled from '@emotion/styled'
import { BottomSheet } from '@/components/_common/BottomSheet/BottomSheet.styles'

export const PageContainer = styled.div`
  ${xw`pt-4 flex flex-col md:items-center`}
  min-height: 100vh;
`

export const StyledTitle = styled.h2`
  ${xw`text-1xl font-medium`}
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 38px;
`

export const SubHeading = styled.h1`
  ${xw`text-base pt-4 pb-2 font-normal`}
  color: ${({ theme }) => theme.colors.text.alternate};
`

export const StyledBottomSheet = styled(BottomSheet)`
  ${xw`
    flex 
    flex-1 
    flex-col 
    px-6
    pt-8
    text-center 
    rounded-t-3xl
  `}
  color: ${({ theme }) => (theme.mode === 'light' ? 'black' : 'white')};
`
