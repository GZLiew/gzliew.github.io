import React from 'react'

import Button from '@/components/_common/Button'
import BottomSheet from '@/components/_common/BottomSheet'
import DatePicker from '@/components/_common/DatePicker'

import {
  CalendarStyled,
  TitleWrapper,
  SheetContainer,
  DateSheetHeader,
  CloseIconStyled
} from './DatePickerModal.styles'

type Props = React.ComponentProps<typeof DatePicker> & {
  isPickerOpen?: boolean
  onOverlayClosed: () => void
  onPickerDateSelect?: () => void
}

const DatePickerModal = ({ isPickerOpen, onOverlayClosed, datePickerProps, onPickerDateSelect }: Props) => {
  return (
    <BottomSheet isOpen={isPickerOpen} onOverlayClick={onOverlayClosed}>
      <SheetContainer>
        <DateSheetHeader>
          <TitleWrapper>
            <CalendarStyled fill="currentColor" />
            Select Date
          </TitleWrapper>
          <CloseIconStyled onClick={onOverlayClosed} />
        </DateSheetHeader>
        <DatePicker datePickerProps={datePickerProps} />
        <Button size="medium" onClick={onPickerDateSelect}>
          Select
        </Button>
      </SheetContainer>
    </BottomSheet>
  )
}

export default DatePickerModal
