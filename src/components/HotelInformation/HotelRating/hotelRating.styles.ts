import xw from 'xwind'
import styled from '@emotion/styled'

export const RatingWrapper = styled.div`
  ${xw`
    flex
    flex-col
    items-end
    text-right
  `}
`

export const RatingText = styled.h3`
  ${xw`
    text-xl
    font-medium
  `}
  color: ${({ theme }) => theme?.colors?.text?.primary};

  span {
    ${xw`
      text-xs
    `}
    color: ${({ theme }) => theme?.colors?.text?.alternate};
  }
`
