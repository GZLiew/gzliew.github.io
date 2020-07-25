import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const Section = styled.section`
  ${tw`pt-8`}
  border-bottom: 3px solid
    ${({ theme }) =>
      theme?.mode === "light" ? theme?.colors?.white?.primary : theme?.colors?.white?.secondary};
  color: ${({ theme }) => theme?.colors?.text?.alternate};

  &:last-of-type {
    border-bottom: 0;
  }
`
