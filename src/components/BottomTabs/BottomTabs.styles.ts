import xw from 'xwind'
import styled from '@emotion/styled'

export const BottomTabsContainer = styled.div`
  ${xw`flex w-full fixed z-50 px-2`}
  bottom: 0;
  background: ${({ theme }) => theme.colors.bottomTabs.background};
`
