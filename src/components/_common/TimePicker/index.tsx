import React, { useEffect, useRef, useState } from 'react'
import Overlay from '@/components/_common/Overlay'
import formatDate from 'date-fns/format'
import useLockBodyScroll from '@/lib/hooks/useLockBodyScroll'

import {
  AmPmBlock,
  AmPmButton,
  EllipsesStyled,
  TimeBlock,
  TimeContainer,
  TimeIconStyled,
  TimeModal,
  TimeOption,
  TimeWrapper,
  TitleWrapper,
  UpDownStyled
} from './TimePicker.styles'

type Props = {
  onOverlayClick?: (value: string) => void
  value?: Date | number
  interval?: number
}

type RectState = DOMRect & { type: 'hour' | 'minute' }

const HOURS = new Array(12).fill(0).map((_, index) => `${index + 1}`)
const MINUTES = new Array(60)
  .fill(0)
  .map((_, index) => (index.toString().length === 1 ? `0${index}` : `${index}`))
const AMPM = ['am', 'pm']

const TimePicker = ({ onOverlayClick = () => false, value = new Date(), interval = 1 }: Props) => {
  const hourRef = useRef<HTMLDivElement>(null)
  const minuteRef = useRef<HTMLDivElement>(null)
  const hourModalRef = useRef<HTMLDivElement>(null)
  const minuteModalRef = useRef<HTMLDivElement>(null)
  const [minutesRange, setMinutesRange] = useState(MINUTES)
  const [hours, setHours] = useState(HOURS[0])
  const [minutes, setMinutes] = useState(MINUTES[0])
  const [amOrPm, setAmOrPm] = useState(AMPM[1])
  const [focus, setFocus] = useState<'hour' | 'minute' | null>(null)
  const [boudingClientRect, setBoudingClientRect] = useState<RectState>(null)
  useLockBodyScroll(!!focus, hourModalRef)
  useLockBodyScroll(!!focus, minuteModalRef)

  const updateBoundingClientRect = (type: 'hour' | 'minute', ref: React.MutableRefObject<HTMLDivElement>) => {
    const newRect = { ...ref.current.getBoundingClientRect().toJSON(), type }
    setBoudingClientRect(newRect)
  }

  const onOverlayClicked = () => {
    setFocus(null)
  }

  const onHourClick = (h: string) => {
    setHours(h)
    setFocus(null)
  }

  const onMinuteClick = (m: string) => {
    setMinutes(m)
    setFocus(null)
  }

  useEffect(() => {
    if (boudingClientRect && boudingClientRect.type) {
      setFocus(boudingClientRect.type)
    }
  }, [boudingClientRect])

  useEffect(() => {
    setAmOrPm(formatDate(value, 'a').toLowerCase())
    setHours(formatDate(value, 'h'))
    setMinutes(formatDate(value, 'mm'))
    setMinutesRange(MINUTES.filter((x) => parseInt(x) % interval === 0))
  }, [])

  useEffect(() => {
    if (focus === null) {
      onOverlayClick(`${hours}:${minutes} ${amOrPm}`)
    }
  }, [hours, minutes, amOrPm, focus])

  return (
    <>
      <Overlay isOpen={!!focus} onOverlayClick={onOverlayClicked} />
      <TimeModal ref={hourModalRef} rect={boudingClientRect} isFocus={focus === 'hour'}>
        {HOURS.map((h) => (
          <TimeOption key={h} isFocus={h === hours} onClick={() => onHourClick(h)}>
            {h}
          </TimeOption>
        ))}
      </TimeModal>
      <TimeModal ref={minuteModalRef} rect={boudingClientRect} isFocus={focus === 'minute'}>
        {minutesRange.map((m) => (
          <TimeOption key={m} isFocus={m === minutes} onClick={() => onMinuteClick(m)}>
            {m}
          </TimeOption>
        ))}
      </TimeModal>
      <TimeContainer>
        <TitleWrapper>
          <TimeIconStyled />
          Time
        </TitleWrapper>
        <TimeWrapper>
          <TimeBlock ref={hourRef} onClick={() => updateBoundingClientRect('hour', hourRef)}>
            {hours} <UpDownStyled />
          </TimeBlock>
          <EllipsesStyled />
          <TimeBlock ref={minuteRef} onClick={() => updateBoundingClientRect('minute', minuteRef)}>
            {minutes} <UpDownStyled />
          </TimeBlock>
          <AmPmBlock>
            {AMPM.map((a) => (
              <AmPmButton key={a} isFocus={a === amOrPm} onClick={() => setAmOrPm(a)}>
                {a}
              </AmPmButton>
            ))}
          </AmPmBlock>
        </TimeWrapper>
      </TimeContainer>
    </>
  )
}

export default TimePicker
