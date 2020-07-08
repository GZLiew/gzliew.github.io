import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const ModalBg = styled.div`
  ${tw`
    absolute
    inset-0
  `}
  background: ${({ theme }) => theme.colors?.bodyBackground};
  width: 100%;
  padding: 25px;
  padding-top: 38px;
`

export const ModalHeader = styled.div`
  ${tw`
    flex items-center
  `}
  margin-bottom: 46px;
`

export const HelpText = styled.h3`
  margin-left: 23px;
`
