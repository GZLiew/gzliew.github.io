import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

type ButtonStyledProp = {
  variant?: string
}

type ButtonWrapperProps = {
  maxWith?: string
  height?: string
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  ${tw`
    relative
  `}
  padding: 2px;
  border-radius: 32px;
  background: ${({ theme }) => theme.button.borderBg};
  box-shadow: ${({ theme }) => theme.button.boxShadow};
  transition: all 0.3s ease-in;
  width: 100%;
  max-width: ${({ maxWith }) => maxWith};
  height: ${({ height }) => height};
`

export const ButtonStyled = styled.span<ButtonStyledProp>`
  ${tw`
  flex justify-center items-center
`}
  height: 100%;
  width: 100%;
  border-radius: 32px;
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
