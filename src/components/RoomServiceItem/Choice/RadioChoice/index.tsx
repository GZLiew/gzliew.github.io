import React, { useState } from 'react'
import { RadioItem } from '@/components/_common/RadioButtons'
import { AccordionStyled, RadioButtonsStyled } from '../Choice.styles'

import { Choice as ChoiceProp } from '@/lib/types/roomService'

type Props = {
  choice: ChoiceProp<RadioItem>
}

const RadioChoice = ({ choice }: Props) => {
  const [option, setOption] = useState((choice.options[0] as RadioItem)._uid)
  return (
    <AccordionStyled title={choice.title} secondaryTitle={choice.secondaryTitle}>
      <RadioButtonsStyled
        groupId={choice._uid}
        activeItem={option}
        items={choice.options}
        onClickRadioButton={(value) => setOption(value._uid)}
      />
    </AccordionStyled>
  )
}

export default RadioChoice
