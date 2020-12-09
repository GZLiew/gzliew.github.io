import React from 'react'

import { Choice as ChoiceProp } from '@/lib/types/roomService'
import { ChoiceSection } from './Choice.styles'
import RadioChoice from './RadioChoice'
import ToggleChoice from './ToggleChoice'
import QuantityChoice from './QuantityChoice'

type Props = {
  choice: ChoiceProp
}

const Choice = ({ choice }: Props) => {
  let ChoiceContent: any
  switch (choice.type) {
    case 'radio':
      ChoiceContent = <RadioChoice choice={choice} />
      break
    case 'toggle':
      ChoiceContent = <ToggleChoice choice={choice} />
      break
    case 'quantity':
      ChoiceContent = <QuantityChoice choice={choice} />
      break
    default:
      return null
  }

  return <ChoiceSection>{ChoiceContent}</ChoiceSection>
}

export default Choice
