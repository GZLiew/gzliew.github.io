import React from 'react'
import dfnsFormat from 'date-fns/format'

import {
  DatePickerHeaderTitle,
  DatePickerStyled,
  DatePickerWrapper,
  HeaderWrapper,
  ButtonWrapper,
  LeftStyled,
  RightStyled
} from './DatePicker.styles'

export type Props = React.ComponentProps<typeof DatePickerWrapper> & {
  datePickerProps: React.ComponentProps<typeof DatePickerStyled>
}

const DatePicker = (props: Props) => {
  const { datePickerProps, ...wrapperProps } = props
  return (
    <DatePickerWrapper {...wrapperProps}>
      <DatePickerStyled
        inline
        adjustDateOnChange
        formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled
        }) => (
          <HeaderWrapper>
            <ButtonWrapper onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              <LeftStyled />
            </ButtonWrapper>
            <DatePickerHeaderTitle>
              {dfnsFormat(date, 'MMMM')} {dfnsFormat(date, 'yyyy')}
            </DatePickerHeaderTitle>
            <ButtonWrapper onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              <RightStyled />
            </ButtonWrapper>
          </HeaderWrapper>
        )}
        {...datePickerProps}
      />
    </DatePickerWrapper>
  )
}

export default DatePicker
