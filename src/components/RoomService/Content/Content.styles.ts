import xw from 'xwind'
import styled from '@emotion/styled'

export const TabWrapper = styled.div`
  ${xw`flex flex-row justify-center py-4`}
`

export const TncWrapper = styled.div`
  ${xw`p-4 text-center text-sm font-thin`}
  color: ${({ theme }) => theme.colors.text.alternate};
`

export const MenuWrapper = styled.div`
  ${xw`pt-4 text-center text-sm`}
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  background: ${({ theme }) => theme.colors.menuBackground};
`

export const StickyFooterWrapper = styled.div`
  ${xw`sticky bottom-0 py-4 px-5 w-full flex flex-row justify-between items-center`}
  background: ${({ theme }) => theme.colors.footer.background};
  box-shadow: ${({ theme }) => theme.colors.footer.boxShadow};
  color: ${({ theme }) => theme.colors.text.alternate};
`

export const Summary = styled.div`
  ${xw`flex flex-col`}
`

export const ThinText = styled.div`
  ${xw`text-sm font-thin`}
`

export const TotalText = styled.div`
  ${xw`font-bold text-xl`}
  ${({ theme }) => (theme.mode === 'light' ? xw`text-black` : xw`text-white`)}
`
