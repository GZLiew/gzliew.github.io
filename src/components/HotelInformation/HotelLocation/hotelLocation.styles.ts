import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"
import { rgba } from "polished"

import LocationIcon from "../../../assets/icons/location.svg"

export const LocationWrapper = styled.div`
  ${tw`
    flex
    items-center
    text-xs
  `}
`

export const LocationMarker = styled(LocationIcon)`
  ${tw`
    mr-2
  `}
`

export const LocationCity = styled.span`
  ${tw`
    mr-1
  `}
  color: ${({ theme }) => theme?.colors?.text?.primary};
`

export const LocationLink = styled.a`
  color: ${({ theme }) => theme?.colors?.text?.alternate}
`
