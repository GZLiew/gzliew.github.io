import xw from 'xwind'
import styled from '@emotion/styled'
import { rgba } from 'polished'

export const StyledLink = styled.a<{ showBg: boolean }>`
  ${xw`
      flex-auto
      w-full
      flex
      px-4
      py-3
      text-base
      font-medium
      rounded-full
      items-center
      `}

  background-color: ${({ showBg, theme }) =>
    showBg && (theme.mode === 'light' ? rgba(theme?.brandColors?.primary, 0.12) : rgba('black', 0.12))};

  &:focus {
    outline: none;
  }
`

export const IconWrapper = styled.div`
  ${xw`
    mr-8
  `}
  width: 24px;
  height: 24px;

  svg {
    color: ${({ theme }) => theme?.brandColors?.primary || '#E1245E'};
  }
`
