import xw from 'xwind'
import styled from '@emotion/styled'

type Props = {
  isOpen?: boolean
}

export const BottomSheetContainer = styled.div<Props>`
  ${xw`
    z-50
    fixed
    bottom-0
    left-0
    w-full
    rounded-t-2xl
    overflow-auto
    transition-transform
    duration-200
    ease-in
  `}
  background: ${({ theme }) => theme.colors.bottomSheet.background};
  box-shadow: ${({ theme }) => theme.colors.bottomSheet.boxShadow};
  transform: translateY(${(props) => (props.isOpen ? 0 : '100%')});
  color: ${({ theme }) => theme.colors.text.primary};
`
