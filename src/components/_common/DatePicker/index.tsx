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

type Props = React.ComponentProps<typeof DatePickerWrapper> & {
  datePickerProps: React.ComponentProps<typeof DatePickerStyled>
}

const DatePicker = (props: Props) => {
  const { datePickerProps, ...wrapperProps } = props
  return (
    <DatePickerWrapper {...wrapperProps}>
      <DatePickerStyled
        {...datePickerProps}
        inline
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
      />
    </DatePickerWrapper>
  )
}

export default DatePicker
