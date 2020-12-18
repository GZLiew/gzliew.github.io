import xw from 'xwind'
import styled from '@emotion/styled'

export const TextAreaStyled = styled.textarea`
  ${xw`w-full outline-none border-0 p-6 text-xl font-normal`}
  ${({ theme }) => (theme.mode === 'light' ? xw`text-black` : xw`text-white`)}
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  &:placeholder: {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`
