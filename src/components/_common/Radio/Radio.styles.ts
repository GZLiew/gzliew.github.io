import xw from 'xwind'
import styled from '@emotion/styled'

type RootProps = {
  borderColor?: string
  active: boolean
}

type FillProps = {
  fillColor?: string
  borderActive?: boolean
}

export const Root = styled.label<RootProps>`
  ${xw`block m-5 pl-4 cursor-pointer relative font-normal text-base text-gray-600`}
  color: ${({ active, theme }) => (active ? theme.brandColors.primary : xw`text-gray-600`)}
`

export const Fill = styled.div<FillProps>`
  ${xw`rounded-full absolute left-0`}
  top: 50%;
  background: ${({ fillColor, borderActive, theme }) =>
    !borderActive ? 'transparent' : fillColor || theme.brandColors.primary};
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in, height 0.2s ease-in;
  z-index: 1;
  border: 1px solid ${({ borderActive, theme }) => (borderActive ? 'transparent' : theme.colors.gray)};
  width: 18px;
  height: 18px;

  &::before {
    ${xw`opacity-0 absolute rounded-full`}
    top: 50%;
    left: 50%;
    content: '';
    width: 18px;
    height: 18px;
    transform: translate(-50%, -50%);
    border: 1px solid ${({ borderActive, theme }) => borderActive && theme.brandColors.primary};
  }
`

export const Input = styled.input`
  ${xw`opacity-0 absolute top-0 left-0 w-full h-full m-0 cursor-pointer`}
  z-index: 2;

  &:focus {
    outline: none;
  }

  &:checked {
    & ~ ${Fill} {
      width: calc(18px - 8px);
      height: calc(18px - 8px);
      transition: width 0.2s ease-out, height 0.2s ease-out;

      &::before {
        opacity: 1;
        transition: opacity 1s ease;
      }
    }
  }
`
export const SecondaryText = styled.div`
  ${xw`absolute right-0 top-0 text-gray-600`}
`
