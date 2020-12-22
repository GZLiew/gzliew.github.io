import xw from 'xwind'
import styled from '@emotion/styled'

export const Base = styled.div`
  ${xw`w-full`}
  & > div {
    ${xw`mb-4`}
    &:last-of-type {
      margin-right: 0;
    }
  }
`

export const ErrorLabel = styled.div`
  ${xw`text-red-500 text-sm pl-1`}
`
