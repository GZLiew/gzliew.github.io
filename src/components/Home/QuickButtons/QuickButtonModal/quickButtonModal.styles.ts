import xw from 'xwind'
import styled from '@emotion/styled'

export const ModalBg = styled.div`
  ${xw`
    fixed
    inset-0
    z-40
  `}
  background: ${({ theme }) => theme.colors?.bodyBackground};
  width: 100%;
  padding: 25px;
  padding-top: 38px;
  margin: 0;
  height: 100vh;
  -webkit-overflow-scrolling: touch;
`

export const ModalHeader = styled.div`
  ${xw`
    flex items-center
  `}
  margin-bottom: 46px;
`

export const HelpText = styled.h3`
  color: ${({ theme }) => theme?.colors?.text?.primary};
  margin-left: 23px;
`
