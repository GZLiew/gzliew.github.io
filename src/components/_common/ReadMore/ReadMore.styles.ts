import xw from 'xwind'
import styled from '@emotion/styled'

export const ToggleButton = styled.button`
  ${xw`mt-2 text-xs`}
  color: ${({ theme }) => theme?.brandColors?.primary};

  &:focus {
    outline: none;
    text-decoration: underline;
  }
`
