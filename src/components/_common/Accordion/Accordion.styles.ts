import xw from 'xwind'
import styled from '@emotion/styled'

export const TitleWrapper = styled.div`
  ${xw`flex justify-between overflow-hidden text-base font-medium`}
  color: ${({ theme }) => theme?.colors?.text?.primary};
  -webkit-tap-highlight-color: transparent;
`

export const Title = styled.h5`
  ${xw`text-base font-medium`}
  color: ${({ theme }) => theme?.colors?.text?.primary};
  -webkit-tap-highlight-color: transparent;
`

export const SecondaryTitle = styled.div`
  ${xw`flex justify-between overflow-hidden text-sm text-gray-600 font-normal`}
  -webkit-tap-highlight-color: transparent;
`

export const AccordionContent = styled.div`
  ${xw`pt-1`}
`
