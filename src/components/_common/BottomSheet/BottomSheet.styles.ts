import xw from 'xwind'
import styled from '@emotion/styled'

type Props = {
  isOpen?: boolean
}

export const BottomSheet = styled.div`
  ${xw`
  w-full
  rounded-t-2xl`}
  background: ${({ theme }) => theme.colors.bottomSheet.background};
  box-shadow: ${({ theme }) => theme.colors.bottomSheet.boxShadow};
  color: ${({ theme }) => theme.colors.text.primary};
`

export const BottomSheetContainer = styled(BottomSheet)<Props>`
  ${xw`
    z-50
    fixed
    bottom-0
    left-0
    overflow-auto
    transition-transform
    duration-200
    ease-in
  `}
  transform: translateY(${(props) => (props.isOpen ? 0 : '100%')});
`
