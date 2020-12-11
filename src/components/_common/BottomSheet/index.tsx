import React, { ReactNode } from 'react'
import Overlay from '@/components/_common/Overlay'
import { BottomSheetContainer } from './BottomSheet.styles'

type Props = {
  isOpen?: boolean
  onOverlayClick?: () => void
  children: ReactNode
}

const BottomSheet = ({ isOpen, children, onOverlayClick }: Props) => {
  return (
    <>
      <Overlay isOpen={isOpen} onOverlayClick={onOverlayClick} />
      <BottomSheetContainer isOpen={isOpen}>{children}</BottomSheetContainer>
    </>
  )
}

export default BottomSheet
