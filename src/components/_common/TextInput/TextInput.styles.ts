import xw from 'xwind'
import styled from '@emotion/styled'

export const Input = styled.input`
  ${xw`w-full outline-none border-0 rounded-full py-5 px-6 text-lg font-medium`}
  ${({ theme }) => (theme.mode === 'light' ? xw`text-black` : xw`text-white`)}
  background-color: ${({ theme }) => (theme.mode === 'dark' ? theme.colors.primary : theme.colors.secondary)};
  &:placeholder: {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`
