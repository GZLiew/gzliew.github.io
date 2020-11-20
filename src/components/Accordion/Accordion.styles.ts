import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const TitleWrapper = styled.div`
  ${tw`flex justify-between overflow-hidden text-md font-medium`}
  color: ${({ theme }) => theme?.colors?.text?.primary};
  -webkit-tap-highlight-color: transparent;
`

export const Title = styled.h5`
  ${tw`text-md font-medium`}
  color: ${({ theme }) => theme?.colors?.text?.primary};
  -webkit-tap-highlight-color: transparent;
`

export const SecondaryTitle = styled.div`
  ${tw`flex justify-between overflow-hidden text-sm text-gray-600 font-normal`}
  -webkit-tap-highlight-color: transparent;
`

export const AccordionContent = styled.div`
  ${tw`pt-1`}
`
