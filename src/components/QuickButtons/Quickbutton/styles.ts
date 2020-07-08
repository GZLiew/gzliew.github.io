import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

interface QuickButtonItemProp {
  bg: string
}

export const QuickButtonWrapper = styled.div`
  ${tw`text-center
  flex items-center flex-col
  `}
`
export const QuickButtonItem = styled.div<QuickButtonItemProp>`
  ${tw`
    relative
    flex justify-center items-center
    rounded-full
  `}
  width: 52px;
  height: 52px;
  background: ${({ bg, theme }) => (bg ? bg : theme?.colors?.gray)};

  & img {
    max-width: 32px;
  }
`

export const Title = styled.h4`
  font-size: 11px;
  margin-top: 8px;
  color: ${({ theme }) => theme?.colors?.text?.secondary};
`
