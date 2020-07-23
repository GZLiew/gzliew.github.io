import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

import StyledContainer from "@/components/Container"

export const Section = styled.section`
  ${StyledContainer} {
    ${tw`
      py-8
    `}
    border-bottom: 3px solid ${({ theme }) =>
      theme?.mode === "light" ? theme?.colors?.white?.primary : theme?.colors?.white?.secondary};
  }
`
