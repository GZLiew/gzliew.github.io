import React from "react"
import Radio from "@/components/Radio"
import { RadioButtonsWrapper } from "./RadioButtons.styles"

type RadioItem = {
  id: string
  label: string
  secondaryLabel?: string
}

type Props = {
  items: RadioItem[]
  activeItem: string
  onClickRadioButton: (value: RadioItem) => void
}

const RadioButtons = (props: Props) => {
  const { items, activeItem, onClickRadioButton } = props

  return (
    <RadioButtonsWrapper>
      {items.map(({ id, label, secondaryLabel }) => (
        <Radio
          value={label}
          onChange={() => onClickRadioButton({ id, label, secondaryLabel })}
          name={label}
          labelText={label}
          secondaryText={secondaryLabel}
          checked={activeItem === id}
        />
      ))}
    </RadioButtonsWrapper>
  )
}

export default RadioButtons
