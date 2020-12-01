import xw from "xwind"
import styled from "@emotion/styled"

export const Section = styled.section`
  ${xw`pt-8`}
  border-bottom: 3px solid
    ${({ theme }) => (theme?.mode === "light" ? theme?.colors?.primary : theme?.colors?.secondary)};
  color: ${({ theme }) => theme?.colors?.text?.alternate};

  &:last-of-type {
    border-bottom: 0;
  }
`
