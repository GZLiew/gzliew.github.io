import xw from 'xwind'
import styled from '@emotion/styled'

import Button from '@/components/_common/Button'
import { ButtonBackground, ContentContainer } from '@/components/_common/Button/Button.styles'

export const ListContainer = styled.div`
  ${xw`px-4 py-2`}
`

export const GSButton = styled(Button)`
  ${xw`mt-3 rounded-2xl py-3 font-normal`}
  ${ButtonBackground} {
    ${xw`rounded-2xl`}
  }

  ${ContentContainer} {
    ${xw`capitalize`}
  }
`

export const StretchedContent = styled.div`
  ${xw`flex-grow text-left`}
`

export const IconContainer = styled.div`
  ${xw`flex justify-center mr-2`}
  min-width: 3rem;
`
