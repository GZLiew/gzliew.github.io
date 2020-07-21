import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"
import { rgba } from "polished"

export const AmenitiesWrapper = styled.div`
  ${tw`
    flex
    overflow-x-auto
    -mx-5
 `}

  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const InnerWrapper = styled.div`
  ${tw`
    flex
    px-5
 `}
`

export const MoreFacilities = styled.div`
  & div {
      ${tw`
      flex
      mr-0
    `}
    background: ${({ theme }) =>
      `linear-gradient(134deg, ${theme?.colors?.pink?.secondary} 17%, ${theme?.colors?.pink?.primary} 77%)`};
    color: ${rgba("#fff", 0.72)};
  }
  h5 {
    ${tw`
      text-base
      leading-none
    `}
    color: #fff;
  }

  h6 {
    font-size: 10px;
  }
`
