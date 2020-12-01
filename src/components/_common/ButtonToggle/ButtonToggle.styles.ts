import xw from "xwind"
import styled from "@emotion/styled"
import Button from "@/components/_common/Button"

export const ButtonToggleWrapper = styled.div`
  ${xw`w-full`}
`
export const ButtonStyled = styled(Button)`
  margin-right: 10px;
  &:last-of-type {
    margin-right: 0;
  }
`
