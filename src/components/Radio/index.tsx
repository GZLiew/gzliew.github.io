import React, { ChangeEvent } from "react"
import { Fill, Input, Root, SecondaryText } from "./Radio.styles"

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string | number | string[]
  labelText: string
  checked: boolean
  name: string
  secondaryText?: string
}

const Radio = ({ onChange, value, labelText, checked, name, secondaryText }: Props) => {
  return (
    <Root active={checked}>
      {labelText}
      <SecondaryText>{secondaryText}</SecondaryText>
      <Input
        type="radio"
        onChange={onChange}
        name={name}
        value={value}
        checked={checked}
        aria-checked={checked}
      />
      <Fill borderActive={checked} />
    </Root>
  )
}

export default Radio
