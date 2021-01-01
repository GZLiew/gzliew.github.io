import xw from 'xwind'
import styled from '@emotion/styled'

export const IconContainer = styled.div`
  ${xw`flex justify-center items-center m-2 mb-4`}
  min-width: 3rem;
  transform: scale(1.4);
`

export const IconLabelContainer = styled.div`
  ${xw`flex flex-col justify-center items-center text-center text-1xl`}
  color: ${({ theme }) => theme.colors.text.primary}
`
