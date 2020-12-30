import xw from 'xwind'
import styled from '@emotion/styled'

import TouchableOpacity from '@/components/_common/TouchableOpacity'

export const NavItemContainer = styled(TouchableOpacity)`
  ${xw`flex justify-start items-center px-4 py-2 mb-2 rounded-3xl cursor-pointer`}
  color: ${({ theme }) => theme.colors.text.primary};
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`

export const IconContainer = styled.div`
  ${xw`flex justify-center mr-4`}
  min-width: 3rem;
  color: ${({ theme }) => theme.brandColors.primary};
`
