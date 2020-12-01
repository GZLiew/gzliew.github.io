import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"
import Button from "@/components/_common/Button"

export const ButtonToggleWrapper = styled.div`
  ${tw`w-full`}
`
export const ButtonStyled = styled(Button)`
  margin-right: 10px;
  &:last-of-type {
    margin-right: 0;
  }
`
