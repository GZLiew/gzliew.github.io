import xw from 'xwind'
import styled from '@emotion/styled'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import Left from '@/assets/icons/Left'
import Right from '@/assets/icons/Right'

export const DatePickerWrapper = styled.div`
  ${xw`flex justify-center`}
  .react-datepicker {
    ${xw`font-sans text-sm border-0 bg-transparent`}
    color: ${({ theme }) => (theme.mode === 'light' ? 'black' : 'white')};
  }

  .react-datepicker__header {
    ${xw`bg-transparent border-b-0 font-bold`}
    font-size: 0.65rem;
  }

  .react-datepicker__navigation--next {
    right: 30px;
  }

  .react-datepicker__navigation--previous {
    left: 30px;
  }

  .react-datepicker__navigation {
    top: 23px;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    ${xw`py-3 font-normal`}
    color: ${({ theme }) => (theme.mode === 'light' ? 'black' : 'white')};
  }

  .react-datepicker__day-name {
    ${xw`uppercase opacity-75`}
    width: 2.5rem;
    color: ${({ theme }) => (theme.mode === 'light' ? 'black' : 'white')};
  }

  .react-datepicker__day--disabled,
  .react-datepicker__day--outside-month {
    ${xw`opacity-50`}
  }

  .react-datepicker__day {
    ${xw`font-bold outline-none text-center align-middle`}
    line-height: 2.5rem;
    width: 2.5rem;
    height: 2.5rem;
    color: ${({ theme }) => (theme.mode === 'light' ? 'black' : 'white')};
    &:hover {
      ${xw`rounded-full`}
      background-color: ${({ theme }) => theme.brandColors.secondary};
    }
  }

  .react-datepicker__day--keyboard-selected {
    ${xw`rounded-full`}
    background-color: transparent;
  }

  .react-datepicker__day--selected {
    ${xw`rounded-full`}
    background-color: ${({ theme }) => theme.brandColors.primary};
    color: ${({ theme }) => (theme.mode === 'light' ? 'white' : 'black')};
  }
`

export const DatePickerStyled = styled(DatePicker)``

export const HeaderWrapper = styled.div`
  ${xw`py-3 flex justify-center items-center`}
`

export const DatePickerHeaderTitle = styled.div`
  ${xw`mx-2 text-center text-base font-normal`}
`

export const ButtonWrapper = styled.button`
  ${xw`outline-none`}
  &:focus {
    ${xw`outline-none`}
  }
`

export const LeftStyled = styled(Left)`
  fill: ${({ theme }) => (theme.mode === 'light' ? 'black' : `white`)};
`

export const RightStyled = styled(Right)`
  fill: ${({ theme }) => (theme.mode === 'light' ? 'black' : `white`)};
`
