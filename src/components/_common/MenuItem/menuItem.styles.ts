import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const MenuItemWrapper = styled.div`
  ${tw`flex items-start p-4 `}
`
export const MenuImage = styled.div`
  ${tw`
    w-1/3 
  `}
  img {
    border-radius: 0.5rem;
    object-fit: fill;
  }
  max-width: 85px;
`
export const MenuDetail = styled.div`
  ${tw`
    w-2/3
    pl-3
  `}
  color: ${({ theme }) => theme.colors.text.primary};
  h4 {
    ${tw`
      font-bold
      mb-2
    `}
    color: ${({ theme }) => theme.colors.text.primary};
  }
  p {
    ${tw`
      text-xs
      mb-1
    `}
  }
`
