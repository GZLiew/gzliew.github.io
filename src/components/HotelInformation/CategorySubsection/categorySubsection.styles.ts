import xw from "xwind"
import styled from "@emotion/styled"

interface DropdownProps {
  isDropdown?: boolean
}

export const DescriptionText = styled.div`
  ${xw`text-xs`}
`

export const SubsectionWrapper = styled.div<DropdownProps>`
  ${xw`flex items-start text-xs`}
  padding-top: ${({ isDropdown }) => isDropdown && `1.25rem`};
  padding-bottom: ${({ isDropdown }) => isDropdown && `1.25rem`};
  color: ${({ theme }) => theme?.colors?.text?.alternate};
  border-bottom: ${({ isDropdown, theme }) =>
    isDropdown &&
    `1px solid
    ${theme.mode === "light" ? theme?.colors?.primary : theme?.colors?.secondary}}`};
  margin-bottom: ${({ isDropdown }) => !isDropdown && `2rem`};

  & > p {
    ${xw`mb-4`}
  }
`

export const InnerContent = styled.div(xw`flex-1`)

export const SubsectionIcon = styled.div`
  ${xw`block flex-none w-4 mt-1 ml-3 mr-6`}
`

export const EmptyIconSpacer = SubsectionIcon.withComponent("span")

export const SubsectionTitle = styled.h5<DropdownProps>`
  ${xw`mb-2 text-base font-medium`}
  color: ${({ theme }) => theme?.colors?.text?.primary};
  -webkit-tap-highlight-color: transparent;

  ${({ isDropdown }) => isDropdown && xw`flex justify-between w-full mb-0 cursor-pointer`}
`
