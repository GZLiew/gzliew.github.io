import xw from "xwind"
import styled from "@emotion/styled"

export const OrderWrapper = styled.div`
  ${xw`px-6 pb-6`}
  &:not(:first-of-type) {
    border-top: 1px solid
      ${({ theme }) => (theme.mode === "light" ? theme.colors.secondary : theme.colors.primary)};
  }
`
export const MoreInfoWrapper = styled.div`
  ${xw` p-5 w-full text-center`}
  background-color: ${({ theme }) =>
    theme.mode === "light" ? theme.colors.secondary : theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.alternate};
`
export const MoreInfo = styled.div`
  ${xw`py-5 space-y-1`}
`
export const SummaryWrapper = styled.div`
  ${xw`py-7 px-5 w-full`}
  color: ${({ theme }) => theme.colors.text.alternate};
`
export const Title = styled.div`
  ${xw`flex flex-col`}
`
export const Info = styled.div`
  ${xw`py-4 flex flex-row justify-between items-center`}
  color: ${({ theme }) => theme.colors.text.alternate};
`
export const Label = styled.div`
  ${xw`flex flex-col space-y-4`}
`
export const StickyFooterWrapper = styled.div`
  ${xw`sticky bottom-0 py-4 px-5 w-full flex flex-row justify-between items-center`}
  background: ${({ theme }) => theme.colors.footer.background};
  box-shadow: ${({ theme }) => theme.colors.footer.boxShadow};
  color: ${({ theme }) => theme.colors.text.alternate};
`
export const StickyContent = styled.div`
  ${xw`flex flex-col`}
`
export const ThinText = styled.div`
  ${xw`text-xs font-thin`}
`
export const BoldText = styled.div`
  ${xw`font-semibold text-sm`}
  ${({ theme }) => (theme.mode === "light" ? xw`text-black` : xw`text-white`)}
`
export const TotalText = styled.div`
  ${xw`font-bold text-lg`}
  ${({ theme }) => (theme.mode === "light" ? xw`text-black` : xw`text-white`)}
`
