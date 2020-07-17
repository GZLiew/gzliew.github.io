import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const RatingWrapper = styled.div`
  ${tw`
    flex
    flex-col
    items-end
    text-right
  `}
`

export const RatingText = styled.h3`
  ${tw`
    text-xl
    font-medium
  `}
  color: ${({ theme }) => theme?.colors?.text?.primary};

  span {
    ${tw`
      text-xs
    `}
    color: ${({ theme }) => theme?.colors?.text?.alternate};
  }
`
