import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const ToggleButton = styled.button`
  ${tw`mt-2 text-xs`}
  color: ${({ theme }) => theme?.brandColors?.primary};

  &:focus {
    outline: none;
    text-decoration: underline;
  }
`
