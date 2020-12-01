import xw from "xwind"
import styled from "@emotion/styled"

import { LocationIcon } from "@/assets/icons/HotelLocation"

export const LocationWrapper = styled.div`
  ${xw`
    flex
    items-center
    text-xs
    mb-8
  `}
`

export const LocationMarker = styled(LocationIcon)`
  ${xw`
    mr-2
  `}

  path {
    fill: ${({ theme }) => theme?.brandColors?.primary};
  }
`

export const LocationCity = styled.span`
  ${xw`
    mr-1
  `}
  color: ${({ theme }) => theme?.colors?.text?.primary};
`

export const LocationLink = styled.a`
  color: ${({ theme }) => theme?.colors?.text?.alternate};
`
