import React from "react"
import Radio from "@/components/_common/Radio"
import { RadioButtonsWrapper } from "./RadioButtons.styles"

export type RadioItem = {
  _uid: string
  label: string
  secondaryLabel?: string
}

type RadioButtonsWrapperProps = React.ComponentProps<typeof RadioButtonsWrapper>

type Props = {
  items: RadioItem[]
  activeItem: string
  onClickRadioButton: (value: RadioItem) => void
  groupId: string
}

const RadioButtons = (props: RadioButtonsWrapperProps & Props) => {
  const { items, activeItem, onClickRadioButton, groupId, ...radioButonsWrapperProps } = props

  return (
    <RadioButtonsWrapper {...radioButonsWrapperProps}>
      {items.map(({ _uid, label, secondaryLabel }) => (
        <Radio
          key={_uid}
          value={label}
          onChange={() => onClickRadioButton({ _uid, label, secondaryLabel })}
          name={groupId}
          labelText={label}
          secondaryText={secondaryLabel}
          checked={activeItem === _uid}
        />
      ))}
    </RadioButtonsWrapper>
  )
}

export default RadioButtons
