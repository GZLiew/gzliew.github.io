import xw from 'xwind'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import NextIcon from '@/assets/icons/NextIcon'
import Button from '@/components/_common/Button'
import { BottomSheet } from '@/components/_common/BottomSheet/BottomSheet.styles'

type TabsSectionProps = {
  isNow?: boolean
}

export const PageContainer = styled.div`
  ${xw`pt-6 flex flex-col md:items-center`}
  min-height: 100vh;
`

export const TabsSection = styled.div<TabsSectionProps>`
  ${xw`py-4 mb-2 text-center `}
  ${({ isNow, theme }) =>
    !isNow &&
    css`
      border-bottom: 1px solid ${theme?.mode === 'light' ? theme?.colors?.primary : theme?.colors?.secondary};
    `}
  color: ${({ theme }) => theme?.colors?.text?.primary};
`

export const CommonSection = styled.div`
  ${xw`py-4 px-6 flex justify-start`}
  @media (min-width: 768px) {
    min-width: 25rem;
  }
`

export const StyledButtonTabsContainer = styled.div`
  ${xw`mt-4`}
`

export const StyledBottomSheet = styled(BottomSheet)`
  ${xw`
    flex 
    flex-1 
    flex-col 
    p-4 
    pt-14 
    items-center 
    text-center 
    rounded-t-3xl
    mt-3
  `}
  color: ${({ theme }) => (theme.mode === 'light' ? 'black' : 'white')};
`

export const LighTextStyled = styled.div`
  ${xw`font-light`}
  color: ${({ theme }) => theme?.colors?.text?.primary};
`

export const SubmitButtonStyled = styled(Button)`
  ${xw`mt-3`}
`

export const Center = styled.div`
  ${xw`flex justify-center items-center text-1xl font-bold`}
  color: ${({ theme }) => theme?.colors?.text?.primary};
`

export const NextIconStyled = styled(NextIcon)``
