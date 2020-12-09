import xw from 'xwind'
import styled from '@emotion/styled'
import { rgba } from 'polished'

export const AmenitiesWrapper = styled.div`
  ${xw`
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
  ${xw`
    flex
    px-5
 `}
`

export const MoreFacilities = styled.a`
  & div {
    ${xw`
      flex
      mr-0
    `}
    background: ${({ theme }) =>
      `linear-gradient(134deg, ${theme?.brandColors?.secondary} 17%, ${theme?.brandColors?.primary} 77%)`};
    color: ${rgba('#fff', 0.72)};
  }
  h5 {
    ${xw`
      text-base
      leading-none
    `}
    color: #fff;
  }

  h6 {
    font-size: 10px;
  }
`
