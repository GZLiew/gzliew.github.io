import xw from 'xwind'
import styled from '@emotion/styled'

export const Card = styled.div`
  ${xw`
    flex
    flex-col
    items-center
    justify-center
    mr-2
    px-1
    pt-3
    pb-2
    text-xs
    text-center
  `}

  flex: 0 0 auto;
  width: 82px;
  height: 78px;
  background: ${({ theme }) => theme?.colors?.amenityBackground};
  color: ${({ theme }) => theme?.colors?.text?.primary};
  border-radius: 10px;

  h6 {
    span {
      display: block;
    }
  }
`

export const IconWrapper = styled.div`
  ${xw`
    block
    mx-auto
    mb-1
  `}

  max-width: 24px
`
