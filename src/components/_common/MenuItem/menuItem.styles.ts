import xw from "xwind"
import styled from "@emotion/styled"

export const MenuItemWrapper = styled.div`
  ${xw`flex items-start p-4 `}
`
export const MenuImage = styled.div`
  ${xw`
    w-1/3 
  `}
  img {
    border-radius: 0.5rem;
    object-fit: fill;
  }
  max-width: 85px;
`
export const MenuDetail = styled.div`
  ${xw`
    w-2/3
    pl-3
  `}
  color: ${({ theme }) => theme.colors.text.primary};
  h4 {
    ${xw`
      font-bold
      mb-2
    `}
    color: ${({ theme }) => theme.colors.text.primary};
  }
  p {
    ${xw`
      text-xs
      mb-1
    `}
  }
`
