import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const QuickButtonWrapper = styled.div`
  ${tw`text-center
  flex items-center flex-col
  `}
`
export const QuickButtonItem = styled.div`
  ${tw`
    relative
    flex justify-center items-center
    rounded-full
  `}
  width: 52px;
  height: 52px;
  background: ${({ theme }) => theme?.colors?.blue?.primary};

  & img {
    max-width: 32px;
  }
`

export const Title = styled.h4`
  font-size: 11px;
  margin-top: 8px;
  color: ${({ theme }) => theme?.colors?.text?.secondary};
`
