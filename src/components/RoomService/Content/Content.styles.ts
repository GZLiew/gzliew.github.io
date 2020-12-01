import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const TabWrapper = styled.div`
  ${tw`flex flex-row justify-center py-4`}
`

export const TncWrapper = styled.div`
  ${tw`p-4 text-center text-sm font-thin`}
  color: ${({ theme }) => theme.colors.text.alternate};
`

export const MenuWrapper = styled.div`
  ${tw`pt-4 text-center text-sm`}
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  background: ${({ theme }) => theme.colors.menuBackground};
`

export const StickyFooterWrapper = styled.div`
  ${tw`sticky bottom-0 py-4 px-5 w-full flex flex-row justify-between items-center`}
  background: ${({ theme }) => theme.colors.footer.background};
  box-shadow: ${({ theme }) => theme.colors.footer.boxShadow};
  color: ${({ theme }) => theme.colors.text.alternate};
`

export const Summary = styled.div`
  ${tw`flex flex-col`}
`

export const ThinText = styled.div`
  ${tw`text-sm font-thin`}
`

export const TotalText = styled.div`
  ${tw`font-bold text-xl`}
  ${({ theme }) => (theme.mode === "light" ? tw`text-black` : tw`text-white`)}
`
