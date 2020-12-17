import xw from 'xwind'
import styled from '@emotion/styled'

import Calendar from '@/assets/icons/Calendar'
import CloseIcon from '@/assets/icons/CloseIcon'

export const TitleWrapper = styled.div`
  ${xw`flex flex-row text-sm items-center pb-4`}
  ${({ theme }) => (theme.mode === 'light' ? xw`text-black` : xw`text-white`)}
`

export const CalendarStyled = styled(Calendar)`
  ${xw`mr-2`}
  fill: ${({ theme }) => (theme.mode === 'light' ? 'black' : `white`)}
`

export const SheetContainer = styled.div`
  ${xw`p-4 flex flex-col items-center mx-auto`}
  max-width: 21rem;
`
export const DateSheetHeader = styled.div`
  ${xw`w-full flex justify-between items-center`}
  ${TitleWrapper} {
    ${xw`pb-0`}
  }
`

export const CloseIconStyled = styled(CloseIcon)``
