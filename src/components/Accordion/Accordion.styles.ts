import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

interface DropdownProps {
  isDropdown?: boolean
}

export const TitleWrapper = styled.div`
  ${tw`flex justify-between overflow-hidden mb-2 text-md font-medium`}
  color: ${({ theme }) => theme?.colors?.text?.primary};
  -webkit-tap-highlight-color: transparent;
`

export const Title = styled.h5<DropdownProps>`
  ${tw`text-md font-medium`}
  color: ${({ theme }) => theme?.colors?.text?.primary};
  -webkit-tap-highlight-color: transparent;
`

export const SecondaryTitle = styled.h5<DropdownProps>`
  ${tw`flex justify-between overflow-hidden mb-2 text-sm text-gray-600 font-normal`}
  -webkit-tap-highlight-color: transparent;
`
