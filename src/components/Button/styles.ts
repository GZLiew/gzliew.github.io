import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

type ButtonWrapperProps = {
  maxWith?: string
  height?: string
  variant?: string
}

export const ButtonStyled = styled.span`
  ${tw`
  flex justify-center items-center
  w-full h-full
  `}
  border-radius: 32px;
`

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  ${tw`
   relative 
   w-full
   transition duration-500 ease-in-out
   `}
  max-width: ${({ maxWith }) => maxWith};
  height: ${({ height }) => height};
  padding: 2px;
  border-radius: 32px;
  background: ${({ theme }) => theme.button.borderBg};
  box-shadow: ${({ theme }) => theme.button.boxShadow};

  ${ButtonStyled} {
    background: ${({ theme, variant }) =>
      `linear-gradient(101deg, ${theme.colors[variant]?.secondary} 17%, ${theme.colors[variant]?.primary} 77%)`};
  }

  &:hover,
  &:focus {
    outline: 0;

    ${ButtonStyled} {
      background: ${({ theme, variant }) =>
        `linear-gradient(101deg, ${theme.colors[variant]?.primary} 17%, ${theme.colors[variant]?.secondary} 77%)`};
    }
  }
`
