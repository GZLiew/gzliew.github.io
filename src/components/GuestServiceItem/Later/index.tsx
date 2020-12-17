import React, { useEffect, useState } from 'react'
import { addDays, format } from 'date-fns'

import DatePicker from '@/components/DatePicker'
import TimePicker from '@/components/_common/TimePicker'
import { DateData, GuestService } from '@/lib/types/guestService'

import {
  CommonSection,
  LighTextStyled,
  StyledBottomSheet,
  SubmitButtonStyled
} from '../GuestServiceItem.styles'

type Props = {
  blok: GuestService<DateData>
}

const Later = ({ blok }: Props) => {
  const [time, setTime] = useState(format(new Date(), 'h:mm a'))
  const [date, setDate] = useState(new Date())
  const [submitDate, setSubmitDate] = useState('')

  useEffect(() => {
    const dateStr = format(date, 'dd MMM yyyy')
    setSubmitDate(`${dateStr} ${time}`.toUpperCase())
  }, [time, date])

  return (
    <>
      <CommonSection>
        <DatePicker
          onChangeDate={(newDate) => setDate(newDate)}
          datePickerProps={{
            maxDate: addDays(new Date(), blok?.data?.maxDays)
          }}
        />
      </CommonSection>
      <CommonSection>
        <TimePicker onOverlayClick={(newTime) => setTime(newTime)} />
      </CommonSection>
      <StyledBottomSheet>
        <LighTextStyled>Date & Time</LighTextStyled>
        {submitDate}
        <SubmitButtonStyled size="medium">Request</SubmitButtonStyled>
      </StyledBottomSheet>
    </>
  )
}

export default Later
