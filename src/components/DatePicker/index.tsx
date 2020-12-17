import React, { useEffect, useState } from 'react'
import { useTheme } from '@emotion/react'
import { format, isEqual, isToday, isTomorrow, startOfToday, startOfTomorrow } from 'date-fns'

import DatePickerModal from '@/components/_common/DatePickerModal'
import { CalendarStyled, TitleWrapper } from '@/components/_common/DatePickerModal/DatePickerModal.styles'
import { DatePickerStyled } from '@/components/_common/DatePicker/DatePicker.styles'

import { ButtonsContainer, ButtonToggleStyled, ChevronDownStyled } from './DatePicker.styles'

type Props = {
  value?: Date
  onChangeDate: (d: Date) => void
  datePickerProps?: Partial<React.ComponentProps<typeof DatePickerStyled>>
}

const getActiveItem = (date: Date) => {
  if (isToday(date)) {
    return 'today'
  } else if (isTomorrow(date)) {
    return 'tomorrow'
  }
  return 'custom'
}

const getCustomDate = (date: Date) => {
  if (getActiveItem(date) !== 'custom') {
    return 'Select Date'
  }
  return format(date, 'dd MMM yyyy')
}

const DatePicker = ({ value = new Date(), onChangeDate, datePickerProps }: Props) => {
  const theme = useTheme()
  const [date, setDate] = useState(value)
  const [pickerDate, setPickerDate] = useState(new Date())
  const [isPickerOpen, setIsPickerOpen] = useState(false)

  useEffect(() => {
    if (getActiveItem(date) === 'custom') {
      setIsPickerOpen((prev) => !prev)
    } else {
      setIsPickerOpen(false)
    }
    onChangeDate(date)
  }, [date])

  const onPickerDateSelect = () => {
    if (isEqual(date, pickerDate)) {
      setIsPickerOpen(false)
      return
    }
    setDate(pickerDate)
  }

  const onOverlayClosed = () => {
    setIsPickerOpen(false)
  }

  const onDateChanged = (newItem) => {
    if (newItem.id === 'today') {
      setDate(startOfToday())
      return
    } else if (newItem.id === 'tomorrow') {
      setDate(startOfTomorrow())
      return
    }
    setIsPickerOpen(true)
  }

  return (
    <>
      <ButtonsContainer>
        <TitleWrapper>
          <CalendarStyled fill="currentColor" />
          Date
        </TitleWrapper>
        <ButtonToggleStyled
          items={[
            { id: 'today', label: 'Today' },
            { id: 'tomorrow', label: 'Tomorrow' },
            {
              id: 'custom',
              label: (
                <>
                  {getCustomDate(date)}
                  <ChevronDownStyled isFocus={getActiveItem(date) === 'custom'} viewBox="5 8 20 20" />
                </>
              )
            }
          ]}
          outlineColor={theme.button.notAnimatedBg}
          outlinePaddingX={1.2}
          wrapperBgColor={theme.button.notAnimatedBg}
          activeItem={getActiveItem(date)}
          onClick={onDateChanged}
        />
      </ButtonsContainer>
      <DatePickerModal
        datePickerProps={{
          selected: pickerDate,
          minDate: startOfToday(),
          onChange: (date) => setPickerDate(date as Date),
          ...datePickerProps
        }}
        onOverlayClosed={onOverlayClosed}
        isPickerOpen={isPickerOpen}
        onPickerDateSelect={onPickerDateSelect}
      />
    </>
  )
}

export default DatePicker
