import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

import { LocationIcon } from "@/assets/icons/HotelLocation"

export const LocationWrapper = styled.div`
  ${tw`
    flex
    items-center
    text-xs
    mb-8
  `}
`

export const LocationMarker = styled(LocationIcon)`
  ${tw`
    mr-2
  `}

  path {
    fill: ${({ theme }) => theme?.colors?.[theme?.primaryColor]?.primary};
  }
`

export const LocationCity = styled.span`
  ${tw`
    mr-1
  `}
  color: ${({ theme }) => theme?.colors?.text?.primary};
`

export const LocationLink = styled.a`
  color: ${({ theme }) => theme?.colors?.text?.alternate};
`
