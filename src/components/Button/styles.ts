import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

type ButtonStyledProp = {
  variant?: string
}

export const ButtonWrapper = styled.button`
  ${tw`
    relative
    p-1
  `}
  border-radius: 32px;
  width: 311px;
  min-height: 59px;
  background: ${({ theme }) => theme.button.borderBg};
  box-shadow: ${({ theme }) => theme.button.boxShadow};
  transition: all 0.3s ease-in;
`

export const ButtonStyled = styled.span<ButtonStyledProp>`
  ${tw`
  flex justify-center items-center
  border border-transparent
  text-white
`}
  border-radius: 32px;
  min-height: 59px;
  background: linear-gradient(
    101deg,
    ${({ theme, variant }) => theme.colors[variant]?.secondary} 17%,
    ${({ theme, variant }) => theme.colors[variant]?.primary} 77%
  );

  &:hover,
  &:focus {
    background: linear-gradient(
      101deg,
      ${({ theme, variant }) => theme.colors[variant]?.primary} 17%,
      ${({ theme, variant }) => theme.colors[variant]?.secondary} 77%
    );
  }
`
