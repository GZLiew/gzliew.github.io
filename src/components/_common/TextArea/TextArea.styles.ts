import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const TextAreaStyled = styled.textarea`
  ${tw`w-full outline-none border-0 p-6 text-1xl font-medium`}
  ${({ theme }) => (theme.mode === "light" ? tw`text-black` : tw`text-white`)}
  border-radius: 1.5rem;
  background-color: ${({ theme }) =>
    theme.mode === "light" ? theme.colors.primary : theme.colors.secondary};
  &:placeholder: {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`
