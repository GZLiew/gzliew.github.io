import xw from 'xwind'
import styled from '@emotion/styled'

import TouchableOpacity from '@/components/_common/TouchableOpacity'

type IconContainerProps = {
  background?: string
}

export const quickButtonIconBackgrounds = [
  'rgba(255, 168, 18, 0.3)',
  'rgba(255, 167, 167, 0.3)',
  'rgba(72, 216, 216, 0.3)'
]

export const QuickButtonContainer = styled(TouchableOpacity)`
  ${xw`flex rounded-2xl p-4 mb-4 items-center`}
  background: ${({ theme }) => theme.colors.inputBackground};
`

export const IconContainer = styled.div<IconContainerProps>`
  ${xw`flex justify-center items-center mr-4`}
  border-radius: 35%;
  min-width: 6rem;
  min-height: 6rem;
  background: ${({ background = 'rgba(255, 167, 167, 0.3)' }) => background};
`

export const QuickButtonLabel = styled.div`
  ${xw`text-2xl font-semibold break-words`}
  color: ${({ theme }) => (theme.mode === 'light' ? 'black' : 'white')};
`
