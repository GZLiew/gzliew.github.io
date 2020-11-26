import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const Input = styled.input`
  ${tw`w-full outline-none border-0 rounded-full py-5 px-6 text-lg font-medium`}
  ${({ theme }) => (theme.mode === "light" ? tw`text-black` : tw`text-white`)}
  background-color: ${({ theme }) =>
    theme.mode === "light" ? theme.colors.primary : theme.colors.secondary};
  &:placeholder: {
    color: ${({ theme }) => theme.colors.text.primary}
  }
`
