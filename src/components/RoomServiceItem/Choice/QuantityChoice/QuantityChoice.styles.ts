import xw from "xwind"
import styled from "@emotion/styled"

export const RowWrapper = styled.div`
 ${xw`flex flex-row justify-between items-center text-base font-medium px-4`}
 color: ${({ theme }) => theme?.colors?.text?.primary};
`

export const LabelWrapper = styled.div`
  ${xw`flex flex-row`}
`

export const SecondaryTitle = styled.div`
  ${xw`ml-2 text-sm text-gray-600 font-normal`}
  -webkit-tap-highlight-color: transparent;
`
