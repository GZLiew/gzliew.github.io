import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

interface DropdownProps {
  isDropdown?: boolean
}

export const DescriptionText = styled.div`
  ${tw`text-xs`}
`

export const SubsectionWrapper = styled.div<DropdownProps>`
  ${tw`flex items-start text-xs`}
  padding-top: ${({ isDropdown }) => isDropdown && `1.25rem`};
  padding-bottom: ${({ isDropdown }) => isDropdown && `1.25rem`};
  color: ${({ theme }) => theme?.colors?.text?.alternate};
  border-bottom: ${({ isDropdown, theme }) =>
    isDropdown &&
    `1px solid
    ${theme.mode === "light" ? theme?.colors?.white?.primary : theme?.colors?.white?.secondary}}`};
  margin-bottom: ${({ isDropdown }) => !isDropdown && `2rem`};

  & > p {
    ${tw`mb-4`}
  }
`

export const InnerContent = styled.div(tw`flex-1`)

export const SubsectionIcon = styled.div`
  ${tw`block flex-none w-4 mt-1 ml-3 mr-6`}
`

export const EmptyIconSpacer = SubsectionIcon.withComponent("span")

export const SubsectionTitle = styled.h5<DropdownProps>`
  ${tw`mb-2 text-md font-medium`}
  color: ${({ theme }) => theme?.colors?.text?.primary};
  -webkit-tap-highlight-color: transparent;

  ${({ isDropdown }) => isDropdown && tw`flex justify-between w-full mb-0 cursor-pointer`}
`
